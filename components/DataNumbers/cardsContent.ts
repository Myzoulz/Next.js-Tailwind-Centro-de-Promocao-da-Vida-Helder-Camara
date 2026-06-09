import { HeartHandshake, ThumbsUp, Cake, HousePlus } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type cardContent = { icon: LucideIcon; titulo: string; numero: string };

export const cardsContent: cardContent[] = [
    { icon: HousePlus, titulo: "Famílias Atendidas", numero: "+100" },
    { icon: ThumbsUp, titulo: "Pessoas Impactadas", numero: "+800" },
    { icon: Cake, titulo: "Anos de atuação", numero: "+25" },
    { icon: HeartHandshake, titulo: "Projetos Efetuados", numero: "+430" }
];