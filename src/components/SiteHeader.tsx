import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { business, nav } from "../lib/site";
import { Logo } from "./brand/Logo";
import { IconClose, IconMenu, IconPhone } from "./brand/Icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-[0.78rem] sm:px-8">
          <p className="min-w-0">
            Automatic tuition across {business.towns[0]} &amp; {business.towns[1]}
          </p>
          <p className="flex shrink-0 items-center gap-4">
            <a className="hover:text-amber hover:underline" href={business.phoneHref}>
              {business.phone}
            </a>
            <a
              className="hidden hover:text-amber hover:underline sm:inline"
              href={business.emailHref}
            >
              {business.email}
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
          <Link to="/" aria-label={`${business.name} — home`} className="min-w-0">
            <Logo className="h-11 w-auto max-w-[15rem] sm:h-12" />
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={business.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong px-3 text-sm font-semibold lg:hidden"
            >
              <IconPhone className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Call</span>
            </a>
            <Link
              to="/contact"
              className="hidden min-h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep lg:inline-flex"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="primary-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-strong xl:hidden"
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        <nav
          aria-label="Primary"
          className="hidden border-t border-border xl:block"
          id="primary-navigation-desktop"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-1 px-5 sm:px-8">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-block border-b-2 border-transparent px-3 py-3 text-[0.9rem] font-medium text-ink-soft transition-colors hover:text-primary data-[status=active]:border-amber data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {open ? (
        <div
          id="primary-navigation"
          className="fixed inset-0 top-0 z-40 overflow-y-auto bg-background pt-[4.6rem] xl:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
            <ul className="divide-y divide-border border-y border-border">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="flex min-h-14 items-center text-lg font-medium data-[status=active]:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 font-semibold text-primary-foreground"
              >
                Enquire Now
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-5 font-semibold"
              >
                <IconPhone className="h-4 w-4" /> Call / text {business.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
