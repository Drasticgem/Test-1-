import Image from "next/image";
import { Calendar, Phone, ShieldCheck, Droplet } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * Owen Plumbing & Drain — homepage hero.
 *
 * Anatomy (per mockup):
 *   - Full-bleed OwenHero photo (yard sign + van + house, warm daytime)
 *   - Soft Paper-tinted left wash so the headline reads on a clean surface
 *   - Eyebrow with copper bullet separators (Family-owned · Est. 1976 · License)
 *   - Slab-serif H1 — Tide on line 1, Copper on line 2
 *   - Primary Copper CTA (calendar) with halo pulse + secondary white tel CTA
 *   - Frosted-glass trust pill: Master Lic. · Est. 1976 · 24/7 Emergency
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-paper"
    >
      <Image
        src="/images/OwenHero.png"
        alt="Owen Plumbing & Drain yard sign at a Coastal Bend home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Black gradient overlay for strong text contrast on the hero image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.4) 40%,
              rgba(0,0,0,0.15) 100%)
          `,
        }}
      />

      <div className="container-1140 relative z-10 flex min-h-[calc(100vh-92px)] flex-col justify-center py-20 max-[768px]:min-h-[88vh] max-[768px]:py-16 max-[480px]:py-12">
        <p
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase text-white/90 max-[480px]:text-[10px]"
          style={{ letterSpacing: "0.2em", textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
        >
          <span>Family-owned</span>
          <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-gold" />
          <span>Est. {BUSINESS.founded}</span>
          <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-gold" />
          <span>{BUSINESS.license}</span>
        </p>

        <h1
          className="mb-7 font-[family-name:var(--font-display)] font-black"
          style={{
            fontSize: "clamp(40px, 6.4vw, 84px)",
            lineHeight: 0.98,
            letterSpacing: "-0.012em",
            textShadow: "0 2px 12px rgba(0,0,0,0.35)",
          }}
        >
          <span className="block text-white">Honest work.</span>
          <span className="block text-gold">Clean solutions.</span>
        </h1>

        <p
          className="mb-9 max-w-[460px] text-[16px] font-medium leading-[1.65] text-white/90 max-[480px]:text-[14.5px]"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
        >
          Plumbing and drain service across Corpus Christi and the Coastal Bend
          since 1976. Same-day appointments, written prices, and real techs on
          call when it can&rsquo;t wait.
        </p>

        <div className="mb-10 flex flex-wrap gap-3 max-[480px]:flex-col">
          <a
            href="#contact"
            className="copper-pulse inline-flex items-center justify-center gap-[10px] rounded-md bg-gold px-7 py-[15px] text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(194,104,42,0.35)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark max-[480px]:w-full"
            style={{ letterSpacing: "0.01em" }}
          >
            <Calendar className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
            Get a Free Estimate
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-[10px] rounded-md border border-navy/20 bg-white/85 px-7 py-[15px] text-[15px] font-semibold text-navy backdrop-blur-sm transition-[background,border-color,transform] duration-200 hover:-translate-y-px hover:border-navy/35 hover:bg-white max-[480px]:w-full"
            style={{ letterSpacing: "0.01em" }}
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div
          className="inline-flex w-fit items-center rounded-md border border-white/70 bg-white/65 px-2 py-[10px] shadow-[0_10px_30px_rgba(10,47,79,0.10)] backdrop-blur-md max-[640px]:w-full max-[640px]:max-w-[420px] max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-0 max-[640px]:p-1.5"
        >
          <TrustItem icon={<ShieldCheck className="h-[20px] w-[20px]" strokeWidth={1.75} aria-hidden="true" />}>
            Master Lic. M8552
          </TrustItem>
          <PillDivider />
          <TrustItem icon={<Droplet className="h-[20px] w-[20px]" strokeWidth={1.75} aria-hidden="true" />}>
            Est. {BUSINESS.founded}
          </TrustItem>
          <PillDivider />
          <TrustItem icon={<Cycle24Glyph />}>24/7 Emergency</TrustItem>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px] px-3 text-navy max-[640px]:w-full max-[640px]:justify-center max-[640px]:px-2 max-[640px]:py-2.5">
      <span className="grid h-7 w-7 place-items-center text-navy">{icon}</span>
      <span className="text-[13px] font-semibold tracking-[0.005em] text-navy">{children}</span>
    </div>
  );
}

function PillDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-1 h-6 w-px bg-navy/15 max-[640px]:mx-0 max-[640px]:h-px max-[640px]:w-full max-[640px]:bg-navy/10"
    />
  );
}

/* Circular-arrow glyph wrapping a small "24" — for the 24/7 Emergency trust slot. */
function Cycle24Glyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1" />
      <polyline points="20.5 3.5 20.5 8.5 15.5 8.5" />
      <text
        x="12"
        y="15.4"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        stroke="none"
        fill="currentColor"
        fontFamily="DM Sans, system-ui, sans-serif"
      >
        24
      </text>
    </svg>
  );
}
