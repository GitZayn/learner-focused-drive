import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { business } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="rule-label text-primary">Error 404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">This road doesn't go anywhere</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The page you're looking for has moved or never existed. Head back to the homepage, or get in
        touch with Jason and he'll point you the right way.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-deep"
        >
          Back to home
        </Link>
        <a
          href={business.phoneHref}
          className="inline-flex min-h-12 items-center rounded-md border border-border-strong px-5 font-semibold"
        >
          Call / text {business.phone}
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <h1 className="text-3xl">This page didn't load</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Something went wrong at our end. Try again, or call Jason on {business.phone}.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex min-h-12 items-center rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-deep"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex min-h-12 items-center rounded-md border border-border-strong px-5 font-semibold"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Behind The Wheel Driving School | Stoke-on-Trent" },
      {
        name: "description",
        content:
          "Automatic driving lessons in Stoke-on-Trent and Newcastle-under-Lyme with Jason, a fully qualified ADI.",
      },
      { name: "author", content: business.name },
      { property: "og:site_name", content: business.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#20305c" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Public+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DrivingSchool",
          name: business.name,
          description:
            "Automatic driving lessons in Stoke-on-Trent and Newcastle-under-Lyme with a fully qualified Approved Driving Instructor.",
          telephone: "+447761163520",
          email: business.email,
          areaServed: [
            { "@type": "City", name: "Stoke-on-Trent" },
            { "@type": "City", name: "Newcastle-under-Lyme" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Stoke-on-Trent",
            addressRegion: "Staffordshire",
            addressCountry: "GB",
          },
          openingHours: "Mo-Su 08:00-20:00",
          founder: {
            "@type": "Person",
            name: business.instructor,
            jobTitle: "Approved Driving Instructor (ADI)",
          },
          sameAs: business.social.map((s) => s.href),
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
