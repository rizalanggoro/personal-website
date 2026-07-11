import { Badge } from "#/components/ui/badge";
import { ArrowRight } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getBlogPosts } from "#/lib/blogs";

export const Route = createFileRoute("/blogs/")({
  component: BlogIndex,
  loader: () => getBlogPosts(),
});

function BlogIndex() {
  const blogPosts = Route.useLoaderData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="space-y-16">
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Writing
            </h1>
            <p className="text-lg text-muted-foreground">
              Technical insights and explorations in full-stack development,
              DevOps, and teaching.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="group space-y-4 border-b border-border pb-12 last:border-b-0"
            >
              <div className="space-y-3">
                <Link
                  to="/blogs/$slug"
                  params={{ slug: post.slug }}
                  className="block transition-colors"
                >
                  <h2
                    className="text-2xl font-bold transition-colors group-hover:text-[#FF6B35]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <Badge variant="tech">{post.category}</Badge>
              </div>

              <Link
                to="/blogs/$slug"
                params={{ slug: post.slug }}
                className="inline-flex items-center gap-2 font-medium text-[#FF6B35] transition-colors group-hover:text-foreground"
              >
                Read article
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
