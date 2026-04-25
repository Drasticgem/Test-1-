import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Tell us what's leaking."
        subtitle="Send the details and we'll come back to you within one business day with a written estimate. Need it sooner? Pick up the phone — we answer 24/7."
      />

      <section className="bg-paper py-20 max-[768px]:py-14">
        <div className="container-1140 grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <p
              className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
              style={{ letterSpacing: "0.18em" }}
            >
              Send us a note
            </p>
            <h2
              className="mb-6 font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(24px, 2.6vw, 34px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Tell us about the job.
            </h2>
            <ContactForm sourcePage="/contact" />
          </div>

          <aside className="space-y-6">
            <div className="rounded-md border border-warm-gray bg-mist p-7">
              <p
                className="mb-3 font-mono text-[11px] font-medium uppercase text-gold"
                style={{ letterSpacing: "0.18em" }}
              >
                Or reach us directly
              </p>
              <ul className="space-y-4 text-[14.5px] text-ink">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                  <div>
                    <a
                      href={BUSINESS.phoneHref}
                      className="font-bold text-navy hover:text-gold-dark"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                    <div className="text-[12.5px] text-slate">
                      24/7 emergency line
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="font-bold text-navy hover:text-gold-dark"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                  <span className="text-slate">{BUSINESS.address.full}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} aria-hidden="true" />
                  <div className="text-slate">
                    M–F · {BUSINESS.hours.weekdays}
                    <div className="text-[12.5px]">
                      Weekends · emergency line answered 24/7
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-warm-gray bg-paper p-7">
              <p
                className="mb-3 font-mono text-[11px] font-medium uppercase text-gold"
                style={{ letterSpacing: "0.18em" }}
              >
                Service area
              </p>
              <div className="flex flex-wrap gap-2">
                {BUSINESS.areaServed.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-warm-gray bg-mist px-3 py-1.5 text-[12.5px] font-medium text-navy"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <p
              className="font-mono text-[11px] uppercase text-slate"
              style={{ letterSpacing: "0.16em" }}
            >
              {BUSINESS.license} · est. {BUSINESS.founded}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
