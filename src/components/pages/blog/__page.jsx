"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { BlogCard } from "./blogCard";
import { GlobalLoader } from "@/components/layout/loader";

export function BlogPage() {
  const [search, setSearch] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchblogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        console.log(data.data);

        setBlogs(data.data || []);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchblogs();
  }, []);

  const filteredPosts = blogs.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <GlobalLoader />;
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-inherit">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Insights, Tutorials & Tech Wisdom
          </h1>
          <p className="text-muted-foreground text-lg">
            Stories, experiments, and lessons from the frontier of digital
            craft.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 max-w-md mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-background"
          />
          <Button variant="primary" size="icon">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-muted-foreground mt-20">
            No articles found. Try another keyword.
          </div>
        )}
      </div>
    </div>
  );
}
