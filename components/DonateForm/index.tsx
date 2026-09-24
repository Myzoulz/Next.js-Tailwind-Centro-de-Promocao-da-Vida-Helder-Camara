"use client";
import { useState } from "react";
import { CreditCard, QrCode } from "lucide-react";
import { donationCurrencies, getCurrency, parseAmountToMinorUnits, type DonationCurrency } from "@/constants/donation";
import PixDonation from "./PixDonation";

function detectCurrency(): DonationCurrency["code"] {
    if (typeof navigator === "undefined") return "brl";
    const lang = navigator.language.toLowerCase();

    if (lang.startsWith("pt")) return "brl";

    if (lang.startsWith("es-ar")) return "ars";
    if (lang.startsWith("es-bo")) return "bob";
    if (lang.startsWith("es-mx")) return "mxn";
    if (lang.startsWith("es-co")) return "cop";
    if (lang.startsWith("es-cl")) return "clp";

    const eurozone = ["de", "fr", "it", "es", "nl", "fi", "el", "sk", "si", "lt", "lv", "et", "mt", "pt-pt", "hr", "bg", "ro", "hu", "pl", "cs", "da", "sv"];
    if (eurozone.some((prefix) => lang.startsWith(prefix))) return "eur";

    return "usd";
}

export default function DonateForm() {
    const [method, setMethod] = useState<"cartao" | "pix">("cartao");
    const [currencyCode, setCurrencyCode] = useState<DonationCurrency["code"]>(detectCurrency);
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const currency = getCurrency(currencyCode) ?? donationCurrencies[0];

    const parsedMinorUnits = parseAmountToMinorUnits(amount, currency.decimals);
    const minMinorUnits = Math.round(currency.min * Math.pow(10, currency.decimals));
    const preview = parsedMinorUnits !== null && parsedMinorUnits >= minMinorUnits
        ? `${currency.symbol} ${(parsedMinorUnits / Math.pow(10, currency.decimals)).toLocaleString("pt-BR", {
              minimumFractionDigits: currency.decimals,
              maximumFractionDigits: currency.decimals,
          })}`
        : null;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);

        if (parsedMinorUnits === null) {
            setError("Informe um valor válido.");
            return;
        }
        if (parsedMinorUnits < minMinorUnits) {
            setError(`O valor mínimo de doação é ${currency.symbol} ${currency.min.toFixed(currency.decimals)}.`);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("/api/stripe/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currency: currency.code, amount }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error ?? "Não foi possível iniciar o pagamento. Tente novamente.");
                return;
            }

            window.location.href = data.url;
        } catch {
            setError("Não foi possível iniciar o pagamento. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-zinc-200 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2 bg-zinc-100 rounded-lg p-1">
                <button
                    type="button"
                    onClick={() => setMethod("cartao")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                        method === "cartao" ? "bg-brand-800 text-amber-200" : "text-zinc-600 hover:bg-zinc-200"
                    }`}
                >
                    <CreditCard className="w-4 h-4" />
                    Cartão
                </button>
                <button
                    type="button"
                    onClick={() => setMethod("pix")}
                    className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                        method === "pix" ? "bg-brand-800 text-amber-200" : "text-zinc-600 hover:bg-zinc-200"
                    }`}
                >
                    <QrCode className="w-4 h-4" />
                    Pix
                </button>
            </div>

            {method === "cartao" ? (
                <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="currency" className="text-sm font-semibold text-zinc-700">
                                Moeda
                            </label>
                            <select
                                id="currency"
                                value={currency.code}
                                onChange={(event) => setCurrencyCode(event.target.value as DonationCurrency["code"])}
                                className="w-full border border-zinc-300 rounded-lg px-4 py-3 bg-white text-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-800"
                            >
                                {donationCurrencies.map((option) => (
                                    <option key={option.code} value={option.code}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="amount" className="text-sm font-semibold text-zinc-700">
                                Valor da doação
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-semibold">
                                    {currency.symbol}
                                </span>
                                <input
                                    id="amount"
                                    type="text"
                                    inputMode="decimal"
                                    value={amount}
                                    onChange={(event) => setAmount(event.target.value)}
                                    placeholder={currency.decimals === 2 ? "0,00" : "0"}
                                    className="w-full border border-zinc-300 rounded-lg pl-12 pr-4 py-3 bg-white text-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand-800"
                                />
                            </div>
                            {preview && (
                                <p className="text-xs text-zinc-500">
                                    Você doará: <span className="font-semibold text-zinc-700">{preview}</span>
                                </p>
                            )}
                        </div>

                        {error && (
                            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-brand-800 text-amber-200 text-lg font-bold py-3 rounded-lg hover:bg-brand-900 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Aguarde..." : "Doar agora"}
                        </button>
                    </form>

                    <div className="flex flex-col gap-2 text-xs text-zinc-500 border-t border-zinc-200 pt-4">
                        <p>
                            O valor é cobrado na moeda escolhida. A conversão para reais (BRL) é feita automaticamente pelo
                            Stripe após a doação.
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                            Pagamento seguro processado pela Stripe. Nenhum dado de cartão é armazenado por nós.
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <PixDonation />

                    <div className="flex flex-col gap-2 text-xs text-zinc-500 border-t border-zinc-200 pt-4">
                        <p>
                            O valor da doação é informado por você no app do seu banco. O pagamento cai{" "}
                            <strong>direto na conta da ONG (Bradesco)</strong>, sem taxas de cartão.
                        </p>
                        <p className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                            Confira o beneficiário <strong>CPVHC</strong> antes de
                            confirmar a transferência.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}