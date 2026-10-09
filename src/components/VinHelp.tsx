import { LOOKUP } from "../data/content";

/** One-line, always-visible hint shown under any VIN input. */
export function VinHint({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <p className={`mt-2 text-[14px] leading-[1.45] ${dark ? "text-paper/70" : "text-stone"} ${className}`}>
      {LOOKUP.vinHint}
    </p>
  );
}

/** Expanded "Where is the VIN?" details. */
export function VinLocations({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`mt-3 border-l-2 border-signal pl-4 ${dark ? "text-paper/80" : "text-inksoft"}`}>
      <ul className="space-y-2.5">
        {LOOKUP.vinLocations.map((l) => (
          <li key={l.title} className="text-[15px] leading-[1.45]">
            <span className="label block text-[11px] text-signal">{l.title}</span>
            {l.body}
          </li>
        ))}
      </ul>
      <p className="num mt-3 text-[12.5px] tracking-[0.12em]">
        <span className="label mr-2 text-[11px]">Example</span>
        {LOOKUP.vinExample}
      </p>
    </div>
  );
}
