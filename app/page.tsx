import Header from "@/components/Header";
import Hero from '../components/Hero/index';
import DataNumbers from "@/components/DataNumbers";

export default function Home() {
  return (
    <main>
      <section className="h-dvh w-full">
        <Header />
        <Hero />
      </section>
      <DataNumbers />
      <section className="h-dvh w-full">
      </section> 
    </main>
  );
}