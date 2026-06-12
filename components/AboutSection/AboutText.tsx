"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function AboutText() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Sobre</span>
            <h2 className="text-3xl font-bold text-gray-900">Nossa história</h2>

            <div
                className="relative md:cursor-default cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <p className={`main-texts text-lg text-gray-600 leading-relaxed transition-all duration-500 overflow-hidden ${expanded ? "max-h-[2000px]" : "max-h-[12rem] md:max-h-[2000px]"}`}>
                    Em 1996 um grupo de pessoas ligadas á Área Pastoral do Parque Genibaú, sentindo a necessidade de um espaço para partilhar os problemas vividos pela comunidade, dá início a um ciclo de reuniões. O grupo recebeu o nome de Equipe Social e a cada encontro aumentava o desejo de mudança na sociedade.
                    A partir daí iniciou-se um processo de intervenção na comunidade para conscientizar a população sobre seus direitos e lutar por melhores condições de vida através da sensibilização das autoridades competentes.
                    Da necessidade de ter uma personalidade jurídica nasceu em janeiro de 2000, o Centro de Promoção da Vida Helder Câmara CPVHC para facilitar a representação perante as Organizações Governamentais (OG&apos;s) e Não Governamentais (ONG&apos;s).
                </p>

                <div className={`md:hidden absolute bottom-0 left-0 w-full flex flex-col items-center justify-end transition-opacity duration-300 ${expanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    <div className="w-full h-10 bg-gradient-to-t from-zinc-50 to-transparent" />
                    <div className="bg-zinc-100 w-full flex justify-center pb-1">
                        <ArrowDown size={20} className="text-brand-700 animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
}