import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";
import { EstimateForm } from "@/components/forms/EstimateForm";

/**
 * Closing CTA — Tide band with copy + phone CTA on the left, estimate form
 * on the right. Anchor target for "#contact" links across the site.
 */
export function CTA() {
  return (
    <section id="contact" className="bg-navy py-24 max-[768px]:py-16">
      <Reveal>
        <div className="container-1140 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-[768px]:text-center">
            <p
              className="mb-3 font-mono text-[11px] font-medium uppercase text-gold-light"
              style={{ letterSpacing: "0.18em" }}
            >
              Start your job
            </p>
            <h2
              className="mb-5 font-[family-name:var(--font-display)] font-black text-white"
              style={{
                fontSize: "clamp(28px, 3.6vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Tell us what&rsquo;s leaking. We&rsquo;ll tell you the price.
            </h2>
            <p className="mb-7 max-w-[480px] text-[15.5px] leading-[1.65] text-white/70 max-[768px]:mx-auto">
              Send the details and we&rsquo;ll get back to you within one business day
              with a written estimate. Need it sooner? Pick up the phone — we answer
              24/7.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="copper-pulse inline-flex items-center gap-2 rounded-md bg-gold px-7 py-[14px] text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(194,104,42,0.35)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-gold-dark"
              style={{ letterSpacing: "0.06em" }}
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
              className="mt-5 font-mono text-[11px] uppercase text-white/45 max-[768px]:mx-auto"
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
