"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BlogCard({ post }) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden border border-border/40 bg-background/60 backdrop-blur-sm hover:shadow transition-all duration-300">
      {/* Featured Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={post.featuredImage?.url || "/placeholder.jpg"}
          alt={post.featuredImage?.altText || post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Main Content */}
      <CardContent className="p-5">
        {/* Meta Info */}
        <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} min read
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 mb-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {post.metaDescription}
        </p>

        {/* Author */}
        {post.author && (
          <div className="flex items-center gap-2 mt-auto">
            <Avatar className="h-7 w-7">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name?.[0]?.toUpperCase() || "?"}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium text-muted-foreground">
              {post.author.name}
            </span>
          </div>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-5 pb-5 pt-0">
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Read Article →
        </Link>
      </CardFooter>
    </Card>
  );
}
