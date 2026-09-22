import {
    GraduationCap,
    Palette,
    Trophy,
    HeartPulse,
    Briefcase,
    Utensils,
    Scale,
    Users,
    UsersRound,
    Building2,
    ShieldCheck,
    HandHeart,
    HeartHandshake,
    Handshake,
    Megaphone,
} from "lucide-react";

export const metadata = {
    title: "Institucional | CPVHC",
    description:
        "Quem somos, missão, visão, valores, objetivos e áreas de atuação do Centro de Promoção da Vida Hélder Câmara (CPVHC).",
};

const valores = [
    { titulo: "Vida e dignidade", descricao: "Valorizamos cada pessoa e defendemos o direito de todos a uma vida digna." },
    { titulo: "Solidariedade", descricao: "Acreditamos na força da cooperação e da construção coletiva." },
    { titulo: "Respeito", descricao: "Promovemos relações baseadas no respeito às diferenças, à diversidade e à dignidade humana." },
    { titulo: "Cidadania", descricao: "Estimulamos a participação social e o conhecimento e exercício dos direitos." },
    { titulo: "Inclusão", descricao: "Trabalhamos para ampliar oportunidades e combater diferentes formas de exclusão." },
    { titulo: "Diversidade", descricao: "Valorizamos a pluralidade de histórias, culturas, identidades e experiências." },
    { titulo: "Cultura de paz", descricao: "Buscamos fortalecer relações baseadas no diálogo, na convivência e na não violência." },
    { titulo: "Participação comunitária", descricao: "Acreditamos que as transformações sociais acontecem com a participação das pessoas e da comunidade." },
];

const objetivos = [
    "Contribuir para o pleno desenvolvimento das funções sociais da cidade e para o bem-estar de seus habitantes;",
    "Promover articulações sociais e institucionais para a garantia de direitos relacionados à moradia, saneamento, infraestrutura, transporte e políticas públicas;",
    "Contribuir para o acesso a direitos nas áreas da saúde, educação, cultura, esporte e lazer;",
    "Desenvolver pesquisas, consultorias, ações de ensino e projetos relacionados ao desenvolvimento urbano, cultural, educacional, da saúde e do meio ambiente;",
    "Desenvolver e promover atividades culturais e de fomento à cultura;",
    "Promover a capacitação e a formação de lideranças populares em cidadania e planejamento urbano;",
    "Desenvolver ações de preservação, conservação e proteção do meio ambiente;",
    "Defender interesses difusos e coletivos perante as autoridades competentes;",
    "Promover o acesso, a oferta, o ensino e a difusão da arte, cultura e lazer;",
    "Desenvolver projetos de formação, atendimento e defesa dos direitos humanos e da diversidade, com atenção especial a crianças, adolescentes, jovens, pessoas idosas, mulheres, homens, população LGBTQIAPN+, população negra, povos indígenas e pessoas com deficiência;",
    "Promover o intercâmbio de pessoas, entidades e conhecimentos em âmbito nacional e internacional.",
];

const areas = [
    {
        titulo: "Educação",
        descricao: "Desenvolvemos ações de apoio e fortalecimento da aprendizagem, contribuindo para o desenvolvimento educacional de crianças e adolescentes.",
        icone: GraduationCap,
    },
    {
        titulo: "Cultura e Arte",
        descricao: "A arte e a cultura são instrumentos de expressão, formação, identidade e transformação social. Por meio de oficinas e atividades culturais, buscamos ampliar o acesso à produção e à experiência artística.",
        icone: Palette,
    },
    {
        titulo: "Esporte e Lazer",
        descricao: "Promovemos atividades que estimulam a convivência, o movimento, a disciplina, a autoestima e o desenvolvimento de crianças, adolescentes, jovens e adultos.",
        icone: Trophy,
    },
    {
        titulo: "Saúde e Bem-Estar",
        descricao: "Desenvolvemos ações de cuidado e promoção da saúde, incluindo atividades de fisioterapia, psicologia, psicomotricidade e outras iniciativas realizadas em parceria com profissionais e instituições.",
        icone: HeartPulse,
    },
    {
        titulo: "Formação e Trabalho",
        descricao: "Buscamos ampliar oportunidades por meio de cursos, oficinas e atividades de formação, contribuindo para o desenvolvimento de habilidades e para a autonomia das pessoas.",
        icone: Briefcase,
    },
    {
        titulo: "Segurança Alimentar",
        descricao: "Participamos de iniciativas voltadas ao enfrentamento da fome e da insegurança alimentar, contribuindo para o acesso à alimentação e para o fortalecimento das famílias e da comunidade.",
        icone: Utensils,
    },
    {
        titulo: "Direitos Humanos e Cidadania",
        descricao: "Promovemos ações de informação, formação, convivência e defesa de direitos, fortalecendo a participação social e o respeito à diversidade.",
        icone: Scale,
    },
    {
        titulo: "Convivência Comunitária",
        descricao: "Criamos espaços onde as pessoas possam se encontrar, compartilhar experiências, aprender umas com as outras e fortalecer seus vínculos.",
        icone: Users,
    },
];

const publicos = [
    "Crianças",
    "Adolescentes",
    "Jovens",
    "Adultos",
    "Pessoas idosas",
    "Mulheres",
    "Famílias",
];

const governanca = [
    {
        titulo: "Assembleia Geral",
        descricao: "Órgão máximo da instituição, responsável por deliberar sobre assuntos de interesse do CPVHC e outras atribuições previstas no Estatuto Social.",
        icone: UsersRound,
    },
    {
        titulo: "Diretoria Executiva",
        descricao: "Responsável pela administração e condução das atividades da instituição, conforme as atribuições estabelecidas no Estatuto.",
        icone: Building2,
    },
    {
        titulo: "Conselho Fiscal",
        descricao: "Órgão responsável, entre outras atribuições, pelo acompanhamento e fiscalização da movimentação financeira e pela apreciação da prestação de contas e do relatório de atividades.",
        icone: ShieldCheck,
    },
];

const formasParticipar = [
    {
        titulo: "Seja voluntário",
        descricao: "Compartilhe seu tempo, conhecimento e experiência.",
        icone: HandHeart,
    },
    {
        titulo: "Apoie nossos projetos",
        descricao: "Sua contribuição ajuda a manter e ampliar as atividades desenvolvidas pela instituição.",
        icone: HeartHandshake,
    },
    {
        titulo: "Seja nosso parceiro",
        descricao: "Empresas, organizações e instituições podem construir conosco novas possibilidades de atuação.",
        icone: Handshake,
    },
    {
        titulo: "Divulgue nosso trabalho",
        descricao: "Conhecer, compartilhar e falar sobre nossas ações também ajuda a fortalecer nossa rede.",
        icone: Megaphone,
    },
];

const frentes = [
    "Educação",
    "Cultura",
    "Arte",
    "Esporte",
    "Saúde",
    "Cidadania",
    "Direitos Humanos",
    "Segurança Alimentar",
    "Inclusão",
    "Solidariedade",
];

export default function InstitucionalPage() {
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
                        Institucional
                    </h1>
                    <p className="text-zinc-100 text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
                        Centro de Promoção da Vida Hélder Câmara – CPVHC
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-brand-800">Quem Somos</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        O Centro de Promoção da Vida Hélder Câmara – CPVHC é uma organização sem fins
                        lucrativos, de interesse coletivo, que atua na promoção da vida, da cidadania, dos
                        direitos humanos e do desenvolvimento social.
                    </p>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Com sede no Parque Genibaú, em Fortaleza – Ceará, o CPVHC desenvolve ações
                        permanentes junto à comunidade, buscando contribuir para a melhoria da qualidade de
                        vida e para a construção de uma sociedade mais justa, participativa, solidária e
                        inclusiva.
                    </p>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        Nossa atuação reúne educação, cultura, arte, esporte, lazer, saúde, formação,
                        segurança alimentar, convivência comunitária e defesa de direitos, criando
                        oportunidades para que crianças, adolescentes, jovens, adultos e pessoas idosas possam
                        desenvolver suas potencialidades, fortalecer vínculos e participar ativamente da
                        transformação de sua realidade.
                    </p>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        O CPVHC acredita que promover a vida é também criar espaços de encontro, aprendizagem,
                        cuidado, expressão, participação e construção coletiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Nossa Missão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Promover a vida, a cidadania, a educação, a cultura, a arte, o esporte, o lazer,
                            a saúde e os direitos humanos, contribuindo para o desenvolvimento integral das
                            pessoas e para a construção de uma sociedade mais justa, solidária, participativa
                            e inclusiva.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-amber-300 font-semibold uppercase tracking-widest text-sm">Nossa Visão</h3>
                        <p className="leading-relaxed text-zinc-200">
                            Ser uma organização social reconhecida pela sua atuação junto às comunidades, pela
                            promoção de direitos e pela capacidade de construir, de forma participativa e
                            solidária, oportunidades de desenvolvimento humano e social.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-brand-900 text-zinc-100 py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-amber-200 mb-3">Nossos Valores</h2>
                        <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                            Nossa atuação é orientada por valores que estão presentes na relação com a
                            comunidade, com os participantes, voluntários, profissionais, parceiros e
                            apoiadores.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {valores.map((valor) => (
                            <div key={valor.titulo} className="flex flex-col gap-2 bg-brand-800 rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300">
                                <h3 className="text-amber-300 font-semibold">{valor.titulo}</h3>
                                <p className="text-base leading-relaxed text-zinc-200">{valor.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-brand-800">Objetivos Institucionais</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        De acordo com seu Estatuto Social, o CPVHC tem entre seus objetivos:
                    </p>
                </div>
                <ul className="flex flex-col gap-3">
                    {objetivos.map((objetivo) => (
                        <li key={objetivo} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                            <span className="text-lg text-zinc-600 leading-relaxed">{objetivo}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-brand-800">Onde Atuamos</h2>
                <p className="text-lg font-semibold text-brand-900">Parque Genibaú – Fortaleza, Ceará</p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    O CPVHC está localizado no Parque Genibaú, na Zona Oeste de Fortaleza, território
                    pertencente à Secretaria Regional V e situado às margens do Rio Maranguapinho.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    É nesse território que construímos nossa presença cotidiana e desenvolvemos ações junto
                    a crianças, adolescentes, jovens, adultos, pessoas idosas e famílias.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Conhecer a realidade da comunidade é fundamental para construir projetos que façam
                    sentido para as pessoas. Por isso, nossa atuação procura considerar as necessidades, os
                    desafios, os saberes e as potencialidades existentes no próprio território.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Mais do que oferecer atividades, buscamos criar espaços de convivência, participação,
                    aprendizagem, cuidado e fortalecimento comunitário.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-brand-800">O Que Fazemos</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
                        As ações do CPVHC estão organizadas em diferentes áreas que se complementam e
                        contribuem para o desenvolvimento integral das pessoas.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {areas.map((area) => (
                        <article
                            key={area.titulo}
                            className="rounded-2xl shadow-lg bg-white flex flex-col gap-4 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="w-12 h-12 rounded-xl bg-brand-800 text-amber-200 flex items-center justify-center">
                                <area.icone className="w-6 h-6" />
                            </span>
                            <h3 className="text-lg font-bold text-brand-900 leading-snug">{area.titulo}</h3>
                            <p className="text-base text-zinc-600 leading-relaxed">{area.descricao}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-brand-800">Quem Participa das Nossas Ações</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    O CPVHC desenvolve ações destinadas a diferentes públicos da comunidade, com atenção
                    especial a:
                </p>
                <div className="flex flex-wrap gap-3">
                    {publicos.map((publico) => (
                        <span
                            key={publico}
className="inline-flex items-center rounded-full text-base font-bold bg-amber-300 text-brand-900 px-5 py-2 hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-200"
>
    {publico}
                        </span>
                    ))}
                </div>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Nossa atuação também considera a diversidade e a necessidade de garantir direitos e
                    oportunidades a diferentes grupos sociais, conforme previsto em nosso Estatuto Social.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-brand-800">Nossa Forma de Trabalhar</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Acreditamos que nenhuma transformação social acontece de forma isolada.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Por isso, o trabalho do CPVHC é construído por meio da participação da comunidade, do
                    voluntariado, de profissionais, parceiros, instituições públicas, organizações da
                    sociedade civil, empresas e pessoas que acreditam na transformação social.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Cada parceria, cada voluntário, cada profissional e cada pessoa que participa das
                    atividades contribui para que o CPVHC possa continuar ampliando suas ações.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10">
                <h2 className="text-3xl font-bold text-brand-800">Governança</h2>
                <p className="text-lg text-zinc-600 leading-relaxed -mt-6">
                    O CPVHC possui uma estrutura institucional composta por:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {governanca.map((orgao) => (
                        <article
                            key={orgao.titulo}
                            className="rounded-2xl shadow-lg bg-white flex flex-col gap-4 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="w-12 h-12 rounded-xl bg-brand-800 text-amber-200 flex items-center justify-center">
                                <orgao.icone className="w-6 h-6" />
                            </span>
                            <h3 className="text-lg font-bold text-brand-900 leading-snug">{orgao.titulo}</h3>
                            <p className="text-base text-zinc-600 leading-relaxed">{orgao.descricao}</p>
                        </article>
                    ))}
                </div>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    A estrutura de governança busca assegurar a participação, a responsabilidade
                    institucional e o acompanhamento das atividades desenvolvidas.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-brand-800">Nossos Parceiros</h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    O trabalho realizado pelo CPVHC é fortalecido por meio de parcerias e da colaboração de
                    pessoas, instituições, organizações, empresas e órgãos públicos.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Cada parceria representa uma oportunidade de ampliar o alcance das ações e criar novas
                    possibilidades para a comunidade.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed font-semibold text-brand-900">
                    Juntos, podemos fazer mais.
                </p>
            </section>

            <section className="bg-brand-900 text-zinc-100 py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-amber-200 mb-3">Seja Parte Dessa História</h2>
                        <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                            O CPVHC acredita que a transformação social é construída por muitas mãos. Você
                            pode contribuir de diferentes formas:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {formasParticipar.map((forma) => (
                            <div key={forma.titulo} className="flex flex-col gap-3 bg-brand-800 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                <span className="w-12 h-12 rounded-xl bg-amber-300 text-brand-900 flex items-center justify-center">
                                    <forma.icone className="w-6 h-6" />
                                </span>
                                <h3 className="text-lg font-bold text-amber-100 leading-snug">{forma.titulo}</h3>
                                <p className="text-base leading-relaxed text-zinc-200">{forma.descricao}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl font-bold text-amber-200">
                        Promover a vida é construir oportunidades.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {frentes.map((frente) => (
                            <span
                                key={frente}
                                className="inline-flex items-center rounded-full border border-amber-200/40 px-4 py-1.5 text-base font-semibold text-amber-100 hover:bg-amber-300/10 transition-colors"
                            >
                                {frente}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}