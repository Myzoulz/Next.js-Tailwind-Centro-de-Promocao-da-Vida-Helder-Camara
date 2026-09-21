import DonateForm from "@/components/DonateForm";

export default function DonatePage() {
    return (
        <main className="bg-zinc-100 text-zinc-800">
            <section className="bg-brand-800 text-zinc-100 py-16 px-6 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-300 mb-2">Doação</h2>
                <h1 className="text-4xl font-bold max-w-3xl mx-auto leading-tight">Doar é um ato de amor</h1>
                <p className="text-zinc-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                    Sua contribuição mantém as portas do CPVHC abertas para a comunidade do Parque Genibaú:
                    reforço escolar, balé clássico, atendimento psicológico, fisioterapia, oficinas culturais e o
                    programa Ceará Sem Fome.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-6 order-2 md:order-none">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold text-brand-800">O que sua doação realiza</h2>
                            <ul className="flex flex-col gap-3 text-zinc-600 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                    Reforço escolar e balé clássico para crianças e adolescentes da rede pública.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                    Acompanhamento psicológico, psicomotricidade e fisioterapia gratuitos.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                    Oficinas de corte e costura, artesanato, grafite, percussão e geração de renda.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                                    Distribuição diária de refeições em parceria com o Ceará Sem Fome.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-3 bg-brand-800 text-zinc-100 rounded-xl p-6">
                            <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Transparência</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm">
                                O Centro de Promoção da Vida Hélder Câmara é uma entidade sem fins lucrativos fundada em
                                23 de janeiro de 2000. CNPJ: 03778.345/0001-69. Todo o valor doado é destinado às ações
                                sociais da instituição, descontadas as taxas de processamento da Stripe.
                            </p>
                        </div>
                    </div>

                    <div className="md:sticky md:top-6 order-1 md:order-none">
                        <DonateForm />
                    </div>
                </div>
            </section>
        </main>
    );
}