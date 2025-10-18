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
    const {
      visitorId,
      type,
      platform,
      metadata = {},
      comment,
      commentCreatedAt,
    } = body;

    if (!visitorId) return ErrorHandles.BadRequest("visitorId is required");

    const article = await Blog.findOne({ slug: blog, deleted: false });
    if (!article) return ErrorHandles.NotFound("Blog not found");

    // Ensure arrays exist
    article.likedBy = article.likedBy || [];
    article.viewedBy = article.viewedBy || [];
    article.sharedBy = article.sharedBy || [];
    article.comments = article.comments || [];

    let updateOperations = {};

    switch (type) {
      case "view": {
        const alreadyViewed = article.viewedBy.some(
          (v) => v.visitorId === visitorId
        );

        if (!alreadyViewed) {
          updateOperations = {
            $inc: { views: 1 },
            $addToSet: { viewedBy: { visitorId, metadata } }, // remove createdAt for uniqueness
          };
        }
        break;
      }

      case "like": {
        const alreadyLiked = article.likedBy.some(
          (v) => v.visitorId === visitorId
        );

        if (alreadyLiked) {
          updateOperations = {
            $inc: { likes: -1 },
            $pull: { likedBy: { visitorId } },
          };
        } else {
          updateOperations = {
            $inc: { likes: 1 },
            $addToSet: {
              likedBy: { visitorId, metadata, createdAt: new Date() },
            },
          };
        }
        break;
      }

      case "share": {
        if (!platform)
          return ErrorHandles.BadRequest("Platform is required for sharing");
        const alreadyShared = article.sharedBy.some(
          (v) => v.visitorId === visitorId && v.platform === platform
        );
        if (!alreadyShared) {
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
      }

      case "comment": {
        if (!comment?.name || !comment?.body)
          return ErrorHandles.BadRequest("Comment text is required");
        updateOperations = {
          $push: {
            comments: {
              visitorId,
              metadata,
              name: comment.name,
              comment: comment.body,
              createdAt: new Date(),
              isApproved: true,
            },
          },
        };
        break;
      }

      case "delete-comment": {
        if (!commentCreatedAt)
          return ErrorHandles.BadRequest("commentCreatedAt is required");

        const filteredComments = article.comments.filter(
          (c) =>
            !(
              c.visitorId === visitorId &&
              new Date(c.createdAt).getTime() ===
                new Date(commentCreatedAt).getTime()
            )
        );

        if (filteredComments.length === article.comments.length)
          return ErrorHandles.NotFound("Comment not found or unauthorized");

        article.comments = filteredComments;
        await article.save();

        return SuccessHandles.Ok("Comment deleted successfully", {
          comments: article.comments.length,
        });
      }

      default:
        return ErrorHandles.BadRequest("Invalid action type");
    }

    // No updates? return early
    if (!updateOperations || Object.keys(updateOperations).length === 0) {
      return SuccessHandles.Ok("No update required (duplicate prevented)", {
        likes: article.likes || 0,
        views: article.views || 0,
        shares: article.shares || 0,
        comments: article.comments.length,
        liked: article.likedBy.some((v) => v.visitorId === visitorId),
      });
    }

    const updatedArticle = await Blog.findOneAndUpdate(
      { slug: blog },
      updateOperations,
      { new: true }
    ).lean();

    // Optional: ensure viewedBy is unique by visitorId
    const uniqueViewedBy = [];
    const seen = new Set();
    updatedArticle.viewedBy?.forEach((v) => {
      if (!seen.has(v.visitorId)) {
        uniqueViewedBy.push(v);
        seen.add(v.visitorId);
      }
    });
    if (uniqueViewedBy.length !== updatedArticle.viewedBy?.length) {
      await Blog.updateOne(
        { slug: blog },
        { $set: { viewedBy: uniqueViewedBy } }
      );
    }

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
