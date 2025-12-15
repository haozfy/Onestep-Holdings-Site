// app/platforms/page.tsx
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { externalPlatforms } from "@/lib/content";
import Link from "next/link";

export default function PlatformsPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <SectionHeader
          kicker="Platforms"
          title="Operational software platforms"
          desc="Software systems that operationalize, validate, and scale our upstream signal assets."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {externalPlatforms.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-neutral-200/70 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {p.tagline}
                  </p>
                </div>

                <Link
                  href={p.href}
                  target="_blank"
                  className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
                >
                  Visit
                </Link>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-neutral-900/60" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}