import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { CREDENTIALS } from "@/lib/data/credentials";

/**
 * Owen Plumbing & Drain — homepage hero.
 *
 * Anatomy:
 *   - Full-bleed photo of the Owen truck (per brand §05 imagery direction)
 *   - Tide vignette on the left so the headline sits on a dark surface
 *   - Eyebrow with brand context (locally owned · est. · license)
 *   - Slab-serif H1 with copper emphasis on the "Clean solutions." line
 *   - Primary copper CTA + secondary outline tel: CTA
 *   - Trust pills surfaced from CREDENTIALS
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[88vh] w-full overflow-hidden bg-navy"
    >
      <Image
        src="/images/owen-van.png"
        alt="Owen Plumbing & Drain service van parked at a Coastal Bend home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle film grain (per brand §05 — quiet warmth, not glossy CGI) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Tide gradient — readable headline on the left, photo breathes on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(90deg,
              rgba(6,30,51,0.92) 0%,
              rgba(10,47,79,0.78) 32%,
              rgba(10,47,79,0.40) 60%,
              rgba(10,47,79,0.10) 82%,
              rgba(10,47,79,0.00) 100%),
            linear-gradient(180deg,
              rgba(6,30,51,0.55) 0%,
              rgba(6,30,51,0.10) 30%,
              rgba(6,30,51,0.40) 75%,
              rgba(6,30,51,0.92) 100%)
          `,
        }}
      />

      <div className="container-1140 relative z-10 flex min-h-[88vh] flex-col justify-center py-20 max-[768px]:py-16 max-[480px]:py-12">
        <p
          className="mb-4 font-mono text-[11px] font-medium uppercase text-gold-light"
          style={{ letterSpacing: "0.18em" }}
        >
          Family-owned · Est. {BUSINESS.founded} · {BUSINESS.license}
        </p>

        <h1
          className="mb-6 font-[family-name:var(--font-display)] font-black text-white max-[480px]:text-[34px]"
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 0.98,
            letterSpacing: "-0.005em",
            textShadow: "0 2px 16px rgba(0,0,0,0.45)",
          }}
        >
          Honest work.
          <br />
          <em className="not-italic text-gold-light">Clean solutions.</em>
        </h1>

        <p
          className="mb-8 max-w-[540px] text-[16px] leading-[1.65] text-white/85 max-[480px]:text-[14px]"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          Plumbing and drain service across Corpus Christi and the Coastal Bend since
          1976. Same-day appointments, written prices, and a real tech on call when it
          can&rsquo;t wait.
        </p>

        <div className="mb-10 flex flex-wrap gap-3 max-[480px]:flex-col">
          <a
            href="#contact"
            className="copper-pulse rounded-md bg-gold px-7 py-[14px] text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(194,104,42,0.35)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark max-[480px]:w-full max-[480px]:text-center"
            style={{ letterSpacing: "0.06em" }}
          >
            Get a Free Estimate
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 bg-navy/40 px-7 py-[14px] text-[14px] font-bold text-white transition-[background,border-color,transform] duration-200 hover:-translate-y-px hover:border-gold-light hover:bg-navy/60 max-[480px]:w-full"
            style={{ letterSpacing: "0.04em" }}
          >
            <PhoneGlyph />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <ul className="flex flex-wrap gap-[10px] max-[480px]:gap-2">
          {CREDENTIALS.map((c) => (
            <li
              key={c.shortLabel}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-deep/85 px-[14px] py-[7px] text-[11px] font-semibold text-white"
              style={{ letterSpacing: "0.04em" }}
            >
              <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
              {c.shortLabel}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhoneGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
