import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <SectionHeader
          kicker="Contact"
          title={contact.headline}
          desc={contact.desc}
        />

        <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
          <div className="text-sm text-neutral-600">Business Development</div>

          <div className="mt-2 text-lg font-semibold text-neutral-900">
            {contact.email}
          </div>

          <div className="mt-4 text-sm leading-6 text-neutral-600">
            We respond to qualified inquiries related to licensing, integration,
            co-development, and strategic collaboration.
          </div>
        </div>
      </Container>
    </main>
  );
}