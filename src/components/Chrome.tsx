import { useEffect, useState } from"react";
import { Logo } from"./Logo";
import { NAV, FOOTER, type Page } from"../data/content";
import { useNav } from"../nav";

const HOME_SECTIONS = [
  ["find","01"],
  ["samples","02"],
  ["classics","03"],
  ["sellers","04"],
  ["pricing","05"],
  ["final","06"],
] as const;

const PAGE_ORDER: Page[] = ["home","vehicle-history","sample","pricing","contact","login","terms","privacy",
];

export function SpecRail() {
  const { page } = useNav();
  const [activeSection, setActiveSection] = useState("01");

  const pageNum = String(PAGE_ORDER.indexOf(page) + 1).padStart(2, "0");

  useEffect(() => {
    if (page === "home") {
      // Home page: observe specific named sections
      const els = HOME_SECTIONS.map(([id]) => document.getElementById(id)).filter(
        Boolean
      ) as HTMLElement[];
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const hit = HOME_SECTIONS.find(([id]) => id === e.target.id);
              if (hit) setActiveSection(hit[1]);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    // Internal pages: observe all <section> and Wrap elements inside <main>
    setActiveSection("01");
    const timer = setTimeout(() => {
      const main = document.querySelector("main");
      if (!main) return;
      const sections = Array.from(main.querySelectorAll(":scope > section, :scope > section > div > section"));
      if (!sections.length) return;

      const sectionMap = new Map<Element, string>();
      sections.forEach((s, i) => {
        sectionMap.set(s, String(i + 1).padStart(2, "0"));
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const num = sectionMap.get(e.target);
              if (num) setActiveSection(num);
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((el) => io.observe(el));

      // Store cleanup
      (window as any).__specRailCleanup = () => io.disconnect();
    }, 100);

    return () => {
      clearTimeout(timer);
      (window as any).__specRailCleanup?.();
    };
  }, [page]);

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[128px] flex-col justify-between border-r border-ink/30 bg-stock/70 px-4 pb-6 pt-[104px] xl:flex">
      <div className="absolute top-1/2 -right-[12px] h-6 w-6 -translate-y-1/2 rounded-full border-y border-l border-ink/30 bg-paper" />
      <div>
        <div className="label text-stone">Page</div>
        <div className="display mt-1 text-[42px] leading-none text-signal">{pageNum}</div>
      </div>
      <div className="space-y-2">
        <div className="mb-6">
          <div className="label text-stone">Section</div>
          <div className="display mt-1 text-[32px] leading-none text-signal">{activeSection}</div>
        </div>
        <div className="perf opacity-70" />
        <div className="label leading-[1.5] text-stone">
          Detailed
          <br />
          Sticker Sheet
        </div>
      </div>
    </aside>
  );
}

/** Review switch between the two approved visual designs. */
export function DesignSwitch({
  design,
  setDesign,
}: {
  design:"a" |"b";
  setDesign: (d:"a" |"b") => void;
}) {
  return (
    <div
      role="group"
      aria-label="Design"
      className="fixed bottom-4 right-4 z-[70] flex border border-ink bg-paper shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
    >
      {(["a","b"] as const).map((d) => (
        <button
          key={d}
          type="button"
          aria-pressed={design === d}
          onClick={() => setDesign(d)}
          className={`label px-3.5 py-2.5 transition-colors ${
            design === d ?"bg-ink text-paper" :"text-ink hover:text-signal"
          }`}
        >
          Design {d.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

const UserGlyph = () => (
  <svg
    viewBox="0 0 20 20"
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="10" cy="7" r="3.2" />
    <path d="M3.5 17c.8-3.2 3.3-4.8 6.5-4.8s5.7 1.6 6.5 4.8" strokeLinecap="round" />
  </svg>
);

export function Header() {
  const { page, go } = useNav();
  const [open, setOpen] = useState(false);

  const nav = (p: (typeof NAV)[number]["page"] |"login" |"home") => {
    setOpen(false);
    go(p);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-stretch justify-between gap-4">
        <button
          type="button"
          onClick={() => nav("home")}
          aria-label="Detailed Sticker Sheet — home"
          className="flex shrink-0 items-center border-r border-ink bg-white px-4 py-3 sm:px-6 sm:py-4"
        >
          <Logo className="h-7 w-auto sm:h-8" />
        </button>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {NAV.map((n) => {
            const active = page === n.page;
            return (
              <button
                key={n.page}
                type="button"
                onClick={() => nav(n.page)}
                aria-current={active ?"page" : undefined}
                className={`label relative px-4 py-3 transition-colors ${
                  active ?"text-signal" :"text-ink/85 hover:text-signal"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-4 bottom-1.5 h-[2px] bg-signal transition-transform duration-300 ${
                    active ?"scale-x-100" :"scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 pr-4 sm:pr-6">
          <button
            type="button"
            onClick={() => nav("login")}
            className="label hidden items-center gap-2 border border-ink bg-ink px-4 py-3 text-paper transition-colors hover:border-signal hover:bg-signal sm:inline-flex"
          >
            <UserGlyph />
            Login
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="label inline-flex items-center gap-2 border border-ink px-3.5 py-3 text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
          >
            Menu
            <span aria-hidden="true" className="flex w-3.5 flex-col gap-[3px]">
              <span className="h-[2px] bg-current" />
              <span className="h-[2px] bg-current" />
              <span className="h-[2px] bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-ink bg-paper lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 py-2 sm:px-8">
            {NAV.map((n) => (
              <button
                key={n.page}
                type="button"
                onClick={() => nav(n.page)}
                className={`label flex w-full items-center justify-between border-b border-ink/20 py-4 text-left ${
                  page === n.page ?"text-signal" :"text-ink"
                }`}
              >
                {n.label}
                <span className="text-signal">→</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => nav("login")}
              className="label flex w-full items-center justify-between py-4 text-left text-ink"
            >
              <span className="flex items-center gap-2">
                <UserGlyph /> Login
              </span>
              <span className="text-signal">→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { go } = useNav();
  return (
    <footer className="border-t border-ink bg-stock/80 paper-grain">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => go("home")}
              aria-label="Detailed Sticker Sheet — home"
              className="inline-block border border-ink bg-white px-5 py-4"
            >
              <Logo className="h-8 w-auto" />
            </button>
            <p className="mt-5 max-w-md text-[16px] leading-[1.65] text-inksoft">
              {FOOTER.blurb}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {FOOTER.trust.map((t) => (
                <li
                  key={t}
                  className="label flex items-center gap-2 border border-ink/60 px-3 py-2 text-[12px] font-medium text-ink bg-ink/5"
                >
                  <span className="h-1.5 w-1.5 bg-signal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="label flex items-center gap-2 border-t-2 border-signal pt-3 text-[14px] font-bold text-signal">
              <span className="h-1.5 w-1.5 bg-signal" />
              {FOOTER.navTitle}
            </div>
            <ul className="mt-5 space-y-3.5">
              {FOOTER.nav.map((n) => (
                <li key={n.label}>
                  <button
                    type="button"
                    onClick={() => go(n.page)}
                    className="label text-left text-[14px] text-ink/85 transition-colors hover:text-signal"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="label flex items-center gap-2 border-t-2 border-signal pt-3 text-[14px] font-bold text-signal">
              <span className="h-1.5 w-1.5 bg-signal" />
              {FOOTER.contactTitle}
            </div>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={FOOTER.phoneHref}
                  className="num text-[18px] tracking-[0.04em] text-ink transition-colors hover:text-signal"
                >
                  {FOOTER.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="num break-words text-[15px] tracking-[0.02em] text-ink transition-colors hover:text-signal"
                >
                  {FOOTER.email}
                </a>
              </li>
              <li className="label text-[13px] text-stone">{FOOTER.hours}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="label flex items-center gap-2 border-t-2 border-signal pt-3 text-[14px] font-bold text-signal">
              <span className="h-1.5 w-1.5 bg-signal" />
              {FOOTER.legalTitle}
            </div>
            <ul className="mt-5 space-y-3.5">
              {FOOTER.legal.map((n) => (
                <li key={n.label}>
                  <button
                    type="button"
                    onClick={() => go(n.page)}
                    className="label text-left text-[14px] text-ink/85 transition-colors hover:text-signal"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink pt-4">
          <span className="num text-[13px] tracking-[0.08em] text-stone">
            {FOOTER.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
