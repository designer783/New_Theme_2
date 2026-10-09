import { useState } from "react";
import { LOOKUP, SITE } from "../data/content";
import { useNav } from "../nav";
import { VinLocations } from "./VinHelp";

const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
];

/**
 * Hero lookup form: By VIN / By US License Plate tabs, the"Where is the VIN?"
 * disclosure, optional email + phone, and"Check Vehicle Records".
 * All visible strings come from LOOKUP (approved copy).
 */
export function LookupForm({
  id ="lookup",
  dark = false,
}: {
  id?: string;
  dark?: boolean;
}) {
  const [tab, setTab] = useState<"vin" |"plate">("vin");
  const [vin, setVin] = useState("");
  const [plate, setPlate] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showWhere, setShowWhere] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const { searchVin } = useNav();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab ==="vin") {
      if (vin.length !== 17) return setInvalid(true);
      searchVin(vin);
    } else {
      if (!plate.trim() || !state) return setInvalid(true);
      // Fallback for plate lookup since searchVin is only by VIN
      window.open(
        `${SITE}?plate=${encodeURIComponent(plate)}&state=${state}`,"_blank","noopener,noreferrer"
      );
    }
  };

  const text = dark ?"text-paper" :"text-ink";
  const tabBase ="label flex-1 border px-3 py-3 transition-colors duration-200 sm:flex-none sm:px-5";
  const on = dark
    ?"border-paper bg-paper text-ink"
    :"border-ink bg-ink text-paper";
  const off = dark
    ?"border-paper/50 text-paper/85 hover:border-paper"
    :"border-ink/50 text-ink/80 hover:border-ink";

  return (
    <form
      id={id}
      onSubmit={submit}
      noValidate
      className={`w-full max-w-[620px] ${dark ?"[&_.field]:!border-paper/70 [&_.field]:!text-paper [&_.field::placeholder]:!text-paper/45" :""}`}
    >
      <div role="tablist" className="flex gap-2">
        {(
          [
            ["vin", LOOKUP.tabVin],
            ["plate", LOOKUP.tabPlate],
          ] as const
        ).map(([k, label]) => (
          <button
            key={k}
            role="tab"
            type="button"
            aria-selected={tab === k}
            onClick={() => {
              setTab(k);
              setInvalid(false);
            }}
            className={`${tabBase} ${tab === k ? on : off}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-5">
        {tab ==="vin" ? (
          <div>
            <label htmlFor={`${id}-vin`} className="field-label">{LOOKUP.tabVin}</label>
            <input
              id={`${id}-vin`}
              aria-label={LOOKUP.vinPlaceholder}
              value={vin}
              onChange={(e) => {
                setVin(
                  e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0, 17)
                );
                setInvalid(false);
              }}
              placeholder={LOOKUP.vinPlaceholder}
              aria-invalid={invalid}
              autoComplete="off"
              spellCheck={false}
              className="field !!tracking-[0.18em] sm:!"
            />
            <button
              type="button"
              onClick={() => setShowWhere((s) => !s)}
              aria-expanded={showWhere}
              className={`label mt-3 inline-flex items-center gap-2 underline underline-offset-4 ${
                dark ? "text-paper/75 hover:text-paper" : "text-stone hover:text-signal"
              }`}
            >
              {LOOKUP.where}
              <span
                aria-hidden="true"
                className={`inline-block text-[9px] transition-transform ${
                  showWhere ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {showWhere && (
              <div className="mt-3">
                <VinLocations dark={dark} />
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-[1fr_96px] gap-4">
            <div>
              <label htmlFor={`${id}-plate`} className="field-label">Plate Number</label>
              <input
                id={`${id}-plate`}
                aria-label="License plate"
                value={plate}
                onChange={(e) => {
                  setPlate(e.target.value.toUpperCase().slice(0, 10));
                  setInvalid(false);
                }}
                placeholder="ENTER PLATE NUMBER"
                aria-invalid={invalid && !plate.trim()}
                autoComplete="off"
                className="field"
              />
            </div>
            <div>
              <label htmlFor={`${id}-state`} className="field-label">State</label>
              <select
                id={`${id}-state`}
                aria-label="State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setInvalid(false);
                }}
                aria-invalid={invalid && !state}
                className={`field cursor-pointer ${text} ${dark ?"[&>option]:text-ink" :""}`}
              >
                <option value="">—</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-email`} className="field-label">{LOOKUP.email}</label>
            <input
              id={`${id}-email`}
              type="email"
              aria-label={LOOKUP.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={LOOKUP.email}
              autoComplete="email"
              className="field"
            />
          </div>
          <div>
            <label htmlFor={`${id}-phone`} className="field-label">{LOOKUP.phone}</label>
            <input
              id={`${id}-phone`}
              type="tel"
              aria-label={LOOKUP.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={LOOKUP.phone}
              autoComplete="tel"
              className="field"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`label group mt-7 flex w-full items-center justify-between gap-4 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:min-w-[300px] ${
          dark
            ?"bg-signal text-paper hover:bg-paper hover:text-ink"
            :"bg-ink text-paper hover:bg-signal"
        }`}
      >
        {LOOKUP.submit}
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
