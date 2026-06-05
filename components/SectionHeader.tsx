interface SectionProps {
  id?: string;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, alt, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${alt ? "section-alt" : ""} ${className}`}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p className="section-label">{label}</p>
      <h2 className="font-display mt-3 text-[1.625rem] font-bold leading-[1.2] text-white sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)] lg:text-[1.0625rem]">
          {description}
        </p>
      )}
    </div>
  );
}
