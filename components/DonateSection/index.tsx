import { Heart } from "lucide-react";

export default function DonateSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-70 overflow-hidden"
            style={{ 
                backgroundImage: "url('/donate-background.png')",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="flex flex-col justify-center items-center h-full gap-4 bg-brand-900/40 text-zinc-100">
                <h2 className="main-texts leading-normal">Contribua com a organização</h2>
                <h1 className="text-3xl font-sans font-semibold text-zinc-100">Doar é um ato de amor</h1>
                <Heart />
                <a href="/donate" className="default-btn w-80 h-15 text-2xl bg-amber-200 hover:bg-amber-300 text-brand-800">
                    Como Ajudar
                </a>
            </div>
        </section>
    );
}