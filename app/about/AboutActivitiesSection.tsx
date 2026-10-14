'use client';

import { useState } from "react";
import { ArrowDown } from "lucide-react";

type AboutActivitiesSectionProps = {
    atividades: string[];
};

export default function AboutActivitiesSection({ atividades }: AboutActivitiesSectionProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="relative bg-parallax overflow-hidden bg-[url('/donate-background.png')] bg-fixed text-zinc-100">
            <div className="bg-brand-900/60 py-12 md:py-20 px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
                    <div className="text-center flex flex-col items-center">
                        <span className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Atividades desenvolvidas
                        </h2>
                        <p className="text-zinc-200 leading-relaxed max-w-3xl mx-auto">
                            Ao longo dos anos, o Centro de Promoção da Vida Hélder Câmara ampliou suas ações e
                            atualmente desenvolve diversas atividades voltadas ao desenvolvimento humano, social,
                            educacional, cultural e profissional da comunidade, entre elas:
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <ul
                            id="lista-atividades"
                            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out md:max-h-none md:[mask-image:none] ${
                                expanded
                                    ? "max-h-[100rem]"
                                    : "max-h-80 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
                            }`}
                        >
                            {atividades.map((atividade) => (
                                <li
                                    key={atividade}
                                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-brand-900/50 p-4 md:p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-brand-900/70 hover:shadow-xl hover:shadow-black/20"
                                >
                                    {/* Barra de destaque lateral */}
                                    <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-300 to-amber-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                                    <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400/40 transition-transform duration-300 group-hover:scale-[2]" />
                                        <span className="relative h-2 w-2 rounded-full bg-amber-400" />
                                    </span>

                                    <span className="font-medium leading-snug text-zinc-100 transition-colors duration-300 group-hover:text-amber-200">
                                        {atividade}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            aria-expanded={expanded}
                            aria-controls="lista-atividades"
                            aria-label={expanded ? "Recolher atividades" : "Expandir atividades"}
                            className="md:hidden mx-auto flex items-center justify-center text-amber-400"
                        >
                            <ArrowDown
                                size={20}
                                className={`transition-transform duration-300 ${expanded ? "rotate-180" : "animate-bounce"}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
