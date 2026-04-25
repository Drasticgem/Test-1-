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

  return (
    <article
      className={[
        "group relative isolate overflow-hidden",
        "min-h-[480px] max-[1024px]:min-h-[460px] max-[768px]:min-h-[600px] max-[480px]:min-h-[560px]",
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

      {/* Soft Paper-tinted wash on the left so the card sits on a clean
          surface without darkening the scene. Fades to transparent
          across the panel so the photo reads naturally on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/40 to-transparent max-[768px]:bg-gradient-to-b max-[768px]:from-paper/90 max-[768px]:via-paper/30 max-[768px]:to-transparent"
      />

      {/* Content — soft white glass card with navy text */}
      <div className="relative z-[1] flex min-h-[inherit] items-center">
        <div className="container-1140 flex w-full py-20 max-[768px]:py-16 max-[480px]:py-12">
          <Reveal>
            <div className="max-w-[520px] rounded-lg border border-warm-gray bg-white/85 p-8 shadow-[0_18px_48px_rgba(10,47,79,0.12)] backdrop-blur-md max-[480px]:p-6">
              <p
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase text-gold-dark"
                style={{ letterSpacing: "0.18em" }}
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                {`0${index + 1} · ${division.tagline}`}
              </p>

              <h3
                className="mb-4 font-[family-name:var(--font-display)] font-black text-navy"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 44px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                }}
              >
                {division.name}
              </h3>

              <p className="mb-7 text-[15px] leading-[1.7] text-slate max-[480px]:text-[14px]">
                {division.description}
              </p>

              <a
                href={division.slug === "emergency-service" ? "tel:+13613718163" : "/services"}
                className="group/cta inline-flex items-center gap-[8px] rounded-md bg-gold px-5 py-3 text-[12.5px] font-bold uppercase text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
                style={{ letterSpacing: "0.1em", color: "#ffffff" }}
              >
                {division.exploreLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              {/* hidden accent reference so the per-division accent stays
                  available as a future detail element (small underline, etc.) */}
              <span
                aria-hidden="true"
                className="sr-only"
                data-accent={accentHex}
              />
            </div>
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
