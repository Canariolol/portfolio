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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedLanguage = localStorage.getItem("portfolio-language");
    if (storedLanguage === "es" || storedLanguage === "en") {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language, isClient]);

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
