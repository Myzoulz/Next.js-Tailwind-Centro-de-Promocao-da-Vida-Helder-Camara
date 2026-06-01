"use client";

export default function HeroContent() {
    return (
        <section className="full h-full flex-col justify-center gap-4 px-12">
            <button className="bg-yellow-300 hover:bg-yellow-400/70 py-2 px-4 rounded-full mt-12 cursor-pointer animate-fadeSlide [animation-duration:2000ms]"
            onClick={() => window.open('https://maps.app.goo.gl/q5sFNZhgGDZAsymM6', '_blank')}>
                <span className="text-sm lg:text-base font-bold text-brand-900">✦ Fortaleza, CE</span>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-brand-900 leading-tight mt-4 animate-fadeSlide [animation-duration:1200ms]" >
                Centro de Promoção da Vida Hélder Câmara
            </h1>
            <h2 className="text-base lg:text-xl font-medium text-stone-700 leading-relaxed mt-2 animate-fadeSlide [animation-duration:2500ms]">
                Há 26 anos atuando diariamente construindo oportunidades com amor e solidariedade para a comunidade do Genibaú e região
            </h2>
            <div className="flex flex-row gap-4 mb-4 text-base lg:text-xl font-semibold">
                <button className="bg-brand-900 hover:bg-brand-950 text-white py-2 px-4 rounded-lg mt-12 cursor-pointer animate-zoomIn [animation-duration:2000ms]">
                    <span>Conheça</span>
                </button>
                <button className="bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-lg mt-12 cursor-pointer animate-zoomIn [animation-duration:2000ms]">
                    <span>Como Doar ♡</span>
                </button>
            </div>
        </section>
    );
}
