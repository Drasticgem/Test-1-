import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

/**
 * Footer — vertical "brand moment" stack.
 *
 *   Let's talk.   →   Copper CTA   →   Stacked OWEN lockup   →   Contact details
 *
 * On mobile every block is centered and stacked. On desktop the layout
 * stays vertical for the hero stack (so the brand reads loud) and then
 * splits into navigation columns underneath.
 */
export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-1140 flex flex-col items-center py-20 text-center max-[768px]:py-16">
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
        <p className="mb-8 max-w-[420px] text-[14.5px] leading-[1.65] text-white/65">
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

        {/* 3. Brand logo — stacked with tagline */}
        <Logo
          variant="stacked"
          tone="dark"
          size="lg"
          className="mb-6 max-[480px]:scale-[0.78] max-[768px]:scale-90"
        />

        <p
          className="font-mono text-[11px] uppercase text-white/45"
          style={{ letterSpacing: "0.22em" }}
        >
          Family-owned since {BUSINESS.founded} · {BUSINESS.license}
        </p>
      </div>

      {/* 4. Footer details — stacked on mobile, 3-up on desktop */}
      <div className="border-t border-white/10">
        <div className="container-1140 grid gap-12 py-14 md:grid-cols-3 md:gap-10 max-[768px]:py-10">
          <div className="text-center md:text-left">
            <p
              className="mb-4 font-mono text-[10.5px] font-medium uppercase text-gold-light"
              style={{ letterSpacing: "0.22em" }}
            >
              Contact
            </p>
            <ul className="space-y-3 text-[14.5px] text-white/75">
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="font-bold text-white hover:text-gold-light">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-light">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-3 md:justify-start">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="text-[12.5px] text-white/55">
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
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[14px] text-white/75 md:justify-start">
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
            <ul className="space-y-2.5 text-[14px] text-white/75">
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
        <div className="container-1140 flex flex-col items-center justify-between gap-2 py-6 text-[11.5px] text-white/45 md:flex-row">
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
