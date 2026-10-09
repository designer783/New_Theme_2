import { LEGAL_TITLES, BRAND, FOOTER, LEGAL_BODY } from "../data/content";
import { Wrap } from"../components/Ui";
import { useNav } from"../nav";

/**
 * Terms & Conditions / Privacy Policy.
 * The approved long-form legal body could not be captured from the live site
 * in this pass — drop it into LEGAL_BODY in src/data/content.ts (array of
 * { heading?, text } blocks) and it will render here verbatim.
 */
export function Legal({ kind }: { kind:"terms" |"privacy" }) {
  const { go } = useNav();
  return (
    <Wrap>
      <div className="border-t border-ink pt-4">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-signal" />
          <span className="label text-stone">{BRAND}</span>
        </div>
        <h1 className="display mt-6 text-[clamp(2.1rem,5vw,3.8rem)] text-ink">
          {LEGAL_TITLES[kind]}
        </h1>

        <div className="mt-12 space-y-8 text-inksoft">
          {LEGAL_BODY[kind].map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h2 className="display text-xl text-ink mb-3">{section.heading}</h2>
              )}
              <p className="leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go("home")}
          className="label mt-16 inline-flex items-center gap-2 border-b-2 border-signal pb-1 text-ink transition-colors hover:text-signal"
        >
          ← {FOOTER.nav[0].label}
        </button>
      </div>
    </Wrap>
  );
}
