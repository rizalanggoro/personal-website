# Portfolio Website - Product Requirements Document

## 1. Overview & Objectives

### Project Summary

Build a professional developer portfolio website for Rizal Dwi Anggoro (final-year Informatics student at Sebelas Maret University) to showcase projects, experience, and technical skills. The site serves as a hiring asset targeting recruiters, technical hiring managers, and peer developers.

### Primary Goals

- **Showcase expertise** in full-stack development (React, TypeScript, Go, Kotlin, IoT)
- **Display notable projects** with technical depth and real-world impact
- **Build credibility** through detailed case studies, publications, and experience
- **Enable contact** with clear CTAs for collaboration and opportunities
- **Establish personal brand** as a thoughtful developer who cares about design and UX

### Target Audience

1. **Recruiters & Technical Hiring Managers** (primary)
2. **Peer Developers** looking for technical collaboration
3. **Universities / MSIB program recruiters** (Bangkit Academy context)
4. **Project clients** (freelance inquiry)

---

## 2. Design Philosophy

### Design Direction

**Reading as:** Developer portfolio for technical hiring managers, with a clean/minimalist language, leaning toward Tailwind utilities + restrained motion.

### Design Dials (from tasteskill framework)

- **DESIGN_VARIANCE: 6** — Balanced professionalism with subtle personality. Not corporate-rigid, not overly playful. Grid-based with measured asymmetry.
- **MOTION_INTENSITY: 5** — Subtle entry animations (fade-in, slide-up on scroll). Hover feedback on interactive elements. No infinite loops or distracting motion.
- **VISUAL_DENSITY: 4** — Clean, breathing. Generous whitespace. Data-light sections; no tables or spec sheets.

### Design System

- **Color Palette:**
  - Neutral base: Zinc-900 (dark) or Zinc-50 (light) depending on mode
  - Accent: Single high-contrast color (e.g., Emerald-500, Blue-500, or Amber-500) — TBD with user
  - Semantic: Red-500 (error), Amber-500 (warning), Green-500 (success)
- **Typography:**
  - Display: Default `text-4xl md:text-5xl lg:text-6xl tracking-tighter`
  - Body: `text-base text-gray-600 leading-relaxed max-w-[65ch]`
  - Font pair: Geist + Geist Mono (via `next/font` or self-hosted)
- **Layout:**
  - Max width: `max-w-7xl` (1280px)
  - Grid system: Tailwind standard breakpoints (sm 640, md 768, lg 1024, xl 1280, 2xl 1536)
  - Hero: `pt-16 md:pt-24` (NOT `pt-32` - avoid hero float)
  - Spacing: Consistent gap scale (gap-4, gap-6, gap-8)
- **Shape Consistency:** All-soft aesthetic (radius 12px for cards, buttons, inputs)

### Brand Voice & Tone

- **Technical but approachable** — Show depth without gatekeeping
- **Action-oriented** — "Built," "Shipped," "Deployed," "Collaborated"
- **Honest** — Admit learning; celebrate wins proportionately
- **Minimalist copy** — Every sentence earns its space; no filler

### Key Design Constraints (from tasteskill)

1. **No eyebrow labels** above section headers (banned by default)
2. **Hero must fit in viewport** — Headline max 2 lines, subtext ≤ 20 words, CTA visible without scroll
3. **Nav renders on one line** at desktop (no wrapping)
4. **One accent color lock** across entire page
5. **Section layout repetition max 2×** — Vary layout families between sections
6. **Mobile collapse explicit** — Every layout declares its `< 768px` fallback

---

## 3. Page Structure & Content

### 3.1 Landing Page (`/`)

**Purpose:** Immediate impact, value prop clarity, path to projects and contact.

#### Hero Section

- **Headline:** 2-3 word intro (e.g., "Full-Stack Developer" or "Crafting Digital Solutions")
- **Subheading:** ≤ 20 words, summarize unique value (e.g., "Building scalable web and IoT systems. React, Go, Kotlin. Currently at Sebelas Maret University.")
- **Visual:** Hero image (generate or photograph of workspace/code)
- **CTAs:** Primary "View My Work", Secondary "Get In Touch"
- **Layout:** Text left or right + image opposite (NOT centered)

#### About Snapshot Section

- **Content:** 3-4 sentence professional summary extracted from CV
- **Layout:** Split text (left) + stat cards or visual asset (right)
- **Stats:** E.g., "4+ years coding experience", "3 published projects", "100+ students mentored"
- **Interactive:** Hover reveal on stat cards (subtle scale or color shift)

#### Key Technologies Section

- **Format:** Not a list. Use a visual grid or inline badges showing core skills
- **Content:** Kubernetes (React, TypeScript, Go, Kotlin, Dart)
- **Backend (Go, Node.js, Laravel)
- **Database (PostgreSQL, MySQL)
- **DevOps (Docker, GitHub Actions, CI/CD)
- **Other (Jetpack Compose, Flutter, IoT)
- **Layout:** 2-3 column responsive grid, NO 6-card default; use asymmetric cell sizing

#### Featured Projects Teaser

- **Content:** 2-3 standout projects from full projects list
- **Format:** Card-per-project OR split-text sections (alternate left/right)
- **Per card:** Project name, 1-line tagline, tech stack badge, "Explore" link
- **NO:** Project descriptions longer than 1 sentence on landing
- **Layout Constraint:** Avoid 3× consecutive "image left + text right" sections; break pattern after 2

#### Call-to-Action Section

- **Headline:** "Let's Build Something" or similar
- **Subtext:** ≤ 15 words, e.g., "Have a project idea or want to collaborate?"
- **CTAs:** "Get In Touch" (email link) + "View GitHub" (link)
- **Design:** Minimal, could be plain text or a button pair; NO gradient or heavy styling

#### Footer

- **Content:** Name, location, year, social links (GitHub, LinkedIn, email)
- **Links:** GitHub, LinkedIn, Email, CV Download (PDF link)
- **NOT:** "Made with React" or tech flex

---

### 3.2 Projects Page (`/projects`)

**Purpose:** Detailed case studies and project showcase. One page listing all projects with deep dives.

#### Page Header

- **Headline:** "Projects"
- **Subtext:** ≤ 20 words, e.g., "Full-stack products and systems I've built. From IoT to web applications."

#### Project Cards / Case Studies

**Format:** Each project is a collapsible or modal detail card, or a full-width section (user preference pending content volume).

**Per Project Include:**

- **Project name**
- **1-line tagline**
- **Problem statement** (2-3 sentences)
- **Solution summary** (3-4 sentences, technical specifics)
- **Technologies used** (pill/badge format)
- **Impact / Results** (1-2 metrics if applicable; be honest, no fake numbers)
- **Role** (your specific contribution: e.g., "Lead full-stack developer", "Backend architecture", "Android lead")
- **Links:** GitHub repo (if public), Live demo (if applicable)
- **Visual:** Screenshot, demo GIF, or hero image for the project

**Projects to Include (from CV):**

1. **Smart Door Lock IoT** (2025)
   - Problem: Secure remote access with multi-auth
   - Solution: Android + Go backend + NodeMCU + MQTT
   - Tech: Kotlin, Go, PostgreSQL, Firebase, MQTT, Docker
   - Role: Full-stack (Android, backend, IoT integration)

2. **PresensiGo** (2025)
   - Problem: Manual classroom attendance slow and error-prone
   - Solution: QR code-based mobile + web attendance system
   - Tech: Kotlin, React, Go, PostgreSQL, OpenAPI
   - Role: Full-stack (Android, web, backend)

3. **Student Association Election System** (2023–2025)
   - Problem: Secure, transparent online voting for student orgs
   - Solution: Next.js voting platform used in 3 consecutive elections
   - Tech: Next.js, NoSQL (Firestore), Vercel
   - Role: Full-stack developer & maintainer

4. **OSIS Election System (PEMILOS)** (2021)
   - Problem: Legacy system, not internet-accessible during COVID-19
   - Solution: Modernized Laravel + MySQL, responsive, remote-capable
   - Tech: Laravel, MySQL
   - Role: Full-stack redevelopment

5. **Magelang Education Expo Website** (2020)
   - Problem: Education expo needed online presence during pandemic
   - Solution: Vue.js exhibition platform for universities + students
   - Tech: Vue.js, responsive design
   - Role: Full-stack developer

**Layout:**

- **Option A:** Vertical stack of full-width project cards (alternating left/right text + image)
- **Option B:** Grid of project cards (3 cols desktop, 1 col mobile) with click-to-expand
- **Chosen (pending user input):** TBD after PRD review

---

### 3.3 Blogs Page (`/blogs`)

**Purpose:** Technical writing, learnings, and thought leadership. Optional; can be light initially.

#### Page Header

- **Headline:** "Thoughts & Learnings"
- **Subtext:** "Technical insights, lessons learned, and explorations in full-stack development."

#### Blog List

- **Format:** Article cards in a grid or vertical list
- **Per article:** Title, publish date, reading time, excerpt (≤ 50 words), category tag
- **Category tags:** E.g., "Backend", "Mobile", "DevOps", "Learning"
- **Click behavior:** Link to individual blog post (route: `/blogs/[slug]`)

#### Blog Post Template (individual page)

- **Metadata:** Title, date, reading time, category
- **Body:** Markdown-rendered content
- **Navigation:** "Back to blogs", "Next post", "Previous post"
- **Sidebar (optional):** Table of contents, related posts

**Initial Blog Stubs (content to be written):**

1. "Building IoT Systems with Go and MQTT"
2. "Full-Stack Architecture Decisions: Next.js vs TanStack Start"
3. "Teaching Junior Developers: Lessons from 3 Years as a TA"
4. "Federated Learning for Privacy-Preserving ML"

---

## 4. Content Strategy

### Tone & Voice Guidelines

- **Technical depth without jargon walls** — Explain acronyms on first use
- **Action verbs** — "Implemented", "Designed", "Shipped", "Deployed", never passive voice
- **Honest metrics** — Use real numbers; do NOT invent specs (no fake "92% improvement")
- **Personal narrative** — Why you chose each tech; lessons learned

### Copy Self-Audit Rules (from tasteskill)

Before shipping ANY visible text:

- **Clarity check:** Can a non-technical recruiter understand this sentence?
- **Length check:** Headline ≤ 8 words, subtext ≤ 20 words, body paragraphs ≤ 3 sentences per topic
- **Precision check:** No AI cute-isms, no fake numbers, no buzzwords without definition

### SEO & Accessibility

- **Meta tags:** Unique title, description, OG image per page
- **Heading hierarchy:** H1 per page, H2–H3 for sections, never skip levels
- **Alt text:** Every image has descriptive alt text (e.g., "Smart Door Lock IoT system diagram showing Android app, Go backend, and NodeMCU device")
- **Semantic HTML:** Use `<nav>`, `<main>`, `<article>`, `<footer>` tags
- **Color contrast:** WCAG AA minimum (4.5:1 body, 3:1 large text); audit every CTA button

---

## 5. Technical Stack & Architecture

### Frontend Framework

- **React** (UI library)
- **TanStack Start** (full-stack framework, SSR/SSG out of box)
- **TanStack Router** (file-based routing)
- **Tailwind CSS v4** (styling)
- **Motion** (import from `motion/react` for animations)

### Styling & Design System

- **Tailwind v4 utilities** (not shadcn/ui by default; can add later)
- **CSS custom properties** for theme variables (dark mode support)
- **Responsive breakpoints:** Tailwind defaults (sm, md, lg, xl, 2xl)

### Component Library

- **Radix UI primitives** (optional, for accessible foundations)
- **@phosphor-icons/react** (icons, standardize strokeWidth to 1.5 or 2.0)

### Fonts & Typography

- **Font delivery:** `next/font` (TanStack Start equivalent) or self-hosted @font-face
- **Font pair:** Geist (sans) + Geist Mono (mono)
- **Font display:** `swap` to prevent FOUT

### Animation

- **Motion (framer-motion successor):** Entry/exit animations, scroll reveal, hover interactions
- **No infinite loops by default** (MOTION_INTENSITY: 5 means subtle, not perpetual motion)
- **Spring physics:** Prefer spring timing over linear easing

### Icons

- **@phosphor-icons/react** — Primary icon library
- **One family per project** (no mixing with Lucide, Tabler, etc.)

### Deployment

- **Vercel** (TanStack Start has first-class Vercel support)
- **Environment:** Production, staging, preview deployments via Vercel
- **CI/CD:** GitHub Actions (already familiar from CV)
- **Domain:** TBD (user provides; recommend custom domain)

### Content Management

- **Blog posts:** Markdown files in `/content/blogs/` directory
- **Parsing:** `unified` + `remark` + `rehype` for MD → HTML
- **Project data:** JSON or frontmatter (define after initial setup)

---

## 6. Page Hierarchy & User Flows

### Navigation Structure

```
/                 → Landing page (hero, about, featured projects, CTA)
/projects         → All projects list (detailed case studies)
/blogs            → Blog index (articles list)
/blogs/[slug]     → Individual blog post
```

### Primary User Flows

1. **Recruiter Journey:** Landing → Projects (explore depth) → Contact CTA → Get In Touch
2. **Peer Developer Journey:** Landing → Projects → GitHub links → Blogs (optional)
3. **Quick Scan:** Landing → Contact or GitHub link (convert without deep dive)

### Navigation Component

- **Desktop:** Horizontal nav bar (max 80px height, items fit one line)
- **Mobile:** Hamburger menu, smooth slide-out
- **Items:** Home, Projects, Blogs, Contact (or Email CTA)
- **Sticky:** NAV sticky on scroll (optional enhancement)

---

## 7. Success Metrics & KPIs

### Primary Metrics

1. **Recruiter/Hiring Manager Views:** Traffic analysis, session duration > 2 min
2. **Project Deep Dives:** Users spending time in `/projects` (goal: > 1 min avg session)
3. **Contact Conversions:** Clicks to email, GitHub repo views, LinkedIn profile visits
4. **Mobile Experience:** > 90% layout fidelity on mobile, <3s First Contentful Paint

### Secondary Metrics

1. **Blog engagement:** Read time distribution, return visits
2. **Social shares:** LinkedIn, GitHub, Twitter mentions
3. **SEO:** Organic search impressions for "Rizal Dwi Anggoro portfolio", tech keywords

---

## 8. Out of Scope (for MVP)

- [ ] CMS (Contentful, Sanity, etc.) — Use filesystem + markdown for blogs initially
- [ ] User authentication / admin panel
- [ ] Comments or reactions on blogs
- [ ] Detailed analytics dashboard
- [ ] Internationalization (i18n) — English only for MVP
- [ ] Dark mode toggle (implement auto `prefers-color-scheme` only)
- [ ] Experimental animations (glassmorphism, 3D effects) — Keep it professional

---

## 9. Constraints & Anti-Patterns

### Design Constraints (tasteskill rules)

- ❌ NO eyebrow labels above section headers
- ❌ NO hero overflow; hero must fit initial viewport
- ❌ NO 3× consecutive image+text alternation (break after 2)
- ❌ NO floating nav at desktop (nav height ≤ 80px)
- ❌ NO placeholder-as-label form inputs
- ❌ NO AI-purple gradient defaults
- ✅ ONE accent color lock across entire page
- ✅ Real images required (generate or source Unsplash/Pexels)
- ✅ Modal 6-card defaults banned; use asymmetric grids

### Copy Constraints

- ❌ NO fake precision numbers (no "92% improvement" if unverified)
- ❌ NO buzzwords without context
- ❌ NO duplicate CTA intent (one "Get in touch" per page, not "Contact", "Reach out", "Let's talk")
- ✅ Headlines ≤ 8 words
- ✅ Subtext ≤ 20 words
- ✅ Quotes ≤ 3 lines (if included)

### Technical Constraints

- ❌ NO deprecated packages (check before install)
- ❌ NO mixing icon libraries (one family only)
- ❌ NO `h-screen` for responsive sections (use `min-h-[100dvh]`)
- ✅ Mobile-first responsive design (declare mobile collapse per layout)
- ✅ All CTAs one line at desktop (no text wrapping)

---

## 10. Deliverables Checklist

### Phase 1: Setup & Structure

- [ ] Project initialized (React + TanStack Start + TanStack Router)
- [ ] Tailwind CSS v4 configured
- [ ] Motion library installed
- [ ] Base layout template (nav, footer, containers)
- [ ] Dark mode support (auto `prefers-color-scheme`)

### Phase 2: Landing Page

- [ ] Hero section (headline, subtext, CTA, image)
- [ ] About snapshot (summary + stats)
- [ ] Tech stack section (visual grid)
- [ ] Featured projects teaser (2-3 projects)
- [ ] CTA section + footer

### Phase 3: Projects Page

- [ ] Projects list / case study layout
- [ ] 5 detailed project entries (per Section 3.2)
- [ ] Project image assets (generate or source)
- [ ] Links to GitHub, demos (if applicable)

### Phase 4: Blogs (Soft Launch)

- [ ] Blog index page
- [ ] Blog post template
- [ ] 1-2 initial blog posts (markdown)
- [ ] Markdown → HTML rendering pipeline

### Phase 5: Polish & Deploy

- [ ] Performance audit (Lighthouse > 90)
- [ ] Accessibility audit (WCAG AA pass)
- [ ] Copy audit (tone, clarity, precision)
- [ ] Mobile responsiveness QA
- [ ] Deploy to Vercel
- [ ] Custom domain setup

---

## 11. Next Steps

1. **PRD Review & Approval:** Confirm design dials, color accent, page priorities
2. **Design Kickoff:** Sketch landing page layout (wireframe or Figma)
3. **Setup:** Initialize project, configure build toolchain
4. **Landing Page Sprint:** Hero, about, projects teaser, footer
5. **Projects Sprint:** Full case studies for 5 projects
6. **Blogs Sprint:** Content strategy, 1-2 launch articles
7. **QA & Deploy:** Performance, accessibility, copy audit; ship to Vercel

---

**Document Version:** 1.0  
**Last Updated:** 2026-07-07  
**Status:** Ready for Review
