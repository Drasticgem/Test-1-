import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { Community } from "@/components/sections/Community";
import { CTA } from "@/components/sections/CTA";
import { team } from "@/lib/data/team";
import { faqs } from "@/lib/data/faqs";
import { testimonials } from "@/lib/data/testimonials";
import { BUSINESS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow={`Family-owned · Est. ${BUSINESS.founded}`}
        title="Three generations on the same Coastal Bend ground."
        subtitle="What grandpa started in 1976 still gets done with the same standard — written prices, clean job sites, on-time arrivals."
      />

      {/* Story + photo */}
      <section className="bg-paper py-20 max-[768px]:py-14">
        <div className="container-1140 grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
          <div>
            <p
              className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
              style={{ letterSpacing: "0.18em" }}
            >
              Our story
            </p>
            <h2
              className="mb-5 font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Plumbing, the long way.
            </h2>
            <div className="space-y-4 text-[15.5px] leading-[1.7] text-slate">
              <p>
                Owen Plumbing &amp; Drain opened in 1976 on a single truck and a
                handshake. Fifty years later we&rsquo;re still answering the phone in
                Corpus Christi — same family, same community, same standard.
              </p>
              <p>
                We picked plumbing because it&rsquo;s steady work for people we know.
                Neighbors, restaurants, contractors, and the homes our kids grew up next
                to. That&rsquo;s why we run written estimates, clean job sites, and a real
                tech on call after hours — not because it&rsquo;s a slogan, but because
                it&rsquo;s how we want to be treated.
              </p>
              <p>
                Today the second and third generation share the truck keys. The license
                number on the door — Master Lic.{" "}
                <span className="font-mono text-navy">M8552</span> — is the same one
                that&rsquo;s been there since the start.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-warm-gray shadow-sm">
            <Image
              src="/images/owen-sign.png"
              alt="Owen Plumbing & Drain yard sign at dusk"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist py-20 max-[768px]:py-14">
        <div className="container-1140">
          <p
            className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            The crew
          </p>
          <h2
            className="mb-10 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Same faces, year after year.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-md border border-warm-gray bg-paper p-7"
              >
                <p
                  className="mb-1 font-mono text-[10.5px] uppercase text-gold"
                  style={{ letterSpacing: "0.16em" }}
                >
                  {member.role}
                </p>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-[20px] font-black text-navy">
                  {member.name}
                </h3>
                <p className="text-[14px] leading-[1.65] text-slate">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper py-20 max-[768px]:py-14">
        <div className="container-1140">
          <p
            className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            Neighbors say
          </p>
          <h2
            className="mb-10 max-w-3xl font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            What customers tell us afterwards.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-md border border-warm-gray bg-paper p-7"
              >
                <svg
                  className="mb-3 h-5 w-5 text-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4H7c0 2 .5 3.5 1.5 4.5L7 17c-2-1.5-3-3.5-3-6V7zm9 0h4v4h-4c0 2 .5 3.5 1.5 4.5L16 17c-2-1.5-3-3.5-3-6V7z" />
                </svg>
                <blockquote className="mb-4 text-[15.5px] leading-[1.65] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-[13px] text-slate">
                  <span className="font-bold text-navy">{t.name}</span> · {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20 max-[768px]:py-14">
        <div className="container-1140">
          <p
            className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            Common questions
          </p>
          <h2
            className="mb-10 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(24px, 2.6vw, 34px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Things people ask before they call.
          </h2>
          <dl className="divide-y divide-warm-gray rounded-md border border-warm-gray bg-paper">
            {faqs.map((f) => (
              <div key={f.question} className="px-6 py-6">
                <dt className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-bold text-navy">
                  {f.question}
                </dt>
                <dd className="text-[14.5px] leading-[1.65] text-slate">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTA />
      <Community />
    </>
  );
}
