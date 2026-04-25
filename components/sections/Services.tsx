import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Homepage "What we do" section — sits directly under the hero.
 *
 * Light mist surface; heading + description on the left, three white
 * service cards on the right (Plumbing · Drain Cleaning · Water Heaters).
 * Cards are flat with a soft shadow per the mockup, not heavy panels.
 */
const SERVICE_CARDS = [
  {
    title: "Plumbing",
    description: "Repairs, installs, and upgrades done right.",
    href: "/services",
    icon: <FaucetIcon />,
  },
  {
    title: "Drain Cleaning",
    description: "Clear clogs and prevent future problems.",
    href: "/services",
    icon: <DrainIcon />,
  },
  {
    title: "Water Heaters",
    description: "Installation, repair, and replacement.",
    href: "/services",
    icon: <WaterHeaterIcon />,
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-mist py-20 max-[768px]:py-14"
    >
      <div className="container-1140">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p
              className="mb-3 inline-flex items-center gap-3 text-[11px] font-semibold uppercase text-gold"
              style={{ letterSpacing: "0.22em" }}
            >
              What we do
              <span aria-hidden="true" className="h-px w-10 bg-gold/60" />
            </p>
            <h2
              className="font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.012em",
              }}
            >
              Services built around
              <br className="hidden sm:block" />
              {" "}your home and business.
            </h2>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(10,47,79,0.06)] ring-1 ring-navy/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(10,47,79,0.10)]"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center text-navy">
                  {card.icon}
                </span>
                <h3
                  className="mb-2 font-[family-name:var(--font-display)] font-black text-navy"
                  style={{ fontSize: "20px", lineHeight: 1.2 }}
                >
                  {card.title}
                </h3>
                <p className="mb-5 text-[14.5px] leading-[1.6] text-slate">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="group mt-auto inline-flex items-center gap-[6px] text-[12.5px] font-bold uppercase text-gold transition-colors hover:text-gold-dark"
                  style={{ letterSpacing: "0.12em" }}
                  aria-label={`Learn more about ${card.title}`}
                >
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Inline icons matched to the mockup's simple navy line style. ── */

function FaucetIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 13h6" />
      <path d="M9 13v3a3 3 0 0 0 3 3h0" />
      <path d="M12 19v2" />
      <path d="M9 21h6" />
      <path d="M14 13h6a3 3 0 0 1 3 3v2" />
      <path d="M20 8v5" />
      <path d="M17 8h6" />
      <circle cx="23.5" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DrainIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="16" cy="16" rx="11" ry="5" />
      <path d="M8 14.5h16" />
      <path d="M8 17.5h16" />
    </svg>
  );
}

function WaterHeaterIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="6" width="16" height="22" rx="3" />
      <path d="M11 11h10" />
      <circle cx="16" cy="20" r="2" />
      <path d="M14 6V4" />
      <path d="M18 6V4" />
    </svg>
  );
}
