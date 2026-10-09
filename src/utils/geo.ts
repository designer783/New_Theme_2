import { useEffect, useState } from "react";
import { hasCountry } from "../data/countries";

export type Geo = {
  /** ISO 3166-1 alpha-2, e.g. "US". */
  country?: string;
  /** Region/state code, e.g. "TX" (only reliable for US/CA). */
  region?: string;
};

const CACHE_KEY = "dss-geo";
const TIMEOUT_MS = 3500;

let inflight: Promise<Geo> | null = null;

async function getJson(url: string): Promise<Record<string, unknown>> {
  const ctl = new AbortController();
  const timer = window.setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctl.signal, cache: "force-cache" });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } finally {
    window.clearTimeout(timer);
  }
}

const upper = (v: unknown) => (typeof v === "string" ? v.toUpperCase() : undefined);

/** Region from the browser locale (e.g. "en-GB" → "GB") — last-resort fallback. */
function localeCountry(): string | undefined {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    const m = /[-_]([A-Za-z]{2})$/.exec(l ?? "");
    if (m && hasCountry(m[1].toUpperCase())) return m[1].toUpperCase();
  }
  return undefined;
}

async function lookup(): Promise<Geo> {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (raw) return JSON.parse(raw) as Geo;
  } catch {
    /* storage unavailable */
  }

  let geo: Geo = {};
  // Two independent HTTPS/CORS IP-geolocation providers; first success wins.
  const providers: [string, (j: Record<string, unknown>) => Geo][] = [
    ["https://ipapi.co/json/", (j) => ({ country: upper(j.country_code), region: upper(j.region_code) })],
    ["https://ipwho.is/", (j) => ({ country: upper(j.country_code), region: upper(j.region_code) })],
  ];
  for (const [url, pick] of providers) {
    try {
      const g = pick(await getJson(url));
      if (hasCountry(g.country)) {
        geo = g;
        break;
      }
    } catch {
      /* try next provider */
    }
  }

  if (!geo.country) geo = { country: localeCountry() };

  if (geo.country) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(geo));
    } catch {
      /* ignore */
    }
  }
  return geo;
}

/** Resolves once per page load; never rejects. */
export const detectGeo = (): Promise<Geo> => (inflight ??= lookup().catch(() => ({})));

/**
 * Best-effort visitor location. Returns `{}` until (and unless) detection
 * succeeds. The lookup is deferred until the browser is idle so it never
 * competes with first paint.
 */
export function useGeo(): Geo {
  const [geo, setGeo] = useState<Geo>({});
  useEffect(() => {
    let alive = true;
    const run = () => detectGeo().then((g) => alive && setGeo(g));
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (h: number) => void;
    };
    if (w.requestIdleCallback) {
      const h = w.requestIdleCallback(run, { timeout: 1500 });
      return () => {
        alive = false;
        w.cancelIdleCallback?.(h);
      };
    }
    const t = window.setTimeout(run, 300);
    return () => {
      alive = false;
      window.clearTimeout(t);
    };
  }, []);
  return geo;
}
