"use client";

export default function HeroContent() {
    return (
        <div className="full h-full rounded-lg flex-col justify-center gap-4 px-12 md:w-1/2">
            <button className="bg-yellow-300 hover:bg-yellow-400/70 py-2 px-4 rounded-full mt-12 cursor-pointer"
            onClick={() => window.open('https://maps.app.goo.gl/q5sFNZhgGDZAsymM6', '_blank')}>
                <span className="text-sm lg:text-base font-bold text-indigo-900">✦ Fortaleza, CE</span>
            </button>
            <h1 className="text-2xl lg:text-3xl font-bold text-indigo-900 leading-tight mt-4" >
                Centro de Promoção da Vida Hélder Câmara
            </h1>
            <h2 className="text-base lg:text-xl font-medium text-stone-700 leading-relaxed mt-2">
                Há 26 anos atuando diariamente construindo oportunidades com amor e solidariedade para a comunidade do Genibaú e região
            </h2>
        </div>
    );
}
