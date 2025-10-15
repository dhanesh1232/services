// src/app/blog/[slug]/page.jsx

import { BlogDetailsPage } from "@/components/pages/blog/__blogDetails";
import { blogPostingJsonLd, metadataForPath } from "@/lib/client/seo";

const URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * 🌟 1️⃣ Generate Dynamic Metadata for Blog Page
 * ------------------------------------------------
 * Fetches the blog post based on the slug and returns
 * SEO-friendly metadata for the page. Includes OpenGraph,
 * Twitter cards, canonical URL, and keyword fallback.
 *
 * @param {Object} params - Route parameters from Next.js
 * @param {string} params.slug - The blog post slug
 * @returns {Object} Metadata object compatible with Next.js
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  const apiUrl = `${URL}/api/blogs/${slug}`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    const data = await res.json();

    if (!res.ok || !data?.data) {
      // Return default metadata if the blog post is missing
      return {
        title: "Article Not Found | Ecodrix Services",
        description: "The article you're looking for could not be found.",
      };
    }

    const post = data.data;

    // Use helper to generate full metadata with defaults and overrides
    const meta = await metadataForPath(`/blog/${slug}`, {
      title: `${post.title}`,
      description: post.metaDescription || post.title,
      keywords: post.keywords?.length
        ? post.keywords
        : [
            post.title,
            "Ecodrix blog",
            "technology insights",
            "software development",
            "IT trends",
          ],
      openGraph: {
        title: post.title,
        description: post.metaDescription || post.title,
        url: `${URL}/blog/${slug}`,
        type: "article",
        siteName: "Ecodrix Services",
        publishedTime: post.createdAt,
        modifiedTime: post.updatedAt,
        authors: [post.author?.name || "Ecodrix Team"],
        images: [
          {
            url: post.coverImage || "/og-blog.jpg",
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.metaDescription || post.excerpt || post.title,
        images: [post.coverImage || "/og-blog.jpg"],
      },
    });
    // console.log(meta);
    return meta;
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "Blog | Ecodrix Services",
      description: "Explore insightful tech articles on Ecodrix Blog.",
    };
  }
}

/**
 * ⚡ 2️⃣ Render Blog Details Page
 * ------------------------------------------------
 * Fetches the blog post data by slug and renders the
 * BlogDetailsPage component with proper error handling.
 *
 * @param {Object} params - Route parameters from Next.js
 * @param {string} params.slug - The blog post slug
 * @returns {JSX.Element} Blog details page or error message
 */
export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const apiUrl = `${URL}/api/blogs/${slug}`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
      return (
        <div className="text-center py-20 text-muted-foreground">
          Failed to fetch article.
        </div>
      );
    }

    const post = data.data;

    if (!post || !post.isPublished) {
      return (
        <div className="text-center py-20 text-muted-foreground">
          Article not found or unpublished.
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
  } catch (error) {
    console.error("Blog fetch failed:", error);
    return (
      <div className="text-center py-20 text-muted-foreground">
        Unexpected error occurred while fetching the article.
      </div>
    );
  }
}
