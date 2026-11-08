"use client";

import { stepIcons } from "@/data/icons";
import { useLanguage } from "@/lib/language";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="cum-functioneaza" className="bg-surface py-10 md:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl dark:text-white">
          {t.steps.title}
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.steps.items.map(({ title, description }, index) => {
            const Icon = stepIcons[index];
            return (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white dark:bg-emerald-700">
                    {index + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/40">
                    <Icon className="h-6 w-6 text-primary dark:text-emerald-300" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-secondary dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}