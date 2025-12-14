import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { validationNotes } from "@/lib/content";

export default function Validation() {
  return (
    <main className="py-14 md:py-18">
      <Container>
        <SectionHeader
          kicker="Validation"
          title="Selected asset validation"
          desc="These materials illustrate method-level validation (sensitivity, stability, specificity) to support partnership discussions."
        />

        <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-neutral-800">Notes</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
            {validationNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-neutral-50 p-5 text-neutral-600">
            <div className="text-sm font-medium text-neutral-800">How to use this page</div>
            <p className="mt-2">
              Put 2–3 clean figures here (e.g., sensitivity curve, stability profile, co-localization).
              Keep captions minimal. Offer the full package under NDA.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}