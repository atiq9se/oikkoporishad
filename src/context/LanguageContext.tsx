"use client";

import { createContext, useContext, useCallback, ReactNode } from "react";
import en from "@/data/locales/en.json";

type Translations = {
  [key: string]: string | Translations;
};

type LanguageContextType = {
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Translations, path: string): string {
  const keys = path.split(".");
  let result: string | Translations = obj;
  for (const key of keys) {
    if (typeof result === "object" && result !== null && key in result) {
      result = (result as Translations)[key];
    } else {
      return path;
    }
  }
  return typeof result === "string" ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = useCallback((key: string): string => {
    return getNestedValue(en, key);
  }, []);

  return (
    <LanguageContext.Provider value={{ t }}>
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