import type { MetadataRoute } from "next";

const siteUrl = "https://www.cpvheldercamara.org.br";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/atividades`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/institucional`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/transparencia`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/voluntariado`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/donate`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}