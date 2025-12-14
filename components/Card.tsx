// components/Card.tsx
type CardProps = {
  title: string;
  desc: string;
  bullets?: string[];
};

export default function Card({ title, desc, bullets }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>

      {bullets?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/60" />
              <span className="leading-6">{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}