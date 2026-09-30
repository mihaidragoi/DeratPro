import { Check } from "lucide-react";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="servicii" className="bg-surface py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl"> Serviciile noastre </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, points }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-secondary">{title}</h3>
              <p className="text-slate-600">{description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}