import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";
import { EstimateForm } from "@/components/forms/EstimateForm";

/**
 * Closing CTA — light Mist surface so the copper CTA and the white
 * estimate-form card become the dominant elements. Anchor target for
 * "#contact" links across the site.
 */
export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-mist py-28 max-[768px]:py-20"
    >
      {/* Soft top wash for subtle layering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"
      />
      <Reveal>
        <div className="container-1140 relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="max-[768px]:text-center">
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Start your job
            </p>
            <h2
              className="mb-6 font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(30px, 3.8vw, 50px)",
                lineHeight: 1.04,
                letterSpacing: "-0.012em",
              }}
            >
              Tell us what&rsquo;s leaking. We&rsquo;ll tell you the price.
            </h2>
            <p className="mb-8 max-w-[480px] text-[15.5px] leading-[1.75] text-slate max-[768px]:mx-auto">
              Send the details and we&rsquo;ll get back to you within one business day
              with a written estimate. Need it sooner? Pick up the phone — we answer
              24/7.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="copper-pulse inline-flex items-center gap-2 rounded-md bg-gold px-8 py-[15px] text-[14px] font-bold uppercase text-white shadow-[0_12px_32px_rgba(194,104,42,0.35)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
              style={{ letterSpacing: "0.1em" }}
            >
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
              Call {BUSINESS.phoneDisplay}
            </a>
            <p
              className="mt-6 font-mono text-[11px] uppercase text-navy/55 max-[768px]:mx-auto"
              style={{ letterSpacing: "0.16em" }}
            >
              {BUSINESS.license} · est. {BUSINESS.founded}
            </p>
          </div>

          <div>
            <EstimateForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
