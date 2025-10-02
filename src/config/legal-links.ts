import type { NavigationLink } from "./nav-links";

export const legalLinks = {
  gdpr: { name: "Privacy Policy", href: "/gdpr" },
} as const satisfies Record<string, NavigationLink>;

export const legalLinksArray: NavigationLink[] = Object.values(legalLinks);
