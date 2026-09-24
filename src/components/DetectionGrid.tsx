import type { UseCase } from "@/data/types";

export function DetectionGrid({ items, cats }: { items: UseCase[]; cats: string[] }) {
  let n = 0;
  const numbered = items.map((it) => ({ ...it, n: ++n }));
  return (
    <div className="space-y-10">
      {cats.map((cat) => {
        const group = numbered.filter((i) => i.cat === cat);
        if (group.length === 0) return null;
        return (
          <div key={cat}>
            <h3 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">
              {cat}
              <span className="h-px flex-1 bg-line" />
              <span className="text-xs font-semibold text-soft">{group.length}</span>
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {group.map((it) => (
                <li key={it.n} className="card px-4 py-3.5">
                  <span className="mb-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lilac text-[11px] font-bold text-accent">
                    {String(it.n).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-bold leading-snug text-ink">{it.label}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
