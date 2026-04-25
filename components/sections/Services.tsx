import Image from "next/image";
import { DIVISIONS, type Division } from "@/lib/data/divisions";
import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight } from "lucide-react";

/**
 * Services section — header ("Plumbing done right.") followed by four
 * full-bleed photo panels (one per division). Photos read naturally
 * (warm, realistic) under a very soft Paper-tinted wash, and the copy
 * lives in a soft white glass card so it stays legible without darkening
 * the scene.
 */
export function Services() {
  return (
    <section id="services" aria-label="Our services">
      {/* ── Header ── */}
      <div className="bg-paper pt-24 pb-16 max-[768px]:pt-16 max-[768px]:pb-12">
        <div className="container-1140">
          <Reveal>
            <div className="flex items-end justify-between gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
              <div>
                <p
                  className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
                  style={{ letterSpacing: "0.18em" }}
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                  What we do
                </p>
                <h2
                  className="font-[family-name:var(--font-display)] font-black text-navy"
                  style={{
                    fontSize: "clamp(28px, 3vw, 38px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.012em",
                  }}
                >
                  Plumbing done right.
                  <br />
                  Since 1976.
                </h2>
              </div>
              <a
                href="/services"
                className="group inline-flex shrink-0 items-center gap-[6px] whitespace-nowrap rounded-md border border-navy/15 bg-white px-5 py-3 text-[13px] font-bold uppercase text-navy shadow-sm transition-[background,border-color,transform] duration-200 hover:-translate-y-px hover:border-gold/60 hover:text-gold-dark"
                style={{ letterSpacing: "0.1em" }}
              >
                View all services
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Four stacked photo panels ── */}
      <div className="bg-paper">
        {DIVISIONS.map((division, i) => (
          <ServicePanel
            key={division.slug}
            division={division}
            index={i}
            priority={i === 0}
          />
        ))}
      </div>
    </section>
  );
}

/* ── A single panel: full-bleed photo with a paper wash bleeding in
   from the left (solid → clear) so content sits cleanly on the paper
   side while the photo reads through on the right. On narrow screens
   the wash flips to top-down so the photo still breathes below. ── */
function ServicePanel({
  division,
  index,
  priority,
}: {
  division: Division;
  index: number;
  priority: boolean;
}) {
  const accentHex = accentColorHex(division.accent);

  const ctaHref =
    division.slug === "emergency-service" ? "tel:+13613718163" : "/services";

  return (
    <article
      className={[
        "group relative isolate overflow-hidden bg-paper",
        "min-h-[640px] max-[1024px]:min-h-[760px] max-[480px]:min-h-[700px]",
        index > 0 ? "border-t border-warm-gray" : "",
      ].join(" ")}
    >
      {/* Full-bleed photo */}
      <Image
        src={division.heroImage}
        alt={`${division.name} — ${division.tagline}`}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
      />

      {/* Paper wash — desktop: horizontal (solid left → clear right) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 max-[1024px]:hidden"
        style={{
          background:
            "linear-gradient(90deg, var(--color-paper) 0%, var(--color-paper) 38%, rgba(251,251,249,0.92) 50%, rgba(251,251,249,0.55) 62%, rgba(251,251,249,0) 78%)",
        }}
      />

      {/* Paper wash — mobile/tablet: vertical (solid top → clear bottom) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden max-[1024px]:block"
        style={{
          background:
            "linear-gradient(180deg, var(--color-paper) 0%, var(--color-paper) 42%, rgba(251,251,249,0.9) 56%, rgba(251,251,249,0.45) 72%, rgba(251,251,249,0) 88%)",
        }}
      />

      {/* Content — left-aligned on the paper side */}
      <div className="relative z-[1] flex min-h-[inherit] items-center">
        <div className="container-1140 w-full py-20 max-[1024px]:py-16 max-[480px]:py-12">
          <Reveal mode="fade" className="block w-full max-w-[560px]">
            <p
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-md border border-navy/15 bg-paper/70 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-navy max-[480px]:mb-6"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {`0${index + 1} · ${division.tagline}`}
            </p>

            <h3
              className="font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(40px, 5.4vw, 72px)",
                lineHeight: 1.02,
                letterSpacing: "-0.018em",
              }}
            >
              {division.name}
            </h3>

            {/* Copper accent bar under the heading */}
            <div
              aria-hidden="true"
              className="mt-6 h-[3px] w-14 rounded-full bg-gold"
            />

            <p className="mt-6 text-[15.5px] leading-[1.7] text-slate max-[480px]:text-[14px]">
              {division.description}
            </p>

            <a
              href={ctaHref}
              className="mt-9 inline-flex items-center gap-[10px] rounded-md bg-gold px-6 py-4 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark max-[480px]:mt-7"
              style={{ color: "#ffffff" }}
            >
              {division.exploreLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            </a>

            <span aria-hidden="true" className="sr-only" data-accent={accentHex} />
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* ── Accent token → hex (Owen palette: Copper-led with neutral support) ── */
function accentColorHex(accent: Division["accent"]) {
  switch (accent) {
    case "gold":
      return "#C2682A"; // Copper — primary action
    case "ac-blue":
      return "#C5D2DC"; // soft Mist — cool, restrained
    case "tele-green":
      return "#E5A472"; // Copper soft — secondary action
    case "ck-terra":
      return "#DDD1BD"; // warm sand — heritage neutral
  }
}
