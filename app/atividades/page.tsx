"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
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

type FilterOption = { value: string; label: string };

const statusOptions: FilterOption[] = [
    { value: "todas", label: "Todas" },
    { value: "ativas", label: "Ativas" },
];

const modalidadeOptions: FilterOption[] = [
    { value: "todas", label: "Todas" },
    { value: "saude", label: "Saúde" },
    { value: "educacao", label: "Educação" },
    { value: "cultura", label: "Cultura" },
    { value: "artezanato", label: "Artesanato" },
];

const faixaEtariaOptions: FilterOption[] = [
    { value: "todas", label: "Todas" },
    { value: "infantil", label: "Infantil" },
    { value: "adulto", label: "Adulto" },
    { value: "todas as idades", label: "Todas as idades" },
];

function FilterDropdown({
    label,
    value,
    options,
    open,
    onToggle,
    onChange,
}: {
    label: string;
    value: string;
    options: FilterOption[];
    open: boolean;
    onToggle: () => void;
    onChange: (value: string) => void;
}) {
    const current = options.find((option) => option.value === value) ?? options[0];
    const isActive = value !== "todas";

    return (
        <div className="relative flex flex-col gap-1.5">
            <span className="pl-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                {label}
            </span>
            <button
                type="button"
                onClick={onToggle}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={label}
                className={`w-full cursor-pointer flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                    isActive
                        ? "border-amber-300 bg-amber-300 text-brand-900 shadow-md shadow-amber-400/20 hover:bg-amber-400"
                        : "border-zinc-200 bg-zinc-50 text-brand-900 hover:border-amber-300 hover:bg-white"
                } ${open ? "ring-2 ring-amber-300/60" : ""}`}
            >
                {current.label}
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <ul
                    role="listbox"
                    className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-0.5 rounded-xl border border-white/10 bg-brand-800 p-1.5 shadow-xl shadow-black/20 z-20 min-w-[9rem]"
                >
                    {options.map((option) => {
                        const selected = value === option.value;

                        return (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={selected}
                                    onClick={() => onChange(option.value)}
                                    className={`w-full cursor-pointer flex items-center justify-between gap-3 rounded-lg px-4 py-2 text-left text-sm font-bold transition-colors hover:bg-amber-300 hover:text-brand-900 ${
                                        selected ? "bg-brand-900 text-amber-300" : "text-amber-200"
                                    }`}
                                >
                                    {option.label}
                                    {selected && <Check className="w-4 h-4 shrink-0" strokeWidth={3} aria-hidden="true" />}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default function AtividadesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("todas");
    const [modalidadeFilter, setModalidadeFilter] = useState("todas");
    const [faixaEtariaFilter, setFaixaEtariaFilter] = useState("todas");
    const [openFilter, setOpenFilter] = useState<"status" | "modalidade" | "faixa" | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const filtersRef = useRef<HTMLDivElement>(null);

    const filteredCards = cardsContent.filter((card) => {
        if (statusFilter === "ativas" && card.status !== "Ativo") return false;
        if (modalidadeFilter !== "todas" && card.modalidade !== modalidadeFilter) return false;
        if (faixaEtariaFilter !== "todas" && card.faixaEtaria !== faixaEtariaFilter) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCards = filteredCards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const applyFilter = (apply: () => void) => {
        apply();
        setCurrentPage(1);
        setOpenFilter(null);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (filtersRef.current && !filtersRef.current.contains(e.target as Node)) {
                setOpenFilter(null);
            }
        };
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenFilter(null);
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
                <div className="relative z-20 mb-10 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-md md:flex-row md:items-center md:gap-6 md:p-5">
                    <div className="flex shrink-0 items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800 text-amber-200">
                            <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-900">Filtros</span>
                    </div>
                    <div ref={filtersRef} className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
                        <FilterDropdown
                            label="Status"
                            value={statusFilter}
                            options={statusOptions}
                            open={openFilter === "status"}
                            onToggle={() => setOpenFilter((o) => (o === "status" ? null : "status"))}
                            onChange={(value) => applyFilter(() => setStatusFilter(value))}
                        />
                        <FilterDropdown
                            label="Modalidade"
                            value={modalidadeFilter}
                            options={modalidadeOptions}
                            open={openFilter === "modalidade"}
                            onToggle={() => setOpenFilter((o) => (o === "modalidade" ? null : "modalidade"))}
                            onChange={(value) => applyFilter(() => setModalidadeFilter(value))}
                        />
                        <FilterDropdown
                            label="Faixa Etária"
                            value={faixaEtariaFilter}
                            options={faixaEtariaOptions}
                            open={openFilter === "faixa"}
                            onToggle={() => setOpenFilter((o) => (o === "faixa" ? null : "faixa"))}
                            onChange={(value) => applyFilter(() => setFaixaEtariaFilter(value))}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentCards.map((card) => (
                        <ActivityCard key={card.titulo} {...card} />
                    ))}
                </div>

                {filteredCards.length === 0 && (
                    <p className="py-16 text-center text-zinc-500">
                        Nenhuma atividade encontrada com os filtros selecionados.
                    </p>
                )}

                {totalPages > 0 && (
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
                )}
            </section>
        </main>
    );
}