"use client";
import { useState } from "react";
import { HeartPulse, UsersRound, Music, Flame, BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

const navItems: { label: string; icon: LucideIcon; conteudo: string }[] = [
    { label: "Educação", icon: BookOpen, conteudo: "Por meio do reforço escolar, atendemos crianças até o 6º ano do Ensino Fundamental, oferecendo acompanhamento pedagógico que contribui para o fortalecimento da aprendizagem e o desenvolvimento de habilidades essenciais para sua trajetória escolar." },
    { label: "Cultura", icon: Music, conteudo: "Por meio do projeto Arte na Quebrada, oferecemos oficinas de Percussão, Graffiti, Poesia Subversiva e Hip-Hop. Também temos Ballet Clássico gratuito, ampliando o acesso à arte e fortalecendo a cultura na periferia. As atividades estimulam a criatividade, a disciplina e a expressão de crianças, adolescentes e jovens." },
    { label: "Saúde", icon: HeartPulse, conteudo: "Oferecemos atendimentos gratuitos de fisioterapia, psicologia e psicomotricidade, promovendo a saúde física, mental e o desenvolvimento integral de crianças, adolescentes e adultos, com atenção especial às crianças neurodivergentes." },
    { label: "Família", icon: UsersRound, conteudo: "Apoiamos famílias em situação de vulnerabilidade por meio da distribuição de 100 marmitas diárias com apoio do programa Ceará Sem Fome, ações de solidariedade e acolhimento comunitário. Durante a pandemia e em períodos de enchentes provocadas pelo Rio Maranguapinho, também oferecemos assistência e abrigo a famílias afetadas." },
    { label: "Juventude", icon: Flame, conteudo: "Em parceria com o coletivo Juventude com Arte, realizamos atividades culturais, educativas e comunitárias que valorizam os talentos locais, estimulam a cidadania e incentivam a juventude a atuar de forma ativa na construção de uma comunidade mais justa, criativa e solidária." },
];

export default function HeroNav() {
    const [selected, setSelected] = useState("Educação");
    const itemSelecionado = navItems.find((item) => item.label === selected);

    return (
        <section className="flex flex-col mb-6 min-h-0 flex-1 overflow-hidden">
            <h2 className="text-base font-semibold tracking-widest text-zinc-400 mb-4 uppercase shrink-0">
                O que fazemos:
            </h2>

            <div className="flex flex-wrap gap-3 text-sm font-medium shrink-0">
                {navItems.map(({ label, icon: Icon }) => (
                    <button
                        key={label}
                        onClick={() => setSelected(label)}
                        className={`btn-nav ${selected === label ? "btn-nav-active" : ""}`}
                    >
                        {label} <Icon className="w-4 h-4" />
                    </button>
                ))}
            </div>

            <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
                <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-stone-700/80 leading-relaxed max-w-md font-serif font-medium px-1 lg:px-4">
                    {'“' + itemSelecionado?.conteudo + '”'}
                </p>
            </div>
        </section>
    );
}