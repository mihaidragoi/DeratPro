"use client";

import { useEffect } from "react";
import { setLang, useLanguage } from "@/lib/language";

export default function LanguageToggle() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "ro" ? "en" : "ro")}
      aria-label={lang === "ro" ? "Switch to English" : "Schimbă limba în română"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/60 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-slate-900/80"
    >
      {lang === "ro" ? "EN" : "RO"}
    </button>
  );
}