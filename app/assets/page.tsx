import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import { assetDomains } from "@/lib/content";

export default function Assets() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <SectionHeader
          kicker="Asset Portfolio"
          title="Method-level assets designed for partnership"
          desc="We focus on ownership, control, and deployability of systems across chemical and biological signal domains."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {assetDomains.map((a) => (
            <Card
              key={a.title}
              title={a.title}
              desc={a.desc}
              bullets={a.bullets}
            />
          ))}
        </div>

        <div className="mt-10">
          <CTA
            title="Prefer licensing or integration over direct commercialization"
            desc="Onestep Holdings does not prioritize direct product retail. We engage through licensing, co-development, and strategic collaboration."
            href="/strategy"
            label="View collaboration modes"
          />
        </div>
      </Container>
    </main>
  );
}