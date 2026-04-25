import { COMMUNITY } from "@/lib/data/community";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Heritage / community panel — quiet Mist surface.
 */
export function Community() {
  return (
    <section id="heritage" className="bg-mist py-24 max-[768px]:py-16">
      <div className="container-1140">
        <Reveal>
          <p
            className="mb-2 font-mono text-[11px] font-medium uppercase text-gold"
            style={{ letterSpacing: "0.18em" }}
          >
            Heritage &amp; Community
          </p>
          <h2
            className="mb-4 font-[family-name:var(--font-display)] font-black text-navy"
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Local plumbing, the long way.
          </h2>
          <p className="mb-10 max-w-[600px] text-[15.5px] leading-[1.7] text-slate">
            Same family, same community, same handshake. We answer the phone in Corpus
            Christi — and we&rsquo;ve been answering it since 1976.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-3 gap-5 max-[768px]:grid-cols-1 max-[768px]:gap-4"
        >
          {COMMUNITY.map((card) => (
            <div
              key={card.title}
              className="rounded-md border border-warm-gray bg-paper p-7 transition-[transform,box-shadow] duration-200 hover:-translate-y-[2px] hover:shadow-md"
            >
              <div className="mb-3 font-[family-name:var(--font-display)] text-[36px] font-black leading-none text-gold">
                {card.number}
              </div>
              <div className="mb-2 text-[15px] font-bold text-navy">{card.title}</div>
              <p className="text-[13.5px] leading-[1.65] text-slate">{card.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
