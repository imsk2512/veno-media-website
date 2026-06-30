import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="11" y1="17" x2="11" y2="10" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 20l1.3-4A7.5 7.5 0 1 1 8 18.7L4 20z" />
      <path
        d="M9.2 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.6l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.4 1.5.5.3.7.3.9.1l.5-.5c.2-.2.3-.2.6-.1l1.3.7c.3.1.4.3.4.5 0 .6-.4 1.2-1 1.4-.6.2-1.3.2-2.3-.2-1.6-.6-3-2-3.7-3.6-.4-.9-.4-1.7-.3-2.3z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}