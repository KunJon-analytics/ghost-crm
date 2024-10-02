import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/auth/login",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
