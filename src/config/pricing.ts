/**
 * Central pricing configuration — the ONLY place plans, prices, limits and
 * billing details are defined. Home, /vehicle-history, /pricing, the checkout
 * modal and the Terms page all read from here.
 */

export type Billing =
  | { type: "one-time"; label: string }
  | { type: "subscription"; period: "month"; label: string };

export type PlanConfig = {
  /** Stable id, also sent to checkout as the `plan` parameter. */
  id: string;
  kind: "sticker" | "report";
  name: string;
  /** Price in USD. */
  price: number;
  billing: Billing;
  /** Number of stickers/reports included, or "unlimited". */
  quantity: number | "unlimited";
  /** Human-readable limit shown on the card/Terms (optional). */
  limitLabel?: string;
  tagline?: string;
  body?: string;
  features?: string[];
  cta: string;
  badge?: string;
};

const ONE_TIME: Billing = { type: "one-time", label: "one-time payment" };
const SUBSCRIPTION: Billing = { type: "subscription", period: "month", label: "/subscription" };

export const PLAN_CONFIG: PlanConfig[] = [
  /* ---------------- window stickers ---------------- */
  {
    id: "1-sticker",
    kind: "sticker",
    name: "1 Sticker",
    price: 35,
    billing: ONE_TIME,
    quantity: 1,
    tagline: "Get an authentic factory Monroney window sticker for one vehicle.",
    features: [
      "Original Factory Monroney Window Sticker",
      "Exact Factory Options & Packages with MSRP",
      "Original Equipment & Assembly Specifications",
      "EPA Fuel Economy & Government Safety Ratings",
      "Report Never Expires (Lifetime Account Access)",
      "High-Resolution Printable PDF Document",
      "Instant Online Delivery & PDF Download",
      "24/7 Dedicated Support",
    ],
    cta: "Get 1 Sticker",
  },
  {
    id: "5-stickers",
    kind: "sticker",
    name: "5 Stickers",
    price: 50,
    billing: ONE_TIME,
    quantity: 5,
    badge: "Most Popular",
    tagline: "Perfect for comparing multiple vehicles or private sellers with multiple listings.",
    features: [
      "Original Factory Monroney Window Stickers for 5 Vehicles",
      "Compare Options & MSRP Side-by-Side",
      "Exact Factory Options & Packages",
      "Original Equipment & Assembly Specifications",
      "EPA Fuel Economy & Government Safety Ratings",
      "Reports Never Expire (Use anytime)",
      "High-Resolution Printable PDF Documents",
      "Priority Customer Care Support",
    ],
    cta: "Get 5 Stickers",
  },
  {
    id: "unlimited-window-stickers",
    kind: "sticker",
    name: "Unlimited Window Stickers",
    price: 29.99,
    billing: SUBSCRIPTION,
    quantity: "unlimited",
    limitLabel: "Unlimited Stickers / Month",
    tagline: "Best for dealerships and professionals needing continuous access to factory stickers.",
    features: [
      "Unlimited Original Factory Window Stickers",
      "Exact Factory Options & Packages with MSRP",
      "Original Equipment & Assembly Specifications",
      "EPA Fuel Economy & Government Safety Ratings",
      "Reports Never Expire (Saved in Account)",
      "High-Resolution Printable PDF Documents",
      "Direct Email Delivery + Live Dashboard",
      "Priority 24/7 Dedicated Support",
    ],
    cta: "Get Unlimited Access",
  },

  /* ---------------- vehicle history reports ---------------- */
  {
    id: "1-report",
    kind: "report",
    name: "1 Report",
    price: 35,
    billing: ONE_TIME,
    quantity: 1,
    tagline: "Full detailed vehicle history report including the current market value of the vehicle.",
    features: [
      "Vehicle specs",
      "Vehicle usage",
      "Auction records",
      "Accident records",
      "Past sales history",
      "Flood/Lemon check",
      "Multiple owners",
    ],
    cta: "Get 1 Report",
  },
  {
    id: "2-reports",
    kind: "report",
    name: "2 Reports",
    price: 50,
    billing: ONE_TIME,
    quantity: 2,
    tagline: "Full detailed vehicle history reports including the current market value of the vehicles.",
    cta: "Get 2 Reports",
  },
  {
    id: "5-reports",
    kind: "report",
    name: "5 Reports",
    price: 70,
    billing: ONE_TIME,
    quantity: 5,
    cta: "Get 5 Reports",
  },
  {
    id: "unlimited-vin-check",
    kind: "report",
    name: "Unlimited VIN Check",
    price: 29.99,
    billing: SUBSCRIPTION,
    quantity: "unlimited",
    limitLabel: "Unlimited VIN Checks / Month",
    badge: "Most Popular",
    body: "Unlimited access to basic reports. Special 50% discount on full premium reports. Free VIN decoding, recall check, and maintenance checks. Dashboard to manage your reports. Early access to new features.",
    cta: "Get Unlimited Access",
  },
];

/* ---------------- display helpers ---------------- */

/** Shape consumed by the pricing cards (derived, never hand-written). */
export type Plan = {
  id: string;
  name: string;
  rate?: string;
  tagline?: string;
  body?: string;
  price: string;
  unit?: string;
  limitLabel?: string;
  features?: string[];
  cta: string;
  badge?: string;
};

export const formatPrice = (n: number) =>
  "$" + (Number.isInteger(n) ? String(n) : n.toFixed(2));

/** "$10/sticker" for multi-unit one-time packs, computed from price ÷ quantity. */
const perUnit = (p: PlanConfig) => {
  if (p.billing.type !== "one-time" || typeof p.quantity !== "number" || p.quantity < 2) return undefined;
  const each = p.price / p.quantity;
  return `${formatPrice(Number.isInteger(each) ? each : Number(each.toFixed(2)))}/${p.kind}`;
};

export const toDisplayPlan = (p: PlanConfig): Plan => ({
  id: p.id,
  name: p.name,
  rate: perUnit(p),
  tagline: p.tagline,
  body: p.body,
  price: formatPrice(p.price),
  unit: p.billing.label,
  limitLabel: p.limitLabel,
  features: p.features,
  cta: p.cta,
  badge: p.badge,
});

export const plansOfKind = (kind: PlanConfig["kind"]) => PLAN_CONFIG.filter((p) => p.kind === kind);
export const STICKER_PLANS: Plan[] = plansOfKind("sticker").map(toDisplayPlan);
export const REPORT_PLANS: Plan[] = plansOfKind("report").map(toDisplayPlan);

/** Plain-language billing description, used on the Terms page. */
export const describeBilling = (p: PlanConfig) =>
  p.billing.type === "subscription"
    ? `${formatPrice(p.price)} per ${p.billing.period}, billed every ${p.billing.period} until cancelled`
    : `${formatPrice(p.price)}, one-time payment`;

/** Plain-language limit description, used on the Terms page. */
export const describeLimit = (p: PlanConfig) => {
  if (p.limitLabel) return p.limitLabel;
  const noun = p.kind === "sticker" ? "Sticker" : "Report";
  return `${p.quantity} ${noun}${p.quantity === 1 ? "" : "s"}`;
};
