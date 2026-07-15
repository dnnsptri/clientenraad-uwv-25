import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

// Served at /sitemap.xml. Article entries are derived from lib/articles.ts,
// so new articles are picked up automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/foreword`, priority: 0.8 },
    { url: `${SITE_URL}/colofon`, priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
