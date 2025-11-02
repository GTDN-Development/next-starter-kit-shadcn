import { Button } from "@/components/ui/button";
import { Hero, HeroContent, HeroTitle, HeroDescription, HeroActions } from "@/components/ui/hero";
import { HomeIcon } from "lucide-react";
import { Link } from "@/components/ui/link";

export default function NotFound() {
  return (
    <Hero>
      <HeroContent className="text-center">
        <div className="text-primary font-medium">404</div>
        <HeroTitle>Page not found</HeroTitle>
        <HeroDescription>
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or
          you entered the wrong URL.
        </HeroDescription>
        <HeroActions>
          <Button asChild size="lg">
            <Link href="/">
              <HomeIcon aria-hidden="true" />
              Go to Home page
            </Link>
          </Button>
        </HeroActions>
      </HeroContent>
    </Hero>
  );
}
