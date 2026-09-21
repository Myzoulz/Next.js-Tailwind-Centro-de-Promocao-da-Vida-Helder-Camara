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
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-300 mb-2">Sobre</h2>
                    <h1 className="text-4xl font-bold max-w-2xl mx-auto leading-tight text-zinc-100">
                        Conheça a história do Centro de Promoção da Vida Hélder Câmara
                    </h1>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src="/imagesCards/placeholder.png"
                        alt="História do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Uma história nascida da necessidade da comunidade</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            O Centro de Promoção da Vida Hélder Câmara (CPVHC) foi criado em 23 de janeiro de 2000,
                            a partir da iniciativa da Equipe Social do bairro Parque Genibaú, em Fortaleza/CE. Naquele
                            período, a comunidade enfrentava diversas dificuldades relacionadas à ausência de políticas
                            públicas e serviços essenciais, como falta de água encanada, escolas, posto de saúde,
                            saneamento básico e infraestrutura adequada.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <img
                        src="/imagesCards/placeholder.png"
                        alt="Mobilização comunitária do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Uma caminhada de mobilização e luta</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Diante dessa realidade, a Equipe Social passou a se reunir para planejar ações coletivas
                            e organizar momentos de mobilização e luta por melhorias para o território. Dessa caminhada
                            nasceu o Centro de Promoção da Vida Hélder Câmara, como um espaço comunitário de defesa de
                            direitos, participação popular e promoção da vida, tendo como missão acolher crianças,
                            adolescentes, jovens, adultos e famílias em situação de vulnerabilidade social.
                        </p>
                        <p className="text-zinc-600 leading-relaxed">
                            Desde sua criação, o Centro buscou manter suas portas abertas para a comunidade, oferecendo
                            apoio, acolhimento e oportunidades para aqueles que mais necessitam. A instituição acredita
                            na força da solidariedade e na importância de construir caminhos coletivos, reconhecendo que
                            todas as pessoas possuem necessidades, mas algumas enfrentam situações de maior vulnerabilidade.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src="/imagesCards/placeholder.png"
                        alt="Primeiras iniciativas do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">As primeiras iniciativas</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Uma das primeiras iniciativas desenvolvidas pelo Centro de Promoção da Vida Hélder Câmara foi
                            o fortalecimento de um grupo de mulheres que realizava atividades de crochê, confecção de
                            roupas e artesanato. Com o crescimento do grupo e o desenvolvimento das habilidades das
                            participantes, a iniciativa transformou-se em uma cooperativa, possibilitando autonomia,
                            geração de renda e a criação de um espaço próprio fora do Centro.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <img
                        src="/imagesCards/placeholder.png"
                        alt="Atividades educativas e culturais do CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Novas demandas, novas respostas</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Com o passar do tempo, a comunidade também apresentou novas demandas. Famílias começaram a
                            procurar o CPVHC em busca de atividades para crianças e adolescentes, especialmente por não
                            possuírem condições financeiras para pagar acompanhamento escolar ou atividades
                            complementares. Assim, foram iniciadas ações de reforço escolar e balé clássico, garantindo
                            acesso a atividades culturais e educativas para estudantes da rede pública.
                        </p>
                        <p className="text-zinc-600 leading-relaxed">
                            A instituição também passou a atuar junto aos jovens, diante dos desafios sociais enfrentados
                            no território, como a violência, a presença de grupos criminosos, a falta de oportunidades e
                            as condições de extrema pobreza. O Centro de Promoção da Vida Hélder Câmara compreendeu a
                            necessidade de criar alternativas de formação, convivência, profissionalização e geração de
                            renda, oferecendo possibilidades para que crianças, adolescentes, jovens e adultos construam
                            novos projetos de vida.
                        </p>
                    </div>
                </div>

            </section>

            <section className="bg-brand-800 text-zinc-100 py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-3">Atividades desenvolvidas</h2>
                        <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                            Ao longo dos anos, o Centro de Promoção da Vida Hélder Câmara ampliou suas ações e
                            atualmente desenvolve diversas atividades voltadas ao desenvolvimento humano, social,
                            educacional, cultural e profissional da comunidade, entre elas:
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                        {atividades.map((atividade) => (
                            <li key={atividade} className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                <span className="text-zinc-200 leading-relaxed">{atividade}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src="/imagesCards/placeholder.png"
                        alt="Comunidade CPVHC"
                        className="w-full md:w-1/2 rounded-xl object-cover aspect-video"
                    />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-brand-800">Uma história construída em comunidade</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            A trajetória do Centro de Promoção da Vida Hélder Câmara é marcada pela participação
                            comunitária, pela defesa de direitos e pela construção de oportunidades. O Centro permanece
                            como um espaço de acolhimento, aprendizado e transformação social, fortalecendo vínculos e
                            contribuindo para que moradores do Genibaú e bairros vizinhos tenham acesso à educação,
                            cultura, profissionalização e melhores condições de vida.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-brand-900 text-zinc-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Propósito</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Atuar como espaço comunitário de defesa de direitos, participação popular e promoção da vida,
                            reconhecendo que todas as pessoas possuem necessidades, mas algumas enfrentam situações de
                            maior vulnerabilidade.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Missão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Acolher crianças, adolescentes, jovens, adultos e famílias em situação de vulnerabilidade
                            social, oferecendo apoio, acolhimento e oportunidades de desenvolvimento humano, social,
                            educacional, cultural e profissional.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Visão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Ser um espaço permanente de acolhimento, aprendizado e transformação social, fortalecendo
                            vínculos e contribuindo para que moradores do Genibaú e bairros vizinhos tenham acesso a
                            educação, cultura, profissionalização e melhores condições de vida.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}