import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Container, containerVariants, type ContainerProps } from "./container";

function Hero({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"header"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "header";

  return (
    <Comp
      className={cn("bg-background text-foreground relative isolate overflow-hidden", className)}
      {...props}
    />
  );
}

function HeroBackground({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return <Comp className={cn("absolute inset-0 -z-10 size-full", className)} {...props} />;
}

export function HeroBackgroundGrid({
  gridSize = 100,
  className,
  ...props
}: Omit<React.ComponentProps<"svg">, "children"> & { gridSize?: number }) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]",
        "stroke-border",
        className
      )}
    >
      <defs>
        <pattern
          x="50%"
          y={-1}
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M.5 ${gridSize}V.5H${gridSize}`} fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="fill-primary/10 overflow-visible">
        <path
          d={`M-${gridSize} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${3 * gridSize} 0h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M-${2 * gridSize} ${3 * gridSize}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z M${gridSize} ${4 * gridSize}h${gridSize + 1}v${gridSize + 1}h-${gridSize + 1}Z`}
          strokeWidth={0}
        />
      </svg>
      <rect
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        width="100%"
        height="100%"
        strokeWidth={0}
      />
    </svg>
  );
}

function HeroContent({ size = "default", className, asChild = false, ...props }: ContainerProps) {
  const Comp = asChild ? Slot : Container;

  return (
    <Comp
      size={size}
      className={cn(containerVariants({ size }), "relative z-10 py-12 sm:py-20", className)}
      {...props}
    />
  );
}

function HeroTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h1"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "h1";

  return (
    <Comp
      className={cn(
        "text-foreground mt-3 text-center text-3xl/[110%] font-semibold tracking-tight text-pretty sm:text-4xl/[110%] sm:leading-none lg:text-5xl/[110%]",
        className
      )}
      {...props}
    />
  );
}

function HeroDescription({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        "text-muted-foreground mx-auto mt-4 max-w-prose text-center text-lg font-medium text-pretty",
        className
      )}
      {...props}
    />
  );
}

function HeroActions({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "mt-6 flex w-full flex-col items-center justify-end gap-3 *:w-full sm:flex-row sm:justify-center sm:*:w-auto",
        className
      )}
      {...props}
    />
  );
}

export { Hero, HeroBackground, HeroContent, HeroTitle, HeroDescription, HeroActions };
