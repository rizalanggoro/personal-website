import { EnvelopeSimple } from "@phosphor-icons/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content:
          "Rizal Dwi Anggoro - Full-stack developer | React, TypeScript, Go, Kotlin",
      },
      {
        title: "Rizal Dwi Anggoro - Developer Portfolio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <style>{`
          @supports (color: var(--brand-color)) {
            :root {
              --brand-color: rgb(16 185 129);
              --brand-600: rgb(5 150 105);
            }
          }
        `}</style>
      </head>
      <body className="bg-[#FAFAF8] text-[#1a1a1a]">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E5E0] bg-[#FAFAF8]/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold transition-colors hover:text-[#FF6B35]"
          >
            Rizal.
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-[#FF6B35]"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium transition-colors hover:text-[#FF6B35]"
            >
              Work
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium transition-colors hover:text-[#FF6B35]"
            >
              Writing
            </Link>
            <a
              href="mailto:gnoogler4@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#333]"
            >
              <EnvelopeSimple size={16} weight="fill" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-bold">Rizal Dwi Anggoro</h3>
            <p className="mt-2 text-sm text-[#666]">
              Full-stack developer | Magelang, Central Java
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-[#999]">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rizalanggoro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-[#333]"
              >
                GitHub
              </a>
              <a
                href="mailto:gnoogler4@gmail.com"
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-[#333]"
              >
                Email
              </a>
              <a
                href="/cv.md"
                download
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-[#333]"
              >
                CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#E5E5E0] pt-8 text-center text-xs text-[#999]">
          <p>© {currentYear} Rizal Dwi Anggoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
