import Header from "@/components/Header";
import Hero from '../components/Hero/index';
import DataNumbers from "@/components/DataNumbers";
import CardsSection from "@/components/CardsSection";
import AboutSection from '../components/AboutSection/index';
import DonateSection from "@/components/DonateSection";

export default function Home() {
  return (
    <main>
      <section className="relative md:h-dvh w-full shadow-lg overflow-hidden">
        <Header />
        <Hero />
      </section>
      <CardsSection />
      <DataNumbers />
      <AboutSection />
      <DonateSection />
    </main>
  );
}