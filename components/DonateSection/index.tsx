export default function DonateSection() {
    return (
        <section
            className="relative bg-cover bg-center py-20 overflow-hidden"
            style={{ backgroundImage: "url('/fundo-donate.png')" }}
        >
            <div className="py-8 bg-brand-900/70 justify-center items-center flex">
                <a href="/donate" className="default-btn">
                    Como Ajudar
                </a>
            </div>
        </section>
    );
}