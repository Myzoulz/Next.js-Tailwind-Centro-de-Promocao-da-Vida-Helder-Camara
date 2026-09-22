import type { MetadataRoute } from "next";

const siteUrl = "https://www.cpvheldarcamara.org.br";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/donate/success", "/docsTransparencia"],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}