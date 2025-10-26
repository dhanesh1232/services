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
  const [searching, setSearching] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const fetchblogs = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data.data || []);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  React.useEffect(() => {
    fetchblogs();
  }, [fetchblogs]);

  const filteredPosts = blogs.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle "typing search" with small delay to simulate API search
  React.useEffect(() => {
    if (!search) {
      setSearching(false);
      return;
    }
    setSearching(true);
    const timer = setTimeout(() => setSearching(false), 600); // simulate debounce/search delay
    return () => clearTimeout(timer);
  }, [search]);

  if (loading) return <GlobalLoader />;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-20 pb-12 bg-inherit">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-3 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-800 dark:from-slate-200 dark:via-slate-600 dark:to-slate-800 bg-clip-text text-transparent">
            Future GenAI Blog | AI-Powered Web Dev, SEO & Automation Insights
          </h1>
          <p className="text-muted-foreground text-base">
            Explore hands-on tutorials, advanced web development techniques, SEO
            strategies, AI tools, and automation hacks to elevate your projects,
            boost performance, and stay ahead in the ever-evolving digital
            landscape.
          </p>
        </div>

        {/* Search Bar */}
        <SearchHandle
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          focused={focused}
          setFocused={setFocused}
          searching={searching}
        />

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="my-12 gap-3 flex flex-col justify-center items-center">
            <p className="text-center text-muted-foreground">
              <span className="text-sm">No articles found. "{search}" </span>
              Try another keyword.
            </p>
            <Button variant="outline" size="sm" onClick={() => setSearch("")}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function SearchHandle({ onChange, value, focused, setFocused, searching }) {
  return (
    <div
      className={`flex items-center relative h-9 w-full max-w-xs mx-auto my-6 border rounded transition-colors ${
        focused ? "border-blue-500 ring-2 ring-blue-500" : "border-border"
      }`}
    >
      <Input
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bg-inherit border-none focus:outline-none focus-visible:ring-0 w-full pr-10"
      />
      <span className="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center">
        {searching ? (
          <span className="w-4 h-4 border-2 border-t-transparent border-blue-500 rounded-full animate-spin" />
        ) : (
          <Search className="w-4 h-4 text-muted-foreground" />
        )}
      </span>
    </div>
  );
}
