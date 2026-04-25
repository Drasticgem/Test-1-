import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-1140 grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1.1fr] md:gap-10">
        <div>
          <Logo size="md" tone="dark" className="items-start" />
          <p className="mt-5 max-w-[320px] text-[13.5px] leading-[1.65] text-white/55">
            Family-owned plumbing and drain service across Corpus Christi and the Coastal
            Bend. Honest work, written prices, and clean job sites since 1976.
          </p>
          <p
            className="mt-4 font-mono text-[10.5px] uppercase text-white/45"
            style={{ letterSpacing: "0.14em" }}
          >
            {BUSINESS.license} · est. {BUSINESS.founded}
          </p>
        </div>

        <div>
          <p
            className="mb-4 text-[10px] font-bold uppercase text-gold-light"
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

        <div>
          <p
            className="mb-4 text-[10px] font-bold uppercase text-gold-light"
            style={{ letterSpacing: "0.22em" }}
          >
            Service Area
          </p>
          <ul className="space-y-2 text-[14px] text-white/75">
            {BUSINESS.areaServed.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="mb-4 text-[10px] font-bold uppercase text-gold-light"
            style={{ letterSpacing: "0.22em" }}
          >
            Reach Us
          </p>
          <ul className="space-y-3 text-[14px] text-white/75">
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <a href={BUSINESS.phoneHref} className="hover:text-gold-light">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-light">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <span>{BUSINESS.address.full}</span>
            </li>
          </ul>
          <p className="mt-5 text-[12px] text-white/45">
            Office: M–F · {BUSINESS.hours.weekdays}
            <br />
            <span className="text-gold-light">Emergency line answered 24/7</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-1140 flex flex-col items-start justify-between gap-2 py-6 text-[12px] text-white/45 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <span
            className="font-mono uppercase"
            style={{ letterSpacing: "0.14em" }}
          >
            Honest work · Clean solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
