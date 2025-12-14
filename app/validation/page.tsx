import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const validationNotes = [
  "Validation is presented at the method/system level (not retail product claims).",
  "Selected figures: sensitivity curves, stability profiling, and specificity checks.",
  "Full evidence package is available under NDA for qualified partners.",
];

export default function Validation() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <SectionHeader
          kicker="Validation"
          title="Selected asset validation"
          desc="These materials illustrate method-level validation (sensitivity, stability, specificity) to support partnership discussions."
        />

        <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-neutral-800">Notes</div>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {validationNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-neutral-50 p-5 text-sm text-neutral-600">
            <div className="font-medium text-neutral-800">How to use this page</div>
            <p className="mt-2 leading-6">
              Put 2–3 clean figures here (e.g., sensitivity curve, stability
              profile, co-localization). Keep captions minimal. Offer the full
              package under NDA.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}