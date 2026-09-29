import {steps} from "@/data/content";

export default function HowItWorks() {
    return (
        <section id="cum-functioneaza" className="bg-surface py-10 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl"> Cum funcționează? </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {steps.map(({ number, title, description, icon: Icon }) => (
                        <article
                            key={number}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                            <div className="mb-5 flex items-center gap-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white"> {number} </span>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                 </div>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-secondary">{title}</h3>
                            <p className="text-slate-600">{description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}