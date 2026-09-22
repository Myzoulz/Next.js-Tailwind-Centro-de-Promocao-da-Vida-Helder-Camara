import type { Metadata } from "next";
import Hero from '../components/Hero/index';
import DataNumbers from "@/components/DataNumbers";
import CardsSection from "@/components/CardsSection";
import AboutSection from '../components/AboutSection/index';
import DonateSection from "@/components/DonateSection";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
    title: "Centro de Promoção da Vida Hélder Câmara (CPVHC) — ONG em Fortaleza-CE",
    description:
        "ONG que há 26 anos atua no Parque Genibaú e região com cultura, educação, saúde, esporte e segurança alimentar. Conheça nossa história, nossas atividades e como doar.",
};

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