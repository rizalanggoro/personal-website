import { ArrowRight } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
});

function Blogs() {
  const blogPosts = [
    {
      slug: "building-iot-systems-go-mqtt",
      title: "Building IoT Systems with Go and MQTT",
      excerpt:
        "Deep dive into building scalable IoT systems using Go and MQTT protocol. Lessons learned from developing the Smart Door Lock system.",
      date: "2025-07-05",
      readTime: "8 min read",
      category: "Backend",
    },
    {
      slug: "tanstack-start-vs-nextjs",
      title: "Full-Stack Architecture: TanStack Start vs Next.js",
      excerpt:
        "Comparison of modern full-stack frameworks. Why I chose TanStack Start for this portfolio and when to use each.",
      date: "2025-06-28",
      readTime: "12 min read",
      category: "Architecture",
    },
    {
      slug: "teaching-junior-developers",
      title: "Teaching Junior Developers: Lessons from 3 Years as TA",
      excerpt:
        "Insights from mentoring 100+ students across Programming Fundamentals, OOP, and Mobile Development courses.",
      date: "2025-06-15",
      readTime: "10 min read",
      category: "Learning",
    },
    {
      slug: "federated-learning-privacy",
      title: "Federated Learning for Privacy-Preserving ML",
      excerpt:
        "Overview of federated learning, why it matters for privacy, and my research on FedProx-based approaches for medical imaging.",
      date: "2025-05-30",
      readTime: "15 min read",
      category: "Machine Learning",
    },
  ];

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
      {/* Page Header */}
      <section className="border-b border-[#E5E5E0] bg-[#FAFAF8]">
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
            <p className="text-lg text-[#666]">
              Technical insights and explorations in full-stack development,
              DevOps, and teaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts List */}
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
              className="group space-y-4 border-b border-[#E5E5E0] pb-12 last:border-b-0"
            >
              <div className="space-y-3">
                <Link
                  to={`/blogs/${post.slug}`}
                  className="block transition-colors"
                >
                  <h2
                    className="text-2xl font-bold transition-colors group-hover:text-[#FF6B35]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p className="text-[#666]">{post.excerpt}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-[#999]">
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
                <span className="rounded-full bg-[#FFF3ED] px-3 py-0.5 text-xs font-medium text-[#FF6B35]">
                  {post.category}
                </span>
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                className="inline-flex items-center gap-2 font-medium text-[#FF6B35] transition-colors group-hover:text-[#1a1a1a]"
              >
                Read article
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            More articles coming soon. Subscribe to GitHub for updates!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
