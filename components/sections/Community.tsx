import { COMMUNITY } from "@/lib/data/community";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Heritage / community panel — quiet Paper surface with soft Mist cards.
 */
export function Community() {
  return (
    <section
      id="heritage"
      className="relative bg-paper py-28 max-[768px]:py-20"
    >
      {/* Subtle top wash for layering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-mist to-transparent"
      />
      <div className="container-1140 relative">
        <Reveal>
          <p
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase text-gold-dark"
            style={{ letterSpacing: "0.18em" }}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
            Heritage &amp; Community
          </p>
          <h2
            className="mb-5 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              lineHeight: 1.04,
              letterSpacing: "-0.012em",
            }}
          >
            Local plumbing, the long way.
          </h2>
          <p className="mb-12 max-w-[600px] text-[15.5px] leading-[1.75] text-slate">
            Same family, same community, same handshake. We answer the phone in Corpus
            Christi — and we&rsquo;ve been answering it since 1976.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1 max-[768px]:gap-4"
        >
          {COMMUNITY.map((card) => (
            <div
              key={card.title}
              className="group rounded-lg border border-warm-gray bg-white p-8 shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-gold/40 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-md bg-gold/10 px-3 py-1 font-[family-name:var(--font-display)] text-[34px] font-black leading-none text-gold-dark">
                {card.number}
              </div>
              <div className="mb-2 text-[15.5px] font-bold text-navy">{card.title}</div>
              <p className="text-[13.5px] leading-[1.7] text-slate">{card.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
