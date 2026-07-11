import React from "react";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";

export const mdxComponents = {
  Callout,
  CodeBlock,
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="my-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-950">
      {children}
    </pre>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    if (className?.startsWith("language-")) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
        {children}
      </code>
    );
  },
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1
      className="mb-6 mt-12 text-4xl font-bold text-foreground"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2
      className="mb-5 mt-10 text-3xl font-bold text-foreground"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3
      className="mb-4 mt-8 text-2xl font-bold text-foreground"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-muted-foreground">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-[#FF6B35] underline hover:text-foreground"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-6 border-l-4 border-border pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
};
