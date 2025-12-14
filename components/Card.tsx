export default function Card({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc?: string;
  bullets?: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold tracking-tight">{title}</div>
      {desc ? <p className="mt-2 text-neutral-600">{desc}</p> : null}
      {bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}