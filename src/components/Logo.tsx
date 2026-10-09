import { useState } from"react";

/**
 * OFFICIAL LOGO SLOT.
 * Drop the supplied Detailed Sticker Sheet asset at:
 *   public/images/detailed-sticker-sheet-logo.png
 * It is rendered exactly as provided — scaled and placed only, on a white
 * plate (the logo artwork is dark-on-light). Until that file exists, a
 * typographic stand-in is shown so nothing renders as a broken image.
 */
const LOGO_SRC ="images/detailed-sticker-sheet-logo.png";

export function Logo({ className ="h-7 w-auto" }: { className?: string; invert?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-label="Detailed Sticker Sheet"
        className="flex items-baseline whitespace-nowrap leading-none text-[#17140f] sm:"
      >
        <span className="font-display tracking-[-0.045em]">Detailed</span>
        <span className="ml-1.5 font-voice font-medium italic tracking-[-0.01em]">
          Sticker Sheet
        </span>
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Detailed Sticker Sheet"
      className={className}
      width={340}
      height={72}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
