import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
    title: "Obrigado pela sua doação",
};

export default function DonateSuccessPage() {
    return (
        <main className="bg-zinc-100 text-zinc-800 flex-1 flex items-center justify-center px-6 py-20">
            <section className="bg-white rounded-2xl shadow-lg border border-zinc-200 p-8 md:p-12 max-w-xl w-full text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="text-brand-800" size={32} />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-brand-800">Obrigado pela sua doação!</h1>
                    <p className="text-zinc-600 leading-relaxed">
                        Sua contribuição faz a diferença na vida de crianças, jovens e famílias do Parque Genibaú.
                    </p>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed">
                    Se você pagou por Pix, a confirmação ocorre em instantes após a aprovação no seu banco. O recibo é
                    enviado por e-mail pelo Stripe.
                </p>

                <Link
                    href="/"
                    className="bg-brand-800 text-amber-200 text-sm font-bold py-3 px-6 rounded-lg hover:bg-brand-900 transition-colors duration-200"
                >
                    Voltar ao início
                </Link>
            </section>
        </main>
    );
}