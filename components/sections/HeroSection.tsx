import Link from "next/link";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

/**
 * Compact page header for non-home routes (About, Services, Contact).
 * Light Mist surface with a navy headline, copper eyebrow, and a
 * dominant copper primary CTA paired with an outline secondary.
 */
export function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-mist">
      {/* Soft top-down highlight to add depth without darkening the surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
      />
      <div className="container-1140 relative py-24 max-[768px]:py-16">
        {eyebrow ? (
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="max-w-3xl font-[family-name:var(--font-display)] font-black text-navy"
          style={{
            fontSize: "clamp(34px, 4.6vw, 60px)",
            lineHeight: 1.02,
            letterSpacing: "-0.012em",
          }}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-[640px] text-[15.5px] leading-[1.7] text-slate md:text-[16.5px]">
          {subtitle}
        </p>
        {(primaryCtaLabel && primaryCtaHref) || (secondaryCtaLabel && secondaryCtaHref) ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {primaryCtaLabel && primaryCtaHref ? (
              <Link
                href={primaryCtaHref}
                className="copper-pulse inline-flex items-center gap-2 rounded-md bg-gold px-7 py-[14px] text-[13px] font-bold uppercase text-white shadow-[0_10px_28px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
                style={{ letterSpacing: "0.12em" }}
              >
                {primaryCtaLabel}
              </Link>
            ) : null}
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-md border border-navy/20 bg-white px-7 py-[14px] text-[13px] font-bold uppercase text-navy shadow-sm transition-[background,border-color,transform] duration-200 hover:-translate-y-px hover:border-navy/35 hover:bg-paper"
                style={{ letterSpacing: "0.12em" }}
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      {/* Hairline base separator */}
      <div aria-hidden="true" className="h-px w-full bg-warm-gray" />
    </section>
  );
}
