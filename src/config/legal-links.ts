import type { NavigationLink } from "./nav-links";

export const legalLinks = {
  cookiePolicy: { name: "Cookie Policy", href: "/cookie-policy" },
  gdpr: { name: "GDPR Compliance", href: "/gdpr" },
} as const satisfies Record<string, NavigationLink>;

export const legalLinksArray: NavigationLink[] = Object.values(legalLinks);
