import Header from "@/components/Header";
import Hero from '../components/Hero/index';

export default function Home() {
  return (
    <main>
      <section className="h-dvh w-full">
        <Header />
        <Hero />
      </section>
      <section className="h-dvh w-full">
      </section>
    </main>
  );
}