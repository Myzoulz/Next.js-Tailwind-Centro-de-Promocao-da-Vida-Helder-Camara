import { partners } from "./partners";

export default function PartnersSection() {
    return (
        <section className="w-full py-4 px-6">
            <h2 className="text-center text-2xl font-bold py-8 text-gray-900">
                Parcerias
            </h2>
            <div className="max-w-3xl mx-auto grid grid-cols-3 gap-10">
                {partners.map((partner) => (
                    <a
                        key={partner.titulo}
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-200"
                    >
                        <img
                            src={partner.imagem}
                            alt={partner.titulo}
                            className="w-full max-w-[300px] max-h-[150px] object-contain"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}