import Image from "next/image";
import { CREDENTIALS } from "@/lib/data/credentials";
import { STATS } from "@/lib/data/stats";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Why choose Owen — light Mist surface with a two-column layout: copy
 * and soft-filled credential pills on the left, a soft photo card with
 * the Owen tech on the right. Followed by the 4-cell stats bar on Paper.
 */
export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why choose Owen Plumbing & Drain"
      className="bg-mist"
    >
      <div className="container-1140 py-28 max-[768px]:py-20">
        <div className="grid items-center gap-16 md:grid-cols-[1fr_1fr] md:gap-20 max-[768px]:gap-12">
          <Reveal>
            <div className="max-w-[560px]">
              <p
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
                style={{ letterSpacing: "0.18em" }}
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                Why Owen
              </p>
              <h2
                className="mb-5 font-[family-name:var(--font-display)] font-black text-navy"
                style={{
                  fontSize: "clamp(30px, 3.8vw, 46px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.012em",
                }}
              >
                Licensed, insured,
                <br />
                and on time.
              </h2>
              <p className="mb-8 max-w-[520px] text-[15.5px] leading-[1.75] text-slate max-[480px]:text-[14.5px]">
                Three things that matter, in seven words. We diagnose first, write the
                price, and only run equipment with your sign-off — so the number on the
                invoice is the number we said in the driveway.
              </p>

              <Reveal stagger className="flex flex-col gap-3">
                {CREDENTIALS.map((c) => (
                  <WhyBadge
                    key={c.shortLabel}
                    value={c.value}
                    smallValue={c.smallValue}
                    title={c.title}
                    sub={c.sub}
                  />
                ))}
              </Reveal>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-warm-gray bg-mist shadow-[0_18px_48px_rgba(10,47,79,0.12)] max-[768px]:aspect-[4/3]">
              <Image
                src="/images/owen-technician.png"
                alt="Owen Plumbing & Drain technician working under a kitchen sink"
                fill
                sizes="(min-width: 768px) 540px, 100vw"
                className="object-cover object-center"
              />
              {/* Light caption strip — quiet, not loud */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent p-6">
                <p
                  className="font-mono text-[10.5px] uppercase text-navy/70"
                  style={{ letterSpacing: "0.18em" }}
                >
                  On-site · Coastal Bend
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats bar — Paper surface, navy values with a copper accent number */}
      <div className="border-t border-warm-gray bg-paper">
        <Reveal>
          <div className="container-1140">
            <div
              className={[
                "grid grid-cols-4 max-[768px]:grid-cols-2",
                "[&>*]:border-r [&>*]:border-warm-gray",
                "[&>*:last-child]:border-r-0",
                "max-[768px]:[&>*:nth-child(2)]:border-r-0",
                "max-[768px]:[&>*:nth-child(-n+2)]:border-b max-[768px]:[&>*:nth-child(-n+2)]:border-warm-gray",
              ].join(" ")}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="px-6 py-10 text-center transition-colors duration-200 hover:bg-mist max-[480px]:px-3 max-[480px]:py-7"
                >
                  <div className="font-[family-name:var(--font-display)] text-[34px] font-bold leading-none text-gold max-[480px]:text-[26px]">
                    {stat.number}
                  </div>
                  <div
                    className="mt-2 font-mono text-[10.5px] font-medium uppercase text-navy/60 max-[480px]:text-[9.5px]"
                    style={{ letterSpacing: "0.16em" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyBadge({
  value,
  smallValue = false,
  title,
  sub,
}: {
  value: string;
  smallValue?: boolean;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-warm-gray bg-white px-5 py-[18px] shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[2px] hover:border-gold/40 hover:shadow-md">
      <div
        className={`grid min-w-[68px] shrink-0 place-items-center rounded-md bg-gold/10 px-3 py-2 font-[family-name:var(--font-display)] font-bold leading-none text-gold-dark ${
          smallValue ? "text-[16px] leading-[1.2]" : "text-[22px]"
        }`}
      >
        {value.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div>
        <div className="mb-[2px] text-[14.5px] font-bold text-navy">{title}</div>
        <div className="text-[12.5px] text-slate">{sub}</div>
      </div>
    </div>
  );
}
