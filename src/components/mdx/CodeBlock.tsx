interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ children, language = "text", filename }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-900">
      {filename && (
        <div className="border-b border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-400">
          {filename}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className={`language-${language} text-zinc-100`}>{children}</code>
      </pre>
    </div>
  );
}
