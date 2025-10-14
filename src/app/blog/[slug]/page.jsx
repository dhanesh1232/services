import { BlogDetailsPage } from "@/components/pages/blog/__blogDetails";

const URL = process.env.NEXT_PUBLIC_API_URL;
export default async function BlogSlugPage({ params }) {
  const { slug } = params;
  const apiUrl = `${URL}`;
  console.log(slug, apiUrl);

  // 🔥 Call your backend API dynamically
  const res = await fetch(`${apiUrl}/api/blogs/${slug}`, {
    // Use no-cache for latest data or 'force-cache' for SSG
    cache: "no-store",
  });
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

  return <BlogDetailsPage post={post} />;
}
