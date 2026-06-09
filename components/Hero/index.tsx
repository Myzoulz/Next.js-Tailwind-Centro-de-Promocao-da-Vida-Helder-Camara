"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Carousel from "./Carousel";
import HeroContent from "./HeroContent";
import HeroNav from "./HeroNav";
import { navItems } from "./navItems";

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
    const [selected, setSelected] = useState("Educação");

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => {
            const index = emblaApi.selectedScrollSnap();
            setSelected(navItems[index].label);
        });
    }, [emblaApi]);

    const handleSelect = (label: string, index: number) => {
        setSelected(label);
        emblaApi?.scrollTo(index);
    };

    return (
        <main>
            <section className="h-[calc(100dvh-112px)] w-full flex items-center">
                <div className="w-full h-full flex flex-col md:flex-row">
                    <HeroContent selected={selected} onSelect={handleSelect} />
                    <Carousel emblaRef={emblaRef} />
                </div>
            </section>

            <div className="md:hidden px-8 mt-6 flex flex-col max-h-[35vh]">
                <HeroNav selected={selected} onSelect={handleSelect} />
            </div>
        </main>
    );
}