export default function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-black/10">
      <div className="text-xs tracking-widest text-neutral-500">{label.toUpperCase()}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">{value}</div>
      {note ? <div className="mt-2 text-sm text-neutral-600">{note}</div> : null}
    </div>
  );
}