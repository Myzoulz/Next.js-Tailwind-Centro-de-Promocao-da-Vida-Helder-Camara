"use client";
import { navItems } from "./navItems";

interface Props {
    selected: string;
    onSelect: (label: string, index: number) => void;
}

export default function HeroNav({ selected, onSelect }: Props) {
    const itemSelecionado = navItems.find((item) => item.label === selected);

    return (
        <section className="flex flex-col mb-6 min-h-0 flex-1 overflow-hidden">
            <h2 className="text-base font-semibold tracking-widest text-zinc-500 mb-4 uppercase shrink-0">
                O que fazemos:
            </h2>
            <div className="flex flex-wrap gap-3 text-sm font-medium shrink-0">
                {navItems.map(({ label, icon: Icon }, index) => (
                    <button
                        key={label}
                        onClick={() => onSelect(label, index)}
                        className={`btn-nav ${selected === label ? "btn-nav-active" : ""}`}
                    >
                        {label} <Icon className="w-4 h-4" />
                    </button>
                ))}
            </div>
            <div className="mt-4 min-h-0 flex-1 overflow-y-auto border-l-4 border-stone-400 pl-4 lg:pl-6">
                <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-stone-500 leading-relaxed max-w-md font-serif italic px-1 lg:px-2">
                    {itemSelecionado?.conteudo}
                </p>
            </div>
        </section>
    );
}