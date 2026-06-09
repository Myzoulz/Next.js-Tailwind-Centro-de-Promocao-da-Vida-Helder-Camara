"use client";
import CountUp from "react-countup";
import { cardsContent } from "./cardsContent";

export default function DataCards() {
    return (
        <section className="text-zinc-100 grid grid-cols-2 md:grid-cols-4 w-full">
            {cardsContent.map((card, index) => (
                <div key={index} className="text-center flex flex-col items-center py-6">
                    <card.icon className="text-amber-200 w-15 h-15 mb-2 zoom-on-hover animate-zoomIn" />
                    <h1 className="text-xl font-bold">
                        +<CountUp end={parseInt(card.numero.replace(/\D/g, ""))} duration={2} enableScrollSpy scrollSpyOnce />
                    </h1>
                    <h2 className="text-zinc-300 text-lg font-semibold">{card.titulo}</h2>
                </div>
            ))}
        </section>
    );
}