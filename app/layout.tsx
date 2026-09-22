import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.cpvheldarcamara.org.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CPVHC — Centro de Promoção da Vida Hélder Câmara",
    template: "%s | CPVHC",
  },
  description:
    "ONG em Fortaleza-CE que há 26 anos promove cultura, educação, saúde, esporte e segurança alimentar para a comunidade do Parque Genibaú e região. Conheça nossas atividades e contribua.",
  keywords: [
    "CPVHC",
    "Centro de Promoção da Vida Hélder Câmara",
    "ONG Fortaleza",
    "ONG Parque Genibaú",
    "doação Fortaleza",
    "projeto social Fortaleza",
    "balé clássico gratuito",
    "reforço escolar",
    "Ceará Sem Fome",
    "Hélder Câmara",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CPVHC — Centro de Promoção da Vida Hélder Câmara",
    title: "CPVHC — Centro de Promoção da Vida Hélder Câmara",
    description:
      "ONG em Fortaleza-CE que há 26 anos promove cultura, educação, saúde, esporte e segurança alimentar para a comunidade do Parque Genibaú e região.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centro de Promoção da Vida Hélder Câmara (CPVHC)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPVHC — Centro de Promoção da Vida Hélder Câmara",
    description:
      "ONG em Fortaleza-CE que há 26 anos promove cultura, educação, saúde, esporte e segurança alimentar para a comunidade do Parque Genibaú e região.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}/#organization`,
  name: "Centro de Promoção da Vida Hélder Câmara",
  alternateName: "CPVHC",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  slogan: "Fortalecendo vidas e inspirando futuros",
  description:
    "ONG em Fortaleza-CE que há 26 anos promove cultura, educação, saúde, esporte e segurança alimentar para a comunidade do Parque Genibaú e região.",
  foundingDate: "2000-01-23",
  identifier: "03.778.345/0001-69",
  email: "domheldercamara13@yahoo.com.br",
  telephone: "+55 85 9195-7647",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Alves Batista, 900",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "Place",
    name: "Parque Genibaú e região, Fortaleza-CE",
  },
  sameAs: ["https://www.instagram.com/centrodomheldercamara/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}