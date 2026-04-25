import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";

/**
 * About — heritage block on a light Paper surface with a soft Mist
 * card behind the copy. Heritage stated once, navy headline, slate body,
 * single copper outline CTA.
 */
export function About() {
  return (
    <section id="about" className="relative bg-paper py-28 max-[768px]:py-20">
      {/* Subtle vertical wash so the section reads as its own layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-mist to-transparent"
      />
      <div className="container-1140 relative">
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <Reveal>
            <div className="max-w-[560px] max-[768px]:max-w-none">
              <p
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
                style={{ letterSpacing: "0.18em" }}
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                About Owen
              </p>
              <h2
                className="mb-6 font-[family-name:var(--font-display)] font-black text-navy"
                style={{
                  fontSize: "clamp(30px, 3.6vw, 46px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.012em",
                }}
              >
                Family-owned. <br />
                On the same Coastal Bend ground since 1976.
              </h2>
              <p className="mb-5 max-w-[520px] text-[15.5px] leading-[1.75] text-slate">
                Three generations of Owens have answered the phone, written the price, and
                shown up on time. We picked plumbing because it&rsquo;s steady work for
                people we know — neighbors, restaurants, contractors, and the homes our
                kids grew up next to.
              </p>
              <p className="mb-8 max-w-[520px] text-[15.5px] leading-[1.75] text-slate">
                We don&rsquo;t oversell. We don&rsquo;t talk in jargon. If we say
                we&rsquo;ll be there at two, we&rsquo;ll be there at two.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-[8px] rounded-md border border-navy/20 bg-white px-6 py-3 text-[13px] font-bold uppercase text-navy shadow-sm transition-[background,border-color,transform] duration-200 hover:-translate-y-px hover:border-gold/60 hover:text-gold-dark"
                style={{ letterSpacing: "0.12em" }}
              >
                Read our story
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-warm-gray bg-mist shadow-[0_18px_48px_rgba(10,47,79,0.12)] max-[768px]:aspect-[4/3]">
              <Image
                src="/images/owen-sign.png"
                alt={`${BUSINESS.name} yard sign in front of a Coastal Bend home`}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-center"
              />
              {/* Soft caption strip — light glass band, navy text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent p-6">
                <p
                  className="font-mono text-[10.5px] uppercase text-navy/70"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {BUSINESS.license} · est. {BUSINESS.founded}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
