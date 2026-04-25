import { cn } from "@/lib/utils";

/**
 * Owen Plumbing & Drain wordmarks — two approved primary lockups.
 *
 *   variant="horizontal"  — primary lockup 2 (per brand §01).
 *     [OWEN] | [PLUMBING / & DRAIN], with the EST. ◦ 1976 row
 *     centered below OWEN. Used in the top nav.
 *
 *   variant="stacked"     — primary stacked lockup with HONEST WORK.
 *     CLEAN SOLUTIONS. tagline below. Used in the footer hero block
 *     and any oversized brand moment.
 *
 * Both honor `tone="dark"` (for Tide / dark photo) and `tone="light"`
 * (for Paper / Mist surfaces).
 */
type Tone = "dark" | "light";

type LogoProps = {
  variant?: "horizontal" | "stacked";
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Show the "Honest work. Clean solutions." tagline (stacked variant only). */
  showTagline?: boolean;
};

export function Logo({
  variant = "horizontal",
  tone = "dark",
  size = "md",
  className,
  showTagline = true,
}: LogoProps) {
  if (variant === "stacked") {
    return <StackedLogo tone={tone} size={size} className={className} showTagline={showTagline} />;
  }
  return <HorizontalLogo tone={tone} size={size} className={className} />;
}

/* ─── Drop glyph (the brand's only approved profile mark) ─── */
function Drop({
  size,
  toneClass,
  className,
}: {
  size: number;
  toneClass: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 24 34"
      fill="currentColor"
      aria-hidden="true"
      className={cn(toneClass, className)}
    >
      <path d="M12 0C12 0 0 14 0 22a12 12 0 0 0 24 0C24 14 12 0 12 0Z" />
    </svg>
  );
}

/* ─── Horizontal lockup ─────────────────────────────────────── */
function HorizontalLogo({
  tone,
  size,
  className,
}: {
  tone: Tone;
  size: "sm" | "md" | "lg";
  className?: string;
}) {
  const isLight = tone === "light";

  // Carefully tuned so OWEN, the rule, and the right-hand stack share a
  // single optical baseline at every size.
  const word = size === "lg" ? 56 : size === "md" ? 38 : 28;
  const right = size === "lg" ? 13 : size === "md" ? 11 : 9;
  const est = size === "lg" ? 10 : size === "md" ? 8.5 : 7.5;
  const drop = size === "lg" ? 13 : size === "md" ? 10 : 8;
  const dash = size === "lg" ? 18 : size === "md" ? 14 : 11;
  const gap = size === "lg" ? 22 : size === "md" ? 16 : 12;
  const padY = size === "lg" ? 4 : size === "md" ? 2 : 2;

  const wordColor = isLight ? "text-navy" : "text-white";
  const subColor = isLight ? "text-navy" : "text-white";
  const accent = isLight ? "text-gold" : "text-gold-light";
  const ruleBg = isLight ? "bg-gold" : "bg-gold-light";

  return (
    <span
      className={cn("inline-flex items-stretch leading-none", className)}
      style={{ gap: `${gap}px` }}
      aria-label="Owen Plumbing & Drain"
    >
      {/* Left column — OWEN over EST. drop 1976 */}
      <span className="flex flex-col items-center" style={{ paddingBlock: `${padY}px` }}>
        <span
          className={cn(
            "font-[family-name:var(--font-display)] font-black",
            wordColor,
          )}
          style={{
            fontSize: `${word}px`,
            letterSpacing: "0.01em",
            lineHeight: 0.92,
          }}
        >
          OWEN
        </span>
        <span
          className={cn(
            "mt-[8px] flex items-center justify-center font-[family-name:var(--font-display)] font-bold uppercase",
            accent,
          )}
          style={{
            fontSize: `${est}px`,
            letterSpacing: "0.22em",
            gap: `${Math.max(6, dash * 0.5)}px`,
          }}
        >
          <span aria-hidden="true" className={cn("h-[1.5px]", ruleBg)} style={{ width: `${dash}px` }} />
          <span>EST.</span>
          <Drop size={drop} toneClass={accent} />
          <span>1976</span>
          <span aria-hidden="true" className={cn("h-[1.5px]", ruleBg)} style={{ width: `${dash}px` }} />
        </span>
      </span>

      {/* Vertical copper rule */}
      <span
        aria-hidden="true"
        className={cn("self-stretch", ruleBg)}
        style={{ width: "1.5px" }}
      />

      {/* Right column — PLUMBING / & DRAIN, stacked + centered */}
      <span
        className={cn(
          "flex flex-col justify-center font-[family-name:var(--font-body)] font-bold uppercase",
          subColor,
        )}
        style={{
          fontSize: `${right}px`,
          letterSpacing: "0.22em",
          lineHeight: 1.2,
          gap: "4px",
        }}
      >
        <span>Plumbing</span>
        <span>&amp; Drain</span>
      </span>
    </span>
  );
}

/* ─── Stacked lockup with tagline (footer) ──────────────────── */
function StackedLogo({
  tone,
  size,
  className,
  showTagline,
}: {
  tone: Tone;
  size: "sm" | "md" | "lg";
  className?: string;
  showTagline: boolean;
}) {
  const isLight = tone === "light";

  const word = size === "lg" ? 96 : size === "md" ? 68 : 48;
  const drop = size === "lg" ? 22 : size === "md" ? 16 : 12;
  const est = size === "lg" ? 12 : size === "md" ? 9.5 : 8;
  const sub = size === "lg" ? 12 : size === "md" ? 10 : 8.5;
  const dash = size === "lg" ? 28 : size === "md" ? 20 : 14;
  const tag = size === "lg" ? 12 : size === "md" ? 10 : 9;

  const wordColor = isLight ? "text-navy" : "text-white";
  const subColor = isLight ? "text-navy" : "text-white";
  const tagColor = isLight ? "text-slate" : "text-white/55";
  const accent = isLight ? "text-gold" : "text-gold-light";
  const ruleBg = isLight ? "bg-gold" : "bg-gold-light";

  return (
    <span
      className={cn(
        "inline-flex flex-col items-center leading-none",
        className,
      )}
      aria-label="Owen Plumbing & Drain — Honest work. Clean solutions."
    >
      {/* EST. drop 1976 */}
      <span
        className={cn(
          "flex items-center justify-center font-[family-name:var(--font-display)] font-bold uppercase",
          wordColor,
        )}
        style={{
          fontSize: `${est}px`,
          letterSpacing: "0.22em",
          gap: `${Math.max(8, dash * 0.6)}px`,
        }}
      >
        <span>EST.</span>
        <Drop size={drop} toneClass={accent} />
        <span>1976</span>
      </span>

      {/* OWEN */}
      <span
        className={cn(
          "mt-[10px] font-[family-name:var(--font-display)] font-black",
          wordColor,
        )}
        style={{ fontSize: `${word}px`, letterSpacing: "0.01em", lineHeight: 0.92 }}
      >
        OWEN
      </span>

      {/* — PLUMBING & DRAIN — */}
      <span
        className={cn(
          "mt-[10px] flex items-center justify-center font-bold uppercase",
          subColor,
        )}
        style={{
          fontSize: `${sub}px`,
          letterSpacing: "0.28em",
          gap: `${Math.max(8, dash * 0.5)}px`,
        }}
      >
        <span aria-hidden="true" className={cn("h-[1.5px]", ruleBg)} style={{ width: `${dash}px` }} />
        <span>Plumbing &amp; Drain</span>
        <span aria-hidden="true" className={cn("h-[1.5px]", ruleBg)} style={{ width: `${dash}px` }} />
      </span>

      {/* Honest work. Clean solutions. */}
      {showTagline && (
        <span
          className={cn("mt-[16px] font-medium uppercase", tagColor)}
          style={{ fontSize: `${tag}px`, letterSpacing: "0.32em" }}
        >
          Honest work. Clean solutions.
        </span>
      )}
    </span>
  );
}
