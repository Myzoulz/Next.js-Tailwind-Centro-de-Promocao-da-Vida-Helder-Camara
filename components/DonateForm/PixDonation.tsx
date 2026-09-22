"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { pixQrImage, pixCode } from "@/constants/pix";

export default function PixDonation() {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        if (!pixCode) return;
        try {
            await navigator.clipboard.writeText(pixCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // noop
        }
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-3">
                <div className="bg-white border border-brand-800 rounded-xl p-2">
                    <img src={pixQrImage} alt="QR Code Pix do CPVHC" className="w-56 h-56" />
                </div>
                <p className="font-semibold text-zinc-700 text-center">
                    Escaneie o QR Code com o app do seu banco
                </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <p className="text-xs text-zinc-500 text-center leading-relaxed max-w-xs">
                    Informe <strong>o valor que deseja doar</strong> no seu banco. O pagamento cai
                    <strong> direto na conta da ONG (Bradesco)</strong>, sem taxas de cartão.
                </p>

                {pixCode && (
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-amber-200 text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                        {copied ? <Check className="w-4 h-4 text-amber-200" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Código Pix copiado!" : "Copiar código Pix"}
                    </button>
                )}
            </div>
        </div>
    );
}