import Header from "@/components/Header";
import Hero from '../components/Hero/index';
import HeroNav from "@/components/Hero/HeroNav";

export default function Home() {
  return (
    <main>
      <section className="h-dvh w-full">
        <Header />
        <Hero />
      </section>
      <div className="block md:hidden mt-4 px-8">
          <HeroNav />
      </div>
      <section className="h-dvh w-full bg-amber-900">
      </section>
    </main>
  );
}