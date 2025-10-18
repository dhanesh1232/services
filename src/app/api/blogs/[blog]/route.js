import dbConnect from "@/lib/db";
import { ErrorHandles, SuccessHandles } from "@/lib/response";
import { Blog } from "@/models/dynamicModels";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { blog } = params;
    const article = await Blog.findOne({ slug: blog }).lean();
    if (!article) return ErrorHandles.NotFound("Blog not found");
    return SuccessHandles.Ok("Blog fetched successfully", article);
  } catch (err) {
    return ErrorHandles.InternalServer(err.message || "Internal Server Error");
  }
}

export async function PATCH(req, { params }) {
  await dbConnect();
  try {
    const { blog } = params;
    const body = await req.json();
    const { visitorId, type, platform, metadata = {}, comment } = body;

    if (!visitorId) return ErrorHandles.BadRequest("visitorId is required");

    const article = await Blog.findOne({ slug: blog, deleted: false });
    if (!article) return ErrorHandles.NotFound("Blog not found");

    // Ensure arrays exist
    article.likedBy = article.likedBy || [];
    article.viewedBy = article.viewedBy || [];
    article.sharedBy = article.sharedBy || [];

    let updateOperations = {};

    switch (type) {
      case "view":
        if (!article.viewedBy.some((v) => v.visitorId === visitorId)) {
          updateOperations = {
            $inc: { views: 1 },
            $addToSet: {
              viewedBy: { visitorId, metadata, createdAt: new Date() },
            },
          };
        }
        break;

      case "like": {
        const alreadyLiked = article.likedBy.some(
          (v) => v.visitorId === visitorId
        );

        if (alreadyLiked) {
          // If already liked, remove user and decrement count
          updateOperations = {
            $inc: { likes: -1 },
            $pull: { likedBy: { visitorId } },
          };
        } else {
          // If not liked, add user and increment count
          updateOperations = {
            $inc: { likes: 1 },
            $addToSet: {
              likedBy: { visitorId, metadata, createdAt: new Date() },
            },
          };
        }
        break;
      }

      case "share":
        if (!platform)
          return ErrorHandles.BadRequest("Platform is required for sharing");
        if (
          !article.sharedBy.some(
            (v) => v.visitorId === visitorId && v.platform === platform
          )
        ) {
          updateOperations = {
            $inc: { shares: 1 },
            $addToSet: {
              sharedBy: {
                visitorId,
                platform,
                metadata,
                createdAt: new Date(),
              },
            },
          };
        }
        break;

      case "comment":
        if (!comment.name || !comment.body)
          return ErrorHandles.BadRequest("Comment text is required");
        updateOperations = {
          $push: {
            comments: {
              visitorId,
              metadata,
              name: comment?.name,
              comment: comment.body,
              createdAt: new Date(),
              isApproved: true,
            },
          },
        };
        break;

      case "delete-comment": {
        const { commentCreatedAt } = body;
        if (!commentCreatedAt)
          return ErrorHandles.BadRequest("commentCreatedAt is required");

        // Use $pull to delete directly in MongoDB
        const updatedArticle = await Blog.findOneAndUpdate(
          { slug: blog },
          {
            $pull: {
              comments: {
                visitorId,
                createdAt: new Date(commentCreatedAt),
              },
            },
          },
          { new: true }
        ).lean();

        // Check if deletion happened
        if (updatedArticle.comments.length === article.comments.length)
          return ErrorHandles.NotFound("Comment not found or unauthorized");

        return SuccessHandles.Ok("Comment deleted successfully", {
          comments: updatedArticle.comments.length,
        });
      }

      default:
        return ErrorHandles.BadRequest("Invalid action type");
    }

    if (Object.keys(updateOperations).length === 0)
      return SuccessHandles.Ok("No update required (duplicate prevented)", {
        likes: article.likes || 0,
        views: article.views || 0,
        shares: article.shares || 0,
        comments: article.comments.length,
        liked: article.likedBy.some((v) => v.visitorId === visitorId),
      });

    const updatedArticle = await Blog.findOneAndUpdate(
      { slug: blog },
      updateOperations,
      { new: true }
    ).lean();

    return SuccessHandles.Ok("Blog updated successfully", {
      likes: updatedArticle.likes || 0,
      views: updatedArticle.views || 0,
      shares: updatedArticle.shares || 0,
      comments: updatedArticle.comments.length,
      liked: updatedArticle.likedBy.some((v) => v.visitorId === visitorId),
    });
  } catch (err) {
    console.error(err);
    return ErrorHandles.InternalServer(err.message || "Internal Server Error");
  }
}
