'use client';

import { useInView } from 'react-intersection-observer';

type Item = {
    img: string;
    alt: string;
    dur: number;
    title: string;
    text: string[];
};

const introItems: Item[] = [
    {
        img: '/imagesAbout/imageAbout_01.jpeg',
        alt: 'História do CPVHC',
        dur: 1000,
        title: 'Uma história nascida da necessidade da comunidade',
        text: [
            'O Centro de Promoção da Vida Hélder Câmara (CPVHC) foi criado em 23 de janeiro de 2000, a partir da iniciativa da Equipe Social do bairro Parque Genibaú, em Fortaleza/CE. Naquele período, a comunidade enfrentava diversas dificuldades relacionadas à ausência de políticas públicas e serviços essenciais, como falta de água encanada, escolas, posto de saúde, saneamento básico e infraestrutura adequada.'
        ]
    },
    {
        img: '/imagesAbout/imageAbout_02.jpeg',
        alt: 'Mobilização comunitária do CPVHC',
        dur: 1400,
        title: 'Uma caminhada de mobilização e luta',
        text: [
            'Diante dessa realidade, a Equipe Social passou a se reunir para planejar ações coletivas e organizar momentos de mobilização e luta por melhorias para o território. Dessa caminhada nasceu o Centro de Promoção da Vida Hélder Câmara, como um espaço comunitário de defesa de direitos, participação popular e promoção da vida, tendo como missão acolher crianças, adolescentes, jovens, adultos e famílias em situação de vulnerabilidade social.',
            'Desde sua criação, o Centro buscou manter suas portas abertas para a comunidade, oferecendo apoio, acolhimento e oportunidades para aqueles que mais necessitam. A instituição acredita na força da solidariedade e na importância de construir caminhos coletivos, reconhecendo que todas as pessoas possuem necessidades, mas algumas enfrentam situações de maior vulnerabilidade.'
        ]
    },
    {
        img: '/imagesAbout/imageAbout_03.jpeg',
        alt: 'Primeiras iniciativas do CPVHC',
        dur: 1800,
        title: 'As primeiras iniciativas',
        text: [
            'Uma das primeiras iniciativas desenvolvidas pelo Centro de Promoção da Vida Hélder Câmara foi o fortalecimento de um grupo de mulheres que realizava atividades de crochê, confecção de roupas e artesanato. Com o crescimento do grupo e o desenvolvimento das habilidades das participantes, a iniciativa transformou-se em uma cooperativa, possibilitando autonomia, geração de renda e a criação de um espaço próprio fora do Centro.'
        ]
    },
    {
        img: '/imagesAbout/imageAbout_04.jpeg',
        alt: 'Atividades educativas e culturais do CPVHC',
        dur: 2200,
        title: 'Novas demandas, novas respostas',
        text: [
            'Com o passar do tempo, a comunidade também apresentou novas demandas. Famílias começaram a procurar o CPVHC em busca de atividades para crianças e adolescentes, especialmente por não possuírem condições financeiras para pagar acompanhamento escolar ou atividades complementares. Assim, foram iniciadas ações de reforço escolar e balé clássico, garantindo acesso a atividades culturais e educativas para estudantes da rede pública.',
            'A instituição também passou a atuar junto aos jovens, diante dos desafios sociais enfrentados no território, como a violência, a presença de grupos criminosos, a falta de oportunidades e as condições de extrema pobreza. O Centro de Promoção da Vida Hélder Câmara compreendeu a necessidade de criar alternativas de formação, convivência, professionalização e geração de renda, oferecendo possibilidades para que crianças, adolescentes, jovens e adultos construam novos projetos de vida.'
        ]
    },
];

const closingItem: Item[] = [
    {
        img: '/imagesAbout/imageAbout_05.jpeg',
        alt: 'Comunidade CPVHC',
        dur: 2600,
        title: 'Uma história construída em comunidade',
        text: [
            'A trajetória do Centro de Promoção da Vida Hélder Câmara é marcada pela participação comunitária, pela defesa de direitos e pela construção de oportunidades. O Centro permanece como um espaço de acolhimento, aprendizado e transformação social, fortalecendo vínculos e contribuindo para que moradores do Genibaú e bairros vizinhos tenham acesso à educação, cultura, professionalização e melhores condições de vida.'
        ]
    },
];

function AnimatedRow({ item, index }: { item: Item; index: number }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
            <img
                ref={ref}
                src={item.img}
                alt={item.alt}
                className={`w-full md:w-1/2 rounded-xl object-cover aspect-video ${inView ? 'animate-fadeSlide' : 'opacity-0'}`}
                style={{ animationDuration: `${item.dur}ms` }}
            />
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-brand-800">{item.title}</h2>
                {item.text.map((t, j) => (
                    <p key={j} className="text-zinc-600 leading-relaxed">{t}</p>
                ))}
            </div>
        </div>
    );
}

function AnimatedRows({ items }: { items: Item[] }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
            {items.map((s, i) => (
                <AnimatedRow key={s.img} item={s} index={i} />
            ))}
        </section>
    );
}

export function AboutAnimatedSection() {
    return <AnimatedRows items={introItems} />;
}

export function AboutClosingSection() {
    return <AnimatedRows items={closingItem} />;
}