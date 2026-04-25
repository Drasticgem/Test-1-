import Image from "next/image";
import { Calendar, Phone, ShieldCheck, Droplet } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * Owen Plumbing & Drain — homepage hero.
 *
 * Light, two-column composition (per mockup):
 *   - LEFT  : eyebrow, slab-serif headline (navy + copper), body, CTA pair, trust card
 *   - RIGHT : full-bleed yard-sign photo on desktop; stacks above text on mobile
 *
 * Surfaces stay on Mist/Paper. Tide is reserved for type/structure, Copper
 * for the primary CTA + headline accent.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-mist"
    >
      {/* Hero image — desktop: absolutely pinned to the right ~58% of the
          viewport so it bleeds to the edge. Mobile: rendered as a normal
          block above the text via the fallback below. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
      >
        <Image
          src="/images/owen-sign.png"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        {/* Soft mist fade along the left edge so the headline reads cleanly. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-mist) 0%, rgba(242,245,248,0.85) 10%, rgba(242,245,248,0.0) 28%)",
          }}
        />
      </div>

      <div className="container-1140 relative">
        {/* Mobile-only image — sits above the text block; on desktop the
            absolute image above takes over and this is hidden. */}
        <div className="relative -mx-[clamp(20px,4vw,40px)] aspect-[4/3] w-[calc(100%+clamp(40px,8vw,80px))] overflow-hidden lg:hidden">
          <Image
            src="/images/owen-sign.png"
            alt="Owen Plumbing & Drain yard sign in front of a Coastal Bend home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative z-10 flex flex-col py-12 sm:py-16 lg:col-span-7 lg:py-24 xl:col-span-6 xl:py-28">
            <p
              className="mb-6 text-[11px] font-semibold uppercase text-navy/65"
              style={{ letterSpacing: "0.22em" }}
            >
              Family-owned <Dot /> Est. {BUSINESS.founded} <Dot /> {BUSINESS.license}
            </p>

            <h1
              className="font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(40px, 6.2vw, 76px)",
                lineHeight: 0.98,
                letterSpacing: "-0.012em",
              }}
            >
              Honest work.
              <br />
              <span className="text-gold">Clean solutions.</span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-slate sm:text-[17px]">
              Plumbing and drain service across Corpus Christi and the Coastal
              Bend since 1976. Same-day appointments, written prices, and real
              techs on call when it can&rsquo;t wait.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[480px]:flex-col">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-[14px] text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(194,104,42,0.28)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark max-[480px]:w-full"
              >
                <Calendar className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                Get a Free Estimate
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-navy/15 bg-white px-7 py-[14px] text-[15px] font-semibold text-navy shadow-sm transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-navy/35 max-[480px]:w-full"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>

            <ul
              className="mt-10 inline-flex flex-wrap items-center gap-x-7 gap-y-3 self-start rounded-2xl bg-white/90 px-5 py-4 shadow-[0_2px_10px_rgba(10,47,79,0.06)] ring-1 ring-navy/5 backdrop-blur-sm max-[480px]:w-full"
              aria-label="Credentials"
            >
              <TrustItem icon={<ShieldCheck className="h-4 w-4" strokeWidth={2} />}>
                Master Lic. M8552
              </TrustItem>
              <TrustItem icon={<Droplet className="h-4 w-4" strokeWidth={2} />}>
                Est. 1976
              </TrustItem>
              <TrustItem icon={<Hours24Glyph className="h-4 w-4" />}>
                24/7 Emergency
              </TrustItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span aria-hidden="true" className="mx-2 text-gold">
      &middot;
    </span>
  );
}

function TrustItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="inline-flex items-center gap-2 text-[13px] font-medium text-navy/85">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-navy/10 bg-white text-navy">
        {icon}
      </span>
      {children}
    </li>
  );
}

/** "24" inside a circular arrow — matches the mockup's 24/7 glyph. */
function Hours24Glyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-3.5-7.1" />
      <polyline points="21 4 21 9 16 9" />
    </svg>
  );
}
