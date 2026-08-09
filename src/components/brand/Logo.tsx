type LogoProps = {
  className?: string;
  /** Colour of the wordmark. The wheel mark keeps its brand colours. */
  tone?: "ink" | "light";
  title?: string;
};

/**
 * Behind The Wheel Driving School mark — a redraw of the school's existing
 * steering-wheel-and-speed-lines logo as scalable, transparent SVG so it sits
 * cleanly on both light and dark backgrounds.
 */
export function Logo({ className, tone = "ink", title = "Behind The Wheel Driving School" }: LogoProps) {
  const word = tone === "light" ? "var(--color-ink-foreground)" : "var(--color-ink)";
  const wheel = tone === "light" ? "var(--color-ink-foreground)" : "var(--color-ink)";

  return (
    <svg
      viewBox="0 0 320 74"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g transform="translate(0,4)">
        <circle cx="33" cy="33" r="30" fill={wheel} />
        <circle cx="33" cy="33" r="21" fill="none" stroke="var(--color-background)" strokeWidth="0" />
        <path
          d="M33 12a21 21 0 0 1 20.9 18.6H12.1A21 21 0 0 1 33 12Z"
          fill="var(--color-background)"
        />
        <path
          d="M12.4 35.6h15.2c1 0 1.8.8 1.7 1.8l-1.4 14.9A21 21 0 0 1 12.4 35.6Zm26 0h15.2a21 21 0 0 1-15.5 16.7l-1.4-14.9c-.1-1 .7-1.8 1.7-1.8Z"
          fill="var(--color-background)"
        />
      </g>
      <g>
        <rect x="72" y="20" width="34" height="3.4" rx="1.7" fill="var(--color-stop)" />
        <rect x="78" y="28" width="28" height="3.4" rx="1.7" fill="var(--color-amber)" />
        <rect x="84" y="36" width="22" height="3.4" rx="1.7" fill="var(--color-go)" />
      </g>
      <text
        x="116"
        y="32"
        fill={word}
        fontFamily="var(--font-family-display), Georgia, serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-0.4"
      >
        Behind The Wheel
      </text>
      <text
        x="117"
        y="52"
        fill={tone === "light" ? "var(--color-amber)" : "var(--color-primary)"}
        fontFamily="var(--font-family-sans), sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="4.2"
      >
        DRIVING SCHOOL
      </text>
    </svg>
  );
}

/** Compact wheel-only mark for tight spaces. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 66 66" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="33" cy="33" r="30" fill="var(--color-ink)" />
      <path d="M33 12a21 21 0 0 1 20.9 18.6H12.1A21 21 0 0 1 33 12Z" fill="var(--color-background)" />
      <path
        d="M12.4 35.6h15.2c1 0 1.8.8 1.7 1.8l-1.4 14.9A21 21 0 0 1 12.4 35.6Zm26 0h15.2a21 21 0 0 1-15.5 16.7l-1.4-14.9c-.1-1 .7-1.8 1.7-1.8Z"
        fill="var(--color-background)"
      />
    </svg>
  );
}
