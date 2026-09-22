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

const siteUrl = "https://www.cpvheldercamara.org.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CPVHC â€” Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
    template: "%s | CPVHC",
  },
  description:
    "ONG em Fortaleza-CE que hÃ¡ 26 anos promove cultura, educaÃ§Ã£o, saÃºde, esporte e seguranÃ§a alimentar para a comunidade do Parque GenibaÃº e regiÃ£o. ConheÃ§a nossas atividades e contribua.",
  keywords: [
    "CPVHC",
    "Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
    "ONG Fortaleza",
    "ONG Parque GenibaÃº",
    "doaÃ§Ã£o Fortaleza",
    "projeto social Fortaleza",
    "balÃ© clÃ¡ssico gratuito",
    "reforÃ§o escolar",
    "CearÃ¡ Sem Fome",
    "HÃ©lder CÃ¢mara",
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
    siteName: "CPVHC â€” Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
    title: "CPVHC â€” Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
    description:
      "ONG em Fortaleza-CE que hÃ¡ 26 anos promove cultura, educaÃ§Ã£o, saÃºde, esporte e seguranÃ§a alimentar para a comunidade do Parque GenibaÃº e regiÃ£o.",
    images: [
      {
        url: "/og-image.png",
        width: 1731,
        height: 909,
        alt: "Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara (CPVHC)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPVHC â€” Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
    description:
      "ONG em Fortaleza-CE que hÃ¡ 26 anos promove cultura, educaÃ§Ã£o, saÃºde, esporte e seguranÃ§a alimentar para a comunidade do Parque GenibaÃº e regiÃ£o.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}/#organization`,
  name: "Centro de PromoÃ§Ã£o da Vida HÃ©lder CÃ¢mara",
  alternateName: "CPVHC",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  slogan: "Fortalecendo vidas e inspirando futuros",
  description:
    "ONG em Fortaleza-CE que hÃ¡ 26 anos promove cultura, educaÃ§Ã£o, saÃºde, esporte e seguranÃ§a alimentar para a comunidade do Parque GenibaÃº e regiÃ£o.",
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
    name: "Parque GenibaÃº e regiÃ£o, Fortaleza-CE",
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