export default function SectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8">
      {kicker ? (
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-3xl text-neutral-600">{desc}</p> : null}
    </div>
  );
}