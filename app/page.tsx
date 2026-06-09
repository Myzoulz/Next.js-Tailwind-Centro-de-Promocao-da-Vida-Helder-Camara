import Header from "@/components/Header";
import Hero from '../components/Hero/index';
import DataNumbers from "@/components/DataNumbers";

export default function Home() {
  return (
    <main>
      <section className="relative md:h-dvh w-full shadow-lg">
        <Header />
        <Hero />
      </section>
      <section className="h-16 w-full bg-zinc-200/60" >

      </section>
      <DataNumbers />
    </main>
  );
}