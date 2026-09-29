import { Zap } from "lucide-react";
import { siteInfo } from "@/data/content";

export default function Hero() {
    return (
        <section id="hero" className="bg-primary py-10 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl"> {siteInfo.name} </h1>
                    <p className="max-w-2xl text-lg text-white/80"> {siteInfo.tagline} </p>
                    <a href="#servicii" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/20">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        Vezi serviciile noastre
                    </a>
                </div>
            </div>
        </section>
    );
}