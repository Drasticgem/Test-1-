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
      <section className="bg-paper py-24 max-[768px]:py-16">
        <div className="container-1140 grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-20">
          <div>
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
              style={{ letterSpacing: "0.18em" }}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Our story
            </p>
            <h2
              className="mb-6 font-[family-name:var(--font-display)] font-black text-navy"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                lineHeight: 1.04,
                letterSpacing: "-0.012em",
              }}
            >
              Plumbing, the long way.
            </h2>
            <div className="max-w-[560px] space-y-5 text-[15.5px] leading-[1.75] text-slate">
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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-warm-gray bg-mist shadow-[0_18px_48px_rgba(10,47,79,0.12)]">
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
      <section className="bg-mist py-24 max-[768px]:py-16">
        <div className="container-1140">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            The crew
          </p>
          <h2
            className="mb-12 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(26px, 2.8vw, 36px)",
              lineHeight: 1.08,
              letterSpacing: "-0.012em",
            }}
          >
            Same faces, year after year.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="group rounded-lg border border-warm-gray bg-white p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-gold/40 hover:shadow-md"
              >
                <p
                  className="mb-2 inline-flex items-center gap-2 rounded-full bg-gold/10 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase text-gold-dark"
                  style={{ letterSpacing: "0.16em" }}
                >
                  {member.role}
                </p>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-[20px] font-black text-navy">
                  {member.name}
                </h3>
                <p className="text-[14px] leading-[1.7] text-slate">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper py-24 max-[768px]:py-16">
        <div className="container-1140">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Neighbors say
          </p>
          <h2
            className="mb-12 max-w-3xl font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(26px, 2.8vw, 36px)",
              lineHeight: 1.08,
              letterSpacing: "-0.012em",
            }}
          >
            What customers tell us afterwards.
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-lg border border-warm-gray bg-white p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-gold/40 hover:shadow-md"
              >
                <svg
                  className="mb-4 h-5 w-5 text-gold"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 7h4v4H7c0 2 .5 3.5 1.5 4.5L7 17c-2-1.5-3-3.5-3-6V7zm9 0h4v4h-4c0 2 .5 3.5 1.5 4.5L16 17c-2-1.5-3-3.5-3-6V7z" />
                </svg>
                <blockquote className="mb-5 text-[15.5px] leading-[1.7] text-ink">
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
      <section className="bg-mist py-24 max-[768px]:py-16">
        <div className="container-1140">
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Common questions
          </p>
          <h2
            className="mb-12 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(26px, 2.8vw, 36px)",
              lineHeight: 1.08,
              letterSpacing: "-0.012em",
            }}
          >
            Things people ask before they call.
          </h2>
          <dl className="divide-y divide-warm-gray overflow-hidden rounded-lg border border-warm-gray bg-white shadow-sm">
            {faqs.map((f) => (
              <div key={f.question} className="px-7 py-7">
                <dt className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-bold text-navy">
                  {f.question}
                </dt>
                <dd className="text-[14.5px] leading-[1.7] text-slate">{f.answer}</dd>
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
