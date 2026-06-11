import ReferenceImgs from './ReferenceImgs';
import Reference from './Reference';
import AboutText from './AboutText';

export default function AboutSection() {
    return (
        <section className="py-10 flex flex-wrap gap-8 justify-center items-center px-4 lg:px-6">
            <ReferenceImgs />
            <div className="flex flex-col gap-6 max-w-md">
                <Reference />
                <AboutText />
                <a href="/about" className="cursor-pointer mt-2 block w-full bg-brand-700 text-white text-sm font-medium py-2 rounded-lg hover:bg-brand-800 transition-colors duration-200 text-center">
                    Saiba Mais
                </a>
            </div>
        </section>
    );
}