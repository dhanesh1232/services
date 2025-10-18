"use client";

import "tailwindcss/tailwind.css";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  Eye,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { extractHeadings, generateId } from "@/components/helper";
import { getVisitorId } from "@/lib/visitors";
import { toast } from "sonner";
import { collectUserMetadata } from "@/lib/client/metadata";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * BlogDetailsPage Component
 * --------------------------
 * Renders a complete, SEO-optimized blog article page with
 * dynamic content styling, metadata tags, and interactive features.
 *
 * ✦ Features:
 * - Dynamically processes and styles HTML content for rich typography.
 * - Generates a structured table of contents from headings.
 * - Adds Open Graph and Twitter meta tags for SEO and social sharing.
 * - Displays author, category, publish date, views, likes, and comments.
 * - Provides interactive buttons for sharing, liking, and commenting.
 *
 * ⚙️ Implementation Notes:
 * - Uses Tailwind CSS and Prose classes for consistent styling.
 * - Converts raw HTML (from CMS) into styled JSX safely.
 * - Automatically assigns IDs to headings for deep-link navigation.
 * - Includes schema.org markup for better search engine visibility.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.post - Blog post details.
 * @param {string} props.post.title - The title of the blog post.
 * @param {string} props.post.body - The main HTML content of the post.
 * @param {string} [props.post.metaTitle] - Custom meta title for SEO.
 * @param {string} [props.post.metaDescription] - Meta description for SEO.
 * @param {string[]} [props.post.metaKeywords] - SEO keywords.
 * @param {Object} [props.post.author] - Author details.
 * @param {string} [props.post.author.name] - Author's name.
 * @param {string} [props.post.author.avatar] - Author's avatar URL.
 * @param {Object} [props.post.featuredImage] - Featured image data.
 * @param {string} [props.post.featuredImage.url] - Image URL.
 * @param {string} [props.post.featuredImage.altText] - Image alt text.
 * @param {string} [props.post.category] - Post category.
 * @param {number} [props.post.views] - View count.
 * @param {number} [props.post.likes] - Like count.
 * @param {Array} [props.post.comments] - List of comments.
 * @param {string[]} [props.post.tags] - Post tags.
 * @param {string} [props.post.publishDate] - Publish date.
 * @param {string} [props.post.updatedAt] - Last update timestamp.
 * @returns {JSX.Element} Fully-rendered blog details page.
 */

export function BlogDetailsPage({ post }) {
  const [content, setContent] = React.useState("");
  const [isCopied, setIsCopied] = React.useState(false);
  const [headings, setHeadings] = React.useState([]);
  const [isLiked, setIsLiked] = React.useState(false);
  const [showCommentForm, setShowCommentForm] = React.useState(false);
  const [commentData, setCommentData] = React.useState({ name: "", body: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [visitorId, setVisitorId] = React.useState(null);
  const [metadata, setMetadata] = React.useState(null);

  const getVisitorDetails = React.useCallback(async () => {
    const visitorId = getVisitorId();
    const metadata = collectUserMetadata();
    const isLiked = await post?.likedBy.some((v) => v.visitorId === visitorId);
    setIsLiked(isLiked);
    setVisitorId(visitorId);
    setMetadata(metadata);
  }, []);

  React.useEffect(() => {
    console.log(post);
    getVisitorDetails();
  }, [getVisitorDetails]);

  React.useEffect(() => {
    console.log(visitorId, metadata);
    if (!visitorId || !metadata) return;
    const fetchvisitor = async () => {
      try {
        await fetch(`/api/blogs/${post.slug}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            visitorId,
            type: "view",
            metadata,
          }),
        });
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchvisitor();
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (post.body) {
      const extracted = extractHeadings(post.body);
      setHeadings(extracted);
    }
  }, [post.body]);

  React.useEffect(() => {
    const convertBody = () => {
      const container = document.createElement("div");
      container.innerHTML = post.body;

      ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((tag) => {
        container.querySelectorAll(tag).forEach((el) => {
          const text = el.textContent.trim();
          const id = generateId(text);
          el.id = id; // assign unique id

          // Apply your styles
          switch (tag) {
            case "h1":
              el.className = "text-5xl font-bold mb-2 text-foreground";
              break;
            case "h2":
              el.className =
                "text-3xl font-bold mb-6 text-foreground mt-10 pb-2 border-b border-border";
              break;
            case "h3":
              el.className = "text-2xl font-semibold mb-4 text-foreground mt-8";
              break;
            case "h4":
              el.className = "text-xl font-semibold mb-3 text-foreground mt-6";
              break;
            case "h5":
              el.className = "text-lg font-medium mb-2 text-foreground mt-4";
              break;
            case "h6":
              el.className = "text-base font-medium mb-2 text-foreground mt-4";
              break;
          }
        });
      });

      // Enhanced styling with theme support
      container.querySelectorAll("p").forEach((p) => {
        p.className = "text-base text-foreground/80 mb-0 leading-relaxed";
      });

      // Links with theme support
      container.querySelectorAll("a").forEach((a) => {
        a.className =
          "text-primary hover:text-primary/80 underline transition-colors duration-200 font-medium";
      });

      // Enhanced lists with theme support
      container.querySelectorAll("ul").forEach((ul) => {
        ul.className = "list-style-none mb-0 space-y-2 ml-4";
      });

      container.querySelectorAll("ol").forEach((ol) => {
        ol.className = "list-decimal list-inside mb-0 space-y-2 ml-4";
      });

      container.querySelectorAll("li").forEach((li) => {
        li.className = "text-lg text-foreground/80 leading-relaxed mb-0";
      });

      container.querySelectorAll("strong").forEach((s) => {
        s.className = "font-bold text-muted-foreground";
      });

      // Code blocks with theme support
      container.querySelectorAll("code").forEach((code) => {
        if (code.parentElement?.tagName === "PRE") {
          code.className = "block text-sm font-mono";
        } else {
          code.className =
            "bg-muted px-2 py-1 rounded text-sm font-mono text-foreground border";
        }
      });

      container.querySelectorAll("pre").forEach((pre) => {
        pre.className =
          "bg-muted text-foreground p-6 rounded-lg mb-6 overflow-x-auto border border-border shadow-lg";
      });

      // Blockquotes with theme support
      container.querySelectorAll("blockquote").forEach((blockquote) => {
        blockquote.className =
          "border-l-4 border-primary pl-6 italic text-muted-foreground mb-6 bg-muted/50 py-4 rounded-r-lg";
      });

      // Tables with theme support
      container.querySelectorAll("table").forEach((table) => {
        table.className =
          "w-full border-collapse mb-6 rounded-lg overflow-hidden border border-border";
      });

      container.querySelectorAll("th").forEach((th) => {
        th.className =
          "bg-muted px-4 py-3 text-left font-semibold text-foreground border-b border-border";
      });

      container.querySelectorAll("td").forEach((td) => {
        td.className = "px-4 py-3 border-b border-border text-foreground/80";
      });

      // Images with enhanced styling
      container.querySelectorAll("img").forEach((img) => {
        img.className =
          "max-w-full h-auto rounded-xl mb-6 shadow-lg transition-transform duration-300 hover:scale-105";
      });

      // Horizontal rule
      container.querySelectorAll("hr").forEach((hr) => {
        hr.className = "my-8 border-border";
      });

      // Text emphasis
      container.querySelectorAll("strong, b").forEach((el) => {
        el.className = "font-bold text-foreground";
      });

      container.querySelectorAll("em, i").forEach((el) => {
        el.className = "italic text-foreground/80";
      });

      setContent(container.innerHTML);
    };
    convertBody();
  }, [post.body]);

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleLike = async () => {
    try {
      const res = await fetch(`/api/blogs/${post.slug}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitorId,
          type: "like",
          metadata,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setIsLiked(data.data?.liked || false);
      toast.success(
        `Successfully ${data.data.liked ? "liked" : "unliked"} this post`
      );
    } catch (err) {
      console.log(err.message);
    } finally {
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentData.body.trim()) {
      toast.error("Please enter your comment before submitting.");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await fetch(`/api/blogs/${post.slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId,
          type: "comment",
          comment: commentData,
          metadata,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast.success("Comment submitted successfully!");
      setCommentData({ name: "", body: "" });
      setShowCommentForm(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to post comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sharePost = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.metaDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to copy
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
      <article className="min-h-full bg-inherit pt-20 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-0">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Category */}
            {post.category && (
              <div className="flex justify-center mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1.5 rounded-full border border-primary/20">
                  {post.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/80 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-1 rounded-full border border-border">
                <Calendar className="h-4 w-4" />
                <span className="font-medium text-sm">{formattedDate}</span>
              </div>

              {post.readTime && (
                <div className="flex items-center gap-2 bg-card px-4 py-1 rounded-full border border-border">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    {post.readTime} min read
                  </span>
                </div>
              )}

              {post.views > 0 && (
                <div className="flex items-center gap-2 bg-card px-4 py-1 rounded-full border border-border">
                  <Eye className="h-4 w-4" />
                  <span className="font-medium text-sm">
                    {post.views} views
                  </span>
                </div>
              )}
            </div>

            {/* Author Info */}
            {post.author && (
              <div className="flex items-center justify-center gap-4 mb-2">
                <Avatar className="h-12 w-12 border-2 border-background shadow-lg">
                  <AvatarImage
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                    {post.author.name?.[0]?.toUpperCase() || "?"}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage?.url && (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-12 rounded-lg overflow-hidden shadow-lg border border-border">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.altText || post.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-2 lg:sticky lg:top-16 h-fit">
              <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
                {/* Share Button */}
                <Button size="sm" variant="outline" onClick={sharePost}>
                  <Share2 className="h-5 w-5" />
                  <span className="hidden lg:block text-sm font-medium">
                    {isCopied ? "Copied!" : "Share"}
                  </span>
                </Button>

                {/* Like Button */}
                <Button size="sm" variant="outline" onClick={handleLike}>
                  {isLiked ? (
                    <BsHeartFill className="h-5 w-5 text-red-500" />
                  ) : (
                    <BsHeart className="h-5 w-5 text-foreground" />
                  )}

                  <span className="hidden lg:block text-sm font-medium">
                    {post.likes || 0}
                  </span>
                </Button>

                {/* Comment Button */}
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-5 w-5" />
                  <span className="hidden lg:block text-sm font-medium">
                    {post.comments?.length || 0}
                  </span>
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <div
                className="max-w-none 
                  prose prose-lg 
                  prose-headings:text-foreground
                  prose-p:text-foreground/80
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-em:text-foreground/80
                  prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:text-muted-foreground
                  prose-code:text-foreground prose-code:bg-muted
                  prose-pre:bg-muted prose-pre:text-foreground prose-pre:border-border
                  prose-ul:text-foreground/80
                  prose-ol:text-foreground/80
                  prose-li:text-foreground/80
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-table:border-border
                  prose-th:bg-muted prose-th:text-foreground prose-th:border-border
                  prose-td:border-border prose-td:text-foreground/80
                  prose-hr:border-border
                  dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>

            {/* Table of Contents Placeholder */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-16 bg-card rounded-lg border border-border p-4 shadow-sm">
                <h3 className="font-semibold text-foreground mb-3 text-sm">
                  In this article
                </h3>
                <div className="space-y-2 text-sm list-style-none">
                  {headings.map((heading, i) => (
                    <a
                      key={i}
                      href={`#${heading.id}`}
                      className={`block hover:text-primary cursor-pointer transition-colors text-muted-foreground`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Footer Section */}
          <footer className="mt-16 pt-8 border-t border-border">
            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center mb-8">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-muted/90 text-muted-foreground px-3 py-1.5 rounded-full border border-border hover:bg-accent transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-between items-center text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{post.views || 0} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes || 0} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments?.length || 0} comments</span>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            {post.comments?.length > 0 && (
              <div className="my-4">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Comments ({post.comments.length})
                </h3>

                <div className="space-y-6">
                  {post.comments.map((comment, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start bg-card p-4 rounded-md border border-border shadow-sm relative"
                    >
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-md">
                          {comment.name?.[0]?.toUpperCase() || "?"}
                        </div>
                      </div>

                      {/* Comment Body */}
                      <div>
                        <p className="text-foreground font-semibold">
                          {comment.name}
                        </p>
                        <p className="text-muted-foreground text-xs mb-1">
                          {new Date(comment.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                        <p className="text-foreground/90">{comment.comment}</p>
                      </div>

                      {/* Delete Button for Owner */}
                      {comment.visitorId === visitorId && (
                        <button
                          onClick={async () => {
                            if (
                              !confirm(
                                "Are you sure you want to delete this comment?"
                              )
                            )
                              return;

                            try {
                              const res = await fetch(
                                `/api/blogs/${post.slug}`,
                                {
                                  method: "PATCH",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    visitorId,
                                    type: "delete-comment",
                                    commentCreatedAt: comment.createdAt,
                                  }),
                                }
                              );
                              const data = await res.json();
                              if (!res.ok) throw new Error(data.message);
                              toast.success("Comment deleted successfully");
                              window.location.reload(); // or update state to remove comment locally
                            } catch (err) {
                              console.error(err);
                              toast.error("Failed to delete comment");
                            }
                          }}
                          className="absolute top-2 right-4 text-red-500 text-xs hover:underline"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Enjoyed this article?
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                Share it with your network and let me know your thoughts in the
                comments!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="sm" variant="primary" onClick={sharePost}>
                  Share Article
                </Button>

                <Dialog
                  open={showCommentForm}
                  onOpenChange={setShowCommentForm}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowCommentForm(true)}
                    >
                      Leave a Comment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-background">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Share Your Thoughts
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        Describe more about your thoughts and anything
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="NAME">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          value={commentData.name}
                          onChange={(e) =>
                            setCommentData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          placeholder="Enter your name eg: Jhon"
                        />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="BODY">
                          Comment <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          value={commentData.body}
                          onChange={(e) =>
                            setCommentData((prev) => ({
                              ...prev,
                              body: e.target.value,
                            }))
                          }
                          placeholder="Enter your valuable comment here..."
                          required
                        />
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button size="sm" variant="outline">
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={isSubmitting}
                          size="sm"
                        >
                          Submit
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
