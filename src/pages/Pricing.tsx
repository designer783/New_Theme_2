import { useState } from"react";
import { PRICING } from"../data/content";
import { Wrap, SectionHead, Reveal } from"../components/Ui";
import { PlanGrid, PricingNotes } from"../components/PricingGrid";

export function PricingPage() {
  const [tab, setTab] = useState<"stickers" |"reports">("stickers");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Wrap>
        <SectionHead
          as="h1"
          kicker={PRICING.kicker}
          title={PRICING.title}
          body={PRICING.body}
        />

        <div role="tablist" className="mt-10 inline-flex border border-ink">
          {(
            [
              ["stickers", PRICING.tabStickers],
              ["reports", PRICING.tabReports],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={tab === k}
              onClick={() => setTab(k)}
              className={`label px-5 py-3.5 transition-colors duration-200 sm:px-8 ${
                tab === k ?"bg-ink text-paper" :"bg-paper text-ink hover:bg-stock"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8" key={tab}>
          <PlanGrid plans={tab ==="stickers" ? PRICING.stickers : PRICING.reports} />
        </div>
        <PricingNotes />
      </Wrap>

      <Wrap className="border-t border-ink bg-stock/70 paper-grain">
        <SectionHead
          kicker={PRICING.faq.kicker}
          title={PRICING.faq.title}
          body={PRICING.faq.body}
        />
        <div className="mt-12 border-t border-ink">
          {PRICING.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="border-b border-ink/30">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-5 text-left sm:gap-6 sm:py-6"
                    >
                      <span className="num text-[12px] tracking-[0.16em] text-signal">
                        {String(i + 1).padStart(2,"0")}
                      </span>
                      <span className="display text-[17px] leading-[1.25] text-ink transition-colors group-hover:text-signal sm:">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`label grid h-7 w-7 place-items-center border border-ink text-[17px] transition-transform duration-300 ${
                          isOpen ?"rotate-45 bg-ink text-paper" :""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    hidden={!isOpen}
                    className="grid grid-cols-[auto_1fr_auto] gap-4 pb-6 sm:gap-6"
                  >
                    <span className="w-[1.6rem]" />
                    <p className="max-w-[68ch] leading-[1.65] text-inksoft">{f.a}</p>
                    <span className="w-7" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Wrap>
    </>
  );
}
