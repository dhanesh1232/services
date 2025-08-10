import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { Feedback } from "@/models/feedback";
import { getClientIp } from "request-ip";

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const { email, name, company, rating, role, description, metadata } = body;
    if (!email || !name || !company || !rating || !role || !description) {
      return ErrorHandles.BadRequest("Please provide missing fields");
    }
    console.log(body);
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") || "";

    // Fixed the Feedback.create syntax
    const feedback = await Feedback.create({
      email,
      name,
      company,
      rating,
      role,
      description,
      metadata: {
        ...metadata,
        ip,
        userAgent,
      },
    });

    console.log(feedback);
    return SuccessHandles.Accepted(
      `Thank you ${name} for submitting your valuable feedback!`
    );
  } catch (err) {
    console.error("Feedback submission error:", err);
    return ErrorHandles.InternalServer(
      "Failed to send message. Please try again."
    );
  }
}
export async function GET(req) {
  await dbConnect();
  try {
    const feedback = await Feedback.find();
    return SuccessHandles.Ok("successfully fetch", { feedback });
  } catch (err) {
    return ErrorHandles.InternalServer(err);
  }
}
