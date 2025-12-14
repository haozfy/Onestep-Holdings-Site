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

        {/* 外链：不会再出现“链接不到你网站” */}
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
                Licensing-grade signal systems & operating platforms
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              We own validated signal systems{" "}
              <span className="text-neutral-500">and the software to operationalize them.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">
              Onestep Holdings consolidates method-level chemical & biological signal IP with
              production-grade platforms. We operate as an IP owner designed for licensing,
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
                href="/#platforms"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
              >
                Explore Platforms
              </Link>

              <Link
                href="/#collaboration"
                className="inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                Speak with BD →
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StatCard
                k="VALIDATION POSTURE"
                v="Benchmark-ready artifacts, reproducibility packages, and stability profiling designed for diligence."
              />
              <StatCard
                k="LICENSING ORIENTATION"
                v="Clear scopes, evidence packages, and integration pathways into instruments and regulated workflows."
              />
              <StatCard
                k="PORTFOLIO SHAPE"
                v="Chemical + immunoassay + imaging signal systems, supported by operational software platforms."
              />
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
              Core asset domains
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              We present asset domains as method-level systems designed for licensing,
              integration, and strategic collaboration — not retail products.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PillarCard
              title="Environmental & Chemical Signal Systems"
              subtitle="Environment-facing chemical analysis pathways designed for real-world deployment and regulatory workflows."
              bullets={[
                "Water quality & chlorine analysis as an anchor measurement domain",
                "Alternative chromogenic pathways emphasizing stability and low background",
                "Designed for integration into manual workflows, analyzers, or instruments",
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
              Production-grade software platforms that strengthen our asset posture through
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
                We respond to qualified inquiries related to licensing, integration into
                instruments/workflows, and strategic partnership structures.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Licensing
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Joint commercialization
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
                Include: (1) integration context (instrument/workflow), (2) geography,
                (3) intended collaboration structure.
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