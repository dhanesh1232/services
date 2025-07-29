import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { mailSender } from "@/lib/server/sender";
import { ServiceContact } from "@/models/contact";
import { getClientIp } from "request-ip";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // or specific origin
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const ip = getClientIp(request);
    const { name, email, phone, message, service, metadata } = body;

    // Basic validation
    if (!name || !email || !message || !service) {
      return ErrorHandles.BadRequest("Name, email, and message are required");
    }

    if (message.length < 100) {
      return ErrorHandles.BadRequest(
        "Message should be at least 100 characters"
      );
    }
    const userAgent = request.headers.get("user-agent") || "";

    const newContact = new ServiceContact({
      name,
      email,
      phone,
      message,
      ipAddress: ip,
      service,
      userAgent,
      createdAt: new Date(),
      metadata,
    });

    await newContact.save();
    await mailSender({
      template: "services.contact_confirmation",
      to: email,
      variables: {
        userName: name,
      },
    });

    return SuccessHandles.Ok("Message sent successfully!");
  } catch (error) {
    console.error("Error saving contact:", error);
    return ErrorHandles.InternalServer(
      "Failed to send message. Please try again."
    );
  }
}
