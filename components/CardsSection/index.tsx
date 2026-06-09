"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cardsContent } from "./cardsContent";
import Card from "./Cards";

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
                    className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-zinc-100 transition"
                    aria-label="Anterior"
                >
                    ‹
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-zinc-100 transition"
                    aria-label="Próximo"
                >
                    ›
                </button>
            </div>
        </section>
    );
}