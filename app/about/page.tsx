export default function AboutPage() {
    return (
        <main className="bg-zinc-100 text-zinc-800">

            <section className="bg-brand-800 text-zinc-100 py-16 px-6 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-300 mb-2">Sobre</h2>
                <h1 className="text-4xl font-bold max-w-2xl mx-auto leading-tight">
                    Conheça a história do Centro de Promoção da Vida Hélder Câmara
                </h1>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src="/ImagesCards/placeholder.png"
                        alt="História do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Por um mundo mais justo e humano</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            O Centro de Promoção da Vida Hélder Câmara nasceu do compromisso com a dignidade humana
                            e a justiça social. Inspirado nos ensinamentos de Dom Hélder Câmara, bispo que dedicou
                            sua vida aos mais vulneráveis, a organização atua diretamente junto a comunidades em
                            situação de vulnerabilidade social no Ceará.
                        </p>
                        <p className="text-zinc-600 leading-relaxed">
                            Desde sua fundação, o CPVHC desenvolve ações nas áreas de educação, assistência social
                            e promoção dos direitos humanos, acreditando que transformação social começa com o
                            respeito à vida em todas as suas formas.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <img
                        src="/ImagesCards/placeholder.png"
                        alt="Atuação do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Uma trajetória de luta e esperança</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Ao longo dos anos, o CPVHC construiu uma rede sólida de parceiros, voluntários e
                            apoiadores que acreditam que é possível mudar realidades. Cada projeto desenvolvido
                            é fruto de escuta ativa das comunidades e de um compromisso real com a transformação
                            das condições de vida de crianças, jovens e famílias.
                        </p>
                        <p className="text-zinc-600 leading-relaxed">
                            A organização atua em Fortaleza e região, promovendo iniciativas que vão da educação
                            não formal ao apoio psicossocial, sempre com foco na emancipação e no protagonismo
                            das pessoas atendidas.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src="/ImagesCards/placeholder.png"
                        alt="Comunidade CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Comunidade como centro</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Para o CPVHC, a comunidade não é apenas o público-alvo das ações — ela é protagonista.
                            As famílias atendidas participam ativamente das decisões e contribuem com sua própria
                            história na construção de soluções coletivas.
                        </p>
                        <p className="text-zinc-600 leading-relaxed">
                            Esse modelo de atuação participativa garante que os projetos sejam sustentáveis,
                            relevantes e verdadeiramente transformadores para quem mais precisa.
                        </p>
                    </div>
                </div>

            </section>

            <section className="bg-brand-900 text-zinc-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Propósito</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Contribuir para a construção de um mundo com dignidade e justiça para todas as pessoas,
                            especialmente as mais vulneráveis.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Missão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Promover e defender os direitos humanos por meio de ações de educação, assistência
                            social e mobilização comunitária.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Visão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Ser referência em promoção da vida e da dignidade humana no Ceará, inspirando outras
                            organizações a atuarem pela justiça social.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}