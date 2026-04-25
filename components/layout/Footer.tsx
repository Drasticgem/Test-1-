import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

/**
 * Footer — CTA lead-in with a four-column detail grid.
 *
 *   Let's talk.   →   Copper CTA   →   Desktop-spaced footer columns
 *
 * Mobile keeps the blocks centered and breathable with extra vertical
 * rhythm. Desktop increases horizontal spacing and aligns content to
 * the edges more naturally.
 */
export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-1140 flex flex-col items-center py-20 text-center max-[768px]:py-14">
        {/* 1. Let's talk */}
        <p
          className="mb-3 font-mono text-[11px] font-medium uppercase text-gold-light"
          style={{ letterSpacing: "0.22em" }}
        >
          Get in touch
        </p>
        <h2
          className="mb-4 font-[family-name:var(--font-display)] font-black text-white"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            lineHeight: 0.98,
            letterSpacing: "-0.01em",
          }}
        >
          Let&rsquo;s talk.
        </h2>
        <p className="mb-8 max-w-[560px] text-[15px] leading-[1.7] text-white/65">
          Honest work. Clean solutions. Plumbing in the Coastal Bend since 1976 — answer
          the phone, write the price, show up on time.
        </p>

        {/* 2. CTA */}
        <a
          href={BUSINESS.phoneHref}
          className="copper-pulse mb-16 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[13px] font-bold uppercase text-white shadow-[0_10px_30px_rgba(194,104,42,0.4)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
          style={{ letterSpacing: "0.16em" }}
        >
          <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          Call {BUSINESS.phoneDisplay}
        </a>
      </div>

      {/* 2. Footer details — stacked on mobile, 4-up on desktop */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-[1320px] gap-16 px-6 py-14 md:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:grid-cols-[1.15fr_1fr_1fr_0.9fr] lg:px-12 xl:gap-x-20">
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <Logo variant="stacked" tone="dark" size="sm" className="mb-6" />
            <p className="max-w-[320px] text-[15px] leading-[1.7] text-white/75 max-[768px]:text-white/80 md:max-w-none">
              Family-owned plumbing and drain service across {BUSINESS.areaServed[0]} and the
              Coastal Bend.
            </p>
            <p
              className="mt-5 font-mono text-[11px] uppercase text-white/55 max-[768px]:text-white/70"
              style={{ letterSpacing: "0.22em" }}
            >
              {BUSINESS.license} · Est. {BUSINESS.founded}
            </p>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 font-mono text-[10.5px] font-medium uppercase text-gold-light"
              style={{ letterSpacing: "0.22em" }}
            >
              Contact
            </p>
            <ul className="space-y-3.5 text-[14.5px] text-white/75">
              <li className="flex items-center justify-center gap-3 rounded-md bg-white/[0.03] px-3 py-2.5 md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="font-bold text-white hover:text-gold-light">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 rounded-md bg-white/[0.03] px-3 py-2.5 md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-light">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 rounded-md bg-white/[0.03] px-3 py-2.5 md:justify-start">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="pt-1 text-[12.5px] text-white/55">
                Office hours: M–F · {BUSINESS.hours.weekdays}
                <br />
                <span className="text-gold-light">Emergency line answered 24/7</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 font-mono text-[10.5px] font-medium uppercase text-gold-light"
              style={{ letterSpacing: "0.22em" }}
            >
              Service Area
            </p>
            <ul className="grid grid-cols-2 justify-center gap-x-6 gap-y-3 text-[15px] text-white/75 md:justify-start">
              {BUSINESS.areaServed.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p
              className="mb-4 font-mono text-[10.5px] font-medium uppercase text-gold-light"
              style={{ letterSpacing: "0.22em" }}
            >
              Navigate
            </p>
            <ul className="space-y-3 text-[15px] text-white/75">
              <li>
                <Link href="/" className="hover:text-gold-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-[11.5px] text-white/45 md:flex-row md:px-12"
          style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <span className="font-mono uppercase" style={{ letterSpacing: "0.18em" }}>
            Honest work · Clean solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
