// /lib/client/blog.js

async function fetchBlogs(url) {
  const apiUrl = `${url}/api/blogs`;
  console.log("Fetching blogs from:", apiUrl);
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (!res.ok) {
    console.error("Error fetching blogs:", data);
    return [];
  }

  const blogs =
    data.data.map((blog) => ({
      slug: blog.slug,
      title: blog.title,
      metaDescription: blog.metaDescription,
      publishDate: blog.publishDate,
    })) || [];

  return blogs;
}

export const allBlogs = async (url) => {
  const blogs = await fetchBlogs(url);
  return blogs;
};
