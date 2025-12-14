import inclination Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { operatingPlatforms } from "@/lib/content";

export default function Platforms() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionHeader
          kicker="Operating Platforms"
          title="Platforms that operationalize assets and decision systems"
          desc="Presented as internal capability carriers and selectively deployable platforms—not as the company’s identity."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {operatingPlatforms.map((p) => (
            <Card key={p.title} title={p.title} desc={p.desc} bullets={p.bullets} />
          ))}
        </div>
      </Container>
    </main>
  );
}