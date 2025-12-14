import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import { collaborationModes } from "@/lib/content";

export default function Strategy() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionHeader
          kicker="Strategy"
          title="Capital-light, asset-centric, partnership-first"
          desc="We prioritize ownership of upstream assets and operate through partners rather than fixed manufacturing or retail commercialization."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {collaborationModes.map((m) => (
            <Card key={m.title} title={m.title} desc={m.desc} />
          ))}
        </div>

        <div className="mt-10">
          <CTA
            title="Looking to integrate or license differentiated upstream assets?"
            desc="We can share additional materials under NDA for qualified strategic discussions."
            href="/contact"
            label="Contact BD"
          />
        </div>
      </Container>
    </main>
  );
}