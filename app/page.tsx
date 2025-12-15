// app/page.tsx
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { externalPlatforms } from "@/lib/content";

function StatCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="text-xs tracking-[0.18em] text-neutral-500">{k}</div>
      <div className="mt-2 text-sm leading-6 text-neutral-700">{v}</div>
    </div>
  );
}

function PillarCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="text-xs tracking-[0.18em] text-neutral-500">ASSET PILLAR</div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{subtitle}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-800">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/60" />
            <span className="leading-6">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatformCard({
  name,
  tagline,
  points,
  href,
}: {
  name: string;
  tagline: string;
  points: string[];
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs tracking-[0.18em] text-neutral-500">SOFTWARE PLATFORM</div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{tagline}</p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
        >
          Visit
        </a>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-neutral-800">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/60" />
            <span className="leading-6">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f8] text-neutral-950">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(0,0,0,0.06),transparent_55%),radial-gradient(900px_circle_at_90%_40%,rgba(0,0,0,0.04),transparent_55%)]" />
        <Container>
          <div className="relative py-16 md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs text-neutral-700">
              <span className="font-medium">Onestep Holdings</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">
                U.S. patent-backed signal systems for licensing & integration
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              We own a{" "}
              <span className="text-neutral-500">U.S. patent-backed chromogenic method</span>{" "}
              designed to replace DPD in chlorine detection.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">
              Our proprietary <span className="font-medium text-neutral-800">composition + method</span>{" "}
              deliver higher sensitivity, eliminate on-site reagent preparation, and remove
              toxic handling requirements — while remaining compatible with existing chlorine
              analysis workflows. Onestep Holdings operates as an IP owner built for licensing,
              integration, and long-horizon strategic partnerships.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Asset Portfolio
              </Link>

              <Link
                href="/#collaboration"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
              >
                Discuss licensing & integration
              </Link>

              <Link
                href="/#platforms"
                className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                See supporting platforms →
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StatCard
                k="U.S. PATENT COVERAGE"
                v="Composition + method claims structured for licensing, integration, and long-term deployment."
              />
              <StatCard
                k="DPD WORKFLOW UPGRADE"
                v="Designed as a DPD-alternative: higher sensitivity, ready-to-use handling, and non-toxic operation."
              />
              <StatCard
                k="VALIDATION POSTURE"
                v="Data-supported profiling (sensitivity, stability, workflow fit). Full packages shared under NDA."
              />
            </div>

            {/* Optional: subtle anchor line, keeps it “high-level” */}
            <div className="mt-10 max-w-3xl text-sm leading-6 text-neutral-600">
              We do not prioritize direct retail. We engage through licensing, integration into instruments/workflows,
              and strategic collaboration with qualified partners.
            </div>
          </div>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 md:py-20">
        <Container>
          <div>
            <div className="text-xs tracking-[0.22em] text-neutral-500">ASSET PORTFOLIO</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Patent-backed, method-level assets
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              We present assets as method-level systems designed for licensing, integration, and strategic
              collaboration — not retail products.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PillarCard
              title="DPD Replacement for Chlorine Detection"
              subtitle="U.S. patent-backed chromogenic system positioned as an upstream upgrade path for DPD-based workflows."
              bullets={[
                "Composition + method claims (licensing-friendly asset posture)",
                "Higher sensitivity profile across relevant chlorine ranges",
                "Ready-to-use workflow (no fresh reagent preparation)",
                "Non-toxic handling designed for safer deployment and transport",
                "Method-level compatibility with existing instruments and procedures",
              ]}
            />

            <PillarCard
              title="Immunoassay & Chromogenic Signal Systems"
              subtitle="Chromogenic signal architectures enabling sensitive, stable, reproducible enzymatic readouts."
              bullets={[
                "TMB–HRP chromogenic signal generation and background control",
                "Stability-centric formulation approach for consistency and shelf robustness",
                "Benchmark-ready validation (comparative curves & stability profiling)",
              ]}
            />

            <PillarCard
              title="Cellular & Imaging Signal Systems"
              subtitle="Reagents and methods translating cellular structure into interpretable optical signals."
              bullets={[
                "Nucleus staining systems with co-localization and specificity evidence",
                "Cytoskeletal visualization methods (actin-focused imaging workflows)",
                "Optimized for high contrast and biological compatibility",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="border-t border-black/10 bg-white py-16 md:py-20">
        <Container>
          <div>
            <div className="text-xs tracking-[0.22em] text-neutral-500">PLATFORMS</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Operating platforms that reinforce the portfolio
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Production-grade software platforms that strengthen our diligence posture through
              compliance intelligence and quantitative signal validation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {externalPlatforms.map((p) => (
              <PlatformCard
                key={p.name}
                name={p.name}
                tagline={p.tagline}
                points={p.points}
                href={p.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* COLLABORATION */}
      <section id="collaboration" className="border-t border-black/10 py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs tracking-[0.22em] text-neutral-500">COLLABORATION</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Licensing. Integration. Strategic collaboration.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
                We engage selectively with partners seeking licensing, integration into instruments/workflows,
                or co-development around upstream signal assets.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Licensing
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Instrument integration
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Co-development
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Strategic investment
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="text-xs tracking-[0.18em] text-neutral-500">BUSINESS DEVELOPMENT</div>
              <div className="mt-3 text-lg font-semibold tracking-tight text-neutral-950">
                business@onestepholdings.com
              </div>
              <div className="mt-4 text-sm leading-6 text-neutral-600">
                Include: (1) integration context (instrument/workflow), (2) geography, (3) intended collaboration structure.
                Additional materials can be shared under NDA for qualified discussions.
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Contact BD
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
                >
                  Review portfolio
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}