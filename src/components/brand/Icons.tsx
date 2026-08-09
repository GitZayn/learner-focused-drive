import type { SVGProps } from "react";

/**
 * A small, consistent set of hand-drawn line icons.
 * One family, one stroke weight, used only where it aids comprehension.
 */
function Base({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  </Base>
);

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.8 7 7.1 5.3a2 2 0 0 0 2.2 0L20.2 7" />
  </Base>
);

export const IconWheel = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M4 10.5h5m6 0h5M12 15v5.5" />
  </Base>
);

export const IconRoute = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 18h5a3.5 3.5 0 0 0 0-7h-3a3.5 3.5 0 0 1 0-7h4" />
  </Base>
);

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 21s6.5-5.6 6.5-10.4A6.5 6.5 0 0 0 5.5 10.6C5.5 15.4 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.4" />
  </Base>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Base>
);

export const IconBook = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.5H4Z" />
    <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15a1.6 1.6 0 0 1 1.6-1.5H20Z" />
  </Base>
);

export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 3.2 5 6v6c0 4.2 3 7.3 7 8.8 4-1.5 7-4.6 7-8.8V6Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Base>
);

export const IconChat = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M20 12.5A7.5 7.5 0 0 1 12.5 20H5a1 1 0 0 1-.8-1.6l1.1-1.5A7.5 7.5 0 1 1 20 12.5Z" />
    <path d="M9 11.5h6M9 14.5h3.5" />
  </Base>
);

export const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M9.5 8.2v7.6a.8.8 0 0 0 1.2.7l6-3.8a.8.8 0 0 0 0-1.4l-6-3.8a.8.8 0 0 0-1.2.7Z" />
  </Base>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Base>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Base>
);

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const IconFacebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8Z" />
  </svg>
);

export const IconYouTube = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M21.6 7.3a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.5a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.7 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.7ZM10.2 14.9V9.1l5 2.9Z" />
  </svg>
);
