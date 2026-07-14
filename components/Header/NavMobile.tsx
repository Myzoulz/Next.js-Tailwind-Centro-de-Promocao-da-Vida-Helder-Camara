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
                className="fixed lg:hidden bottom-6 right-6 z-50 bg-brand-900 text-amber-200 p-3 rounded-full shadow-lg shadow-brand-700/45 hover:bg-brand-800 hover:text-amber-300 transition-all duration-200"
                onClick={onToggle}
                aria-label="Abrir menu"
            >
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {open && (
                <div className="fixed inset-0 bg-brand-950/95 lg:hidden z-40 flex flex-col items-center justify-center">
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href + link.label}
                                href={link.href}
                                onClick={onClose}
                                className="text-2xl font-medium text-amber-100 hover:text-yellow-200 transition-colors duration-200"
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