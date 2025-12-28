import { MetadataRoute } from "next";
import { DATA } from "@/data/config/site.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = DATA.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

