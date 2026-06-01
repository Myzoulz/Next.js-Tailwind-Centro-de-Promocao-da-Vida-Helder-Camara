import Carousel from "./Carousel";
import HeroContent from "./HeroContent";

export default function Hero() {
    return (
        <section className="h-[calc(100dvh-112px)] w-full bg-amber-100/60 flex items-center">
            <div className="w-full h-full flex flex-col md:flex-row">
                <HeroContent />
                <Carousel />
            </div>
        </section>
    );
}
