'use client';
import { useInView } from 'react-intersection-observer';

export default function ReferenceImgs() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="relative w-full max-w-2xl aspect-[4/3]">

            <img
                src="/imagesReference/pe-luis.jpeg"
                alt="Pe. Luís"
                className="absolute left-0 top-0 w-[65%] h-full object-cover rounded-xl"
            />

            <img
                src="/imagesReference/faixada.jpeg"
                alt="Faixada CPVHC"
                className={`absolute right-0 top-1/5 w-[45%] aspect-video object-cover rounded-xl shadow-lg
                    ${inView ? 'animate-fadeSlide [animation-duration:1200ms]' : 'opacity-0'}`}
            />

            <img
                src="/imagesReference/fundacao.jpeg"
                alt="Fundação"
                className={`absolute right-8 bottom-0 w-[55%] aspect-video object-cover rounded-xl shadow-lg
                    ${inView ? 'animate-fadeSlide [animation-duration:2000ms]' : 'opacity-0'}`}
            />
        </section>
    );
}