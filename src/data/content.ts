/**
 * APPROVED CONTENT — LOCKED.
 * Transcribed from https://digitalbuildsheetsep282026.vercel.app/ (rendered DOM).
 * The only edits are brand/domain replacement:
 *   "Digital Build Sheet"  -> "Detailed Sticker Sheet"
 *   digitalbuildsheet.com  -> detailedstickersheet.com
 * Brand name, domain and contact details now come from ../config/site, and
 * every plan/price comes from ../config/pricing.
 */
import { SITE_CONFIG } from "../config/site";
import { STICKER_PLANS, REPORT_PLANS, type Plan } from "../config/pricing";

export const SITE = SITE_CONFIG.url;
export const BRAND = SITE_CONFIG.name;
const OLD = "https://digitalbuildsheetsep282026.vercel.app/";

export type Page =
  | "home"
  | "vehicle-history"
  | "sample"
  | "pricing"
  | "contact"
  | "login"
  | "terms"
  | "privacy";

/* ---------------- header / footer ---------------- */

export const NAV: { label: string; page: Page }[] = [
  { label: "Vehicle History", page: "vehicle-history" },
  { label: "Sample Report", page: "sample" },
  { label: "Pricing", page: "pricing" },
  { label: "Contact Us", page: "contact" },
];

export const FOOTER = {
  blurb:
    "Vehicle documentation for sellers. Original factory window stickers, build sheets, ownership history, and verified records to help you present your vehicle with confidence.",
  trust: ["256-Bit SSL Encrypted", "NMVTIS Certified"],
  navTitle: "Platform Navigation",
  nav: [
    { label: "Home", page: "home" as Page },
    { label: "Vehicle History", page: "vehicle-history" as Page },
    { label: "Sample Vehicle Reports", page: "sample" as Page },
    { label: "Pricing", page: "pricing" as Page },
    { label: "Contact Support", page: "contact" as Page },
  ],
  contactTitle: "Contact & Headquarters",
  phone: SITE_CONFIG.contact.phone,
  phoneHref: SITE_CONFIG.contact.phoneHref,
  email: SITE_CONFIG.contact.email,
  hours: SITE_CONFIG.contact.hours,
  legalTitle: "Legal & Trust",
  legal: [
    { label: "Terms & Conditions", page: "terms" as Page },
    { label: "Privacy Policy", page: "privacy" as Page },
    { label: "Customer Login", page: "login" as Page },
  ],
  copyright: `© 2026 ${SITE_CONFIG.name}. All rights reserved.`,
};

/* ---------------- lookup form ---------------- */

export const LOOKUP = {
  tabVin: "By VIN",
  tabPlate: "By US License Plate",
  vinPlaceholder: "ENTER VIN NUMBER *",
  platePlaceholder: "ENTER PLATE NUMBER *",
  where: "Where is the VIN?",
  vinHint:
    "Find your VIN on the driver-side dashboard, the driver-side door jamb, or your vehicle registration/title.",
  vinLocations: [
    {
      title: "Driver-side dashboard",
      body: "Look through the windshield at the lower corner on the driver's side.",
    },
    {
      title: "Driver-side door jamb",
      body: "Open the driver's door and check the label on the door frame.",
    },
    {
      title: "Registration or title",
      body: "Printed on your vehicle registration, title and insurance card.",
    },
  ],
  vinExample: "WAUFFAFC5HN007408",
  vinInvalid: "Enter the full 17-character VIN.",
  plateInvalid: "Enter your plate number and choose a state.",
  loading: "Searching...",
  email: "Enter Your Email Address",
  phone: "Enter Your Phone Number",
  submit: "Check Vehicle Records",
};

/* ---------------- home ---------------- */

export const HERO = {
  eyebrow: "Original Factory Build Documentation",
  title: "Before You Sell It, Know What Makes It Yours",
  body: "There could be valuable information about your vehicle that you don't know yet. Enter your VIN to uncover the original window sticker and build sheet information, including factory options, packages, and original MSRP. Know exactly what you're selling before you price it.",
  image: OLD + "window-sticker-hero.webp",
  imageAlt: "Original Window Sticker and Build Sheet Preview",
  badges: [
    "Factory-Verified Data",
    "Instant Delivery",
    "PDF & Web Format",
    "Any Make or Model",
  ],
};

export const FIND = {
  kicker: "What You'll Find on Every Window Sticker",
  title: "Discover Your Vehicle's Original Factory Build",
  body: "Every vehicle leaves the factory with a unique combination of equipment. A window sticker reveals exactly what your vehicle was built with, helping you understand its true original configuration.",
  items: [
    {
      title: "Original Equipment & Specifications",
      body: "Confirm your engine type, transmission, drivetrain, and standard equipment. Documenting these details helps you build a highly accurate description for your listing.",
    },
    {
      title: "Factory Options & Packages",
      body: "Did your vehicle come with a premium technology package, sport suspension, or upgraded interior? Uncovering these factory options helps you identify valuable features that make your vehicle stand out.",
    },
    {
      title: "Original MSRP",
      body: "See what the vehicle cost when it was brand new, including itemized pricing for optional equipment. This provides valuable context when deciding how to position your current asking price.",
    },
    {
      title: "Original Specifications",
      body: "Review the official factory specifications, including exterior paint codes, interior trim details, and specific technical measurements as they were originally recorded.",
    },
    {
      title: "Fuel & Efficiency Ratings",
      body: "Access the original EPA ratings for city, highway, and combined MPG. This information is often requested and having the official numbers documented adds credibility to your listing.",
    },
    {
      title: "Safety & Warranty Details",
      body: "Check original safety ratings and manufacturer warranty terms. If your vehicle still falls within transferable coverage periods, this is crucial information to know before you sell.",
    },
  ],
};

export const SAMPLES = {
  kicker: "Sample Build Documentation",
  title: "See the Information You Could Uncover",
  body: "Click any vehicle below to view a sample window sticker. See exactly what kind of original factory information you can discover about your own vehicle.",
  cta: "View Window Sticker",
  vehicles: [
    {
      name: "2017 Audi S6",
      image: OLD + "Thumbnail-1.webp",
      vin: "WAUFFAFC5HN007408",
      msrp: "$70,900",
      exterior: "Brilliant Black",
      interior: "Black w/Valcona Leather Seating Surfaces",
      href: SITE + "sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC",
    },
    {
      name: "2020 Ford F-150",
      image: OLD + "Thumbnail-2.webp",
      vin: "1FTFW1RG6LFA12962",
      msrp: "$56,440",
      exterior: "Agate Black Metallic",
      interior: "Blue Accent w/Recaro Unique Leather Insert",
      href: SITE + "sticker/vin/1FTFW1RG6LFA12962-A839A839-4848-4C2A-64E7-90517C0A1DC1",
    },
    {
      name: "2022 Mercedes-Benz GLA 250",
      image: OLD + "Thumbnail-3.webp",
      vin: "W1N4N4HB1NJ342468",
      msrp: "$38,400",
      exterior: "Digital White Metallic",
      interior: "Titanium Gray/Black w/Leather Upholstery",
      href: SITE + "sticker/vin/W1N4N4HB1NJ342468-8F748F74-6D6D-2406-1E54-BD17CA2AD529",
    },
  ],
};

export const CLASSICS = {
  kicker: "Classic & Older Vehicle Documentation",
  title: "Don't Leave Value on the Table",
  body: "For older, enthusiast, and highly-optioned vehicles, original build information can be incredibly difficult to find. Many sellers list their vehicles without knowing exactly what factory equipment is installed, potentially leaving money on the table. A window sticker helps you confirm your vehicle's original configuration so you can price and present it accurately.",
  quote:
    "“You can't effectively price a vehicle if you don't know exactly what it was built with. Documentation is the key to understanding its true value.”",
};

export const SELLERS = {
  kicker: "For Vehicle Sellers",
  title: "Why Invest in Your Vehicle's Documentation?",
  body: "The more you know about your vehicle, the better prepared you are to present its value.",
  items: [
    {
      title: "Discover What You Own",
      body: "You might be surprised by what your vehicle was originally equipped with. Uncover factory options, special packages, and specific trim details you may not have been aware of.",
    },
    {
      title: "Price with Confidence",
      body: "When you understand exactly what your vehicle cost new and what options it includes, you have better information when deciding how to position your asking price in the current market.",
    },
    {
      title: "Create a Better Listing",
      body: "Move beyond a generic description. Use the exact factory terminology, package names, and specifications to write a detailed, compelling listing that attracts serious interest.",
    },
    {
      title: "Document the Details",
      body: "Have the original specifications in hand. Instead of guessing about engine codes or paint colors, you'll have the documented facts about your vehicle's factory configuration.",
    },
    {
      title: "Present a Complete Story",
      body: "A window sticker provides the foundation of your vehicle's history. By showing what it was from day one, you create a more professional and thorough presentation of your investment.",
    },
    {
      title: "Understand What Makes It Yours",
      body: "Every factory build is a little different. Discover the specific combination of features that makes your particular vehicle unique before you pass it on to the next owner.",
    },
  ],
};

/* ---------------- pricing (shared by home, pricing, vehicle history) ---------------- */

export type { Plan };

export const PRICING = {
  kicker: "Clear & Transparent Pricing",
  title: "Vehicle Documentation Packages",
  body: "Choose the package that best fits your needs. Purchase credits that never expire and pull documentation whenever you need it.",
  tabStickers: "Window Stickers",
  tabReports: "Vehicle History",
  stickers: STICKER_PLANS,
  reports: REPORT_PLANS,
  notes: [
    {
      title: "Credits Never Expire",
      body: "Purchase now and use your credits whenever you're ready to sell.",
    },
    {
      title: "Instant PDF & Web Delivery",
      body: "Generate your window sticker or vehicle history report in seconds, ready to share with buyers.",
    },
    {
      title: "NMVTIS & DMV Certified",
      body: "Direct access to official federal databases, state DMVs, and factory databases.",
    },
  ],
  faq: {
    kicker: "Got Questions?",
    title: "Frequently Asked Questions",
    body: "Everything you need to know about our vehicle reports and billing.",
    items: [
      {
        q: "Do purchased vehicle report credits expire?",
        a: `No! All credits purchased on ${BRAND} never expire. You can buy a 2-pack or 5-pack today and use them whenever you find a car you want to inspect.`,
      },
      {
        q: "What is the difference between a Vehicle History Report and a Window Sticker?",
        a: "A Vehicle History Report provides title brands, ownership timeline, collision history, and odometer readings. A Window Sticker reproduces the original factory Monroney label showing every standard option, package code, MSRP invoice, and EPA fuel ratings as the vehicle left the factory.",
      },
      {
        q: `How does ${BRAND} obtain original factory specs?`,
        a: "We decode manufacturer build databases, NMVTIS federal registries, state DMV records, and official OEM build sheets to reconstitute complete factory equipment and pricing.",
      },
      {
        q: "Can I print or save my reports as a PDF?",
        a: "Yes, every generated report and Monroney window sticker includes a direct one-click PDF export and full color print layout formatted specifically for standard letter size paper.",
      },
      {
        q: "What if my VIN has no data?",
        a: "In the rare event that a VIN cannot be decoded by our database, our 24/7 customer support will either manually research the archives for your vehicle or issue an immediate replacement credit.",
      },
    ],
  },
};

export const FINAL = {
  title: "What Was Your Vehicle Built With?",
  body: "Enter your VIN to uncover its original factory window sticker.",
  cta: "Look Up Your Window Sticker",
};

/* ---------------- vehicle history page ---------------- */

export const HISTORY = {
  eyebrow: "Vehicle History Report",
  eyebrow2: "Ownership, Title & Mileage Records",
  title: "Know Your Vehicle's Full Story Before You Sell",
  body: "Before you decide what your vehicle is worth and how you want to present it, you should know as much as possible about it. A vehicle history report gathers ownership records, title status, mileage verification, and more — so you're working with the full picture, not assumptions.",
  docKicker: "Vehicle History Documentation",
  docTitle: "What Can You Learn About Your Vehicle?",
  docBody:
    "A vehicle history report pulls together ownership records, title status, mileage verification, and more. This is the information you should review before deciding how to position and price your vehicle.",
  counterOf: "of 9",
  /** Preview image per tab, index-aligned with `tabs`. */
  tabImages: [
    "images/history/auction-records.webp",
    "images/history/sales-listing.webp",
    "images/history/vehicle-usage.webp",
    "images/history/ownership-history.webp",
    "images/history/title-brand.webp",
    "images/history/accident-history.webp",
    "images/history/stolen-vehicle.webp",
    "images/history/odometer-rollback.webp",
    "images/history/loan-and-lien.webp",
  ],
  tabs: [
    { 
      label: "Auction Records", 
      name: "Auction Documentation", 
      badge: "10 Photos",
      title: "Auction Records with Photos",
      body: "If your vehicle has been through an auction at any point, this section documents that history. Knowing this upfront helps you understand how the vehicle was previously valued and what condition it was in at that time.",
      points: [
        "Auction condition grade and final bid amounts",
        "Key availability and engine start status at time of auction",
        "Title type and any noted damage at time of sale",
        "Auction location and seller classification (insurance, dealer, or private)",
        "Up to 10 vehicle photos from the auction, when available"
      ]
    },
    { 
      label: "Sales Listing", 
      name: "Listing History", 
      badge: "With Photos",
      title: "Historical Sales Listings",
      body: "Review historical dealership and private seller listings. This helps track the vehicle's asking price over time and allows you to compare past listing descriptions with its current condition.",
      points: [
        "Historical asking prices and dealership information",
        "Dates and locations of previous listings",
        "Mileage recorded at the time of each listing",
        "Photos and descriptions from past sales"
      ]
    },
    { 
      label: "Vehicle Usage", 
      name: "Usage Documentation", 
      badge: "Fleet/Personal",
      title: "Documented Vehicle Usage",
      body: "Understand how the vehicle was primarily used by previous owners. Knowing if a vehicle was used for personal commuting, fleet operations, or as a rental can significantly impact its overall value and expected wear.",
      points: [
        "Personal, corporate fleet, or rental usage designation",
        "Taxi, police, or emergency vehicle history",
        "Commercial or lease usage records"
      ]
    },
    { 
      label: "Ownership History", 
      name: "Ownership Records", 
      badge: "Tenure & State",
      title: "Detailed Ownership Records",
      body: "A complete timeline of the vehicle's past owners. Tracking the number of owners, the duration they held the vehicle, and the states where it was registered provides crucial context for its maintenance history.",
      points: [
        "Total number of previous owners",
        "Duration of ownership for each period",
        "States and regions where the vehicle was registered",
        "Estimated miles driven by each owner"
      ]
    },
    { 
      label: "Title Status", 
      name: "Title Verification", 
      badge: "60+ Checks",
      title: "Comprehensive Title Verification",
      body: "We check the vehicle's title against 60+ historical brands. A clean title is essential for ensuring the vehicle can be legally sold, registered, and insured without complications.",
      points: [
        "Salvage, rebuilt, or junk title checks",
        "Flood, hail, and fire damage title brands",
        "Lemon law buybacks and manufacturer recalls",
        "Verification across 50-state DMV databases"
      ]
    },
    { 
      label: "Accident Records", 
      name: "Collision Records", 
      badge: "Date & Place",
      title: "Reported Collision Records",
      body: "Review all reported accidents, damage, and collision events. This section helps you identify past structural repairs or airbag deployments that might not be visible during a standard inspection.",
      points: [
        "Dates and locations of reported accidents",
        "Severity of damage and points of impact",
        "Airbag deployment records",
        "Structural damage and repair estimates"
      ]
    },
    { 
      label: "Theft Records", 
      name: "Theft Verification", 
      badge: "Theft Check",
      title: "Theft & Recovery Verification",
      body: "Ensure the vehicle has not been reported stolen or has a documented theft recovery history. A clear theft record protects you from potential legal issues and insurance complications.",
      points: [
        "Active theft reports and police records",
        "Theft recovery dates and condition at recovery",
        "Verification against NICB and federal databases"
      ]
    },
    { 
      label: "Odometer Check", 
      name: "Mileage Verification", 
      badge: "Mileage Verified",
      title: "Verified Mileage Records",
      body: "Verify the accuracy of the vehicle's odometer readings over time. Documented mileage entries help protect against odometer rollback fraud and confirm the true wear on the vehicle.",
      points: [
        "Chronological mileage readings from service and registration",
        "Odometer rollback and discrepancy checks",
        "Exceeds mechanical limits title brands",
        "Average miles driven per year"
      ]
    },
    { 
      label: "Loan & Lien", 
      name: "Financial Status", 
      badge: "Lender Check",
      title: "Open Loan & Lien Checks",
      body: "Verify whether there are any open loans or liens against the vehicle. Selling or buying a vehicle with an active lien requires additional steps to clear the title transfer.",
      points: [
        "Current open liens and financial encumbrances",
        "Historical loan records and payoffs",
        "Impound or mechanic's lien checks"
      ]
    }
  ],
  buildKicker: "More Than Just a History Check",
  buildTitle: "Build a Complete Understanding of Your Vehicle",
  buildBody:
    "Our reports pull from state DMV records, federal databases, manufacturer data, and auction archives. The result is a consolidated view of your vehicle's background — so you're making decisions based on documented information, not guesswork.",
  buildItems: [
    {
      title: "Vehicle Specifications",
      body: "Body style, engine, fuel type, transmission, and factory-installed options. Understand the full technical profile of your vehicle so you can describe it accurately and completely.",
    },
    {
      title: "Title Verification",
      body: "Verified against state DMV, federal, insurance, and auction databases. Knowing your vehicle's title status is essential before you begin pricing or negotiating.",
    },
    {
      title: "Accident & Damage Records",
      body: "Checked against damage and collision databases in the United States and Canada. Knowing what's on record helps you understand the vehicle's condition history and factor it into your pricing.",
    },
    {
      title: "Market Value Data",
      body: "See how similar vehicles are priced across listing sites in North America. This helps you understand where your vehicle sits in the market and make a more informed pricing decision.",
    },
    {
      title: "Odometer Records",
      body: "All available mileage records from state DMVs, inspections, and service databases. Confirming your vehicle's mileage is consistent and documented gives you confidence when discussing it.",
    },
    {
      title: "Ownership & Service Records",
      body: "Number of previous owners, ownership duration, and available service records in chronological order. Understanding how the vehicle has been cared for over time adds depth to your knowledge of it.",
    },
  ],
  stickerKicker: "Original Factory Build Data",
  stickerTitle: "Complete the Picture with a Window Sticker",
  stickerBody:
    "A vehicle history report tells you what happened over time. A window sticker tells you what the vehicle was from day one — its original factory configuration, options, MSRP, EPA ratings, and warranty terms. Together, they give you a complete understanding of the vehicle you're selling. For older and enthusiast vehicles, this original build information can be especially difficult to find on your own.",
  stickerCta: "Get Your Window Sticker",
};

export const REVIEWS = {
  kicker: "Verified Customer Reviews",
  title: "What Our Customers Say",
  body: `Sellers, collectors, dealership managers, and individual owners who used ${BRAND} to document their vehicles and present them with confidence.`,
  rating: "4.8",
  basedOn: "Based on 150+ reviews",
  verified: "Verified Review",
  verifiedShort: "Verified",
  items: [
    {
      quote:
        "“This vehicle history report has everything I needed to entice a buyer. I am trying to sell my vehicle and it is a great alternative to Carfax at a much better rate. Provided complete transparency.”",
      name: "Keith Williams",
      checked: "Checked: 2016 Ford F-150",
    },
    {
      quote:
        "“I got a window sticker for my vehicle and was surprised at how accurate it was and how quickly it was delivered! It was helpful when I sold my vehicle because the buyer wanted to see the exact original packages.”",
      name: "Bobby Hedrick",
      checked: "Checked: 2019 GMC Sierra 1500",
    },
    {
      quote:
        "“Helpful affordable service that offers accurate information about your vehicle. I would choose this over any other vehicle history services. The report flagged prior structural repairs that the seller failed to mention.”",
      name: "Mike Ericson",
      checked: "Checked: 2014 Honda Accord",
    },
    {
      quote:
        "“This website was recommended by several different articles and forums, so I gave it a try while my wife and I searched for a used car. The reports are less expensive and showed full factory equipment.”",
      name: "Chance Snyder",
      checked: "Checked: 2018 Subaru Outback",
    },
    {
      quote:
        "“I had a great experience using this website. The interface is clean, friendly, and gave me all details I needed to buy this car with total peace of mind.”",
      name: "Steve",
      checked: "Checked: 2021 Toyota RAV4 Hybrid",
    },
    {
      quote:
        "“Importing a US vehicle to Egypt can be risky, but this site showed me the exact salvage history, odometer reading at port of export, and auction listing photos.”",
      name: "Muhammad Yaseer",
      checked: "Checked: 2017 Lexus RX 350",
    },
    {
      quote:
        "“Finding original factory specifications for German luxury cars is very hard. This service pulled up the authentic window sticker in minutes. Every option code was 100% matched.”",
      name: "Ali Aljanabi",
      checked: "Checked: 2018 Porsche Macan GTS",
    },
    {
      quote:
        "“We use this site regularly to verify US-spec vehicles shipped to Dubai. The title brands, salvage checks, and damage history records are always up to date.”",
      name: "Ivan Dmitriev",
      checked: "Checked: 2020 Jeep Wrangler Rubicon",
    },
  ],
};

/* ---------------- sample report page ---------------- */

export const SAMPLE_PAGE = {
  kicker: "Live Certified Database Examples",
  title: "Sample Reports & Window Stickers",
  body: "Preview both products on real vehicles: the Vehicle History Report, with records from NMVTIS, 50-state DMVs and police accident logs, and the original Window Sticker / Build Sheet with factory options, packages and MSRP.",
  select: "Choose a vehicle to view its sample report or window sticker",
  record: {
    flag: "Salvage Title",
    incidents: "3 Incident",
    vin: "VIN: 2T1BURHE0FC320645",
    name: "2015 Toyota Corolla S Plus Sedan",
    spec: "1.8L I4 DOHC 16V VVT-i • CVTi-S Automatic • Front-Wheel Drive (FWD) • Sedan 4D",
    viewReport: "View Sample Report",
    viewSheet: "View Window Sticker",
    stats: [
      { label: "Owners", value: "2 Personal" },
      { label: "Accidents", value: "3 Reported" },
      { label: "Odometer", value: "81,352 mi" },
      { label: "Private Party Market", value: "$9,320" },
    ],
    timelineTitle: "Ownership Progression Timeline",
    timeline: [
      {
        owner: "Owner #1 • Personal / Lease",
        place: "Ohio, United States • 2 Years",
        years: "2015 - 2017",
      },
      {
        owner: "Owner #2 • Personal",
        place: "Ohio, United States • 7+ Years",
        years: "2017 - Present",
      },
    ],
    brandsTitle: "50-State Title Brands Check",
    brands: [
      { name: "Salvage / Junk", status: "FLAGGED" },
      { name: "Flood & Water Damage", status: "PASSED" },
      { name: "Fire Damage", status: "" },
      { name: "Hail Damage", status: "" },
      { name: "Odometer Rollback", status: "" },
      { name: "Lemon Law Buyback", status: "" },
      { name: "Rebuilt / Reconstructed", status: "" },
      { name: "Insurance Total Loss", status: "" },
    ],
  },
};

/* ---------------- contact / login ---------------- */

export const CONTACT = {
  kicker: "Customer Support",
  title: `Contact ${BRAND}`,
  body: "Have questions about decoding a specific VIN, need help locating your build sheet, or seeking volume access for your dealership? Our automotive team is ready to assist.",
  phoneTitle: "Toll-Free Support Line",
  phone: SITE_CONFIG.contact.phone,
  phoneHref: SITE_CONFIG.contact.phoneHref,
  phoneNote: SITE_CONFIG.contact.hours,
  emailTitle: "Direct Email",
  email: SITE_CONFIG.contact.email,
  emailNote: "Responses typically within 2-4 hours",
  formTitle: "Send us a Message",
  formBody: "Fill in your details below and our team will get back to you promptly.",
  fields: {
    name: { label: "Full Name *", placeholder: "e.g. Robert Smith" },
    email: { label: "Email Address *", placeholder: "robert@example.com" },
    phone: { label: "Phone Number", placeholder: "(555) 123-4567" },
    vin: { label: "Vehicle VIN (Optional)", placeholder: "17-character VIN" },
    message: {
      label: "How Can We Help You? *",
      placeholder: "Tell us about the vehicle or questions regarding your order...",
    },
  },
  submit: "Send Message",
};

export const LOGIN = {
  title: "Customer Portal Login",
  body: "Access your purchased vehicle history reports & window stickers",
  email: { label: "Email Address", placeholder: "your-email@example.com" },
  password: {
    label: "Password or Order Confirmation #",
    placeholder: "•••••••• or DBS-XXXX",
  },
  submit: "Sign In to Portal",
  alt: "Run VIN Search",
};

export const LEGAL_TITLES: Record<"terms" | "privacy", string> = {
  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
};

export const LEGAL_BODY: Record<"terms" | "privacy", { heading?: string; text: string }[]> = {
  terms: [
    {
      text: `Welcome to ${BRAND}! The representations of our services and products available through this website do not constitute a binding offer. By clicking "SEARCH" or "SHOW ME MY REPORT" or "YES, CONTINUE TO MY REPORT," You agree to be bound to these Terms of Use (the"Agreement"), constituting a legally binding agreement by and between ${BRAND}, (hereinafter, " ${BRAND} " or "We" or "Our") and you (in either case, "You" or "Your") concerning Your use of ${BRAND} website (the "Website") and the services available through the Website (the "Services"). We encourage you to print the Agreement or copy it to your computer's hard drive for your reference. With a customer's order, the customer submits a binding offer for the formation of a contract. Following the order, ${BRAND} will process the customer's order and send a confirmation email to acknowledge the receipt of the customer's order. This acknowledgement of receipt does not constitute an acceptance of the order. The order is accepted with the provision of the requested goods or services. By proceeding to place an order, you are agreeing that you shall indemnify, defend and hold harmless ${BRAND}, its officers, directors, employees and agents, and the entities that have contributed information to or provided services for our Website and/or Products against any and all direct or indirect losses, claims, demands, expenses (including attorneys' fees and cost) or liabilities of whatever nature or kind arising out of your use of our Website and/or Products and your use or distribution of any information obtained there. You will promptly notify us of any such claim. If you do not understand this agreement, or do not agree to be bound by it or the privacy policy, you may not access or use the website or services and you must immediately leave the website and cease using the services`
    },
    {
      heading: `2. PRIVACY POLICY`,
      text: `${BRAND} collects identifying and billing information including name, address, credit card information and e-mail address when consumers register for our services. Any personally identifiable information you provide to us including your email and phone number may be used to notify you of new products, product changes or offer discounts up to 50%. By providing your information, you may also recieve electronic communications, including SMS communications (for informational purposes only) or, email (for all permissible commercial purposes) from ${BRAND} partner firms which may include third party marketing companies, affiliates, advertising agencies, and data aggregation companies regarding our or their services., You may opt-out of receiving electronic communications at any time by following the unsubscribe instructions contained in each communication, but you must contact the third-parties directly to do so.`
    },
    {
      heading: `3. CHANGES TO AGREEMENT AND PRIVACY POLICY`,
      text: `Internet technology and the applicable laws, rules, and regulations change frequently. Accordingly, ${BRAND} reserves the right to change this agreement and its privacy policy at any time upon notice to you, to be given by the posting of a new version or a change notice on the website. It is your responsibility to review this agreement and the privacy policy periodically. If at any time you find either unacceptable, you must immediately leave the website and cease using the services. Unless ${BRAND} obtains your express consent, any revised privacy policy will apply only to information collected by ${BRAND} after such time as the revised Privacy Policy takes effect, and not to information collected under any earlier Privacy Policies.`
    },
    {
      heading: `4. ELIGIBILITY`,
      text: `By using the website or services, you represent and warrant that you are at least 18 years old and are otherwise legally qualified to enter into and form contracts under applicable law. Any individual using the Website or Services on behalf of a company further represents and warrants that they are authorized to act and enter into contracts on behalf of that company. This Agreement is void where prohibited.`
    },
    {
      heading: `5. ${BRAND} ROLE`,
      text: `Without limitation, you agree that ${BRAND} is merely a technology solution that serves as a third-party platform and you use the Website and Services at Your own risk, without limitation and pursuant to Section: ASSUMPTION OF RISK; RELEASE. ${BRAND} role is limited because ${BRAND} is not directly involved in creating or storing the underlying information in our reports. ${BRAND} does not necessarily prescreen the content and/or information provided to users. ${BRAND} does not take or transfer ownership of items or liability attaching thereto. For additional information, please carefully review Section: DISCLAIMERS; LIMITATION OF LIABILITY.`
    },
    {
      heading: `6. LICENSE`,
      text: `Unless otherwise stated, ${BRAND} owns the intellectual property rights for all material on https://www.${BRAND}.com/. All intellectual property rights are reserved. You may view and/or print pages from ${BRAND} for your own personal use subject to restrictions set in these terms and conditions. You must not: — Republish material from https://www.${BRAND}.com/ — Sell, rent or sub-license material from https://www.${BRAND}.com/ — Reproduce, duplicate or copy material from https://www.${BRAND}.com/ — Redistribute content from ${BRAND} (unless content is specifically made for redistribution).`
    },
    {
      heading: `7. NO RELIANCE ON THIRD PARTY CONTENT`,
      text: `The information on the Website is provided for information purposes only. The Website and Services are provided only as a technology solution and shall not be liable for any delay or failure to make available the Report. ${BRAND} does not: — Guarantee the accuracy, completeness, or usefulness of any third-party information accessible on or through the Website; — Adopt, endorse, or accept responsibility for the accuracy or reliability of any opinion, advice or statement made by a third party by means of the Website and Services. Under no circumstances will ${BRAND} be responsible for any loss or damage resulting from your reliance on information or other content posted on the Website or transmitted to or by any third party.`
    },
    {
      heading: `8. ASSUMPTION OF RISK; RELEASE`,
      text: ``
    },
    {
      heading: `9. USER INFORMATION; PASSWORD PROTECTION`,
      text: `To access and/or use the Website and use the Services, You may be asked to provide certain registration details or other information. You represent and warrant that all user information you provide in connection with your use of the Website and Services will be current, complete, and accurate, and that you will update that information as necessary to maintain its completeness and accuracy. If ${BRAND} believes in its sole discretion that the information you provide is not current, complete, or accurate, ${BRAND} has the right to refuse your access to the Website and Services and/or to terminate or suspend your access at any time. You represent and warrant that you will not create a fake account. You may also be asked to provide a user name and a password in connection with your use of certain services. You are entirely responsible for maintaining the confidentiality of your password. You may not use the account, user name, or password of any other member at any time. You agree to notify ${BRAND} immediately of any unauthorized use of your account, user name, or password. ${BRAND} shall not be liable for any loss that you incur as a result of someone else using your password, either with or without your knowledge. You may be held liable for any losses incurred by ${BRAND}, its affiliates, officers, directors, employees, consultants, agents, and representatives due to someone else's use of Your account or password.`
    },
    {
      heading: `10. RESERVED RIGHTS FOR ${BRAND} FEES`,
      text: `You acknowledge and agree that ${BRAND} reserves the right to charge for access to the Website and use of the Services, in accordance with the ${BRAND} Fees that are clearly disclosed throughout the Website. ${BRAND} decision not to exercise any specific right or require performance of any specific obligation under this Agreement, including without limitation the collection of regularly recurring fees from you, shall not affect ${BRAND} subsequent ability to exercise such right or require such performance at any time thereafter. Nor shall ${BRAND} waiver of your breach constitute ${BRAND} waiver of any subsequent breach by you or any other user of the Website and/or Services. By using the Website and/or Services, You authorize ${BRAND}, and/or its payment processor, to charge ${BRAND} fees to the credit card, debit card, or other payment method you provide. ${BRAND} prohibits resale of ${BRAND} or packages or sharing accounts with other users, the website management reserves the right to terminate the user’s account in this case. We offer two different packages. Our $${REPORT_PLANS[0].price} Single Report - You will receive your report for $${REPORT_PLANS[0].price}. Our customer service phone is ${SITE_CONFIG.contact.phone} OR Our Premium Package of ${REPORT_PLANS[1].title} redeemable at any time for $${REPORT_PLANS[1].price} - With your Premium package you will receive access to 25 ${BRAND} reports at a discounted rate redeemable at any time. If you are unhappy with your search results and would like a refund, please contact our customer support they will be happy to immediately issue you a 100% refund, a 20% handling fee will be applied. You can cancel anytime by contacting support at ${SITE_CONFIG.contact.phone} or visting our contact page.`
    },
    {
      heading: `11. THIRD-PARTY WEBSITES`,
      text: ``
    },
    {
      heading: `12. PROHIBITED USES`,
      text: ``
    },
    {
      heading: `13. INTELLECTUAL PROPERTY`,
      text: `You represent and warrant that, when using the Website and Services, You will obey the law and respect the intellectual property rights of others. Your use of the Website and Services is at all times governed by and subject to laws regarding copyright ownership and use of intellectual property generally. You agree not to upload, post, transmit, display, perform, or distribute any content, information or other materials in violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. You hereby represent and warrant that you are the sole and exclusive owner of any user content that you submit to the website. You shall be solely responsible for any violations of any laws and for any infringements of third-party rights caused by your use of the website and services. Company bears the sole burden of proving that content, information or other materials do not violate any laws or third-party rights. (c) Copyrighted Materials; Copyright Notice All content and other materials available through the Website and Services, including without limitation the ${BRAND} logo, design, text, graphics, and other files, and the selection, arrangement, and organization thereof, are either owned by ${BRAND} or are the property of ${BRAND} licensors and suppliers. Except as explicitly provided, neither Your use of the Website and Services nor this Agreement grant You any right, title, or interest in or to any such materials. All Infringement Notices should include the following: — A signature, electronic or physical, of the copyright owner or a person authorized to act on their behalf; — An identification of the copyright claimed to have been infringed; — A description of the nature and location of the material that you claim to infringe your copyright, in sufficient detail to permit ${BRAND} to find and positively identify that material; — Your name, address, telephone number and email address; and a statement by you: (ii) under penalty of perjury, that all of the information contained in your Infringement Notice is accurate, and that you are either the copyright owner or a person authorized to act on their behalf. Infringement Notices should be sent to [] at [] with the subject line "DMCA Notice [INSERT YOUR NAME OR YOUR COMPANY'S NAME]". ${BRAND} will respond to all such notices, including as required or appropriate by removing the offending material or disabling all links to the offending material.`
    },
    {
      heading: `14. DISCLAIMERS; LIMITATION OF LIABILITY`,
      text: `Further, to the maximum extent permitted by law, ${BRAND}, on behalf of itself and its licensors and suppliers, hereby expressly disclaims any and all warranties, express or implied, regarding the website, arising by operation of law or otherwise, including without limitation any and all implied warranties of merchantability, fitness for a particular purpose, non-infringement, no encumbrance, or title, in addition to any warranties arising from a course of dealing, usage, or trade practice. Neither ${BRAND} nor its licensors or suppliers warrant that the website or the services will meet your requirements, or that the operation of the website or the services will be uninterrupted or error-free. the liability of ${BRAND} for damages arising out of the furnishing of services pursuant to this agreement, including without limitation, mistakes, omissions, interruptions, delays, tortious conduct, errors, or other defects, representations, or arising out of the failure to the furnish services, whether caused by acts of commission or omission, or any other damage occurring, shall be limited to the maximum extent permitted by law. ${BRAND} shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for lost profits or lost revenues), whether caused by the acts or omissions of ${BRAND}, ${BRAND} parties, or ${BRAND} users, or their agents or representatives. You agree that your use of the website and services is at your sole risk. you will not hold ${BRAND} or its licensors and suppliers, as applicable, responsible for any loss or damage that results from your access to or use of the website, including without limitation any loss or damage to any of your computers or Data. the information and services may contain bugs, errors, problems, or other limitations. Importantly, you hereby acknowledge that a catastrophic disk failure or other event could result in the loss of all of the data related to your account. you agree and understand that it is your responsibility to back up your data to your personal computer or external storage device and to ensure such backups are secure. The liability of ${BRAND} and its licensors and suppliers is limited to the maximum extent permitted by law. in no event shall ${BRAND} or its licensors or suppliers be liable for special, incidental, or consequential damages, lost profits, lost data or confidential or other information, loss of privacy, costs of procurement of substitute goods or services, failure to meet any duty including without limitation of good faith or of reasonable care, negligence, or otherwise, regardless of the foreseeability of those damages or of any advice or notice given to ${BRAND} or its licensors and suppliers arising out of or in connection with your use of the website or services. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action. Additionally, the maximum liability of ${BRAND} and its licensors and suppliers to you under all circumstances shall be $50.00. You agree that this limitation of liability represents a reasonable allocation of risk and is a fundamental element of the basis of the bargain between ${BRAND} and you. The website and services would not be provided without such limitations. The above disclaimers, waivers and limitations do not in any way limit any other disclaimer of warranties or any other limitation of liability in any other agreement between you and ${BRAND} or between you and any of ${BRAND} licensors and suppliers. Some jurisdictions may not allow the exclusion of certain implied warranties or the limitation of certain damages, so some of the above disclaimers, waivers, and limitations of liability may not apply to you. Unless limited or modified by applicable law, the foregoing disclaimers, waivers and limitations shall apply to the maximum extent permitted, even if any remedy fails its essential purpose. ${BRAND} licensors and suppliers are intended third-party beneficiaries of these disclaimers, waivers, and limitations. No advice or information, whether oral or written, obtained by you through the website or otherwise shall alter any of the disclaimers or limitations stated in this section.`
    },
    {
      heading: `15. YOUR REPRESENTATIONS AND WARRANTIES`,
      text: `You represent and warrant that your use of the Website and Services will be in accordance with this Agreement and any other ${BRAND} policies, and with any applicable laws or regulations.`
    },
    {
      heading: `16. INDEMNITY BY YOU`,
      text: `Without limiting any indemnification provision of this Agreement, You (the "Indemnitor") agree to defend, indemnify and hold harmless ${BRAND} and the ${BRAND} Parties (collectively, the "Indemnities") from and against any and all claims, actions, demands, causes of action, and other proceedings (collectively, "Claims"), including but not limited to legal costs and fees, and providing sole and exclusive control of the defense of any action to ${BRAND}, including the choice of legal counsel and all related settlement negotiations, arising out of or relating to: (i) the relationship between You and ${BRAND}, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory; (ii) Your breach of this Agreement, including without limitation any representation or warranty contained in this Agreement; (iii) Your access to or use of the Website or Services; (iv) Your provision to ${BRAND} or any of the Indemnities of information or other data; or (v) Your violation or alleged violation of any foreign or domestic, international, federal, state, or local law or regulation; or (vi) Your violation or alleged violation of any third party's copyrights, trademarks, or other intellectual property or proprietary rights. The Indemnities each have the individual right, but not the obligation, to participate through counsel of their choice in any defense by You of any Claim as to which You are required to defend, indemnify, or hold harmless any, each, and/or all Indemnities. You may not settle any Claim without the prior written consent of the concerned Indemnified Parties.`
    },
    {
      heading: `17. GOVERNING LAW; JURISDICTION AND VENUE`,
      text: `Any cause of action by you arising out of or relating to the website, services, or this agreement must be instituted within one (1) year after the cause of action arose or be forever waived and barred. All actions shall be subject to the limitations set forth in above. If you and ${BRAND} cannot resolve a Claim through negotiations, either party may elect to have the Claim finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other(s). You hereby acknowledge that without this provision, you would have the right to sue in court with a jury trial or to participate in a class action. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party. (c) Restrictions against Joinder of Claims You and ${BRAND} agree that any arbitration shall be limited to each claim individually. You and ${BRAND} hereby agree that each may only bring claims against the other in your or ${BRAND} individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. if this specific provision is found to be unenforceable, then, to the full extent allowable under applicable law, (1) no arbitration shall be joined with any other arbitration, and (2) there is no right for any claim to be arbitrated on a class-action basis or to employ class action procedures, and (3) there is no right of authority for any dispute to be brought in a purported representative capacity on behalf either of the general public or any other individuals.`
    },
    {
      heading: `18. TERMINATION`,
      text: `without limiting any other provision of this agreement, ${BRAND} reserves the right to, in ${BRAND} sole discretion and without notice or liability, deny use of the website and/or services to any person for any reason or for no reason at all, including without limitation for any breach or suspected breach of any representation, warranty, or covenant contained in this agreement, or of any applicable law or regulation. This Agreement shall automatically terminate in the event that You breach any of this Agreement's representations, warranties, or covenants. Such termination shall be automatic, and shall not require any action by ${BRAND}. You may terminate this Agreement and Your rights hereunder at any time, for any or no reason at all, by providing to ${BRAND} notice of Your intention to do so, in the manner required by this Agreement. Any termination of this Agreement automatically terminates all rights and licenses granted to you under this Agreement, including all rights to use the Website and Services. Upon termination, ${BRAND} may, but has no obligation to, in ${BRAND} sole discretion, rescind any services and/or delete from ${BRAND} systems all Your Personal Information and any other files or information that You made available to ${BRAND} or that otherwise relate to Your use of the Website or Services. Upon termination, you shall cease any use of the Website and Services. Subsequent to termination, ${BRAND} reserves the right to exercise whatever means it deems necessary to prevent your unauthorized use of the Website and Services, including without limitation technological barriers such as IP blocking and direct contact with Your Internet Service Provider. If ${BRAND}, in ${BRAND} discretion, takes legal action against you in connection with any actual or suspected breach of this Agreement, ${BRAND} will be entitled to recover from you as part of such legal action, and You agree to pay, ${BRAND} reasonable costs and attorney's fees incurred as a result of such legal action. The ${BRAND} Parties will have no legal obligation or other liability to You or to any third party arising out of or relating to any termination of this Agreement. Upon termination, all rights and obligations created by this Agreement will terminate, except that Sections 1, 2, 4-9, and 12-23 will survive any termination of this Agreement.`
    },
    {
      heading: `19. NOTICES`,
      text: `All notices required or permitted to be given under this Agreement must be in writing. ${BRAND} shall give any notice by email sent to the most recent email address, if any, provided by the intended recipient to ${BRAND}. You agree that any notice received from ${BRAND} electronically satisfies any legal requirement that such notice be in writing. You bear the sole responsibility of ensuring that your email address on file with ${BRAND} is accurate and current, and notice to you shall be deemed effective upon the sending by ${BRAND} of an email to that address.`
    },
    {
      heading: `20. PARTIAL INVALIDITY`,
      text: `Should any part of this Agreement be declared invalid, void, or unenforceable by a Court of Competent Jurisdiction, such decision shall not affect the validity of any remaining portion hereof, which shall remain in full force and effect, and the parties hereby acknowledge and agree that they would have executed the remaining portion hereof without including the part so declared by a Court of Competent Jurisdiction, to be invalid, void, or unenforceable.`
    },
    {
      heading: `21. GENERAL`,
      text: `This Agreement constitutes the entire agreement between ${BRAND} and You concerning your use of the Website and Services. This Agreement may only be modified by a written amendment signed by an authorized executive of ${BRAND} story or by the unilateral amendment of this Agreement by ${BRAND} and by the posting by ${BRAND} of such amended version. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. This Agreement and all of your rights and obligations hereunder will not be assignable or transferable by you without the prior written consent of ${BRAND}. This Agreement will be binding upon and will inure to the benefit of the parties, their successors, and permitted assigns. You and ${BRAND} are independent contractors, and no agency, partnership, joint venture, or employeeemployer relationship is intended or created by this Agreement. Except for the ${BRAND} Parties and the Indemnified Parties as and to the extent set forth in Sections 8, 14, 16a, 18, 20e, and 23 and in this paragraph, and ${BRAND} licensors and suppliers as to the extent expressly stated in this Agreement, there are no third-party beneficiaries to this Agreement. You acknowledge and agree that any actual or threatened breach of this Agreement or infringement of proprietary or other third-party rights by you would cause irreparable injury to ${BRAND} and ${BRAND} licensors and suppliers, and would therefore entitle ${BRAND} or ${BRAND} licensors or suppliers, as the case may be, to injunctive relief. The headings in this Agreement are for the purpose of convenience only and shall not limit, enlarge, or affect any of the covenants, terms, conditions or provisions of this Agreement.`
    },
  ],
  privacy: [
    {
      text: `EFFECTIVE DATE: 08-06-2019 https://${SITE.replace('https://', '')}/ Your IP Address Each time that you visit the Site, our web server automatically recognizes your IP address and the web page from which you came. Your IP address is used to help identify you and to gather broad demographic information about you. We also use your IP address to help diagnose problems with our servers, to administer the Site and to better serve you in using the products, services and other features associated with the Site. Cookies and Action Tags The first time that a user provides an e-mail address in connection with his/her activities at the Site, we assign an identification number to that e-mail address and deploy a cookie to the applicable user's PC. Whenever that user comes back to the Site using the same PC, the cookie allows the Site to identify the user and to recall the user's e-mail address. If, at any time, a user provides other information in connection with his/her activities on the Site (such as name, address, Vehicle History date, gender, etc.), we may store that information, along with the user's e-mail address, in our user database. We may use the information stored in our database: (a) to effectuate the purpose or transaction for which the information was originally provided by a user; (b) to pre-populate information fields in the event that user wishes to purchase products and/or services or sign up for and/or subscribe to services, promotions or other offers in the future; (c) to ensure that a user will not be repeatedly exposed to the same advertisements, offers and/or promotions while visiting the Site; and/or (d) to, in connection with regular communication with a user, include offers, promotions or advertisements that were historically, or are likely to be, of interest to that user. We also use cookies to anonymously track and target the interests of our users to further enhance the experience on the Site. To find out more about cookies, please visit www.cookiecentral.com. An action tag or a web-beacon (also known as a clear gif or a pixel tag) is a method used to track responses or actions by visitors who view certain advertisements or other information on the Site. Action tags are 1x1 pixel images embedded in a website page that are used to transparently collect information. We may use action tags to count the number of times that visitors click on a particular banner ad or visit the pages of the Site and to provide information about what products/services are viewed or purchased. We reserve the right to retain this cookie and action tag data indefinitely. At no time will we share cookie-related, action-tag-related and/or generated information and/or data with third parties. Personal Information That We Collect From You a) your full name; (b) mailing address; (c) e-mail address; (d) phone number; (e) year of Vehicle History; (f) date of Vehicle History; and/or (g) any other information requested by us on the applicable registration form. We may also use your Personal Information for any promotion-related purpose, and/or marketing and survey purpose, on our own behalf and on behalf of our affiliates and subsidiaries. We may disclose Personal Information to third-party agents and independent contractors that help us create and/or operate any promotions or surveys. You agree that we may contact you at any time with updates and/or any other information that we may deem appropriate for you to receive in connection with your continued use of the Site. We are able to offer our ${BRAND} Products to you, in part, based on your willingness to be reached by our third-party advertisers. Your Personal Information (other than credit card information) will be shared with third-party advertisers. We also use contact information from your Personal Information to send you information about us, our ${BRAND} Products, the Account program and to keep you informed of our other products and services that may be of interest to you and to contact you about your billing account status. Please keep in mind, though, that we do not control, and are not responsible for, the practices of our third-party advertisers and you must contact them directly to opt out of any future communications. If you wish to stop receiving future communications from us, or if you wish to prevent the transfer and/or sale of your Personal Information to third parties (subject to restrictions contained in applicable state and federal law), please see the Removal of Your Information/Opting Out section below. By submitting your Personal Information at the Site, you agree to receive e-mail marketing from ${BRAND} (including other company properties) and our third-party advertisers. In addition, you agree that such act constitutes a purchase, an inquiry and/or an application for purposes of the Amended Telemarketing Sales Rule, 16 CFR 310 et seq. (the "ATSR"). With respect to the ATSR, and notwithstanding that your telephone number may be listed on the Federal Trade Commission's Do-Not-Call List, we retain the right to contact you via telemarketing in accordance with the terms of the ATSR. In addition, by submitting your Personal Information at the Site, you agree to receive SMS-based informational messages from us or our Third-Party Service Providers. As such, notwithstanding that your mobile telephone number may be listed on state and/or federal Do-Not-Call registries, we retain the right to contact you via SMS based messages in accordance with applicable state and federal law. We reserve the right to release current or past Personal Information: (a) in the event that we believe that the Site, the ${BRAND} Products and/or the Account program is/are being or has/have been used in violation of this Privacy Policy, the Terms and Conditions or to commit unlawful acts; (b) if the information is subpoenaed or otherwise requested pursuant to a valid legal proceeding; or (c) if ${BRAND} is sold or acquired. Moreover, you hereby consent to the disclosure of any record or communication to any third-party when we, in our sole discretion, determine the disclosure to be appropriate including, without limitation, sharing your e-mail address with other third-parties for suppression purposes in compliance with the CAN-SPAM Act of 2003, as amended from time to time. Users should also be aware that courts of equity, such as U.S. Bankruptcy Courts, might have the authority under certain circumstances to permit Personal Information to be shared or transferred to third parties without permission. How We Use Demographic Information and Aggregate Data We use demographic information to tailor the Site to the interests of our users. Demographic information is shared with third party advertisers so that they can tailor their advertisements to the appropriate audience. Demographic information may also be shared with other third parties. We reserve the right to provide aggregate or group data about our users for lawful purposes. Aggregate or group data is data that describes the demographics, usage or characteristics of our participants as a group, without disclosing personally identifiable information. By opening an account with us, you agree to allow us to provide such aggregate data to third parties. By agreeing to the terms of this Privacy Policy, you hereby consent to the disclosure of any record or communication to any third party when we, in our sole discretion, determine the disclosure to be appropriate. We may also use the non-personally identifiable information gathered on the Site to perform statistical analysis of user behavior, to analyze and evaluate issues relating to our ${BRAND} Products and/or the Account program. We may link some of this non-personally identifiable information to Personal Information for purposes such as understanding the characteristics of people who use the Site, to improve and market the Site in general and our ${BRAND} Products in particular. Other Websites We provide users with the option to opt-out from receiving information sent via electronic mailings on behalf of third party advertisers. Users may unsubscribe from receiving e-mail at any time by following the instructions contained at the end of every e-mailing. Unsubscribe requests can only be processed if you have registered with us in the first instance. If you have not registered with us and wish to opt out of receiving e-mail from a particular sender, please consult that sender's opt out policies or contact that sender. support@${SITE.replace('https://', '')} No Liability for Unauthorized Changes IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM YOUR USE OF THE SITE OR FOR THE UNAUTHORIZED MODIFICATION OF TEXT OR ADVERTISEMENTS PROVIDED BY US, OUR MARKETING PARTNERS OR ANY OTHER THIRD PARTIES. Your Acceptance of These Terms Clicking Here This Site may contain links to other third-party owned and/or operated websites including, without limitation, the websites of ${BRAND} Third Party Service Providers. ${BRAND} is not responsible for the privacy practices or the content of such websites. In some cases, you may be able to make a purchase through one of these third-party websites. In these instances, you may be required to provide certain information, such as a credit card number, to register or complete a transaction at such website. These third-party websites have separate privacy and data collection practices and ${BRAND} has no responsibility or liability relating to them. Our Security Precautions We endeavor to safeguard and protect our user's information. The privacy of your Personal Information is very important to us. The servers that we store personally identifiable information in are kept in a secure physical environment. We have security measures in place to protect the loss, misuse and alteration of Personal Information under our control. When our registration/application process asks users to enter sensitive information (such as credit card information), and when we store and transmit such sensitive information, that information is encrypted and is protected with SSL encryption software. While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect user all information off-line and online. Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. As a result, while we strive to protect your Personal Information, we cannot ensure or warrant the security of any information that you transmit to us, and you do so at your own risk. However, access to your information is strictly limited, and not accessible to the public. All of our users' information is restricted in our offices. Only employees who need the information to perform a specific job are granted access to Personal Information. Our employees are dedicated to ensuring the security and privacy of all user information. Employees not adhering to our firm policies are subject to disciplinary action. In compliance with applicable federal and state laws, we shall notify you and any applicable regulatory agencies in the event that we learn of an information security breach with respect to your Personal Information. You will be notified via e-mail in the event of such a breach. Please be advised that notice may be delayed in order to address the needs of law enforcement, determine the scope of network damage, and to engage in remedial measures. Minors No information should be submitted to, or posted at, the Site by visitors under eighteen (18) years of age. Persons eighteen (18) years of age and younger are not permitted to access the Site and we do not knowingly collect Personal Information from such individuals. We encourage parents and guardians to spend time online with their children and to participate and monitor the interactive activities of their children. Removal of Your Information/Opting Out support@${SITE.replace('https://', '')}`
    },
  ]
};