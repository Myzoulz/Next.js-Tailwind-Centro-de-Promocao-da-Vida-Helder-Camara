import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function NavDesktop() {
    return (
        <nav className="hidden md:flex items-center gap-6 text-xl font-medium text-indigo-900">
            {navLinks.map((link) => (
                <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="hover:text-indigo-950 transition-colors duration-300">
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
