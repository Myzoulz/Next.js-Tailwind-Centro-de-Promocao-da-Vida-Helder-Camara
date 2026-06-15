import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function LinksFooter() {
    return (
        <div className="items-start flex flex-col gap-1 md:items-center">
            <h1 className="text-brand-950/60 text-xl font-bold lg:text-center">
                links rapidos
            </h1>
            <nav className="items-start flex flex-col gap-1 md:items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href + link.label}
                        href={link.href}
                        className="animate-underline-expand relative text-brand-900 hover:text-brand-950 zoom-on-hover"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}