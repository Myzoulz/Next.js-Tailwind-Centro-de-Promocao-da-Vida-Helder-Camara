"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cardsContent } from "@/constants/cardsContent";
import { phone } from "@/constants/phone";
import { cardContent } from "@/constants/cardsContent";

const ITEMS_PER_PAGE = 6;

function ActivityCard(card: cardContent) {
    const mensagem = `Olá, gostaria de me informar sobre ${card.titulo}!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

    return (
        <article className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-52">
                <img src={card.imagem} alt={card.titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-amber-300 font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-300" />
                    {card.status}
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
}

export default function AtividadesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState<"todas" | "ativas">("todas");
    const [filterOpen, setFilterOpen] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    const filteredCards =
        filter === "ativas" ? cardsContent.filter((card) => card.status === "Ativo") : cardsContent;

    const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCards = filteredCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const changeFilter = (newFilter: "todas" | "ativas") => {
        setFilter(newFilter);
        setCurrentPage(1);
        setFilterOpen(false);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setFilterOpen(false);
            }
        };
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setFilterOpen(false);
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, []);

    const navButton =
        "cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-brand-800 text-amber-200 hover:bg-brand-900 transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

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

            <section ref={sectionRef} className="max-w-6xl mx-auto px-6 py-16">
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-900">Filtros</span>
                    <div ref={filterRef} className="relative">
                        <button
                            type="button"
                            onClick={() => setFilterOpen((o) => !o)}
                            aria-haspopup="listbox"
                            aria-expanded={filterOpen}
                            className="cursor-pointer flex items-center gap-2 pl-5 pr-4 py-2 rounded-full text-sm font-bold bg-amber-300 text-brand-900 hover:bg-amber-400 transition-colors"
                        >
                            {filter === "todas" ? "Todas" : "Ativas"}
                            <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                        </button>

                        {filterOpen && (
                            <ul
                                role="listbox"
                                className="absolute left-0 right-0 top-full mt-2 rounded-xl overflow-hidden shadow-lg bg-brand-800 text-amber-200 z-20 min-w-[9rem]"
                            >
                                {(["todas", "ativas"] as const).map((option) => (
                                    <li key={option}>
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={filter === option}
                                            onClick={() => changeFilter(option)}
                                            className="w-full text-left cursor-pointer px-5 py-2 text-sm font-bold transition-colors hover:bg-amber-300 hover:text-brand-900"
                                        >
                                            {option === "todas" ? "Todas" : "Ativas"}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentCards.map((card) => (
                        <ActivityCard key={card.titulo} {...card} />
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3 mt-12">
                    <button
                        className={navButton}
                        onClick={() => changePage(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                                page === currentPage
                                    ? "bg-amber-300 text-brand-900"
                                    : "bg-brand-800 text-amber-200 hover:bg-brand-900"
                            }`}
                            onClick={() => changePage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className={navButton}
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </main>
    );
}