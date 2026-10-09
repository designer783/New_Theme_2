import { useId } from "react";
import {
  COUNTRIES,
  formatDial,
  formatNational,
  getCountry,
  phonePlaceholder,
} from "../data/countries";

/**
 * Phone input with a country-code dropdown. Fully controlled: the parent owns
 * the selected ISO country and the (formatted) national number so it can
 * auto-select the country from the visitor's location and still let the user
 * override it.
 */
export function PhoneField({
  id,
  label,
  country,
  value,
  onCountryChange,
  onValueChange,
  dark = false,
}: {
  id: string;
  label: string;
  country: string;
  value: string;
  onCountryChange: (iso: string) => void;
  onValueChange: (formatted: string) => void;
  dark?: boolean;
}) {
  const c = getCountry(country);
  const selectId = useId();
  return (
    <div className="flex min-w-0 items-stretch gap-2">
      {/* The native <select> sits invisibly over a compact "US +1" label, so it
          keeps the OS-native picker (great on mobile) in a small footprint. */}
      <div className="field relative !w-[104px] shrink-0 !px-3 focus-within:!border-signal">
        <label htmlFor={selectId} className="sr-only">
          Country code
        </label>
        <div
          aria-hidden="true"
          className="pointer-events-none flex h-full items-center justify-between gap-1 text-[15px] tracking-normal"
        >
          <span className="truncate">
            {c.iso} {formatDial(c)}
          </span>
          <span className="text-[9px]">▼</span>
        </div>
        <select
          id={selectId}
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          className={`absolute inset-0 h-full w-full cursor-pointer opacity-0 ${dark ? "[&>option]:text-ink" : ""}`}
        >
          {COUNTRIES.map((x) => (
            <option key={x.iso} value={x.iso}>
              {x.name} ({formatDial(x)})
            </option>
          ))}
        </select>
      </div>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        aria-label={label}
        value={value}
        onChange={(e) => onValueChange(formatNational(c, e.target.value))}
        placeholder={phonePlaceholder(c)}
        autoComplete="tel-national"
        className="field min-w-0 flex-1"
      />
    </div>
  );
}
