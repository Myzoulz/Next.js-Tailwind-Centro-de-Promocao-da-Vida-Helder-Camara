import DataCards from "./DataCards";

export default function DataNumbers() {
    return (
        <section
            className="relative bg-parallax overflow-hidden"
            style={{
                backgroundImage: "url('/donate-background.png')",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="flex justify-center items-center bg-brand-900/40 h-full py-8">
                <DataCards />
            </div>
        </section>
    );
}