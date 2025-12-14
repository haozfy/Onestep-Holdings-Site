import Link from "next/link";
import Container from "./Container";
import { nav, brand } from "@/lib/content";

export default function Nav() {
  return (
    <div className="border-b border-neutral-200/60 bg-white/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold tracking-tight">
            {brand.name}
          </Link>
          <div className="hidden gap-6 text-sm text-neutral-700 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-neutral-950">
                {i.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Contact
          </Link>
        </div>
      </Container>
    </div>
  );
}