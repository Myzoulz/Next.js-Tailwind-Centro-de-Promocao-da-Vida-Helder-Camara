import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex items-center gap-4">
            <Link href="/" className="h-24 w-24">
                <img src="/logo.png" alt="Logo" />
            </Link>
            <span className="flex flex-col">
                <h1 className="text-lg font-bold text-indigo-900">CPVHC</h1>
                <h2 className="text-sm font-medium text-emerald-900">Fortalecendo vidas e inspirando futuros</h2>
            </span>
        </div>
    );
}
