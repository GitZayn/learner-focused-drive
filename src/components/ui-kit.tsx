import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { IconArrow } from "./brand/Icons";

type Tone = "primary" | "go" | "outline" | "ghost" | "onDark";

const tones: Record<Tone, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-deep shadow-[0_1px_0_0_var(--color-primary-deep)]",
  go: "bg-go text-go-foreground hover:brightness-95",
  outline:
    "border border-border-strong bg-card text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:bg-muted",
  onDark:
    "border border-white/25 text-ink-foreground hover:bg-white/10 hover:border-white/50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[0.95rem] font-semibold tracking-tight transition-colors min-h-11";

export function ActionLink({
  to,
  href,
  tone = "primary",
  children,
  className = "",
  arrow = false,
}: {
  to?: string;
  href?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  const cls = `${base} ${tones[tone]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow ? <IconArrow className="h-4 w-4" /> : null}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="rule-label flex items-center gap-3 text-primary">
      <span className="signal-bars" aria-hidden="true">
        <span className="w-5 bg-stop" />
        <span className="w-4 bg-amber" />
        <span className="w-3 bg-go" />
      </span>
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "paper" | "ink";
  id?: string;
}) {
  const toneCls =
    tone === "ink"
      ? "bg-ink text-ink-foreground"
      : tone === "paper"
        ? "bg-paper"
        : "bg-background";
  return (
    <section id={id} className={`${toneCls} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">{children}</div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-primary hover:underline">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 pb-14 sm:px-8 md:pt-10 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-[2.1rem] leading-[1.08] sm:text-5xl md:text-[3.4rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-[1.05rem] leading-[1.75] text-ink-soft">{children}</div>
  );
}
