import { useCallback, useEffect, useMemo, useState } from "react";
import { Header, Footer, SpecRail, DesignSwitch } from "./components/Chrome";
import { Home } from "./pages/Home";
import { VehicleHistory } from "./pages/VehicleHistory";
import { Sample } from "./pages/Sample";
import { PricingPage } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Legal } from "./pages/Legal";
import { NavContext } from "./nav";
import { BRAND, type Page } from "./data/content";

import type { VehicleReportData, WindowStickerData, BuildSheetDetails } from "./types";
import { SAMPLE_REPORTS, getVehicleBuildSheet } from "./data/mockData";
import { InteractiveReportModal } from "./components/InteractiveReportModal";
import { InteractiveStickerModal } from "./components/InteractiveStickerModal";
import { InteractiveBuildSheetModal } from "./components/InteractiveBuildSheetModal";
import { Agentation } from "agentation";

const PAGES: Page[] = [
  "home",
  "vehicle-history",
  "sample",
  "pricing",
  "contact",
  "login",
  "terms",
  "privacy",
];

const fromHash = (): Page => {
  const h = window.location.hash.replace(/^#\/?/, "") as Page;
  return PAGES.includes(h) ? h : "home";
};

const TITLES: Record<Page, string> = {
  home: "Vehicle Intelligence & Window Stickers",
  "vehicle-history": "Vehicle History Report",
  sample: "Sample Vehicle History Reports",
  pricing: "Vehicle Documentation Packages",
  contact: "Contact Us",
  login: "Customer Portal Login",
  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
};

/** Floating back-to-top button — appears after scrolling 400px */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${show ? "visible" : ""}`}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(fromHash);
  const [design, setDesignState] = useState<"a" | "b">(() =>
    document.documentElement.getAttribute("data-design") === "b" ? "b" : "a"
  );
  
  const [activeReport, setActiveReport] = useState<VehicleReportData | null>(null);
  const [activeSticker, setActiveSticker] = useState<WindowStickerData | null>(null);
  const [activeBuildSheet, setActiveBuildSheet] = useState<BuildSheetDetails | null>(null);

  const setDesign = useCallback((d: "a" | "b") => {
    setDesignState(d);
    document.documentElement.setAttribute("data-design", d);
    try {
      localStorage.setItem("dss-design", d);
    } catch {
      /* storage unavailable */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", d === "b" ? "#0e1116" : "#f3efe4");
  }, []);

  useEffect(() => {
    setDesign(design);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onHash = () => {
      setPage(fromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.title = `${BRAND} — ${TITLES[page]}`;
  }, [page]);

  const go = useCallback((p: Page) => {
    const next = p === "home" ? "" : `#/${p}`;
    if (window.location.hash === next || (p === "home" && !window.location.hash)) {
      setPage(p);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = next || "#/";
      if (!next) history.replaceState(null, "", window.location.pathname + window.location.search);
      setPage(p);
      window.scrollTo({ top: 0 });
    }
  }, []);

  const lookup = useCallback(() => {
    const scroll = () => {
      const el = document.getElementById("lookup");
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true });
    };
    if (page !== "home") {
      go("home");
      window.setTimeout(scroll, 120);
    } else scroll();
  }, [page, go]);

  const openReport = useCallback((vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['2T1BURHE0FC320645'];
    setActiveReport(report);
  }, []);

  const openSticker = useCallback((vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['1HGFA15547L116880'];
    if (report && report.windowStickerData) {
      setActiveSticker(report.windowStickerData);
    }
  }, []);

  const openBuildSheet = useCallback((vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['2T1BURHE0FC320645'];
    const sheet = getVehicleBuildSheet(report);
    setActiveBuildSheet(sheet);
  }, []);

  const searchVin = useCallback((vin: string) => {
    const cleanVin = vin.trim().toUpperCase();

    // Check direct key match
    if (SAMPLE_REPORTS[cleanVin]) {
      setActiveReport(SAMPLE_REPORTS[cleanVin]);
      return;
    }

    // Check prefix / partial matches
    const matchedKey = Object.keys(SAMPLE_REPORTS).find((k) => 
      k.includes(cleanVin) || cleanVin.startsWith(k.slice(0, 3))
    );

    if (matchedKey) {
      setActiveReport(SAMPLE_REPORTS[matchedKey]);
      return;
    }

    // Dynamic generation for custom 17-character VIN
    const generatedReport: VehicleReportData = {
      vin: cleanVin || 'WDDGF5EB3BR183192',
      year: 2021,
      make: 'Verified Domestic/Import',
      model: 'Certified Vehicle',
      trim: 'Premium Package',
      bodyStyle: 'Sedan / SUV / Truck',
      engine: 'Direct Injection Turbocharged Engine',
      transmission: 'Multi-Speed Electronic Automatic',
      drivetrain: 'All-Wheel Drive (AWD)',
      fuelType: 'Gasoline',
      assemblyCountry: 'United States',
      exteriorColor: 'Factory Original Finish',
      interiorColor: 'Premium Leather Trim',
      originalMsrp: 42500,
      currentMarketValue: {
        tradeIn: 24500,
        privateParty: 28200,
        dealerRetail: 31000,
        averageDaysOnMarket: 24,
      },
      ownersCount: 1,
      accidentsCount: 0,
      mileage: 41200,
      titleStatus: 'Clean',
      odometerStatus: 'Normal & Verified',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      salesHistory: [
        {
          date: '04/12/2021',
          price: 42500,
          sellerType: 'Authorized OEM Franchise Dealership',
          mileage: 15,
          condition: 'Factory Delivery Clean',
        },
      ],
      ownershipTimeline: [
        {
          ownerNumber: 1,
          yearPurchased: 2021,
          yearEnded: 'Present',
          duration: '3+ Years',
          location: 'Delaware / Eastern Region',
          usageType: 'Personal',
          estimatedMilesPerYear: 10300,
        },
      ],
      serviceRecords: [
        {
          date: '10/18/2021',
          odometer: 8500,
          source: 'Certified Service Center',
          description: 'Factory scheduled maintenance, synthetic oil replacement, multipoint inspection.',
        },
        {
          date: '06/22/2023',
          odometer: 27400,
          source: 'Certified Service Center',
          description: 'Cabin air filtration, 4-wheel rotation, computer diagnostic scan passed.',
        },
      ],
      titleBrands: [
        { name: 'Salvage / Junk', passed: true, description: 'No salvage record on file across all 50 states.' },
        { name: 'Flood & Water Damage', passed: true, description: 'Clean flood audit. No hurricane or water damage claims.' },
        { name: 'Fire / Total Loss', passed: true, description: 'Clean loss claim history verified.' },
        { name: 'Odometer Rollback', passed: true, description: 'Chronological progression verified with no tampering.' },
      ],
      safetyRecalls: [],
      windowStickerData: {
        vin: cleanVin,
        year: 2021,
        make: 'Certified Make',
        model: 'Series Model',
        trim: 'Touring Edition',
        basePrice: 38900,
        totalOptionsPrice: 2450,
        destinationCharge: 1150,
        totalMSRP: 42500,
        exteriorColor: 'Factory Original Finish',
        interiorColor: 'Ebony Premium Interior',
        standardFeatures: [
          {
            category: 'Safety & Performance',
            items: [
              'Advanced Driver Assistance Suite with Automatic Emergency Braking',
              'Blind Spot Monitoring & Rear Cross-Traffic Alert',
              'Electronic Stability Control & Traction Management',
            ],
          },
          {
            category: 'Comfort & Technology',
            items: [
              'High-Resolution Touchscreen Infotainment with Apple CarPlay & Android Auto',
              'Dual-Zone Automatic Climate Control',
              'Keyless Entry & Push-Button Start',
            ],
          },
        ],
        optionalEquipment: [
          { name: 'Technology & Sound Package', code: 'TECH', price: 1850 },
          { name: 'All-Weather Floor Protection', code: 'AWP', price: 600 },
        ],
        fuelEconomy: {
          cityMpg: 26,
          highwayMpg: 34,
          combinedMpg: 29,
          annualFuelCost: 1750,
        },
        safetyRatings: {
          overall: 5,
          frontalCrash: 5,
          sideCrash: 5,
          rollover: 5,
        },
        warranty: [
          '3 Year / 36,000 Mile Comprehensive Bumper-to-Bumper',
          '5 Year / 60,000 Mile Powertrain Limited Warranty',
        ],
      },
    };

    setActiveReport(generatedReport);
  }, []);

  const api = useMemo(
    () => ({ page, go, lookup, searchVin, openReport, openSticker, openBuildSheet }),
    [page, go, lookup, searchVin, openReport, openSticker, openBuildSheet]
  );

  return (
    <NavContext.Provider value={api}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="min-h-screen bg-paper paper-grain">
        <SpecRail />
        <div className="flex min-h-screen flex-col xl:pl-[128px]">
          <Header />
          <main id="main-content" className="flex-1">
            {page === "home" && <Home />}
            {page === "vehicle-history" && <VehicleHistory />}
            {page === "sample" && <Sample />}
            {page === "pricing" && <PricingPage />}
            {page === "contact" && <Contact />}
            {page === "login" && <Login />}
            {page === "terms" && <Legal kind="terms" />}
            {page === "privacy" && <Legal kind="privacy" />}
          </main>
          <Footer />
        </div>
        <DesignSwitch design={design} setDesign={setDesign} />
        <BackToTop />
      </div>

      {activeReport && (
        <InteractiveReportModal
          report={activeReport}
          onClose={() => setActiveReport(null)}
          onOpenSticker={openSticker}
          onOpenBuildSheet={openBuildSheet}
        />
      )}
      {activeSticker && (
        <InteractiveStickerModal
          sticker={activeSticker}
          onClose={() => setActiveSticker(null)}
        />
      )}
      {activeBuildSheet && (
        <InteractiveBuildSheetModal
          buildSheet={activeBuildSheet}
          onClose={() => setActiveBuildSheet(null)}
          onOpenSticker={openSticker}
        />
      )}
      {import.meta.env.MODE === "development" && <Agentation />}
    </NavContext.Provider>
  );
}
