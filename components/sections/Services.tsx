import Image from "next/image";
import { DIVISIONS, type Division } from "@/lib/data/divisions";
import { Reveal } from "@/components/animations/Reveal";
import { ArrowRight } from "lucide-react";

/**
 * Services section — header ("Plumbing done right.") followed by stacked
 * full-bleed photo panels (one per division).
 *
 *   Desktop (≥1024px): paper wash bleeds in from the far left so the
 *   copy sits on the paper side and the photo gets the right two-thirds
 *   of the panel. Content is anchored to the left edge of the viewport,
 *   not the centered 1140 rail.
 *
 *   Mobile / tablet (<1024px): legacy split layout — black hero gradient
 *   over the photo, glass eyebrow pill pinned to the top, white card
 *   (heading + description + CTA) pinned to the bottom.
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

      {/* ── Stacked photo panels ── */}
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
  const eyebrow = `0${index + 1} · ${division.tagline}`;

  return (
    <article
      className={[
        "group relative isolate overflow-hidden bg-paper",
        "min-h-[640px] max-[1024px]:min-h-[760px] max-[480px]:min-h-[700px]",
        index > 0 ? "border-t border-warm-gray" : "",
      ].join(" ")}
    >
      {/* Full-bleed photo. On desktop we bias the focal point to the right
          so the visible portion of the image lives on the right side. */}
      <Image
        src={division.heroImage}
        alt={`${division.name} — ${division.tagline}`}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03] lg:object-[80%_center]"
      />

      {/* Desktop wash — solid paper hugs the left edge, then fades into
          the photo. Stops are tightened so the white area is small and
          left-anchored. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 max-[1024px]:hidden"
        style={{
          background:
            "linear-gradient(90deg, var(--color-paper) 0%, var(--color-paper) 24%, rgba(251,251,249,0.92) 34%, rgba(251,251,249,0.5) 46%, rgba(251,251,249,0) 60%)",
        }}
      />

      {/* Mobile / tablet wash — the legacy hero-style black gradient so
          the glass eyebrow + white card read against the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden max-[1024px]:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* ── Desktop layout (≥1024px): copy left-anchored on the paper wash ── */}
      <div className="relative z-[1] hidden min-h-[inherit] items-center lg:flex">
        <div
          className="w-full py-20"
          style={{ paddingInlineStart: "clamp(32px, 5vw, 88px)", paddingInlineEnd: "32px" }}
        >
          <Reveal mode="fade" className="block w-full max-w-[480px]">
            <p
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-md border border-navy/15 bg-paper/70 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-navy"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </p>

            <h3
              className="font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(40px, 4.6vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.018em",
              }}
            >
              {division.name}
            </h3>

            <div
              aria-hidden="true"
              className="mt-6 h-[3px] w-14 rounded-full bg-gold"
            />

            <p className="mt-6 text-[15.5px] leading-[1.7] text-slate">
              {division.description}
            </p>

            <a
              href={ctaHref}
              className="mt-9 inline-flex items-center gap-[10px] rounded-md bg-gold px-6 py-4 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
              style={{ color: "#ffffff" }}
            >
              {division.exploreLabel}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            </a>

            <span aria-hidden="true" className="sr-only" data-accent={accentHex} />
          </Reveal>
        </div>
      </div>

      {/* ── Mobile / tablet layout (<1024px): glass eyebrow top, white card bottom ── */}
      <div className="relative z-[1] flex min-h-[inherit] flex-col lg:hidden">
        <div className="container-1140 flex w-full flex-1 flex-col justify-between gap-12 py-12 max-[768px]:gap-16 max-[768px]:py-10 max-[480px]:gap-12 max-[480px]:py-6">
          <Reveal mode="fade">
            <p
              className="inline-flex w-fit items-center gap-2 rounded-md border border-white/25 bg-white/12 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-md"
              style={{ letterSpacing: "0.18em", textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </p>
          </Reveal>

          <Reveal mode="fade" className="w-full">
            <div className="rounded-lg border border-warm-gray bg-white/85 p-8 shadow-[0_18px_48px_rgba(10,47,79,0.18)] backdrop-blur-md max-[480px]:p-6">
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

              <a
                href={ctaHref}
                className="mt-7 inline-flex items-center gap-[8px] rounded-md bg-gold px-5 py-3 text-[12.5px] font-bold uppercase text-white shadow-[0_8px_24px_rgba(194,104,42,0.32)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
                style={{ letterSpacing: "0.1em", color: "#ffffff" }}
              >
                {division.exploreLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>

              <span aria-hidden="true" className="sr-only" data-accent={accentHex} />
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
