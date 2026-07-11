import { mdxComponents } from "#/components/mdx";
import { Badge } from "#/components/ui/badge";
import { getBlogPost } from "#/lib/blogs";
import { evaluate } from "@mdx-js/mdx";
import { ArrowLeft } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import React from "react";
import * as runtime from "react/jsx-runtime";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetail,
  loader: ({ params }) => getBlogPost({ data: params.slug }),
});

function BlogDetail() {
  const blog = Route.useLoaderData();

  if (!blog) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-foreground font-medium"
            >
              <ArrowLeft size={16} />
              Back to writing
            </Link>
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {blog.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{blog.readTime}</span>
              <span>•</span>
              <Badge variant="tech">{blog.category}</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 lg:px-0 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose max-w-none dark:prose-invert"
        >
          <BlogContent content={blog.content} />
        </motion.div>
      </article>

      <section className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-0">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-medium text-[#FF6B35] hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </section>
    </div>
  );
}

function BlogContent({ content }: { content: string }) {
  const [MDXComponent, setMDXComponent] =
    React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    async function compileMDX() {
      try {
        const { default: MDXContent } = await evaluate(content, runtime);
        setMDXComponent(() => MDXContent);
      } catch (error) {
        console.error("Failed to compile MDX:", error);
      }
    }
    compileMDX();
  }, [content]);

  if (!MDXComponent) {
    return <p className="text-muted-foreground">Loading...</p>;
  }

  return <MDXComponent components={mdxComponents} />;
}
