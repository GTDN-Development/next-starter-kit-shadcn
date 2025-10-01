import { GdprPolicyStatement } from "@/components/gdpr/gdpr-statement";
import { Container } from "@/components/ui/container";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/ui/hero";
import { legal } from "@/config/legal";

export default function Page() {
  return (
    <div>
      <Hero>
        <HeroContent>
          <HeroTitle>Ochrana osobních údajů (GDPR)</HeroTitle>
          <HeroDescription>
            Informace o zpracování osobních údajů v souladu s nařízením GDPR
          </HeroDescription>
        </HeroContent>
      </Hero>

      <Container size="prose" className="prose pb-24">
        <GdprPolicyStatement
          company={{
            name: legal.legalName,
            address: legal.address,
            id: legal.id,
            domain: legal.domain,
          }}
          contact={{
            email: legal.contact.email,
            phone: legal.contact.phone,
          }}
          effectiveDate="1. January 2025"
          locale="en"
        />
      </Container>
    </div>
  );
}
