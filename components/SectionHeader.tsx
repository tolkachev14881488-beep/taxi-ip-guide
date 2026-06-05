interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-xl text-center sm:text-left";

  return (
    <div className={alignClass}>
      <span className="section-label">{label}</span>
      <h2 className="font-display mt-5 text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-slate-400 sm:mt-4 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
