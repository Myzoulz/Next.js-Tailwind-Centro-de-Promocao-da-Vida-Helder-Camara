import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contactLinks } from "./contactLinks";
import { phone } from "@/constants/phone";

const iconMap = {
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
    mail: Mail,
    map: MapPin,
};

export default function ContactFooter() {
    return (
        <div className="flex flex-col items-end gap-2 lg:items-end">
            <h1 className="text-brand-950/60 text-xl font-bold">contato</h1>

            {contactLinks.map(({ href, label, icon, external }) => {
                const Icon = iconMap[icon];
                const finalHref = icon === "whatsapp" ? `${href}${phone}` : href;

                return (
                    <Link
                        key={href}
                        href={finalHref}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center gap-2 text-brand-900 hover:text-brand-950 zoom-on-hover text-right"
                    >
                        <h1 className="break-words text-sm sm:text-base">{label}</h1>
                        <Icon size={24} className="shrink-0" />
                    </Link>
                );
            })}
        </div>
    );
}