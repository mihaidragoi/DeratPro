import { advantages } from "@/data/content";

export default function WhyDeratPro() {
  return (
    <section id="de-ce-deratpro" className="bg-white py-10 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl dark:text-white">
          De ce DeratPro?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/40">
                <Icon className="h-6 w-6 text-primary dark:text-emerald-300" aria-hidden="true" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-secondary dark:text-white">{title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}