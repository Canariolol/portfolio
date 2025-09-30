"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (nextLanguage: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("portfolio-language") : null;
    if (storedLanguage === "es" || storedLanguage === "en") {
      setLanguageState(storedLanguage);
      document.documentElement.lang = storedLanguage;
    } else {
      document.documentElement.lang = "es";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
  }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
