import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Hero,
  HeroActions,
  HeroBackground,
  HeroBackgroundGrid,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";
import CubeSvg from "@/assets/svgs/cube.svg";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { FeaturesBlock } from "@/components/home-page/features-block";
import { NewsletterCta } from "@/components/newsletter/newsletter-cta";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: site.defaultTitle,
  description: site.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: site.url,
  },
  twitter: {
    title: site.defaultTitle,
    description: site.defaultDescription,
  },
};

export default function Page() {
  return (
    <div>
      <Hero>
        <HeroBackground>
          <HeroBackgroundGrid />
        </HeroBackground>
        <HeroContent>
          <CubeSvg className="mx-auto h-auto w-20 dark:invert" />
          <HeroTitle>{site.defaultTitle}</HeroTitle>
          <HeroDescription>{site.defaultDescription}</HeroDescription>
          <HeroActions>
            <Button size="lg">Learn more</Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                Shadcn ui docs
              </a>
            </Button>
          </HeroActions>
        </HeroContent>
      </Hero>

      <div className="space-y-12 pb-24 md:space-y-20">
        <Container asChild>
          <section>
            <FeaturesBlock />
          </section>
        </Container>

        <Container>
          <Separator />
        </Container>

        <Container asChild>
          <section>
            <NewsletterCta />
          </section>
        </Container>
      </div>
    </div>
  );
}
