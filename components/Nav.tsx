// components/Nav.tsx
import Link from "next/link";
import Container from "./Container";
import { nav, brand } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/70 backdrop-blur-xl">
        <div className="border-b border-black/10">
          <Container>
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="inline-flex items-baseline gap-3">
                <span className="text-sm font-semibold tracking-tight text-neutral-950">
                  {brand.name}
                </span>
                <span className="hidden text-xs tracking-wide text-neutral-500 sm:inline">
                  {brand.tagline}
                </span>
              </Link>

              <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
                {nav.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="transition hover:text-neutral-950"
                  >
                    {i.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/#collaboration"
                className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Partnerships
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}