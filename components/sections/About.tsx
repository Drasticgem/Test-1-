import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Reveal } from "@/components/animations/Reveal";

/**
 * About — heritage block with the yard-sign image. Per brand §04 voice:
 * direct, warm, plain-spoken. Heritage stated once.
 */
export function About() {
  return (
    <section id="about" className="bg-navy py-24 max-[768px]:py-16">
      <div className="container-1140">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Reveal>
            <div className="max-w-[560px] max-[768px]:max-w-none">
              <p
                className="mb-3 font-mono text-[11px] font-medium uppercase text-gold-light"
                style={{ letterSpacing: "0.18em" }}
              >
                About Owen
              </p>
              <h2
                className="mb-5 font-[family-name:var(--font-display)] font-black text-white"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 44px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                }}
              >
                Family-owned. <br />
                On the same Coastal Bend ground since 1976.
              </h2>
              <p className="mb-5 text-[15.5px] leading-[1.7] text-white/70">
                Three generations of Owens have answered the phone, written the price, and
                shown up on time. We picked plumbing because it&rsquo;s steady work for
                people we know — neighbors, restaurants, contractors, and the homes our
                kids grew up next to.
              </p>
              <p className="mb-7 text-[15.5px] leading-[1.7] text-white/70">
                We don&rsquo;t oversell. We don&rsquo;t talk in jargon. If we say
                we&rsquo;ll be there at two, we&rsquo;ll be there at two.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-[8px] rounded-md border-[1.5px] border-gold/70 px-6 py-3 text-[13px] font-bold uppercase text-gold-light transition-[background,color,border-color] duration-200 hover:border-gold hover:bg-gold hover:text-white"
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
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-white/10 shadow-lg max-[768px]:aspect-[4/3]">
              <Image
                src="/images/owen-sign.png"
                alt={`${BUSINESS.name} yard sign in front of a Coastal Bend home`}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-center"
              />
              {/* Bottom caption strip — quiet brand mark, not loud */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6">
                <p
                  className="font-mono text-[10.5px] uppercase text-gold-light"
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
