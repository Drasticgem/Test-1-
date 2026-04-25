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
    <section className="bg-paper py-20 max-[768px]:py-14">
      <div className="container-1140">
        <div className="mb-12 max-w-3xl max-[768px]:mb-8">
          <p
            className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            {eyebrow}
          </p>
          <h2
            className="font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            {heading}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-slate">{description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-md border border-warm-gray bg-paper p-7 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[2px] hover:border-gold/40 hover:shadow-md"
            >
              <h3
                className="mb-2 font-[family-name:var(--font-display)] font-black text-navy"
                style={{ fontSize: "22px", lineHeight: 1.15 }}
              >
                {service.title}
              </h3>
              <p className="mb-4 text-[14.5px] leading-[1.6] text-slate">
                {service.description}
              </p>
              {service.features?.length ? (
                <ul className="mb-5 space-y-1.5 text-[13px] text-ink/80">
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
                className="group mt-auto inline-flex items-center gap-[6px] text-[13px] font-bold uppercase text-gold transition-colors hover:text-gold-dark"
                style={{ letterSpacing: "0.12em" }}
              >
                Get a price
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
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
