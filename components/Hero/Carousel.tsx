import { EmblaViewportRefType } from "embla-carousel-react";
import { navItems } from "./navItems";

interface Props {
    emblaRef: EmblaViewportRefType;
}

export default function Carousel({ emblaRef }: Props) {
    return (
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex h-full">
                {navItems.map(({ label, imagem }) => (
                    <div key={label} className="flex-[0_0_100%] h-full">
                        <img src={imagem} alt={label} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}