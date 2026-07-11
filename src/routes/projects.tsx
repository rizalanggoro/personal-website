import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getProjects } from "#/lib/projects";

export const Route = createFileRoute("/projects")({
  component: Projects,
  loader: () => getProjects(),
});

function Projects() {
  const projects = Route.useLoaderData();

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
              My Work
            </h1>
            <p className="max-w-2xl text-lg text-[#666]">
              Full-stack products and systems I've built, from IoT solutions to
              web applications. Each project represents real-world problems
              solved with thoughtful architecture and clean code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              id={project.id}
              className="scroll-mt-24 space-y-8 border-b border-[#E5E5E0] pb-20 last:border-b-0 last:pb-0"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h2>
                  <span className="text-sm font-medium text-[#999]">
                    {project.year}
                  </span>
                </div>
                <p className="text-lg text-[#666]">{project.description}</p>
              </div>

              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-[#999] text-xs">
                      Problem
                    </h3>
                    <p className="mt-3 text-[#666]">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-[#999] text-xs">
                      Solution
                    </h3>
                    <p className="mt-3 text-[#666]">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-[#999] text-xs">
                      My Role
                    </h3>
                    <p className="mt-3 text-[#666]">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-[#999] text-xs">
                      Impact
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-[#666]">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-[#999] text-xs mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#FF6B35]/30 bg-[#FFF3ED] px-3 py-1 text-xs font-medium text-[#FF6B35]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-[#1a1a1a]"
                    >
                      → GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-[#1a1a1a]"
                    >
                      → Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
