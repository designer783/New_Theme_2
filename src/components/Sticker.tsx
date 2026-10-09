import { motion, useReducedMotion } from"framer-motion";
import { HERO } from"../data/content";

/**
 * The approved hero sticker asset. On load it PRINTS row by row under a red
 * printhead; on hover a corner of the sheet PEELS up off the backing.
 */
export function Sticker() {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 24, rotate: -3.4 }}
      animate={{ opacity: 1, y: 0, rotate: -1.4 }}
      transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="group relative mx-auto w-full max-w-[500px] select-none"
    >
      <div className="absolute -inset-3 -rotate-1 bg-stock shadow-[0_1px_0_rgba(23,20,15,0.18)] sm:-inset-4" />

      <div className="relative bg-white p-2 shadow-[0_18px_40px_-24px_rgba(23,20,15,0.55)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg] group-hover:shadow-[0_34px_60px_-28px_rgba(23,20,15,0.6)]">
        <div
          className="relative min-h-[420px] overflow-hidden bg-paper"
          style={{
            backgroundImage:"repeating-linear-gradient(to bottom, transparent 0 27px, rgba(23,20,15,0.13) 27px 28px)",
          }}
        >
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute left-0 z-20 h-[3px] w-full bg-signal"
              initial={{ top:"0%", opacity: 1 }}
              animate={{ top:"100%", opacity: 0 }}
              transition={{ duration: 1.35, ease:"linear", delay: 0.25 }}
            />
          )}
          <motion.img
            src={HERO.image}
            alt={HERO.imageAlt}
            width={1040}
            height={1450}
            loading="eager"
            decoding="async"
            className="block h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display ="none";
            }}
            initial={reduce ? false : { clipPath:"inset(0% 0% 100% 0%)", opacity: 0.6 }}
            animate={{ clipPath:"inset(0% 0% 0% 0%)", opacity: 1 }}
            transition={{ duration: 1.35, ease:"linear" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 bg-gradient-to-tl from-ink/35 to-transparent transition-all duration-500 group-hover:h-24 group-hover:w-24"
            style={{ clipPath:"polygon(100% 0, 100% 100%, 0 100%)" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 bg-[linear-gradient(225deg,#ffffff_0%,#efeade_55%,#d9d3c4_100%)] shadow-[-6px_-6px_14px_rgba(23,20,15,0.28)] transition-all duration-500 ease-out group-hover:h-24 group-hover:w-24"
            style={{ clipPath:"polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </div>

        <figcaption className="flex items-center justify-between gap-3 bg-white px-2 pb-1 pt-2">
          <span className="label text-[#544e42]">
            Original Factory Monroney Window Sticker
          </span>
          <span className="label shrink-0 text-[#c22a12]">PDF &amp; Web Format</span>
        </figcaption>
      </div>

      <span className="pointer-events-none absolute -bottom-5 -left-3 rotate-[-7deg] border-2 border-signal bg-paper/90 px-3 py-1.5 sm:-left-6">
        <span className="label text-signal">Factory-Verified Data</span>
      </span>
    </motion.figure>
  );
}
