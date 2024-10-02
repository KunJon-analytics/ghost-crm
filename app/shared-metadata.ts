import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const TITLE = siteConfig.name;
export const DESCRIPTION = siteConfig.description;

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | ${TITLE}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  metadataBase: new URL(siteConfig.url),
};

export const twitterMetadata: Metadata["twitter"] = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: [`${siteConfig.url}/api/og`],
};

export const ogMetadata: Metadata["openGraph"] = {
  title: TITLE,
  description: DESCRIPTION,
  type: "website",
  images: [`${siteConfig.url}/api/og`],
};
