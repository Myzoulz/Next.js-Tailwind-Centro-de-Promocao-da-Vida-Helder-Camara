import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cardsContent } from "@/components/CardsSection/cardsContent";
import { phone } from "@/constants/phone";

export default function AtividadesPage() {
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
                    <h1 className="text-4xl font-bold max-w-3xl mx-auto leading-tight text-amber-200">
                        Conheça o que fazemos
                    </h1>
                    <p className="text-zinc-100 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Diariamente, o CPVHC oferece dezenas de atividades gratuitas para crianças, adolescentes,
                        jovens e famílias da comunidade do Parque Genibaú. Escolha uma atividade e venha participar.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsContent.map((card) => {
                        const mensagem = `Olá, gostaria de me informar sobre ${card.titulo}!`;
                        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

                        return (
                            <article
                                key={card.titulo}
                                className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-52">
                                    <img src={card.imagem} alt={card.titulo} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                                    <span className="absolute bottom-3 left-3 text-amber-300 font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-amber-300" />
                                        {card.titulo}
                                    </span>
                                </div>

                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <h2 className="text-xl font-bold text-brand-900 leading-snug">{card.titulo}</h2>
                                    <p className="text-sm text-zinc-600 leading-relaxed flex-1">{card.descricao}</p>

                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2"
                                    >
                                        <span className="default-btn w-full inline-flex items-center justify-center gap-2">
                                            Saiba Mais <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}