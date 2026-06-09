"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { dataContent } from "./dataContent";

function DataCard({ card }: { card: typeof dataContent[number] }) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className="text-center flex flex-col items-center py-6">
            <card.icon
                className={`text-amber-200 w-15 h-15 mb-2 zoom-on-hover ${inView ? "animate-zoomIn" : "invisible"
                    }`}
            />
            <h1 className="text-xl font-bold">
                +{inView && <CountUp end={parseInt(card.numero.replace(/\D/g, ""))} duration={2} />}
            </h1>
            <h2 className="text-zinc-300 text-lg font-semibold">{card.titulo}</h2>
        </div>
    );
}

export default function DataCards() {
    return (
        <section className="text-zinc-100 grid grid-cols-2 md:grid-cols-4 w-full">
            {dataContent.map((card) => (
                <DataCard key={card.titulo} card={card} />
            ))}
        </section>
    );
}