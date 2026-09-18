export type DonationCurrency = {
    code: "brl" | "usd" | "eur";
    symbol: string;
    label: string;
    min: number;
    max: number;
    decimals: 0 | 2;
};

export const donationCurrencies: DonationCurrency[] = [
    { code: "brl", symbol: "R$", label: "Real (BRL)", min: 1, max: 50000, decimals: 2 },
    { code: "usd", symbol: "US$", label: "Dólar (USD)", min: 1, max: 10000, decimals: 2 },
    { code: "eur", symbol: "€", label: "Euro (EUR)", min: 1, max: 10000, decimals: 2 },
];

export function getCurrency(code: string): DonationCurrency | undefined {
    return donationCurrencies.find((currency) => currency.code === code);
}

export function parseAmountToMinorUnits(raw: string, decimals: 0 | 2): number | null {
    const cleaned = raw.trim().replace(/\s+/g, "");
    if (!/^\d[\d.,]*$/.test(cleaned)) return null;

    let normalized = cleaned;
    if (normalized.includes(".") && normalized.includes(",")) {
        normalized = normalized.replace(/\./g, "").replace(",", ".");
    } else if (normalized.includes(",")) {
        normalized = normalized.replace(",", ".");
    }

    const value = Number(normalized);
    if (!Number.isFinite(value) || value < 0) return null;

    return Math.round(value * Math.pow(10, decimals));
}

export function getMajorUnits(currency: DonationCurrency, minorUnits: number): number {
    return minorUnits / Math.pow(10, currency.decimals);
}