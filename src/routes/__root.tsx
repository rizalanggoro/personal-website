import { EnvelopeSimple, List } from "@phosphor-icons/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import "../styles.css";
import { ThemeProvider } from "#/components/theme-provider";
import { ThemeToggle } from "#/components/theme-toggle";
import { Button } from "#/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "#/components/ui/sheet";

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
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          @supports (color: var(--brand-color)) {
            :root {
              --brand-color: rgb(16 185 129);
              --brand-600: rgb(5 150 105);
            }
          }
        `}</style>
      </head>
      <body className="bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.15] dark:opacity-[0.08] dark:invert" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 flex min-h-screen flex-col">
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold transition-colors hover:text-[#FF6B35]"
          >
            Rizal.
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
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
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="default"
              className="h-9 px-4"
            >
              <a href="mailto:gnoogler4@gmail.com">
                <EnvelopeSimple size={16} weight="fill" />
              </a>
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <List size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-6">
                <nav className="mt-8 flex flex-col gap-6">
                  <Link
                    to="/"
                    className="text-lg font-medium transition-colors hover:text-[#FF6B35]"
                  >
                    Home
                  </Link>
                  <Link
                    to="/projects"
                    className="text-lg font-medium transition-colors hover:text-[#FF6B35]"
                  >
                    Work
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-lg font-medium transition-colors hover:text-[#FF6B35]"
                  >
                    Writing
                  </Link>
                  <a
                    href="mailto:gnoogler4@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    <EnvelopeSimple size={16} weight="fill" />
                    Email
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-bold">Rizal Dwi Anggoro</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full-stack developer | Magelang, Central Java
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rizalanggoro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="mailto:gnoogler4@gmail.com"
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-foreground"
              >
                Email
              </a>
              <a
                href="/cv.md"
                download
                className="text-sm font-medium text-[#FF6B35] transition-colors hover:text-foreground"
              >
                CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Rizal Dwi Anggoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
