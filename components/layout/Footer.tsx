import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

/**
 * Footer — light, layered surface.
 *
 *   1. Paper "Let's talk" CTA band — copper CTA dominates.
 *   2. Mist details band — stacked logo + four-column grid on light.
 *   3. Slim Tide copyright strip — the only navy moment, anchoring
 *      the page.
 */
export function Footer() {
  return (
    <footer className="bg-paper text-navy">
      {/* 1. Let's talk — light Paper surface */}
      <div className="border-b border-warm-gray">
        <div className="container-1140 flex flex-col items-center py-24 text-center max-[768px]:py-16">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Get in touch
          </p>
          <h2
            className="mb-5 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.012em",
            }}
          >
            Let&rsquo;s talk.
          </h2>
          <p className="mb-9 max-w-[560px] text-[15.5px] leading-[1.75] text-slate">
            Honest work. Clean solutions. Plumbing in the Coastal Bend since 1976 — answer
            the phone, write the price, show up on time.
          </p>

          <a
            href={BUSINESS.phoneHref}
            className="copper-pulse inline-flex items-center gap-2 rounded-md bg-gold px-9 py-[15px] text-[13px] font-bold uppercase text-white shadow-[0_12px_32px_rgba(194,104,42,0.35)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
            style={{ letterSpacing: "0.12em" }}
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* 2. Footer details — light Mist surface, 4-up on desktop */}
      <div className="bg-mist">
        <div className="mx-auto grid w-full max-w-[1320px] gap-16 px-6 py-16 md:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:grid-cols-[1.15fr_1fr_1fr_0.9fr] lg:px-12 xl:gap-x-20">
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <Logo variant="stacked" tone="light" size="sm" className="mb-6" />
            <p className="max-w-[320px] text-[15px] leading-[1.75] text-slate md:max-w-none">
              Family-owned plumbing and drain service across {BUSINESS.areaServed[0]} and the
              Coastal Bend.
            </p>
            <p
              className="mt-5 font-mono text-[11px] uppercase text-navy/55"
              style={{ letterSpacing: "0.22em" }}
            >
              {BUSINESS.license} · Est. {BUSINESS.founded}
            </p>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase text-gold-dark"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Contact
            </p>
            <ul className="space-y-3 text-[14.5px] text-navy/85">
              <li className="flex items-center justify-center gap-3 rounded-md border border-warm-gray bg-white px-3 py-2.5 shadow-sm md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="font-bold text-navy hover:text-gold-dark">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 rounded-md border border-warm-gray bg-white px-3 py-2.5 shadow-sm md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-dark">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 rounded-md border border-warm-gray bg-white px-3 py-2.5 shadow-sm md:justify-start">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="pt-1 text-[12.5px] text-slate">
                Office hours: M–F · {BUSINESS.hours.weekdays}
                <br />
                <span className="text-gold-dark">Emergency line answered 24/7</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase text-gold-dark"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Service Area
            </p>
            <ul className="grid grid-cols-2 justify-center gap-x-6 gap-y-3 text-[15px] text-navy/85 md:justify-start">
              {BUSINESS.areaServed.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 font-mono text-[10.5px] font-semibold uppercase text-gold-dark"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Navigate
            </p>
            <ul className="space-y-3 text-[15px] text-navy/85">
              <li>
                <Link href="/" className="hover:text-gold-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-dark">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-dark">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Slim Tide copyright strip — the only navy moment */}
      <div className="bg-navy text-white/75">
        <div
          className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-3 px-6 py-5 text-[11.5px] md:flex-row md:px-12"
          style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <span className="font-mono uppercase text-white/60" style={{ letterSpacing: "0.18em" }}>
            Honest work · Clean solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
