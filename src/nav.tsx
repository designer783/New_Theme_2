import { createContext, useContext } from "react";
import type { Page } from "./data/content";

export type NavApi = {
  page: Page;
  go: (page: Page) => void;
  /** Go to the home page lookup form and scroll to it. */
  lookup: () => void;
  searchVin: (vin: string) => void;
  openReport: (vin: string) => void;
  openSticker: (vin: string) => void;
  openBuildSheet: (vin: string) => void;
};

export const NavContext = createContext<NavApi>({
  page: "home",
  go: () => {},
  lookup: () => {},
  searchVin: () => {},
  openReport: () => {},
  openSticker: () => {},
  openBuildSheet: () => {},
});

export const useNav = () => useContext(NavContext);
