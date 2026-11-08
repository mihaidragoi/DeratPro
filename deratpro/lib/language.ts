"use client";

import { useSyncExternalStore } from "react";
import { ro } from "@/data/translations/ro";
import { en } from "@/data/translations/en";

export type Lang = "ro" | "en";

const dictionaries = { ro, en };
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Lang {
  try {
    return localStorage.getItem("lang") === "en" ? "en" : "ro";
  } catch {
    return "ro";
  }
}

function getServerSnapshot(): Lang {
  return "ro";
}

export function setLang(lang: Lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((listener) => listener());
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { lang, t: dictionaries[lang] };
}