import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data/services";

interface ServicesGridSectionProps {
  heading: string;
  description: string;
  items: Service[];
  eyebrow?: string;
}

/**
 * Lightweight services grid — used on the /services page and any
 * place the dark Services panel block is too heavy.
 */
export function ServicesGridSection({
  heading,
  description,
  items,
  eyebrow = "Services",
}: ServicesGridSectionProps) {
  return (
    <section className="bg-paper py-24 max-[768px]:py-16">
      <div className="container-1140">
        <div className="mb-14 max-w-3xl max-[768px]:mb-10">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </p>
          <h2
            className="font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(30px, 3.6vw, 46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.012em",
            }}
          >
            {heading}
          </h2>
          <p className="mt-5 max-w-[640px] text-[15.5px] leading-[1.75] text-slate">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-lg border border-warm-gray bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-gold/40 hover:shadow-md"
            >
              <h3
                className="mb-3 font-[family-name:var(--font-display)] font-black text-navy"
                style={{ fontSize: "22px", lineHeight: 1.15 }}
              >
                {service.title}
              </h3>
              <p className="mb-5 text-[14.5px] leading-[1.65] text-slate">
                {service.description}
              </p>
              {service.features?.length ? (
                <ul className="mb-6 space-y-2 text-[13px] text-ink/80">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-gold"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                href="/contact"
                className="group/cta mt-auto inline-flex items-center gap-[6px] text-[13px] font-bold uppercase text-gold-dark transition-colors hover:text-navy"
                style={{ letterSpacing: "0.1em" }}
              >
                Get a price
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-[3px]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
