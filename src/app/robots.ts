import type { MetadataRoute } from "next";
import { ADMIN, toAbsoluteUrl } from "@/lib/const/admin";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toAbsoluteUrl("/sitemap.xml"),
    host: ADMIN.website,
  };
}
