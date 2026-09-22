import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Atividades",
    description:
        "Conheça as atividades gratuitas do CPVHC no Parque Genibaú, em Fortaleza-CE: psicomotricidade, reforço escolar, consultas psicológicas, balé clássico, capoeira, fisioterapia, oficinas de artesanato e o programa Ceará Sem Fome.",
};

export default function AtividadesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}