import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex items-center gap-4">
            <Link href="/" className="h-24 w-24">
                <img src="/logo.png" alt="Logo" />
            </Link>
            <span className="flex flex-col">
                <p className="text-lg font-bold text-amber-200">CPVHC</p>
                <p className="text-sm font-medium text-zinc-100">Fortalecendo vidas e inspirando futuros</p>
            </span>
        </div>
    );
}
