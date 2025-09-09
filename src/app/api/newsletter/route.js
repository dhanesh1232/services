import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { mailSender } from "@/lib/server/sender";
import { Newsletter } from "@/models/newsletter";
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
export async function POST(req) {
  await dbConnect();
  try {
    const { email, metadata } = await req.json();
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent");

    const existingNewsletter = await Newsletter.findOne({ email });
    if (existingNewsletter) {
      return SuccessHandles.Ok("Email already subscribed");
    }
    const newsletter = new Newsletter({
      email,
      ipAddress: ip,
      userAgent,
      metadata,
      isSubscribed: true,
    });
    await newsletter.save();
    await mailSender({
      template: "services.newsletter",
      to: email,
    });

    return SuccessHandles.Created("Newsletter subscribed successfully");
  } catch (err) {
    return ErrorHandles.InternalServer(err.message);
  }
}
