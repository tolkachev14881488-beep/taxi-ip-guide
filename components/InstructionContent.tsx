import ReactMarkdown, { Components } from "react-markdown";

interface InstructionContentProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-display mb-6 text-3xl font-bold text-white">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display mb-4 mt-10 border-b border-white/10 pb-2 text-2xl font-semibold text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display mb-3 mt-6 text-xl font-semibold text-slate-200">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-slate-400">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-400">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-amber-400 underline decoration-amber-400/30 underline-offset-2 hover:decoration-amber-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-amber-500/50 bg-amber-500/5 py-2 pl-4 pr-2 text-slate-400">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-white/10" />,
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-white/5 text-left font-semibold text-slate-200">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-white/5">{children}</tbody>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-slate-400">{children}</td>,
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-200">{children}</strong>
  ),
};

export function InstructionContent({ content }: InstructionContentProps) {
  return (
    <article>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
