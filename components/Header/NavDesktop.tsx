import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function NavDesktop() {
    return (
        <nav className="hidden lg:flex items-center gap-6 text-xl font-medium">
            {navLinks.map((link) => (
                <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="animate-underline-expand relative text-brand-900 hover:text-brand-950 hover:scale-110 transition-all duration-200"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}