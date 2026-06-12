"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative w-full bg-brand-900 shadow-md shadow-brand-700/45">
            <div className="flex items-center justify-between p-6 h-28">
                <Logo />
                <NavDesktop />
                <NavMobile
                    open={menuOpen}
                    onToggle={() => setMenuOpen((prev) => !prev)}
                    onClose={() => setMenuOpen(false)}
                />
            </div>
        </header>
    );
}