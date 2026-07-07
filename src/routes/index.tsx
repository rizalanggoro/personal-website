import {
  ArrowRight,
  Code,
  Database,
  GithubLogo,
  Rocket,
  Users,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const techCategories = [
    {
      title: "Frontend",
      techs: ["React", "TypeScript", "Tailwind CSS", "TanStack Router"],
      icon: Code,
    },
    {
      title: "Backend",
      techs: ["Go", "Node.js", "Laravel", "Fiber"],
      icon: Database,
    },
    {
      title: "Mobile",
      techs: ["Kotlin", "Jetpack Compose", "Flutter", "Dart"],
      icon: Rocket,
    },
    {
      title: "DevOps",
      techs: ["Docker", "GitHub Actions", "CI/CD", "PostgreSQL"],
      icon: Users,
    },
  ];

  const featuredProjects = [
    {
      title: "Smart Door Lock IoT",
      description:
        "IoT-based smart door lock with Android app, fingerprint & RFID authentication",
      techs: ["Kotlin", "Go", "NodeMCU", "MQTT", "Docker"],
      link: "/projects#smart-door-lock",
    },
    {
      title: "PresensiGo",
      description:
        "QR code-based classroom attendance system for Android and web",
      techs: ["Kotlin", "React", "Go", "OpenAPI"],
      link: "/projects#presensi-go",
    },
    {
      title: "Election Systems",
      description:
        "Web-based voting platform supporting 3 consecutive elections",
      techs: ["Next.js", "NoSQL", "Vercel"],
      link: "/projects#election-systems",
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
    hidden: { opacity: 0, y: 10 },
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
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block rounded-full border border-[#FF6B35]/30 bg-[#FFF3ED] px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">
              Now available
            </span>
          </div>

          <div className="space-y-6">
            <h1
              className="text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building elegant solutions
              <span className="block text-[#FF6B35]">for complex problems</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#666]">
              Full-stack developer crafting scalable web and IoT systems.
              Currently a final-year Informatics student at Sebelas Maret
              University, passionate about creating thoughtful software.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 font-medium text-white transition-all hover:bg-[#333] active:scale-95"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:gnoogler4@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#E5E5E0] px-6 py-3 font-medium transition-all hover:border-[#FF6B35] hover:bg-[#FFF3ED]"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Snapshot */}
      <section className="mx-auto max-w-4xl px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid gap-16 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              4+
            </h3>
            <p className="text-[#666]">
              Years of hands-on development experience
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              10+
            </h3>
            <p className="text-[#666]">
              Production projects shipped and deployed
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-2">
            <h3
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              100+
            </h3>
            <p className="text-[#666]">
              Students mentored as teaching assistant
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-4xl px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Technology Stack
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {techCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="rounded-lg border border-[#E5E5E0] bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={24} weight="fill" className="text-[#FF6B35]" />
                    <h3 className="font-bold">{category.title}</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    {category.techs.map((tech) => (
                      <span key={tech} className="block text-sm text-[#666]">
                        • {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-4xl px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="flex items-center justify-between">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured Work
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#FF6B35] transition-colors hover:text-[#1a1a1a] font-medium"
            >
              View all
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group space-y-4 rounded-lg border border-[#E5E5E0] bg-white p-6"
              >
                <h3
                  className="text-2xl font-bold transition-colors group-hover:text-[#FF6B35]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#666]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#FF6B35]/30 bg-[#FFF3ED] px-3 py-1 text-xs font-medium text-[#FF6B35]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#FF6B35] transition-colors group-hover:text-[#1a1a1a]"
                >
                  Learn more
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8 text-center"
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#666]">
            Have a project idea or want to collaborate? I'd love to hear from
            you.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:gnoogler4@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-3 font-medium text-white transition-all hover:bg-[#333] active:scale-95"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/rizalanggoro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#E5E5E0] px-8 py-3 font-medium transition-all hover:border-[#FF6B35] hover:bg-[#FFF3ED]"
            >
              <GithubLogo size={18} weight="fill" />
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
