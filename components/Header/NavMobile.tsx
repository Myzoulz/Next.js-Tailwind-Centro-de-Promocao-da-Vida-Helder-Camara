import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/navLinks";

interface NavMobileProps {
    open: boolean;
    onToggle: () => void;
    onClose: () => void;
}

export default function NavMobile({ open, onToggle, onClose }: NavMobileProps) {
    return (
        <>
            <button
                className="lg:hidden text-brand-900 hover:text-brand-950 transition-colors"
                onClick={onToggle}
                aria-label="Abrir menu"
            >
                {open ? <X size={32} /> : <Menu size={32} />}
            </button>

            {open && (
                <div className="absolute top-28 left-0 w-full bg-amber-100 border-t border-amber-200 lg:hidden z-50">
                    <nav className="flex flex-col px-6 pb-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href + link.label}
                                href={link.href}
                                onClick={onClose}
                                className="py-3 text-lg font-medium text-brand-900 hover:text-brand-950 border-b border-amber-200 last:border-none transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}