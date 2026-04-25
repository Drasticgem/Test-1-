import { STATS } from "@/lib/data/stats";

/**
 * 4-column stats bar on Paper. <768px collapses to 2×2.
 * Navy values with a copper accent number, slate label.
 */
export function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="border-t border-warm-gray bg-paper"
    >
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
    </section>
  );
}
