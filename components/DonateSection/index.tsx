"use client";
import { Heart } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function DonateSection() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section
            className="relative bg-parallax h-70 overflow-hidden"
            style={{
                backgroundImage: "url('/donate-background.png')",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="flex flex-col justify-center items-center h-full gap-4 bg-brand-900/40 text-zinc-100">
                <h2 className="main-texts leading-normal">Contribua com a organização</h2>
                <h1 className="text-3xl font-sans font-semibold text-zinc-100">Doar é um ato de amor</h1>
                <Heart />
                <a
                    ref={ref}
                    href="/donate"
                    className={`default-btn w-80 h-15 text-2xl bg-amber-200 hover:bg-amber-300 text-brand-800 ${
                        inView ? "animate-zoomIn" : "invisible"
                    }`}
                >
                    Como Ajudar
                </a>
            </div>
        </section>
    );
}