import { NextResponse } from "next/server";
import { getCurrency, parseAmountToMinorUnits } from "@/constants/donation";
import { stripe, getBaseUrl } from "@/lib/stripe";

type CreateCheckoutBody = {
    currency?: string;
    amount?: string;
};

export async function POST(request: Request) {
    if (!stripe) {
        return NextResponse.json(
            { error: "As doações estão indisponíveis no momento. Tente novamente mais tarde." },
            { status: 503 }
        );
    }

    let body: CreateCheckoutBody;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
    }

    const currencyInfo = getCurrency(body.currency ?? "");
    if (!currencyInfo) {
        return NextResponse.json({ error: "Moeda não suportada." }, { status: 400 });
    }

    const minorUnits = parseAmountToMinorUnits(body.amount ?? "", currencyInfo.decimals);
    if (minorUnits === null) {
        return NextResponse.json({ error: "Informe um valor válido." }, { status: 400 });
    }

    const minMinorUnits = Math.round(currencyInfo.min * Math.pow(10, currencyInfo.decimals));
    const maxMinorUnits = Math.round(currencyInfo.max * Math.pow(10, currencyInfo.decimals));

    if (minorUnits < minMinorUnits) {
        const minWithDecimals = (minMinorUnits / Math.pow(10, currencyInfo.decimals)).toFixed(currencyInfo.decimals);
        return NextResponse.json(
            { error: `O valor mínimo de doação é ${currencyInfo.symbol} ${minWithDecimals}.` },
            { status: 400 }
        );
    }

    if (minorUnits > maxMinorUnits) {
        const maxWithDecimals = (maxMinorUnits / Math.pow(10, currencyInfo.decimals)).toFixed(currencyInfo.decimals);
        return NextResponse.json(
            { error: `O valor máximo de doação é ${currencyInfo.symbol} ${maxWithDecimals}.` },
            { status: 400 }
        );
    }

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "donate",
        currency: currencyInfo.code,
        line_items: [
            {
                price_data: {
                    currency: currencyInfo.code,
                    unit_amount: minorUnits,
                    product_data: {
                        name: "Doação CPVHC",
                        description: "Centro de Promoção da Vida Hélder Câmara",
                    },
                },
                quantity: 1,
            },
        ],
        success_url: `${getBaseUrl()}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${getBaseUrl()}/donate`,
        metadata: {
            source: "donate",
        },
    });

    if (!session.url) {
        return NextResponse.json({ error: "Não foi possível iniciar o pagamento. Tente novamente." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
}