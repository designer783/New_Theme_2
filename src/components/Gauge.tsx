/**
 * Decorative instrument gauge for Design B. Ticks and a needle only —
 * no invented numbers. The needle runs a self-test sweep on load.
 */
const SWEEP_START = -134;
const SWEEP_END = 140;
const TICKS = 45;

const pt = (deg: number, r: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [Math.cos(rad) * r, Math.sin(rad) * r] as const;
};

const arcPath = (a0: number, a1: number, r: number) => {
  const [x0, y0] = pt(a0, r);
  const [x1, y1] = pt(a1, r);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

export function Gauge({ className ="" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(200,200)">
        <circle r="186" fill="rgba(22,26,33,0.55)" stroke="#2a313b" strokeWidth="1.5" />
        <circle r="160" fill="none" stroke="rgba(255,165,31,0.14)" strokeWidth="1" />
        <path
          d={arcPath(116, SWEEP_END, 176)}
          fill="none"
          stroke="#e8412a"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d={arcPath(SWEEP_START, SWEEP_END, 176)}
          fill="none"
          stroke="rgba(255,165,31,0.35)"
          strokeWidth="2"
        />
        {Array.from({ length: TICKS }, (_, i) => {
          const a = SWEEP_START + (i * (SWEEP_END - SWEEP_START)) / (TICKS - 1);
          const major = i % 5 === 0;
          return (
            <rect
              key={i}
              x={major ? -2.2 : -1.2}
              y={-174}
              width={major ? 4.4 : 2.4}
              height={major ? 17 : 9}
              transform={`rotate(${a.toFixed(2)})`}
              fill={a > 116 ?"#e8412a" : major ?"#ffa51f" :"rgba(255,165,31,0.5)"}
              opacity={major ? 1 : 0.7}
            />
          );
        })}
        <g className="needle">
          <path d="M0,-170 L-5.5,0 L5.5,0 Z" fill="#e8412a" />
          <path d="M0,-170 L-5.5,0 L0,0 Z" fill="#a92a18" />
        </g>
        <circle r="13" fill="#161a21" stroke="#ffa51f" strokeWidth="2" />
        <circle r="4" fill="#e8412a" />
      </g>
    </svg>
  );
}
