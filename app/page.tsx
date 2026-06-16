import Hero from '../components/Hero/index';
import DataNumbers from "@/components/DataNumbers";
import CardsSection from "@/components/CardsSection";
import AboutSection from '../components/AboutSection/index';
import DonateSection from "@/components/DonateSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardsSection />
      <DataNumbers />
      <AboutSection />
      <DonateSection />
      <PartnersSection />
    </main>
  );
}