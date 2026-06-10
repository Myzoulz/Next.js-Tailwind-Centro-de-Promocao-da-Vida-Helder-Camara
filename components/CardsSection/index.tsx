"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cardsContent } from "./cardsContent";
import Card from "./Cards";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]
    );

    return (
        <section className="w-full bg-zinc-200/60 py-8 px-4">
            <h1 className="text-2xl font-bold text-brand-950 mb-4">Nossas Atividades:</h1>
            <div className="relative w-full py-4">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4 px-4">
                        {cardsContent.map((card, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_65%] sm:flex-[0_0_35%] lg:flex-[0_0_20%]"
                            >
                                <Card {...card} />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="btn-carousel -translate-x-2 left-0"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="btn-carousel translate-x-2 right-0"
                    aria-label="Próximo"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </section>
    );
}