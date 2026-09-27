"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "@/data/locales/en.json";
import bn from "@/data/locales/bn.json";
import zh from "@/data/locales/zh.json";

export type Language = "en" | "bn" | "zh";

type Translations = {
  [key: string]: string | Translations;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsMap: Record<Language, Translations> = { en, bn, zh };

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
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback((key: string): string => {
    return getNestedValue(translationsMap[language], key);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
