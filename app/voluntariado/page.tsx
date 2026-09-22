const formularioUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc4FoX1JvP7dZhs1Afkc_1WSmVRYXqER4YnAEx0lQNbirKAuA/viewform";

export const metadata = {
    title: "Voluntariado | CPVHC",
    description:
        "Seja voluntário no Centro de Promoção da Vida Hélder Câmara (CPVHC) e ajude a transformar a realidade da comunidade do Parque Genibaú.",
};

export default function VoluntariadoPage() {
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
                        Voluntariado
                    </h1>
                    <p className="text-zinc-100 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Faça parte da rede que transforma vidas no Parque Genibaú.
                    </p>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 py-16 flex justify-center">
                <div className="flex flex-col gap-4 border-l-4 border-brand-950 bg-amber-50 rounded-xl py-3 px-3 md:px-6">
                    <p className="main-texts text-xl text-stone-600">
                        O voluntariado é a força que move o CPVHC. Seja compartilhando seu tempo, seu
                        conhecimento ou sua experiência, você ajuda a manter as portas abertas para a
                        comunidade do Parque Genibaú. Preencha o formulário abaixo e faça parte da nossa rede
                        de transformação.
                    </p>
                    <a
                        href={formularioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-brand-800 text-amber-200 text-base font-bold px-8 py-3 rounded-lg hover:bg-brand-900 transition-colors duration-200 mt-2"
                    >
                        Quero ser voluntário
                    </a>
                    <p className="main-texts text-base text-stone-500">
                        O formulário abre em uma nova aba e leva poucos minutos para ser preenchido.
                    </p>
                </div>
            </section>
        </main>
    );
}