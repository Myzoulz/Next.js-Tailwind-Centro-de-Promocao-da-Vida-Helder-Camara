export type DonationCurrency = {
    code: "brl" | "usd" | "eur" | "ars" | "bob" | "mxn" | "cop" | "clp";
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
    { code: "ars", symbol: "AR$", label: "Peso argentino (ARS)", min: 1000, max: 10000000, decimals: 2 },
    { code: "bob", symbol: "Bs", label: "Boliviano (BOB)", min: 5, max: 70000, decimals: 2 },
    { code: "mxn", symbol: "MX$", label: "Peso mexicano (MXN)", min: 10, max: 200000, decimals: 2 },
    { code: "cop", symbol: "COP$", label: "Peso colombiano (COP)", min: 1000, max: 40000000, decimals: 2 },
    { code: "clp", symbol: "CLP$", label: "Peso chileno (CLP)", min: 500, max: 10000000, decimals: 0 },
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