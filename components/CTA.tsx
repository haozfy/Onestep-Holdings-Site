import Link from "next/link";

export default function CTA({
  title,
  desc,
  href,
  label,
}: {
  title: string;
  desc: string;
  href: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-neutral-50 p-8">
      <div className="text-xl font-semibold tracking-tight">{title}</div>
      <p className="mt-2 max-w-3xl text-neutral-600">{desc}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}