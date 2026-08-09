import { Link } from "@tanstack/react-router";
import { business } from "../lib/site";
import { Logo } from "./brand/Logo";
import { IconFacebook, IconMail, IconPhone, IconYouTube } from "./brand/Icons";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Jason", to: "/about-jason" },
  { label: "Driving Lessons", to: "/driving-lessons" },
  { label: "Lesson Prices", to: "/lesson-prices" },
  { label: "Client-Centred Learning", to: "/client-centred-learning" },
  { label: "Semi-Intensive Courses", to: "/semi-intensive-courses" },
  { label: "Theory Test Support", to: "/theory-test-support" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "Driving Videos", to: "/driving-videos" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

const legal = [
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="lane-rule" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="light" className="h-12 w-auto max-w-[16rem]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/75">
              Automatic driving lessons with Jason, a fully qualified Approved Driving Instructor,
              across Stoke-on-Trent and Newcastle-under-Lyme. Client-centred tuition built on more
              than twenty years of classroom teaching.
            </p>
            <ul className="mt-6 flex gap-3">
              {business.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${business.shortName} on ${s.label}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 transition-colors hover:border-amber hover:text-amber"
                  >
                    {s.label === "Facebook" ? (
                      <IconFacebook className="h-4 w-4" />
                    ) : (
                      <IconYouTube className="h-5 w-5" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="rule-label text-amber">Quick links</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-foreground/80 hover:text-amber hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="rule-label text-amber">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={business.phoneHref} className="inline-flex items-center gap-2 hover:text-amber">
                  <IconPhone className="h-4 w-4" /> {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="inline-flex items-start gap-2 break-all hover:text-amber">
                  <IconMail className="mt-0.5 h-4 w-4 shrink-0" /> {business.email}
                </a>
              </li>
            </ul>

            <h2 className="rule-label mt-8 text-amber">Service areas</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80">
              Stoke-on-Trent &amp; Newcastle-under-Lyme — ST3, ST4, ST5, plus some parts of ST2 and
              ST11.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-ink-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-amber hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
