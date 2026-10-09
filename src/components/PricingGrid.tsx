import { useState } from"react";
import { PRICING, type Plan } from"../data/content";
import { Reveal } from"./Ui";
import { useNav } from"../nav";

export function PlanCard({ plan, delay = 0, onSelect }: { plan: Plan; delay?: number; onSelect: () => void }) {
  const featured = Boolean(plan.badge);
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`flex h-full flex-col p-6 sm:p-8 ${
          featured ?"bg-ink text-paper" :"bg-paper text-ink"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`display leading-[1.1] sm:${
              featured ?"text-paper" :"text-ink"
            }`}
          >
            {plan.name}
          </h3>
          {plan.badge && (
            <span className="label shrink-0 bg-signal px-2 py-1 text-paper">
              {plan.badge}
            </span>
          )}
        </div>

        {plan.rate && (
          <div
            className={`num mt-2 text-[17px] tracking-[0.1em] ${
              featured ?"text-marker" :"text-signal"
            }`}
          >
            {plan.rate}
          </div>
        )}

        {plan.tagline && (
          <p
            className={`mt-3 leading-[1.55] ${
              featured ?"text-paper/75" :"text-inksoft"
            }`}
          >
            {plan.tagline}
          </p>
        )}
        {plan.body && (
          <p
            className={`mt-3 leading-[1.55] ${
              featured ?"text-paper/80" :"text-inksoft"
            }`}
          >
            {plan.body}
          </p>
        )}

        <div
          className={`mt-7 border-t pt-5 ${
            featured ?"border-paper/35" :"border-ink/25"
          }`}
        >
          <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
            <span
              className={`display text-[clamp(2.6rem,5vw,3.4rem)] leading-[0.9] ${
                featured ?"text-paper" :"text-ink"
              }`}
            >
              {plan.price}
            </span>
            {plan.unit && (
              <span
                className={`label pb-1.5 ${
                  plan.unit.startsWith("/") ?"" :"ml-1"
                } ${featured ?"text-paper/70" :"text-stone"}`}
              >
                {plan.unit}
              </span>
            )}
          </div>
        </div>

        {plan.features && (
          <ul className="mt-6 space-y-2.5">
            {plan.features.map((f) => (
              <li key={f} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-[9px] h-1.5 w-1.5 shrink-0 ${
                    featured ?"bg-marker" :"bg-signal"
                  }`}
                />
                <span
                  className={`leading-[1.45] ${
                    featured ?"text-paper/85" :"text-inksoft"
                  }`}
                >
                  {f}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div aria-hidden="true" className="h-8 shrink-0" />
        <button
          type="button"
          onClick={onSelect}
          className={`label mt-auto flex w-full items-center justify-between gap-3 px-5 py-4 transition-colors duration-200 ${
            featured
              ?"bg-paper text-ink hover:bg-signal hover:text-paper"
              :"bg-ink text-paper hover:bg-signal"
          }`}
        >
          {plan.cta}
          <span aria-hidden="true">→</span>
        </button>
      </article>
    </Reveal>
  );
}

export function PricingNotes() {
  return (
    <div className="mt-8 grid gap-px border border-ink bg-ink/25 sm:grid-cols-3">
      {PRICING.notes.map((n, i) => (
        <div
          key={n.title}
          className="bg-paper p-5 transition-colors duration-200 hover:bg-stock/80 sm:p-6"
        >
          <span className="num text-[10px] tracking-[0.2em] text-signal">
            {String(i + 1).padStart(2,"0")}
          </span>
          <h4 className="display mt-2.5 text-[16px] leading-[1.25] text-ink sm:text-[17px]">
            {n.title}
          </h4>
          <p className="mt-2 leading-[1.55] text-inksoft">{n.body}</p>
        </div>
      ))}
    </div>
  );
}

function CheckoutModal({
  plan,
  onClose,
}: {
  plan: Plan;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const { go } = useNav();

  const handleProceed = () => {
    if (!email) return;
    const planId = plan.name.toLowerCase().replace(/[^a-z0-9]+/g,"-");
    window.open(
      `https://detailedstickersheet.com/checkout?email=${encodeURIComponent(
        email
      )}&plan=${planId}`,"_blank","noopener,noreferrer"
    );
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-[500px] border border-ink bg-paper p-6 shadow-[12px_12px_0_rgba(23,20,15,0.25)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-ink/20 pb-4">
          <h3 className="display text-ink">
            Get Your {plan.name.includes("Sticker") ?"Sticker" :"Report"}
          </h3>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center border border-ink text-lg hover:bg-ink hover:text-paper transition-colors"
          >
            ×
          </button>
        </div>
        <div className="mt-5">
          <label className="label text-stone block mb-2">Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            autoFocus
            className="field w-full"
          />
        </div>
        <button
          onClick={handleProceed}
          disabled={!email}
          className="label mt-6 w-full bg-signal px-5 py-4 text-paper transition-colors hover:bg-ink disabled:opacity-50"
        >
          Proceed to Checkout
        </button>
        <p className="mt-4 text-[17px] leading-snug text-inksoft">
          By selecting"Proceed to Checkout" you are confirming that you have read and
          agree to Detailed Sticker Sheet's{""}
          <button onClick={() => { onClose(); go("terms"); }} className="text-signal underline">
            Terms of Use
          </button>{""}
          and{""}
          <button onClick={() => { onClose(); go("privacy"); }} className="text-signal underline">
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
}

export function PlanGrid({ plans }: { plans: Plan[] }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const cols = plans.length === 4 ?"lg:grid-cols-4 sm:grid-cols-2" :"lg:grid-cols-3";
  return (
    <>
      <div className={`grid gap-px border border-ink bg-ink/25 ${cols}`}>
        {plans.map((p, i) => (
          <PlanCard key={p.name} plan={p} delay={i * 0.07} onSelect={() => setSelectedPlan(p)} />
        ))}
      </div>
      {selectedPlan && (
        <CheckoutModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </>
  );
}
