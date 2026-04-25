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

/* ── A single full-bleed photo panel ── */
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
        "group relative isolate overflow-hidden",
        "min-h-[760px] max-[1024px]:min-h-[680px] max-[768px]:min-h-[760px] max-[480px]:min-h-[700px]",
        index > 0 ? "border-t border-warm-gray" : "",
      ].join(" ")}
    >
      {/* Background photo — left visible and natural */}
      <Image
        src={division.heroImage}
        alt={`${division.name} — ${division.tagline}`}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
      />

      {/* Black gradient overlay matching the hero — top-down for consistency */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(0,0,0,0.55) 0%,
              rgba(0,0,0,0.3) 40%,
              rgba(0,0,0,0.1) 100%)
          `,
        }}
      />

      {/* Layout — flex column stretches the full panel; the eyebrow pill
          pins to the top, and the white card / CTA pin to the bottom.
          Desktop (≥1024px) places the CTA bottom-right next to the card;
          mobile keeps the CTA inside the card under the description. */}
      <div className="relative z-[1] flex min-h-[inherit] flex-col">
        <div className="container-1140 flex w-full flex-1 flex-col justify-between gap-12 py-12 max-[1024px]:gap-10 max-[1024px]:py-10 max-[768px]:gap-16 max-[768px]:py-8 max-[480px]:gap-12 max-[480px]:py-6">
          {/* ── Top: glass eyebrow pill (top-left on desktop) ── */}
          <Reveal mode="fade">
            <p
              className="inline-flex w-fit items-center gap-2 rounded-md border border-white/25 bg-white/12 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-md"
              style={{ letterSpacing: "0.18em", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {`0${index + 1} · ${division.tagline}`}
            </p>
          </Reveal>

          {/* ── Bottom row: white card (left) + standalone CTA (right, ≥1024px) ── */}
          <div className="flex items-end justify-between gap-8 max-[1024px]:flex-col max-[1024px]:items-stretch max-[1024px]:gap-6">
            <Reveal mode="fade" className="w-full max-w-[620px] max-[1024px]:max-w-none">
              <div className="rounded-lg border border-warm-gray bg-white/85 p-10 shadow-[0_18px_48px_rgba(10,47,79,0.18)] backdrop-blur-md max-[1024px]:p-8 max-[480px]:p-6">
                <h3
                  className="mb-5 font-[family-name:var(--font-display)] font-black text-navy"
                  style={{
                    fontSize: "clamp(28px, 3.6vw, 44px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {division.name}
                </h3>

                <p className="text-[15px] leading-[1.7] text-slate max-[480px]:text-[14px]">
                  {division.description}
                </p>

                {/* Mobile / tablet CTA — kept inside the card so the
                    primary action stays in reach on small screens. */}
                <a
                  href={ctaHref}
                  className="mt-7 hidden items-center gap-[8px] rounded-md bg-gold px-5 py-3 text-[12.5px] font-bold uppercase text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark max-[1024px]:inline-flex"
                  style={{ letterSpacing: "0.1em", color: "#ffffff" }}
                >
                  {division.exploreLabel}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </a>
                <span aria-hidden="true" className="sr-only" data-accent={accentHex} />
              </div>
            </Reveal>

            {/* Desktop CTA — floats bottom-right, separate from the card */}
            <Reveal mode="fade" className="shrink-0 max-[1024px]:hidden">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-[8px] rounded-md bg-gold px-6 py-4 text-[13px] font-bold uppercase text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
                style={{ letterSpacing: "0.1em", color: "#ffffff" }}
              >
                {division.exploreLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
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
