import Services from "@/components/Services";
import WhyDeratPro from "@/components/WhyDeratPro";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main >
      <Hero />
      <Services />
      <WhyDeratPro />
      <HowItWorks />
      <Contact />
    </main>
  );
}