import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Owen Plumbing & Drain wordmark.
 *
 * Per brand guide §01: stacked lockup with EST. 1976 framing the copper
 * water-drop, the heavy slab "OWEN" wordmark, and the "— PLUMBING & DRAIN —"
 * dashed sub-rule. Two surface variants:
 *   tone="dark"  — for use on Tide / dark photo backgrounds (white text)
 *   tone="light" — for use on Paper / Mist surfaces (Tide text)
 */
type LogoProps = {
  size?: "sm" | "md" | "lg";
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({ size = "md", tone = "dark", className }: LogoProps) {
  const isLight = tone === "light";
  const word = size === "lg" ? 32 : size === "md" ? 22 : 18;
  const drop = size === "lg" ? 18 : size === "md" ? 13 : 11;
  const sub = size === "lg" ? 9 : size === "md" ? 7.5 : 7;
  const est = size === "lg" ? 9 : size === "md" ? 7.5 : 7;
  const dash = size === "lg" ? 18 : size === "md" ? 12 : 10;

  const wordColor = isLight ? "text-navy" : "text-white";
  const subColor = isLight ? "text-navy" : "text-white";
  const dropColor = isLight ? "text-gold" : "text-gold-light";
  const dashBg = isLight ? "bg-gold" : "bg-gold-light";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 flex-col items-center leading-none",
        className,
      )}
      aria-label={`${BUSINESS.name} — Established ${BUSINESS.founded}`}
    >
      {/* EST. (drop) 1976 */}
      <span
        className={cn(
          "flex items-center justify-center gap-[10px] font-[family-name:var(--font-display)] font-bold uppercase",
          isLight ? "text-navy" : "text-white",
        )}
        style={{ fontSize: `${est}px`, letterSpacing: "0.22em" }}
      >
        <span>EST.</span>
        <svg
          width={drop}
          height={drop * 1.4}
          viewBox="0 0 24 34"
          fill="currentColor"
          aria-hidden="true"
          className={dropColor}
        >
          <path d="M12 0C12 0 0 14 0 22a12 12 0 0 0 24 0C24 14 12 0 12 0Z" />
        </svg>
        <span>1976</span>
      </span>

      {/* OWEN */}
      <span
        className={cn(
          "mt-[3px] font-[family-name:var(--font-display)] font-black",
          wordColor,
        )}
        style={{ fontSize: `${word}px`, letterSpacing: "0.01em", lineHeight: 0.95 }}
      >
        OWEN
      </span>

      {/* — PLUMBING & DRAIN — */}
      <span
        className={cn(
          "mt-[5px] flex items-center justify-center gap-[8px] font-bold uppercase",
          subColor,
        )}
        style={{ fontSize: `${sub}px`, letterSpacing: "0.26em" }}
      >
        <span aria-hidden="true" className={cn("h-[1.5px]", dashBg)} style={{ width: `${dash}px` }} />
        <span>Plumbing &amp; Drain</span>
        <span aria-hidden="true" className={cn("h-[1.5px]", dashBg)} style={{ width: `${dash}px` }} />
      </span>
    </span>
  );
}
