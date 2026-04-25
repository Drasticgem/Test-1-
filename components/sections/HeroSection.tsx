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
 * Tide background, paper text, optional copper CTA pair.
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
    <section className="bg-navy text-white">
      <div className="container-1140 py-20 max-[768px]:py-14">
        {eyebrow ? (
          <p
            className="mb-4 font-mono text-[11px] font-medium uppercase text-gold-light"
            style={{ letterSpacing: "0.18em" }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="max-w-3xl font-[family-name:var(--font-display)] font-black"
          style={{
            fontSize: "clamp(32px, 4.4vw, 56px)",
            lineHeight: 1.02,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.65] text-white/75 md:text-[16.5px]">
          {subtitle}
        </p>
        {(primaryCtaLabel && primaryCtaHref) || (secondaryCtaLabel && secondaryCtaHref) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCtaLabel && primaryCtaHref ? (
              <Link
                href={primaryCtaHref}
                className="rounded-md bg-gold px-6 py-3 text-[13px] font-bold uppercase text-white transition hover:bg-gold-dark"
                style={{ letterSpacing: "0.12em" }}
              >
                {primaryCtaLabel}
              </Link>
            ) : null}
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Link
                href={secondaryCtaHref}
                className="rounded-md border border-white/35 px-6 py-3 text-[13px] font-bold uppercase text-white transition hover:bg-white/10"
                style={{ letterSpacing: "0.12em" }}
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
