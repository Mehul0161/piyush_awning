type SectionProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  title,
  subtitle,
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-20">
            {title && (
              <div className="flex flex-col items-start">
                <div className="section-heading-bar" />
                <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-charcoal max-w-4xl text-balance leading-[1.1]">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="mt-8 max-w-2xl text-lg font-medium text-sage-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>

    </section>
  );
}
