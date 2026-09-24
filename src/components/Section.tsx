import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <header className="mb-10 max-w-3xl sm:mb-12">
            {eyebrow && (
              <>
                <div className="eyebrow">{eyebrow}</div>
                <hr className="mt-3 mb-6 border-line" />
              </>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {sub && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
