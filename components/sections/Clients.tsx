import { CLIENTS } from "@/lib/data/clients";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Trusted-by client row. White surface, single soft-shadow row of
 * 5 cells on desktop, wraps to 2-column grid on tablet.
 */
export function Clients() {
  return (
    <section
      aria-label="Trusted by local homeowners and businesses"
      className="bg-white py-20 max-[768px]:py-14"
    >
      <Reveal>
        <div className="container-1140">
          <p
            className="mb-8 text-center font-mono text-[10.5px] font-semibold uppercase text-navy/55"
            style={{ letterSpacing: "0.2em" }}
          >
            Trusted by local homeowners and businesses
          </p>
          <div
            className={[
              "flex overflow-hidden rounded-lg border border-warm-gray bg-white shadow-sm",
              "max-[768px]:flex-wrap max-[768px]:rounded-lg",
            ].join(" ")}
          >
            {CLIENTS.map((name, i) => (
              <div
                key={name}
                className={[
                  "flex flex-1 items-center justify-center px-4 py-[20px]",
                  "border-r border-warm-gray last:border-r-0",
                  "text-center text-[13px] font-semibold text-navy/60",
                  "transition-colors duration-200 hover:bg-mist hover:text-navy",
                  "max-[768px]:flex-none max-[768px]:basis-1/2",
                  "max-[768px]:border-b max-[768px]:border-warm-gray",
                  "max-[768px]:px-2 max-[768px]:py-[16px]",
                  i % 2 === 1 ? "max-[768px]:!border-r-0" : "",
                ].join(" ")}
                style={{ letterSpacing: "0.02em" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
