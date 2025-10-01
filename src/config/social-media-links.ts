import type { NavigationLink } from "./nav-links";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
  SpotifyIcon,
} from "@/components/ui/icon-brand";

export type SocialMediaLink = NavigationLink & {
  icon: React.ComponentType<{ className?: string }>;
};

export const socialMediaLinks = {
  facebook: {
    name: "Facebook",
    href: "https://www.facebook.com/user-name/",
    icon: FacebookIcon,
  },
  instagram: {
    name: "Instagram",
    href: "https://www.instagram.com/user-name/",
    icon: InstagramIcon,
  },
  twitter: {
    name: "Twitter",
    href: "https://x.com/user-name",
    icon: TwitterXIcon,
  },
  youtube: {
    name: "YouTube",
    href: "https://www.youtube.com/@user-name",
    icon: YoutubeIcon,
  },
  spotify: {
    name: "Spotify",
    href: "https://open.spotify.com/user/user-name",
    icon: SpotifyIcon,
  },
  github: {
    name: "GitHub",
    href: "https://github.com/user-name",
    icon: GitHubIcon,
  },
} as const satisfies Record<string, SocialMediaLink>;

export const socialMediaLinksArray: SocialMediaLink[] = Object.values(socialMediaLinks);
