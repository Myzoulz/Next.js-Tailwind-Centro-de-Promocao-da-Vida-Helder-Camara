'use client';
import { useInView } from 'react-intersection-observer';

export default function Collage() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="relative w-full max-w-2xl aspect-[4/3]">

            <img
                src="/imagesEquipe/equipe.jpeg"
                alt="Equipe do CPVHC"
                className="absolute left-0 top-0 w-[65%] h-full object-cover rounded-xl"
            />

            <img
                src="/imagesEquipe/equipe-2.jpeg"
                alt="Equipe do CPVHC"
                className={`absolute right-0 top-1/5 w-[45%] aspect-video object-cover rounded-xl shadow-lg
                    ${inView ? 'animate-fadeSlide [animation-duration:1300ms]' : 'opacity-0'}`}
            />

            <img
                src="/imagesEquipe/equipe-3.jpeg"
                alt="Equipe do CPVHC"
                className={`absolute right-16 bottom-0 w-[55%] aspect-video object-cover object-bottom rounded-xl shadow-lg
                    ${inView ? 'animate-fadeSlide [animation-duration:2100ms]' : 'opacity-0'}`}
            />
        </section>
    );
}