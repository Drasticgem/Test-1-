import Image from "next/image";
import { CREDENTIALS } from "@/lib/data/credentials";
import { STATS } from "@/lib/data/stats";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Why choose Owen — full-bleed photo of an Owen tech at work, paired with
 * trust badges from the credentials data. Followed by the 4-cell stats bar.
 */
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" aria-label="Why choose Owen Plumbing & Drain" className="bg-navy">
      <article
        className={[
          "group relative isolate overflow-hidden",
          "min-h-[620px] max-[1024px]:min-h-[580px] max-[768px]:min-h-[980px] max-[480px]:min-h-[940px]",
          "border-t border-white/5",
        ].join(" ")}
      >
        <Image
          src="/images/owen-technician.png"
          alt="Owen Plumbing & Drain technician working under a kitchen sink"
          fill
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/75 to-navy/25 max-[768px]:bg-[linear-gradient(to_bottom,rgba(6,30,51,0.95)_0%,rgba(10,47,79,0.65)_28%,rgba(10,47,79,0.55)_55%,rgba(6,30,51,0.85)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent"
        />

        <div className="relative z-[1] flex min-h-[inherit] items-center">
          <div className="container-1140 grid w-full grid-cols-2 items-center gap-16 py-20 max-[1024px]:gap-12 max-[768px]:grid-cols-1 max-[768px]:gap-12 max-[768px]:py-24 max-[480px]:py-20">
            <Reveal>
              <div className="max-w-[560px]">
                <p
                  className="mb-3 font-mono text-[11px] font-medium uppercase text-gold-light"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Why Owen
                </p>
                <h2
                  className="mb-5 font-[family-name:var(--font-display)] font-black text-white"
                  style={{
                    fontSize: "clamp(28px, 3.6vw, 44px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Licensed, insured,
                  <br />
                  and on time.
                </h2>
                <p className="text-[15.5px] leading-[1.7] text-white/75 max-[480px]:text-[14px]">
                  Three things that matter, in seven words. We diagnose first, write the
                  price, and only run equipment with your sign-off — so the number on the
                  invoice is the number we said in the driveway.
                </p>
              </div>
            </Reveal>

            <Reveal stagger className="flex flex-col gap-3 max-[768px]:gap-3">
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
        </div>
      </article>

      <Reveal>
        <div className="container-1140">
          <div
            className={[
              "grid grid-cols-4 max-[768px]:grid-cols-2",
              "[&>*]:border-r [&>*]:border-white/5",
              "[&>*:last-child]:border-r-0",
              "max-[768px]:[&>*:nth-child(2)]:border-r-0",
              "border-t border-white/5",
            ].join(" ")}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-8 text-center transition-colors duration-200 hover:bg-white/[0.015] max-[480px]:px-3 max-[480px]:py-5"
              >
                <div className="font-[family-name:var(--font-display)] text-[32px] font-bold leading-none text-gold max-[480px]:text-[24px]">
                  {stat.number}
                </div>
                <div
                  className="mt-[6px] font-mono text-[10px] font-medium uppercase text-white/45 max-[480px]:text-[9px]"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
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
    <div className="flex items-center gap-4 rounded-md border border-white/[0.08] bg-navy-deep/75 px-5 py-[18px] transition-colors duration-200 hover:bg-navy-deep/90">
      <div
        className={`min-w-[80px] shrink-0 font-[family-name:var(--font-display)] font-bold leading-none text-gold-light ${
          smallValue ? "text-[18px] leading-[1.2]" : "text-[26px]"
        }`}
      >
        {value.split("\n").map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div>
        <div className="mb-[2px] text-[14px] font-semibold text-white">{title}</div>
        <div className="text-[12.5px] text-white/55">{sub}</div>
      </div>
    </div>
  );
}
