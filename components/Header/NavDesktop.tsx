import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function NavDesktop() {
    return (
        <nav className="hidden lg:flex items-center gap-6 text-xl font-medium text-brand-900">
            {navLinks.map((link) => (
                <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-brand-950 transition-colors duration-300 border-b-2 border-transparent hover:border-brand-950">
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
