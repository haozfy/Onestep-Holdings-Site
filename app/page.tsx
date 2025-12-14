// components/SectionHeader.tsx
export function SectionHeader(props: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  const { kicker, title, desc } = props;
  return (
    <div className="mb-8">
      {kicker ? (
        <div className="text-xs tracking-[0.18em] uppercase text-neutral-500">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-900">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-neutral-600 leading-relaxed max-w-3xl">{desc}</p>
      ) : null}
    </div>
  );
}