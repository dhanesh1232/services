import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { Blog } from "@/models/dynamicModels";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { blog } = await params;
    const article = await Blog.findOne({ slug: blog }).lean();
    if (!article) {
      return ErrorHandles.NotFound("Blog not found");
    }
    return SuccessHandles.Ok("Blog fetched successfully", article);
  } catch (err) {
    return ErrorHandles.InternalServer(err.message || "Internal Server Error");
  }
}
