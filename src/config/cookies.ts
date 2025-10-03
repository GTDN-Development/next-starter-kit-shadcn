import type { Cookie } from "@/components/cookies/cookie-policy";

export const cookies: Cookie[] = [
  // Essential Cookies
  {
    name: "CONSENT",
    provider: "Google",
    purpose: "Stores user's cookie consent preferences.",
    duration: "2 years",
    category: "essential",
    storageType: "cookie",
  },
  {
    name: "cookie_consent",
    provider: "Own",
    purpose: "Stores your cookie preferences.",
    duration: "1 year",
    category: "essential",
    storageType: "cookie",
  },
  {
    name: "PHPSESSID / JSESSIONID",
    provider: "Own",
    purpose: "Identifies user session on the server.",
    duration: "Session",
    category: "essential",
    storageType: "cookie",
  },

  // Google Analytics Cookies
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Used to distinguish users for statistical purposes.",
    duration: "2 years",
    category: "analytics",
    storageType: "cookie",
  },
  {
    name: "_ga_*",
    provider: "Google Analytics",
    purpose: "Used to persist session state for Google Analytics 4.",
    duration: "2 years",
    category: "analytics",
    storageType: "cookie",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Used to distinguish users.",
    duration: "24 hours",
    category: "analytics",
    storageType: "cookie",
  },
  {
    name: "_gat",
    provider: "Google Analytics",
    purpose: "Used to throttle request rate.",
    duration: "1 minute",
    category: "analytics",
    storageType: "cookie",
  },

  // localStorage Examples
  {
    name: "theme",
    provider: "next-themes",
    purpose: "Stores user's theme preference (system/light/dark mode).",
    duration: "Persistent",
    category: "functional",
    storageType: "localStorage",
  },
  {
    name: "language",
    provider: "Own",
    purpose: "Stores user's language preference.",
    duration: "Persistent",
    category: "functional",
    storageType: "localStorage",
  },

  // sessionStorage Examples
  {
    name: "formData",
    provider: "Own",
    purpose: "Temporarily stores form data during the session.",
    duration: "Session",
    category: "functional",
    storageType: "sessionStorage",
  },

  // Google Tag Manager
  // {
  //   name: "_gcl_au",
  //   provider: "Google Tag Manager",
  //   purpose: "Used by Google AdSense for experimenting with advertisement efficiency.",
  //   duration: "3 months",
  //   category: "marketing",
  // },
  // {
  //   name: "_gac_*",
  //   provider: "Google Ads",
  //   purpose: "Contains campaign-related information for the user.",
  //   duration: "90 days",
  //   category: "marketing",
  // },

  // Meta/Facebook Pixel
  // {
  //   name: "_fbp",
  //   provider: "Facebook",
  //   purpose: "Used to deliver targeted advertising and measure ad performance.",
  //   duration: "3 months",
  //   category: "marketing",
  // },
  // {
  //   name: "_fbc",
  //   provider: "Facebook",
  //   purpose: "Stores last visit from a Facebook ad.",
  //   duration: "2 years",
  //   category: "marketing",
  // },
  // {
  //   name: "fr",
  //   provider: "Facebook",
  //   purpose: "Used to display relevant advertisements.",
  //   duration: "3 months",
  //   category: "marketing",
  // },

  // YouTube Embeds
  // {
  //   name: "VISITOR_INFO1_LIVE",
  //   provider: "YouTube",
  //   purpose: "Tries to estimate users' bandwidth when playing videos.",
  //   duration: "6 months",
  //   category: "analytics",
  // },
  // {
  //   name: "YSC",
  //   provider: "YouTube",
  //   purpose: "Registers a unique ID to keep statistics of what videos have been watched.",
  //   duration: "Session",
  //   category: "analytics",
  // },
  // {
  //   name: "PREF",
  //   provider: "YouTube",
  //   purpose: "Stores YouTube player preferences.",
  //   duration: "8 months",
  //   category: "analytics",
  // },

  // Google Maps
  // {
  //   name: "NID",
  //   provider: "Google Maps",
  //   purpose: "Stores user preferences and other information for maps.",
  //   duration: "6 months",
  //   category: "analytics",
  // },
  // {
  //   name: "OGPC",
  //   provider: "Google Maps",
  //   purpose: "Stores information about whether you have already agreed to the terms of use.",
  //   duration: "2 months",
  //   category: "essential",
  // },

  // Google Ads / AdWords
  // {
  //   name: "IDE",
  //   provider: "Google DoubleClick",
  //   purpose: "Used for remarketing campaigns.",
  //   duration: "13 months",
  //   category: "marketing",
  // },
  // {
  //   name: "test_cookie",
  //   provider: "Google DoubleClick",
  //   purpose: "Tests whether the browser supports cookies.",
  //   duration: "15 minutes",
  //   category: "marketing",
  // },
  // {
  //   name: "_gcl_*",
  //   provider: "Google Ads",
  //   purpose: "Tracks conversions from Google Ads.",
  //   duration: "90 days",
  //   category: "marketing",
  // },
];
