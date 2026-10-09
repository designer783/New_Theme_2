import { useNav } from"../nav";
import { SAMPLE_PAGE } from"../data/content";
import { Wrap } from"../components/Ui";

const SAMPLES = [
  {
    vin: "2T1BURHE0FC320645",
    name: "2015 Toyota Corolla LE",
    spec: "1.8L I4 DOHC Dual VVT-i • 4-Speed Automatic • FWD",
    flag: "CLEAN TITLE",
    incidents: "0 Incidents",
    stats: [
      { label: "Owners", value: "2 Personal" },
      { label: "Accidents", value: "0 Reported" },
      { label: "Odometer", value: "98,420 mi" },
      { label: "Value", value: "$11,250" },
    ],
    timelineTitle: "Ownership Timeline",
    timeline: [
      { owner: "Owner #1", place: "California", years: "2015 - 2019" },
      { owner: "Owner #2", place: "Nevada", years: "2019 - Present" },
    ],
    brandsTitle: "Title Brands Check",
    brands: [
      { name: "State Title Brand", status: "PASSED" },
      { name: "Flood Damage", status: "PASSED" },
      { name: "Odometer Rollback", status: "PASSED" },
      { name: "Lemon Law", status: "PASSED" },
    ],
    reportUrl: "https://detailedstickersheet.com/report/vin/2T1BURHE0FC320645",
    stickerUrl: "https://detailedstickersheet.com/sticker/vin/2T1BURHE0FC320645-D545D545-6F6F-920B-CEEB-88FEC90D8B36",
  },
  {
    vin: "1HGFA15547L116880",
    name: "2007 Honda Civic LX",
    spec: "1.8L SOHC i-VTEC • 5-Speed Automatic • FWD",
    flag: "CLEAN TITLE",
    incidents: "0 Incidents",
    stats: [
      { label: "Owners", value: "3 Personal" },
      { label: "Accidents", value: "0 Reported" },
      { label: "Odometer", value: "142,500 mi" },
      { label: "Value", value: "$4,800" },
    ],
    timelineTitle: "Ownership Timeline",
    timeline: [
      { owner: "Owner #1", place: "Texas", years: "2007 - 2012" },
      { owner: "Owner #2", place: "Texas", years: "2012 - 2020" },
      { owner: "Owner #3", place: "Oklahoma", years: "2020 - Present" },
    ],
    brandsTitle: "Title Brands Check",
    brands: [
      { name: "State Title Brand", status: "PASSED" },
      { name: "Flood Damage", status: "PASSED" },
      { name: "Odometer Rollback", status: "PASSED" },
      { name: "Lemon Law", status: "PASSED" },
    ],
    reportUrl: "https://detailedstickersheet.com/report/vin/1HGFA15547L116880",
    stickerUrl: "https://detailedstickersheet.com/sticker/vin/1HGFA15547L116880-70107010-CFCF-D86C-D3E3-5D29064203B9",
  },
  {
    vin: "WDDGF5EB3BR183192",
    name: "2011 Mercedes-Benz C300",
    spec: "3.0L V6 FI / SFI • 7G-TRONIC 7-Speed • RWD",
    flag: "BRANDED TITLE",
    incidents: "1 Incident",
    stats: [
      { label: "Owners", value: "2 Personal" },
      { label: "Accidents", value: "1 Reported" },
      { label: "Odometer", value: "96,295 mi" },
      { label: "Value", value: "$4,526" },
    ],
    timelineTitle: "Ownership Timeline",
    timeline: [
      { owner: "Owner #1", place: "New Jersey", years: "2011 - 2016" },
      { owner: "Owner #2", place: "New York", years: "2016 - Present" },
    ],
    brandsTitle: "Title Brands Check",
    brands: [
      { name: "State Title Brand", status: "FLAGGED" },
      { name: "Flood Damage", status: "PASSED" },
      { name: "Odometer Rollback", status: "FLAGGED" },
      { name: "Lemon Law", status: "PASSED" },
    ],
    reportUrl: "https://detailedstickersheet.com/report/vin/WDDGF5EB3BR183192",
    stickerUrl: "https://detailedstickersheet.com/sticker/vin/WDDGF5EB3BR183192-6CBF6CBF-CCCC-7022-B733-E2EF76995F78",
  },
  {
    vin: "5TFDW5F14FX419868",
    name: "2015 Toyota Tacoma PreRunner",
    spec: "4.0L V6 DOHC 24V • 5-Speed Automatic • RWD",
    flag: "CLEAN TITLE",
    incidents: "0 Incidents",
    stats: [
      { label: "Owners", value: "1 Personal" },
      { label: "Accidents", value: "0 Reported" },
      { label: "Odometer", value: "78,120 mi" },
      { label: "Value", value: "$22,500" },
    ],
    timelineTitle: "Ownership Timeline",
    timeline: [
      { owner: "Owner #1", place: "Arizona", years: "2015 - Present" },
    ],
    brandsTitle: "Title Brands Check",
    brands: [
      { name: "State Title Brand", status: "PASSED" },
      { name: "Flood Damage", status: "PASSED" },
      { name: "Odometer Rollback", status: "PASSED" },
      { name: "Lemon Law", status: "PASSED" },
    ],
    reportUrl: "https://detailedstickersheet.com/report/vin/5TFDW5F14FX419868",
    stickerUrl: "https://detailedstickersheet.com/sticker/vin/5TFDW5F14FX419868-BD26BD26-FFFF-4837-5594-FBFA9E6E4E3A",
  }
];

function RecordBody({ data, compact = false }: { data: typeof SAMPLES[0], compact?: boolean }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className={`label px-2 py-1 text-paper ${data.flag === "CLEAN TITLE" ? "bg-signal" : "bg-ink"}`}>
          {data.flag}
        </span>
        <span className="label border border-ink px-2 py-1 text-ink">{data.incidents}</span>
      </div>
      <div className="num mt-4 text-[12.5px] tracking-[0.14em] text-stone">{data.vin}</div>
      <h3
        className={`display mt-2 text-ink ${
          compact ? "" : "text-[clamp(1.7rem,3.2vw,2.6rem)]"
        }`}
      >
        {data.name}
      </h3>
      <p className="mt-3 max-w-[60ch] leading-[1.55] text-inksoft">{data.spec}</p>

      <dl className="mt-7 grid grid-cols-2 gap-px border border-ink bg-ink/25 sm:grid-cols-4">
        {data.stats.map((s) => (
          <div key={s.label} className="bg-paper p-4">
            <dt className="label text-stone">{s.label}</dt>
            <dd className="display mt-2 leading-[1.15] text-ink sm:">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="label border-t border-ink pt-3 text-ink">{data.timelineTitle}</h4>
          <ol className="relative mt-5 space-y-6 border-l-2 border-ink/30 pl-6">
            {data.timeline.map((t) => (
              <li key={t.owner} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-ink bg-paper" />
                <div className="display text-[17px] leading-[1.2] text-ink">{t.owner}</div>
                <div className="mt-1 text-[17px] text-inksoft">{t.place}</div>
                <div className="num mt-1 text-[12px] tracking-[0.14em] text-signal">{t.years}</div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="label border-t border-ink pt-3 text-ink">{data.brandsTitle}</h4>
          <ul className="mt-3">
            {data.brands.map((b) => (
              <li
                key={b.name}
                className="flex items-center justify-between gap-3 border-b border-ink/20 py-2.5"
              >
                <span className="text-ink">{b.name}</span>
                {b.status === "FLAGGED" ? (
                  <span className="label bg-signal px-2 py-0.5 text-paper">{b.status}</span>
                ) : b.status === "PASSED" ? (
                  <span className="label border border-ink px-2 py-0.5 text-ink">{b.status}</span>
                ) : (
                  <span aria-hidden="true" className="text-[16px] text-ink/60">✓</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Sample() {
  const { openReport, openSticker, openBuildSheet } = useNav();

  return (
    <Wrap>
      <div className="border-t border-ink pt-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-signal" />
          <span className="label text-stone">{SAMPLE_PAGE.kicker}</span>
        </div>
        <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <h1 className="display text-[clamp(2.1rem,5vw,4.2rem)] text-ink lg:col-span-7">
            {SAMPLE_PAGE.title}
          </h1>
          <p className="leading-[1.65] text-inksoft lg:col-span-5 lg:pt-2">
            {SAMPLE_PAGE.body}
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-12">
        {SAMPLES.map((sample, idx) => (
          <div key={sample.vin}>
            <div className="label mb-4 flex items-center gap-3 text-stone">
              <span className="h-px w-8 bg-ink/50" />
              Sample {String(idx + 1).padStart(2, '0')}
            </div>

            <div className="border border-ink bg-stock/60 p-5 shadow-[8px_8px_0_rgba(23,20,15,0.12)] sm:p-8">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-9">
                  <RecordBody data={sample} />
                </div>
                <div className="flex flex-col gap-3 lg:col-span-3 lg:justify-start">
                  <button
                    type="button"
                    onClick={() => window.open(sample.reportUrl, '_blank', 'noopener,noreferrer')}
                    className="label flex items-center justify-between gap-3 bg-ink px-5 py-4 text-paper transition-colors hover:bg-signal"
                  >
                    View Report
                    <span aria-hidden="true">→</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(sample.stickerUrl, '_blank', 'noopener,noreferrer')}
                    className="label flex items-center justify-between gap-3 border border-ink px-5 py-4 text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    View Build Sheet
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}
