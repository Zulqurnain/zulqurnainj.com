import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zulqurnainj.com";
  const now = new Date();
  return [
    { url: base,                                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/projects`,                           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/apps`,                               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/apps/delete-all-messages-by-z`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
