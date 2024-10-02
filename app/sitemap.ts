import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config";

const addPathToBaseURL = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/auth/login"].map((route) => ({
    url: addPathToBaseURL(route),
    lastModified: new Date(),
  }));

  return [...routes];
}
