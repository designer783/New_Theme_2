/**
 * Central site configuration.
 * Change the brand / domain / contact details here and every page
 * (header, footer, contact, terms, checkout, titles…) updates automatically.
 */
const domain = "detailedstickersheet.com";

export const SITE_CONFIG = {
  /** Public brand name shown across the site. */
  name: "Detailed Sticker Sheet",
  domain,
  /** Canonical site URL — always ends with a trailing slash. */
  url: `https://${domain}/`,
  contact: {
    phone: "(866) 593-4553",
    phoneHref: "tel:+18665934553",
    email: `support@${domain}`,
    hours: "Open 24/7",
  },
} as const;

/** Absolute URL on the configured site, e.g. siteUrl("checkout"). */
export const siteUrl = (path = "") => SITE_CONFIG.url + path.replace(/^\//, "");
