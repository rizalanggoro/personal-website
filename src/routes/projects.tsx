import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const projects = [
    {
      id: "smart-door-lock",
      title: "Smart Door Lock IoT System",
      year: 2025,
      description:
        "Comprehensive IoT solution enabling remote door access through an Android application with multi-factor authentication including fingerprint and RFID scanning.",
      problem:
        "Traditional door locks lack remote access capabilities and multi-factor authentication. Implementing a secure, scalable IoT solution that integrates mobile apps, backend services, and hardware.",
      solution:
        "Built a complete IoT ecosystem with a Kotlin/Jetpack Compose Android app for remote control, a Go backend with PostgreSQL for authentication and device management, and a NodeMCU device with MQTT communication.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Go",
        "PostgreSQL",
        "Firebase",
        "MQTT",
        "NodeMCU",
        "Docker",
        "GitHub Actions",
      ],
      role: "Full-stack Developer",
      impact: [
        "Implemented end-to-end encryption for secure remote access",
        "Achieved sub-second response time via MQTT protocol",
        "Deployed to personal home server with CI/CD automation",
      ],
      github: "https://github.com/rizalanggoro",
      demo: null,
    },
    {
      id: "presensi-go",
      title: "PresensiGo - QR Code Attendance System",
      year: 2025,
      description:
        "Multi-platform attendance system using QR codes to streamline classroom attendance tracking across Android app and web platform.",
      problem:
        "Manual classroom attendance is time-consuming, error-prone, and lacks digital record-keeping. Schools needed a fast, reliable solution for attendance management.",
      solution:
        "Developed a cross-platform system with Kotlin/Jetpack Compose for mobile, React/TanStack for web dashboard, and Go backend with RESTful APIs for data management.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "React",
        "TanStack",
        "Go",
        "PostgreSQL",
        "OpenAPI",
        "Swagger",
      ],
      role: "Full-stack Lead Developer",
      impact: [
        "Reduced attendance time from 10 mins to <1 min per class",
        "Device-binding mechanism prevents unauthorized access",
        "Dynamic QR code generation for real-time sessions",
      ],
      github: "https://github.com/rizalanggoro",
      demo: null,
    },
    {
      id: "election-systems",
      title: "Student Association Election System",
      year: "2023–2025",
      description:
        "Secure, transparent web-based voting platform successfully supporting 3 consecutive student association elections with real-time result counting.",
      problem:
        "Traditional voting methods lack transparency, security, and scalability. Student organizations needed an internet-accessible solution for online elections.",
      solution:
        "Built a Next.js application with NoSQL database for voter management, candidate tracking, and vote counting. Deployed on Vercel for reliability and instant scaling.",
      technologies: [
        "Next.js",
        "NoSQL (Firestore)",
        "Vercel",
        "TypeScript",
        "React",
      ],
      role: "Full-stack Developer & Maintainer",
      impact: [
        "Successfully managed 3 consecutive elections without downtime",
        "Transparent vote counting with instant result publication",
        "Verified voter authentication and prevention of duplicate voting",
      ],
      github: "https://github.com/rizalanggoro",
      demo: null,
    },
    {
      id: "pemilos",
      title: "OSIS Election System (PEMILOS)",
      year: 2021,
      description:
        "Modernized school student council election system enabling remote participation during the COVID-19 pandemic.",
      problem:
        "The legacy OSIS election system was outdated, limited to local network access, and not responsive for mobile devices. COVID-19 required remote voting capability.",
      solution:
        "Redeveloped the entire system using modern Laravel and MySQL stack, with a fully responsive design supporting both desktop and mobile voting.",
      technologies: ["Laravel", "MySQL", "PHP", "Responsive Design"],
      role: "Full-stack Redevelopment Lead",
      impact: [
        "Migrated from local-only to internet-accessible platform",
        "Maintained backward compatibility with existing election data",
        "System continues to support annual elections",
      ],
      github: null,
      demo: null,
    },
    {
      id: "education-expo",
      title: "Magelang Education Expo Website",
      year: 2020,
      description:
        "Digital exhibition platform enabling universities to showcase programs and interact with prospective students during the COVID-19 pandemic.",
      problem:
        "Traditional in-person education expos were impossible during lockdown. Universities needed an online platform to reach prospective students.",
      solution:
        "Created a Vue.js-based web platform with university profile pages, program listings, and interactive features enabling real-time student-university interaction.",
      technologies: ["Vue.js", "JavaScript", "Responsive Design", "HTML/CSS"],
      role: "Full-stack Developer",
      impact: [
        "Successfully hosted digital exhibition during pandemic",
        "Enabled universities to reach remote audiences",
        "Supported 50+ universities and 1000+ student interactions",
      ],
      github: null,
      demo: null,
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
