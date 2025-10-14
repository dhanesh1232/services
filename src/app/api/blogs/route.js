import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { Blog } from "@/models/dynamicModels";

export async function GET(req) {
  await dbConnect();
  try {
    const blogs = await Blog.find().lean();
    return SuccessHandles.Ok("Blogs fetched successfully", blogs);
  } catch (err) {
    console.log(err.message);
    return ErrorHandles.InternalServer(err.message || "Internal Server Error");
  }
}
