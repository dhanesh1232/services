"use client";
import * as React from "react";
export function BodyContent(body) {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    const convertBody = () => {
      const container = document.createElement("div");
      container.innerHTML = body;

      // Enhanced styling with theme support
      container.querySelectorAll("p").forEach((p) => {
        p.className = "text-lg text-foreground/80 mb-6 leading-relaxed";
      });

      container.querySelectorAll("h1").forEach((h1) => {
        h1.className = "text-5xl font-bold mb-8 text-foreground";
      });

      container.querySelectorAll("h2").forEach((h2) => {
        h2.className =
          "text-3xl font-bold mb-6 text-foreground mt-10 pb-2 border-b border-border";
      });

      container.querySelectorAll("h3").forEach((h3) => {
        h3.className = "text-2xl font-semibold mb-4 text-foreground mt-8";
      });

      container.querySelectorAll("h4").forEach((h4) => {
        h4.className = "text-xl font-semibold mb-3 text-foreground mt-6";
      });

      container.querySelectorAll("h5").forEach((h5) => {
        h5.className = "text-lg font-medium mb-2 text-foreground mt-4";
      });

      container.querySelectorAll("h6").forEach((h6) => {
        h6.className = "text-base font-medium mb-2 text-foreground mt-4";
      });

      // Links with theme support
      container.querySelectorAll("a").forEach((a) => {
        a.className =
          "text-primary hover:text-primary/80 underline transition-colors duration-200 font-medium";
      });

      // Enhanced lists with theme support
      container.querySelectorAll("ul").forEach((ul) => {
        ul.className = "list-disc list-inside mb-6 space-y-2 ml-4";
      });

      container.querySelectorAll("ol").forEach((ol) => {
        ol.className = "list-decimal list-inside mb-6 space-y-2 ml-4";
      });

      container.querySelectorAll("li").forEach((li) => {
        li.className = "text-lg text-foreground/80 leading-relaxed";
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
  }, [body]);
  return (
    <main className="lg:col-span-8">
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
    </main>
  );
}

export const generateId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove non-alphanumeric
    .replace(/\s+/g, "-"); // replace spaces with -
};

/**
 * Extract all h1-h6 tags from an HTML string
 * and return as an array of objects: { level: 1-6, text, id }
 */
export function extractHeadings(htmlString) {
  const container = document.createElement("div");
  container.innerHTML = htmlString;

  // Select all h1-h6
  const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");

  return Array.from(headings).map((heading) => {
    const level = parseInt(heading.tagName.slice(1), 10); // h1 -> 1
    let text = heading.textContent.trim();

    // Generate a slug/id for linking
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // remove non-alphanumeric
      .replace(/\s+/g, "-"); // replace spaces with -

    heading.id = id; // optional: add id back to HTML if needed

    return { level, text, id };
  });
}
