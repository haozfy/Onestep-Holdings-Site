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
      <div className="text-xs tracking-[0.18em] text-neutral-500">ASSET DOMAIN</div>
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
          <div className="text-xs tracking-[0.18em] text-neutral-500">
            OPERATING PLATFORM
          </div>
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
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs text-neutral-700">
              <span className="font-medium">Onestep Holdings Corp</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">Asset-driven holding company</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">
                Canadian-origin R&amp;D under North American IP &amp; regulatory frameworks
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              We own upstream signal assets{" "}
              <span className="text-neutral-500">
                structured for licensing and long-horizon integration.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">
              Onestep Holdings Corp consolidates method-level chemical and biological
              signal assets, together with operating platforms built for regulated
              and institutional environments. Our portfolio is designed in response
              to evolving regulatory and operational requirements across analytical workflows.
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
                k="ASSET CONTROL"
                v="Upstream ownership of composition- and method-level signal systems consolidated under a single holding entity."
              />
              <StatCard
                k="PATENT COVERAGE"
                v="U.S. patent coverage spanning composition and analytical method claims, with relevance to future workflow implementations."
              />
              <StatCard
                k="COLLABORATION MODEL"
                v="Licensing-first engagement with defined scopes, evidence packages, and integration pathways."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 md:py-20">
        <Container>
          <div>
            <div className="text-xs tracking-[0.22em] text-neutral-500">
              ASSET PORTFOLIO
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Core asset domains
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Asset domains are presented at the method and system level, designed
              for licensing and integration rather than direct retail commercialization.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PillarCard
              title="Environmental & Chemical Signal Systems"
              subtitle="Chemical analysis pathways designed for environmental monitoring and regulated workflows."
              bullets={[
                "Chromogenic signal systems for chlorine and related analytes",
                "U.S. patent coverage spanning composition and analytical method claims",
                "Alternative implementation pathways to legacy analytical workflows (including DPD-based approaches)",
                "Emphasis on stability, handling simplicity, and operational safety characteristics",
                "Suitable for integration into manual methods, analyzers, or instruments",
              ]}
            />
            <PillarCard
              title="Immunoassay & Chromogenic Signal Systems"
              subtitle="Signal architectures enabling stable and reproducible enzymatic readouts."
              bullets={[
                "TMB–HRP chromogenic signal generation frameworks",
                "Formulation approaches emphasizing shelf stability and consistency",
                "Validation materials available for qualified diligence discussions",
              ]}
            />
            <PillarCard
              title="Cellular & Imaging Signal Systems"
              subtitle="Methods translating cellular structures into interpretable optical signals."
              bullets={[
                "Nuclear staining and cellular visualization systems",
                "Designed for contrast, specificity, and biological compatibility",
                "Applicable to research and applied imaging workflows",
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
              Operating platforms
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Software platforms that reinforce asset control through compliance
              intelligence and quantitative signal validation.
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
              <div className="text-xs tracking-[0.22em] text-neutral-500">
                COLLABORATION
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Licensing. Integration. Strategic collaboration.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
                We engage with qualified partners on licensing, integration into
                instruments or workflows, and long-term strategic collaboration.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <div className="text-xs tracking-[0.18em] text-neutral-500">
                BUSINESS DEVELOPMENT
              </div>
              <div className="mt-3 text-lg font-semibold tracking-tight text-neutral-950">
                business@onestepholdings.com
              </div>
              <div className="mt-4 text-sm leading-6 text-neutral-600">
                Please include integration context, geography, and intended
                collaboration structure.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}