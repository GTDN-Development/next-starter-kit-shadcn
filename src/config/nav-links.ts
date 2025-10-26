import { legalLinksArray } from "./legal-links";

export type NavigationLink = {
  name: string;
  href: string;
};

export type NavigationDropdown = {
  name: string;
  items: NavigationLink[];
};

export type NavigationItem = NavigationLink | NavigationDropdown;

export const navLinks = {
  home: {
    name: "Home",
    href: "/",
  },
  legalLinks: {
    name: "Legal links",
    items: [...legalLinksArray],
  },
} as const satisfies Record<string, NavigationItem>;

export const navLinksArray: NavigationItem[] = Object.values(navLinks);
