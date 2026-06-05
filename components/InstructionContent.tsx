import ReactMarkdown, { Components } from "react-markdown";

interface InstructionContentProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mb-6 text-3xl font-bold text-slate-900">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold text-slate-800">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-slate-600">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-600">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-600">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-sky-600 underline decoration-sky-200 underline-offset-2 hover:decoration-sky-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-sky-300 bg-sky-50/50 py-2 pl-4 pr-2 text-slate-600">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-slate-200" />,
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-slate-50 text-left font-semibold text-slate-800">
      {children}
    </thead>
  ),
  tbody: ({ children }) => <tbody className="divide-y divide-slate-100">{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => <th className="px-4 py-3">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 text-slate-600">{children}</td>,
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-800">{children}</strong>
  ),
};

export function InstructionContent({ content }: InstructionContentProps) {
  return (
    <article>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
