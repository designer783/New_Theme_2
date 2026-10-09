import {
  HERO,
  FIND,
  SAMPLES,
  CLASSICS,
  SELLERS,
  PRICING,
  FINAL,
} from"../data/content";
import { Reveal, SectionHead, Wrap, Btn, hideOnError } from"../components/Ui";
import { LookupForm } from"../components/LookupForm";
import { Gauge } from"../components/Gauge";
import { Sticker } from"../components/Sticker";
import { PlanGrid, PricingNotes } from"../components/PricingGrid";
import { useNav } from"../nav";

export function Home() {
  const { lookup, openSticker } = useNav();
  return (
    <>
      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        {/* Design B: night-dash plate behind the hero */}
        <div aria-hidden="true" className="only-b absolute inset-0">
          <img
            src="images/dash-night.jpg"
            alt=""
            onError={hideOnError}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{
              background:"linear-gradient(96deg,#0e1116 0%,rgba(14,17,22,0.94) 42%,rgba(14,17,22,0.6) 100%)",
            }}
          />
          <span className="absolute inset-x-0 top-0 h-px bg-signal/50" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-14 pb-14 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 bg-signal" />
                <span className="label text-stone">{HERO.eyebrow}</span>
              </div>
              <h1 className="display mt-6 text-[clamp(2.3rem,5.6vw,4.9rem)] text-ink">
                {HERO.title.slice(0, -"Makes It Yours".length)}
                <span className="text-signal">{HERO.title.slice(-"Makes It Yours".length)}</span>
              </h1>
              <p className="mt-7 max-w-[56ch] leading-[1.65] text-inksoft">
                {HERO.body}
              </p>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <div className="border border-ink bg-stock/60 p-6 sm:p-8">
                <LookupForm id="lookup" />
              </div>
            </div>
          </div>
        </div>

        <ul className="relative grid grid-cols-2 gap-px border-y border-ink bg-ink/25 md:grid-cols-4">
          {HERO.badges.map((b, i) => (
            <li
              key={b}
              className="flex items-baseline gap-3 bg-paper px-5 py-5 transition-colors duration-200 hover:bg-stock sm:px-8"
            >
              <span className="num text-[10px] tracking-[0.2em] text-signal">
                {String(i + 1).padStart(2,"0")}
              </span>
              <span className="label text-ink/85">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* WHAT YOU'LL FIND */}
      <Wrap id="find">
        <SectionHead kicker={FIND.kicker} title={FIND.title} body={FIND.body} />
        <div className="mt-12 border-t border-ink">
          {FIND.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="group grid grid-cols-12 gap-x-4 gap-y-2 border-b border-ink/25 py-6 transition-colors duration-200 hover:bg-stock/70 sm:gap-x-6 sm:py-7">
                <div className="col-span-2 sm:col-span-1">
                  <span className="num inline-block text-[12px] tracking-[0.16em] text-signal transition-transform duration-300 group-hover:-translate-y-0.5">
                    {String(i + 1).padStart(2,"0")}
                  </span>
                </div>
                <h3 className="display col-span-10 text-[17px] leading-[1.25] text-ink sm:col-span-4 sm:lg:col-span-3">
                  {item.title}
                </h3>
                <p className="col-span-12 leading-[1.6] text-inksoft sm:col-span-7 sm:col-start-5">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>

      {/* SAMPLES */}
      <Wrap id="samples" className="bg-stock/70 paper-grain">
        <SectionHead kicker={SAMPLES.kicker} title={SAMPLES.title} body={SAMPLES.body} />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {SAMPLES.vehicles.map((v, i) => (
            <Reveal key={v.vin} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col border border-ink bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:border-signal hover:shadow-[0_26px_46px_-30px_rgba(23,20,15,0.6)]">
                <div className="relative aspect-[3/2] overflow-hidden border-b border-ink bg-ink">
                  <img
                    src={v.image}
                    alt={v.name}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    onError={hideOnError}
                    className="h-full w-full object-cover opacity-90 saturate-[0.55] transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100"
                  />
                  <span className="num absolute left-0 top-0 bg-ink px-2.5 py-1.5 text-[10px] tracking-[0.18em] text-paper">
                    {String(i + 1).padStart(2,"0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="display leading-[1.15] text-ink sm:">
                    {v.name}
                  </h3>
                  <dl className="mt-5 border-t border-ink/25">
                    <div className="flex items-baseline justify-between gap-3 border-b border-ink/15 py-2.5">
                      <dt className="label text-stone">VIN:</dt>
                      <dd className="num text-[12px] tracking-[0.08em] text-ink">{v.vin}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3 border-b border-ink/15 py-2.5">
                      <dt className="label text-stone">MSRP</dt>
                      <dd className="num text-[17px] font-semibold text-ink">
                        <span className="marker px-1">{v.msrp}</span>
                      </dd>
                    </div>
                    <div className="border-b border-ink/15 py-2.5">
                      <dt className="label text-stone">Exterior:</dt>
                      <dd className="mt-1 leading-snug text-ink">{v.exterior}</dd>
                    </div>
                    <div className="py-2.5">
                      <dt className="label text-stone">Interior:</dt>
                      <dd className="mt-1 leading-snug text-ink">{v.interior}</dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    onClick={() => openSticker(v.vin)}
                    className="label w-full mt-auto flex items-center justify-between gap-3 border-t border-ink pt-4 text-ink transition-colors duration-200 hover:text-signal"
                  >
                    {SAMPLES.cta}
                    <span className="text-signal">→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>

      {/* CLASSICS */}
      <section id="classics" className="band relative border-y border-ink bg-ink">
        <img
          src="images/classic-band.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={hideOnError}
          className="only-a duotone absolute inset-0 h-full w-full object-cover object-center opacity-55"
        />
        <img
          src="images/classic-night.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={hideOnError}
          className="only-b absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/45"
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 border-t border-paper/45 pt-4">
              <span className="h-2 w-2 bg-signal" />
              <span className="label text-paper/75">{CLASSICS.kicker}</span>
            </div>
            <h2 className="display mt-7 text-[clamp(2.1rem,5vw,4rem)] text-paper">
              {CLASSICS.title}
            </h2>
            <p className="mt-6 max-w-[58ch] leading-[1.65] text-paper/75">
              {CLASSICS.body}
            </p>
          </div>
          <Reveal className="lg:col-span-5 lg:self-end" delay={0.1}>
            <blockquote className="rotate-[-0.7deg] border border-paper/25 bg-paper p-6 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)] sm:p-8">
              <p className="font-voice italic leading-[1.5] text-ink sm:">
                {CLASSICS.quote}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* SELLERS */}
      <Wrap id="sellers">
        <SectionHead kicker={SELLERS.kicker} title={SELLERS.title} body={SELLERS.body} />
        <div className="mt-12 grid gap-px border border-ink bg-ink/25 sm:grid-cols-2 lg:grid-cols-3">
          {SELLERS.items.map((item, i) => (
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

      {/* PRICING */}
      <Wrap id="pricing" className="bg-stock/70 paper-grain">
        <SectionHead kicker={PRICING.kicker} title={PRICING.title} body={PRICING.body} />
        <div className="mt-12">
          <PlanGrid plans={PRICING.stickers} />
        </div>
        <PricingNotes />
      </Wrap>

      {/* FINAL CTA */}
      <section id="final" className="band relative overflow-hidden border-t border-ink bg-ink">
        <img
          src="images/backing-paper.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={hideOnError}
          className="only-a absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-screen"
        />
        <img
          src="images/metal.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          onError={hideOnError}
          className="only-b absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-overlay"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 border-t border-paper/45 pt-8 lg:grid-cols-12">
            <h2 className="display text-[clamp(2.3rem,6vw,5rem)] text-paper lg:col-span-7">
              {FINAL.title}
            </h2>
            <div className="lg:col-span-5 lg:pt-3">
              <p className="mb-7 leading-[1.6] text-paper/75">{FINAL.body}</p>
              <Btn variant="signal" onClick={lookup} className="w-full sm:w-auto sm:min-w-[300px] !justify-between !py-5">
                {FINAL.cta}
                <span aria-hidden="true">→</span>
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
