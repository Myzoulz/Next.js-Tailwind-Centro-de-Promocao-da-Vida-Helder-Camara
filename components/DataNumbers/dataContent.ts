import { HeartHandshake, ThumbsUp, Cake, HousePlus } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type DataContent = { icon: LucideIcon; titulo: string; numero: string };

export const dataContent: DataContent[] = [
    { icon: HousePlus, titulo: "Famílias Atendidas", numero: "+250" },
    { icon: ThumbsUp, titulo: "Pessoas Impactadas", numero: "+400" },
    { icon: Cake, titulo: "Anos de atuação", numero: "26" },
    { icon: HeartHandshake, titulo: "Ações Efetuadas", numero: "+65" }
];