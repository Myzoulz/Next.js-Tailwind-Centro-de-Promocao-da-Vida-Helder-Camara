import { phone } from "@/constants/phone";
import { cardContent } from "./cardsContent";

export default function Card({ titulo, descricao, imagem }: cardContent) {
    const mensagem = `Olá, gostaria de me informar sobre ${titulo}!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

    return (
        <article className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col h-[380px]">
            <img
                src={imagem}
                alt={titulo}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1 gap-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{titulo}</h2>
                <p className="text-sm text-gray-500 flex-1 line-clamp-3">{descricao}</p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="cursor-pointer mt-2 w-full bg-brand-700 text-white text-sm font-medium py-2 rounded-lg hover:bg-brand-800 transition-colors duration-200">
                        Saiba Mais
                    </button>
                </a>
            </div>
        </article>
    );
}