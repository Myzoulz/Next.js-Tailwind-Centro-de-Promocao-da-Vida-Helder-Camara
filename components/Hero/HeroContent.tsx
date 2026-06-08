"use client";
import HeroNav from "./HeroNav";
import { Heart } from "lucide-react";

interface Props {
    selected: string;
    onSelect: (label: string, index: number) => void;
}

export default function HeroContent({ selected, onSelect }: Props) {
    return (
        <section className="h-full flex flex-col justify-center gap-4 px-12 overflow-hidden">
            <button
                className="bg-yellow-300 hover:bg-yellow-400/70 py-2 px-4 rounded-full mt-12 cursor-pointer animate-fadeSlide [animation-duration:2000ms] self-start"
                onClick={() => window.open('https://maps.app.goo.gl/q5sFNZhgGDZAsymM6', '_blank')}
            >
                <span className="text-sm lg:text-base font-bold text-brand-900">✦ Fortaleza, CE</span>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-brand-900 leading-tight animate-fadeSlide [animation-duration:1200ms]">
                Centro de Promoção da Vida Hélder Câmara
            </h1>
            <h2 className="text-base lg:text-xl font-medium text-stone-700 leading-relaxed animate-fadeSlide [animation-duration:2500ms]">
                Há 26 anos atuando diariamente construindo oportunidades com amor e solidariedade para a comunidade do Genibaú e região
            </h2>
            <div className="flex flex-row gap-4 mb-4 text-base lg:text-xl font-semibold shrink-0">
                <button className="bg-brand-900 hover:bg-brand-950 text-white py-2 px-4 rounded-lg cursor-pointer animate-zoomIn [animation-duration:2000ms]">
                    <span>Conheça</span>
                </button>
                <button className="bg-yellow-300 hover:bg-yellow-400/70 text-brand-900 py-2 px-4 rounded-lg cursor-pointer animate-zoomIn [animation-duration:2000ms]">
                    <span className="flex items-center gap-1.5">Como Doar <Heart className="w-4 h-4" /></span>
                </button>
            </div>
            <div className="hidden md:flex flex-col min-h-0 flex-1 overflow-hidden">
                <HeroNav selected={selected} onSelect={onSelect} />
            </div>
        </section>
    );
}