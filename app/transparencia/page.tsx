import { Download, FileText } from "lucide-react";
import { transparencyDocuments } from "@/constants/transparencia";

export const metadata = {
    title: "Transparência | CPVHC",
    description:
        "Documentos de transparência do Centro de Promoção da Vida Hélder Câmara (CPVHC).",
};

export default function TransparenciaPage() {
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
                        Transparência
                    </h1>
                    <p className="text-zinc-100 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Disponibilizamos publicamente os documentos oficiais do CPVHC.
                        Clique para baixar qualquer um deles.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transparencyDocuments.map((document) => (
                        <article
                            key={document.fileName}
                            className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="p-6 flex flex-col flex-1 gap-4">
                                <span className="w-12 h-12 rounded-xl bg-brand-800 text-amber-200 flex items-center justify-center">
                                    <FileText className="w-6 h-6" />
                                </span>
                                <h2 className="text-xl font-bold text-brand-900 leading-snug">
                                    {document.title}
                                </h2>
                                <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                                    {document.description}
                                </p>
                                <a
                                    href={`/docsTransparencia/${document.fileName}`}
                                    download
                                    className="default-btn inline-flex items-center justify-center gap-2"
                                >
                                    Baixar PDF <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}