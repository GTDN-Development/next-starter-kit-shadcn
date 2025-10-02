import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps>;

export function Link(props: LinkProps) {
  return <NextLink {...props} />;
}
