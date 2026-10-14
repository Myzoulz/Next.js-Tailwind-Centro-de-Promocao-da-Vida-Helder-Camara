import type { Metadata } from "next";
import { Compass, Eye, HandHeart } from "lucide-react";
import { AboutAnimatedSection, AboutClosingSection } from './AboutAnimatedSection';
import AboutActivitiesSection from './AboutActivitiesSection';

const atividades = [
    "Balé clássico",
    "Reforço escolar",
    "Fisioterapia",
    "Atendimento psicológico para crianças e adultos",
    "Oficinas de corte e costura",
    "Conserto de celulares",
    "Artesanato",
    "Cine infantil",
    "Cine Delas",
    "Programa Ceará Sem Fome",
    "Oficinas de grafite",
    "Oficina de percussão",
    "Oficina de escrita",
    "Oficina de balé clássico para adultos",
    "Oficina de fuxico",
    "Atividades de formação e geração de renda",
];

export const metadata: Metadata = {
    title: "Sobre — Nossa História",
    description:
        "Conheça a história do Centro de Promoção da Vida Hélder Câmara (CPVHC), ONG criada em 2000 no Parque Genibaú, em Fortaleza-CE, para promover vida, direitos e oportunidades para a comunidade.",
};

export default function AboutPage() {
    return (
        <main className="bg-zinc-100 text-zinc-800">

            <section
                className="relative bg-parallax overflow-hidden"
                style={{
                    backgroundImage: "url('/donate-background.png')",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="flex flex-col justify-center items-center bg-brand-900/40 h-full py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold max-w-2xl mx-auto leading-tight text-amber-200">
                        Conheça a história do Centro de Promoção da Vida Hélder Câmara
                    </h1>
                </div>
            </section>

            <AboutAnimatedSection />

            <AboutActivitiesSection atividades={atividades} />

            <AboutClosingSection />

            <section className="relative bg-parallax overflow-hidden bg-[url('/donate-background.png')] bg-fixed text-zinc-100">
                <div className="bg-brand-900/60 py-16 px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">

                        <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-brand-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-brand-900/70 hover:shadow-xl hover:shadow-black/20">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30 transition-colors duration-300 group-hover:bg-amber-400/25">
                                <Compass className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Propósito</h3>
                            <p className="leading-relaxed text-zinc-200">
                                Atuar como espaço comunitário de defesa de direitos, participação popular e promoção da vida,
                                reconhecendo que todas as pessoas possuem necessidades, mas algumas enfrentam situações de
                                maior vulnerabilidade.
                            </p>
                        </div>

                        <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-brand-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-brand-900/70 hover:shadow-xl hover:shadow-black/20">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30 transition-colors duration-300 group-hover:bg-amber-400/25">
                                <HandHeart className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Missão</h3>
                            <p className="leading-relaxed text-zinc-200">
                                Acolher crianças, adolescentes, jovens, adultos e famílias em situação de vulnerabilidade
                                social, oferecendo apoio, acolhimento e oportunidades de desenvolvimento humano, social,
                                educacional, cultural e profissional.
                            </p>
                        </div>

                        <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-brand-900/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-brand-900/70 hover:shadow-xl hover:shadow-black/20">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30 transition-colors duration-300 group-hover:bg-amber-400/25">
                                <Eye className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Visão</h3>
                            <p className="leading-relaxed text-zinc-200">
                                Ser um espaço permanente de acolhimento, aprendizado e transformação social, fortalecendo
                                vínculos e contribuindo para que moradores do Genibaú e bairros vizinhos tenham acesso a
                                educação, cultura, professionalização e melhores condições de vida.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}