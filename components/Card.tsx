export default function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl bg-white/70 p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5 backdrop-blur-sm transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-sm font-semibold tracking-tight text-neutral-950">
            {title}
          </div>
          {desc ? (
            <div className="mt-2 text-sm leading-6 text-neutral-600">
              {desc}
            </div>
          ) : null}
        </div>

        <div className="h-10 w-10 rounded-xl bg-neutral-950/5 ring-1 ring-black/5" />
      </div>

      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}