"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function BlogCard({ post, className }) {
  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      className={cn(
        "overflow-hidden border rounded-lg border-border/40 bg-background/60 backdrop-blur-sm hover:shadow transition-all duration-300",
        "flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col",
        "sm:max-w-full md:max-w-[400px]",
        "group cursor-pointer", // Added cursor pointer for better UX
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex-1 flex flex-col sm:flex-row md:flex-col" // Make entire card clickable
      >
        {/* Mobile Layout: Image Left, Content Right */}
        <div className="sm:hidden flex flex-row w-full max-h-[200px]">
          <div className="relative w-1/3 h-full overflow-hidden">
            <Image
              src={post.featuredImage?.url || "services/public/800x400.svg"}
              alt={post.featuredImage?.altText || post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-2 left-2 capitalize bg-blue-600/90 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              {post.category}
            </span>
          </div>
          <div className="w-2/3 p-3 flex flex-col justify-between">
            <div>
              <h3 className="text-md font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                {post.metaDescription}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              {post.author && (
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name?.[0]?.toUpperCase() || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium text-muted-foreground">
                    {post.author.name}
                  </span>
                </div>
              )}
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formattedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Image on top */}
        <div className="hidden sm:block flex-1">
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={post.featuredImage?.url || "services/public/800x400.svg"}
              alt={post.featuredImage?.altText || post.title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute capitalize top-3 left-3 bg-blue-600/90 shadow-inner text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <CardContent className="p-5 flex flex-col flex-1">
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

            <h3 className="text-lg font-semibold leading-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {post.metaDescription}
            </p>
          </CardContent>

          <CardFooter className="px-5 pb-5 pt-0 inline-flex items-center justify-between w-full">
            {post.author && (
              <div className="flex items-center gap-2 mt-auto">
                <Avatar className="h-7 w-7">
                  <AvatarImage
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <AvatarFallback>
                    {post.author.name?.[0]?.toUpperCase() || "?"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-muted-foreground">
                  {post.author.name}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-orange-500 transition-all duration-200">
              Read Article
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
}
