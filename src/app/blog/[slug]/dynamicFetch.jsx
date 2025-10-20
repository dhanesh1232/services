"use client";
import { BlogDetailsPage } from "@/components/pages/blog/__blogDetails";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { blogPostingJsonLd } from "@/lib/client/seo";

const API_STATE = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
};

/**
 * DynamicRender Component
 * --------------------------
 * Handles client-side fetching and rendering of a single blog post based on the URL slug.
 * Provides a seamless user experience with loading skeletons, error handling, and fallback for missing posts.
 *
 * ✦ Core Responsibilities:
 * - Reads the blog `slug` from Next.js dynamic route parameters.
 * - Fetches the blog post data from the backend API (`/api/blogs/[slug]`) with no caching.
 * - Maintains and tracks API state (LOADING, SUCCESS, ERROR, IDLE) for proper UI feedback.
 * - Conditionally renders:
 *   • Loading skeleton while fetching.
 *   • Error message and retry/go-back buttons if fetch fails.
 *   • "Post Not Found" message if the blog does not exist.
 *   • Fully-rendered `BlogDetailsPage` when data is successfully fetched.
 *
 * ✦ UI / Interaction:
 * - Loading state uses animated skeletons for title, content, and images for a polished UX.
 * - Error state provides clear messaging and buttons to retry fetching or navigate back.
 * - Missing post state informs the user and provides navigation back.
 * - Utilizes Next.js `useRouter` for programmatic navigation.
 *
 * ⚙️ Implementation Notes:
 * - Uses React hooks (`useState`, `useEffect`, `useCallback`) for state and side effects.
 * - `fetchPost` is memoized via `useCallback` to prevent unnecessary re-renders.
 * - Handles API errors gracefully, logging errors to the console and updating the UI state.
 *
 * @component
 * @returns {JSX.Element} The dynamic blog page rendering either:
 *   - a loading skeleton,
 *   - an error fallback,
 *   - a not-found message,
 *   - or the `BlogDetailsPage` with the fetched post data.
 *
 * @example
 * // Accessing the page via /blog/my-awesome-post
 * <DynamicRender />
 */

export function DynamicRender({ slug }) {
  const router = useRouter();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(API_STATE.IDLE);
  const [isMount, setIsMount] = React.useState(false);

  React.useEffect(() => {
    setIsMount(true);
    return () => {
      setIsMount(false);
    };
  }, []);

  const fetchPost = React.useCallback(async () => {
    try {
      setLoading(API_STATE.LOADING);
      const res = await fetch(`/api/blogs/${slug}`, { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch post");
      setPost(data.data);
      setLoading(API_STATE.SUCCESS);
    } catch (err) {
      console.error(err.message);
      setLoading(API_STATE.ERROR);
    }
  }, [slug]);

  React.useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if ((loading === API_STATE.LOADING && !post) || !isMount) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse space-y-4 w-full max-w-3xl p-4">
          <div className="h-8 bg-muted rounded w-3/4 mx-auto" />
          <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
          <div className="h-96 bg-muted rounded-lg mt-4" />
          <div className="h-4 bg-muted rounded w-full mt-2" />
          <div className="h-4 bg-muted rounded w-5/6 mt-1" />
        </div>
      </div>
    );
  }

  if (loading === API_STATE.ERROR) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          Oops! Something went wrong
        </h2>
        <p className="text-muted-foreground">
          We couldn't fetch the blog post. Try again or go back.
        </p>
        <div className="flex gap-4">
          <Button onClick={fetchPost} size="sm" variant="primary">
            Retry
          </Button>
          <Button onClick={() => router.back()} size="sm" variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 text-center">
        <h2 className="text-2xl font-bold text-foreground">Post Not Found</h2>
        <p className="text-muted-foreground">
          The blog you are looking for does not exist or has been removed.
        </p>
        <Button onClick={() => router.back()} size="sm" variant="primary">
          Go Back
        </Button>
      </div>
    );
  }
  const jsonLd = blogPostingJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <BlogDetailsPage post={post} />
    </>
  );
}
