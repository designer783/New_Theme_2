import { useState } from"react";
import { HISTORY, PRICING, REVIEWS } from"../data/content";
import { Reveal, SectionHead, Wrap, Btn } from"../components/Ui";
import { LookupForm } from"../components/LookupForm";
import { PlanGrid, PricingNotes } from"../components/PricingGrid";
import { useNav } from"../nav";

function Tabs() {
  const [i, setI] = useState(0);
  const total = HISTORY.tabs.length;
  const tab = HISTORY.tabs[i];
  const go = (n: number) => setI((n + total) % total);

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between border-y border-ink py-3">
        <span className="num text-[12px] tracking-[0.18em] text-ink">
          <span className="text-signal">{i + 1}</span> {HISTORY.counterOf}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Previous"
            className="label border border-ink px-3.5 py-2 transition-colors hover:bg-ink hover:text-paper"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Next"
            className="label border border-ink px-3.5 py-2 transition-colors hover:bg-ink hover:text-paper"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-8 items-start lg:grid-cols-[1fr_2fr] lg:gap-14 xl:gap-20">
        <div
          role="tablist"
          aria-label={HISTORY.docTitle}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:sticky lg:top-8 lg:z-20 lg:grid-cols-1"
        >
          {HISTORY.tabs.map((t, k) => (
            <div key={t.label} className="flex flex-col gap-2">
              <button
                role="tab"
                type="button"
                aria-selected={k === i}
                onClick={() => setI(k)}
                className={`group h-full flex flex-col items-start gap-1 p-5 text-left transition-all duration-300 border ${
                  k === i ? "border-signal bg-ink text-paper shadow-[6px_6px_0_#D9381E] lg:translate-x-3 lg:-translate-y-1.5 relative z-10" : "border-ink bg-paper text-ink hover:bg-stock hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(23,20,15,0.4)]"
                }`}
              >
                <span className="flex w-full items-baseline justify-between gap-3">
                  <span className="display text-[17px] leading-[1.15] sm:text-[17px]">
                    {t.label}
                  </span>
                  <span
                    className={`num text-[10px] tracking-[0.16em] ${
                      k === i ?"text-marker" :"text-signal"
                    }`}
                  >
                    {String(k + 1).padStart(2,"0")}
                  </span>
                </span>
                <span
                  className={`label ${k === i ?"text-paper/75" :"text-stone"}`}
                >
                  {t.name}
                </span>
                <span
                  className={`label mt-0.5 border px-1.5 py-0.5 ${
                    k === i ?"border-paper/50 text-paper" :"border-ink/40 text-ink"
                  }`}
                >
                  {t.badge}
                </span>
              </button>
              
              {/* Mobile/Tablet Inline Content */}
              <div className={`lg:hidden ${k === i ? 'block mt-2 mb-4' : 'hidden'}`}>
                <div className="border border-ink bg-paper p-5 shadow-[4px_4px_0_rgba(23,20,15,0.12)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-2 w-2 bg-signal" />
                    <span className="label text-stone">{t.label}</span>
                  </div>
                  <h3 className="display text-[clamp(1.4rem,2.5vw,2rem)] text-ink uppercase">
                    {t.title}
                  </h3>
                  <p className="mt-3 leading-[1.6] text-inksoft text-sm">
                    {t.body}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-ink/25 pt-4">
                    {t.points.map((p: string) => (
                      <li key={p} className="flex gap-2 text-sm">
                        <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 bg-signal" />
                        <span className="leading-[1.5] text-ink">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div role="tabpanel" className="hidden lg:block w-full">
          <div className="border border-ink bg-paper p-6 shadow-[8px_8px_0_rgba(23,20,15,0.12)] transition-shadow duration-300 hover:shadow-[12px_12px_0_rgba(23,20,15,0.16)] sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-signal" />
              <span className="label text-stone">{tab.label}</span>
            </div>
            <>
              <h3 className="display mt-5 text-[clamp(1.6rem,3vw,2.3rem)] text-ink uppercase">
                {tab.title}
              </h3>
              <p className="mt-4 leading-[1.65] text-inksoft">
                {tab.body}
              </p>
              <ul className="mt-6 space-y-3 border-t border-ink/25 pt-5">
                {tab.points.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-signal" />
                    <span className="leading-[1.5] text-ink">{p}</span>
                  </li>
                ))}
              </ul>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VehicleHistory() {
  const { go } = useNav();
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 pb-14 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-16">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="h-2.5 w-2.5 bg-signal" />
                <span className="label text-ink">{HISTORY.eyebrow}</span>
                <span className="label text-stone">|</span>
                <span className="label text-stone">{HISTORY.eyebrow2}</span>
              </div>
              <h1 className="display mt-6 text-[clamp(2.2rem,5.2vw,4.4rem)] text-ink">
                {HISTORY.title}
              </h1>
              <p className="mt-7 max-w-[58ch] leading-[1.65] text-inksoft">
                {HISTORY.body}
              </p>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <div className="border border-ink bg-stock/60 p-6 sm:p-8">
                <LookupForm id="lookup-history" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Wrap className="border-t border-ink bg-stock/70 paper-grain">
        <SectionHead
          kicker={HISTORY.docKicker}
          title={HISTORY.docTitle}
          body={HISTORY.docBody}
        />
        <Tabs />
      </Wrap>

      <Wrap>
        <SectionHead
          kicker={HISTORY.buildKicker}
          title={HISTORY.buildTitle}
          body={HISTORY.buildBody}
        />
        <div className="mt-12 grid gap-px border border-ink bg-ink/25 sm:grid-cols-2 lg:grid-cols-3">
          {HISTORY.buildItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="h-full">
              <article className="group relative h-full overflow-hidden bg-paper p-6 transition-colors duration-200 hover:bg-stock/80 sm:p-7">
                <span
                  aria-hidden="true"
                  className="display pointer-events-none absolute -right-2 -top-5 text-[86px] leading-none text-ink/[0.06] transition-colors duration-300 group-hover:text-signal/20"
                >
                  {String(i + 1).padStart(2,"0")}
                </span>
                <div className="relative">
                  <span className="num text-[10.5px] tracking-[0.2em] text-signal">
                    {String(i + 1).padStart(2,"0")}
                  </span>
                  <h3 className="display mt-3 leading-[1.2] text-ink sm:">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-[1.6] text-inksoft">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>

      <section className="band border-y border-ink bg-ink">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 border-t border-paper/45 pt-4">
              <span className="h-2 w-2 bg-signal" />
              <span className="label text-paper/75">{HISTORY.stickerKicker}</span>
            </div>
            <h2 className="display mt-7 text-[clamp(2rem,4.6vw,3.8rem)] text-paper">
              {HISTORY.stickerTitle}
            </h2>
            <p className="mt-6 max-w-[64ch] leading-[1.65] text-paper/75">
              {HISTORY.stickerBody}
            </p>
          </div>
          <div className="flex lg:col-span-4 lg:items-end">
            <Btn variant="signal" onClick={() => go("home")} className="w-full !justify-between !py-5 sm:w-auto sm:min-w-[280px]">
              {HISTORY.stickerCta}
              <span aria-hidden="true">→</span>
            </Btn>
          </div>
        </div>
      </section>

      <Wrap className="bg-stock/70 paper-grain">
        <SectionHead kicker={PRICING.kicker} title={PRICING.title} body={PRICING.body} />
        <div className="mt-12">
          <PlanGrid plans={PRICING.reports} />
        </div>
        <PricingNotes />
      </Wrap>

      <Wrap>
        <SectionHead kicker={REVIEWS.kicker} title={REVIEWS.title} body={REVIEWS.body} />
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-ink py-4">
          <span className="display text-[44px] leading-none text-ink">{REVIEWS.rating}</span>
          <span aria-hidden="true" className="tracking-[0.1em] text-signal">
            ★★★★★
          </span>
          <span className="label text-stone">{REVIEWS.basedOn}</span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.items.map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 0.06} className="h-full">
              <figure
                className={`flex h-full flex-col border border-ink bg-paper p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_rgba(23,20,15,0.16)] shadow-[5px_5px_0_rgba(23,20,15,0.1)] ${
                  i % 2 ?"lg:translate-y-3 hover:lg:translate-y-1.5" :""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="label text-signal">{REVIEWS.verified}</span>
                  <span aria-hidden="true" className="text-[12px] tracking-[0.1em] text-signal">
                    ★★★★★
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 font-voice italic leading-[1.55] text-ink">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/25 pt-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="display text-[16px] leading-[1.2] text-ink">{r.name}</span>
                    <span className="label border border-ink/40 px-1.5 py-0.5 text-stone">
                      {REVIEWS.verifiedShort}
                    </span>
                  </div>
                  <div className="num mt-1.5 text-[11px] tracking-[0.06em] text-stone">
                    {r.checked}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </>
  );
}
