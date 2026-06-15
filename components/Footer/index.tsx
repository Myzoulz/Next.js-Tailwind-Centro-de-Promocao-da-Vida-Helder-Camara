import LogoFooter from "./LogoFooter";
import LinksFooter from "./LinksFooter";
import ContactFooter from "./ContactFooter";

export default function Footer() {
    return (
        <footer className="bg-zinc-200 w-full shadow-t px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:flex md:flex-col md:grid-cols-none lg:grid lg:grid-cols-3 lg:flex-row lg:items-center lg:gap-0">
            <div className="col-span-1 sm:col-span-2 flex justify-center md:justify-start lg:col-span-1">
                <LogoFooter />
            </div>

            <LinksFooter />

            <ContactFooter />

            <div className="col-span-1 sm:col-span-2 text-center lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:text-left lg:self-start">
                <h1 className="text-zinc-500">Centro de Promoção da Vida Hélder Câmara © 2026. Todos os Direitos Reservados.</h1>
                <h2 className="text-zinc-400">CNPJ: 03778.345/0001-69</h2>
            </div>
        </footer>
    );
}