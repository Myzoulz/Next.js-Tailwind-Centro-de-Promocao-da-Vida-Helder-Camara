export type cardContent = { titulo: string; descricao: string; imagem: string, status: string, modalidade: string, faixaEtaria: string };

export const cardsContent: cardContent[] = [
    { titulo: "Psicomotricidade", descricao: "Acompanhamento psicológico para crianças neurodivergentes.", imagem: "/imagesCards/psicomotricidade.jpg", status: "Ativo", modalidade: "saude", faixaEtaria: "infantil" },
    { titulo: "Reforço Escolar", descricao: "Apoio de aprendizado escolar para crianças que estudam na rede pública.", imagem: "/imagesCards/reforco-escolar.jpeg", status: "Ativo", modalidade: "educacao", faixaEtaria: "infantil" },
    { titulo: "Consultas Psicológicas", descricao: "Acompanhamento psicológico gratuito para a comunidade.", imagem: "/imagesCards/consultas-psicologicas.jpeg", status: "Ativo", modalidade: "saude", faixaEtaria: "todas as idades" },
    { titulo: "Ballet Clássico", descricao: "Aulas de ballet Clássico gratuito para crianças e adolescentes.", imagem: "/imagesCards/ballet-classico.jpg", status: "Ativo", modalidade: "cultura", faixaEtaria: "infantil" },
    { titulo: "Ballet Clássico Adulto", descricao: "Aulas de ballet Clássico gratuito para adultos.", imagem: "/imagesCards/ballet-classico-adulto.jpeg", status: "Ativo", modalidade: "cultura", faixaEtaria: "adulto" },
    { titulo: "Capoeira", descricao: "Aulas gratuitas de capoeira para todas as idades.", imagem: "/imagesCards/capoeira.jpeg", status: "Ativo", modalidade: "cultura", faixaEtaria: "todas as idades" },
    { titulo: "Oficina de Fuxico", descricao: "Oficina de artesanato com roda de conversa.", imagem: "/imagesCards/fuxico.jpeg", status: "Ativo", modalidade: "artezanato", faixaEtaria: "adulto" },
    { titulo: "Artesanato com Crochê", descricao: "Oficina de artesanato e empreendedorismo para mulheres.", imagem: "/imagesCards/artesanato-com-croche.jpeg", status: "Ativo", modalidade: "artezanato", faixaEtaria: "adulto" },
    { titulo: "Cine Delas", descricao: "Cine clube feito especialmente para as mulheres.", imagem: "/imagesCards/cine-delas.jpg", status: "Ativo", modalidade: "cultura", faixaEtaria: "adulto" },
    { titulo: "Estudo Bíblico", descricao: "Momentos de conhecimento e estudo religioso na instituição.", imagem: "/imagesCards/estudo-biblico.jpeg", status: "Pausado", modalidade: "educacao", faixaEtaria: "adulto" },
    { titulo: "Oficina de Libras", descricao: "Aulas gratuitas de linguagem brasileira de sinais.", imagem: "/imagesCards/placeholder.png", status: "Ativo", modalidade: "educacao", faixaEtaria: "todas as idades" },
    { titulo: "Ritimos", descricao: "Atividade física gratuita para a comunidade.", imagem: "/imagesCards/ritimos.jpeg", status: "Ativo", modalidade: "cultura", faixaEtaria: "adulto" },
    { titulo: "Ceará sem Fome", descricao: "Fornecimento de 100 quentinhas diariamente para pessoas em situação de vulnerabilidade.", imagem: "/imagesCards/ceara-sem-fome.png", status: "Ativo", modalidade: "saude", faixaEtaria: "adulto" },
    { titulo: "Oficina de Corte e Costura", descricao: "Curso completo e gratuito para aprender a costurar do zero.", imagem: "/imagesCards/corte-e-costura.jpeg", status: "Pausado", modalidade: "artezanato", faixaEtaria: "adulto" },
    { titulo: "Fisioterapia", descricao: "Acompanhamento fisioterapico gratuito.", imagem: "/imagesCards/fisioterapia.jpeg", status: "Ativo", modalidade: "saude", faixaEtaria: "todas as idades" }
];