export default function DonateSection() {
    return (
        <section
            className="relative bg-cover bg-center py-20 overflow-hidden"
            style={{ backgroundImage: "url('/fundo-donate.png')" }}
        >
            <div className="py-8 bg-brand-900/70 justify-center items-center flex">
                <a href="/donate" className="cursor-pointer mt-2 block w-full bg-brand-700 text-white text-sm font-medium py-2 rounded-lg hover:bg-brand-800 transition-colors duration-200 text-center">
                    Como Ajudar
                </a>
            </div>
        </section>
    );
}