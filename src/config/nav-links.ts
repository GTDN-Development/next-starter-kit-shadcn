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
  gdpr: {
    name: "Gdpr",
    href: "/gdpr",
  },
  about: {
    name: "About",
    href: "/about",
  },
  services: {
    name: "Services",
    items: [
      {
        name: "Web Development",
        href: "/services/web-development",
      },
      {
        name: "Mobile Apps",
        href: "/services/mobile-apps",
      },
      {
        name: "Consulting",
        href: "/services/consulting",
      },
      {
        name: "Support",
        href: "/services/support",
      },
    ],
  },
  products: {
    name: "Products",
    items: [
      {
        name: "SaaS Platform",
        href: "/products/saas-platform",
      },
      {
        name: "API Tools",
        href: "/products/api-tools",
      },
      {
        name: "Analytics",
        href: "/products/analytics",
      },
    ],
  },
  blog: {
    name: "Blog",
    href: "/blog",
  },
  contact: {
    name: "Contact",
    href: "/contact",
  },
} as const satisfies Record<string, NavigationItem>;

export const navLinksArray: NavigationItem[] = Object.values(navLinks);
