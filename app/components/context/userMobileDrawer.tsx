"use client";

import { createContext, useContext } from "react";

type MobileDrawerContextType = {
  isMobileDrawerOpen: boolean;
  setIsMobileDrawerOpen: (value: boolean) => void;
};

const MobileDrawerContext = createContext<MobileDrawerContextType | null>(null);

export function useMobileDrawer() {
  const context = useContext(MobileDrawerContext);
  if (!context) {
    throw new Error("useMobileDrawer must be used inside MobileDrawerContext.Provider");
  }
  return context;
}

export default MobileDrawerContext;