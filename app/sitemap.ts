import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Sitemap {
  const baseUrl = "saltandlightevent.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
