import { HeartPulse, UsersRound, Music, Flame, BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = { label: string; icon: LucideIcon; imagem: string; conteudo: string };

export const navItems: NavItem[] = [
    { label: "Educação", icon: BookOpen, imagem: "/imagesHero/educacao.jpg", conteudo: "Por meio do reforço escolar, atendemos crianças até o 6º ano do Ensino Fundamental, oferecendo acompanhamento pedagógico que contribui para o fortalecimento da aprendizagem e o desenvolvimento de habilidades essenciais para sua trajetória escolar." },
    { label: "Cultura", icon: Music, imagem: "/imagesHero/cultura.jpg", conteudo: "Em parceria com o projeto Arte na Quebrada, oferecemos oficinas de Percussão, Graffiti, Poesia Subversiva e Hip-Hop. Também temos Ballet Clássico gratuito, ampliando o acesso à arte e fortalecendo a cultura na periferia. As atividades estimulam a criatividade, a disciplina e a expressão de crianças, adolescentes e jovens." },
    { label: "Saúde", icon: HeartPulse, imagem: "/imagesHero/saude.jpg", conteudo: "Oferecemos atendimentos gratuitos de fisioterapia, psicologia e psicomotricidade, promovendo a saúde física, mental e o desenvolvimento integral de crianças, adolescentes e adultos, com atenção especial às crianças neurodivergentes." },
    { label: "Família", icon: UsersRound, imagem: "/imagesHero/familia.jpg", conteudo: "Apoiamos famílias em situação de vulnerabilidade por meio da distribuição de 100 marmitas diárias com apoio do programa Ceará Sem Fome, ações de solidariedade e acolhimento comunitário. Durante a pandemia e em períodos de enchentes provocadas pelo Rio Maranguapinho, também oferecemos assistência e abrigo a famílias afetadas." },
    { label: "Juventude", icon: Flame, imagem: "/imagesHero/juventude.jpg", conteudo: "Em parceria com o coletivo Juventude com Arte, realizamos atividades culturais, educativas e comunitárias que valorizam os talentos locais, estimulam a cidadania e incentivam a juventude a atuar de forma ativa na construção de uma comunidade mais justa, criativa e solidária." },
];