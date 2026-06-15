import Link from "next/link";

export default function LogoFooter() {
    return (
        <div className="flex flex-col items-center justify-self-start">
            <img src="/logo-footer.png" alt="Logo Footer" className="h-30 w-auto object-contain" />
            <Link href="https://github.com/Myzoulz" className="flex items-center opacity-30 hover:opacity-60 transition-opacity mt-1 underline">
                <span className="text-zinc-800 text-sm px-1">desenvolvido por Lucas Rocha</span>
                <img src="/github-logo.png" alt="Github Logo" className="h-4 w-4" />
            </Link>
        </div>
    );
}