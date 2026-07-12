import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { ADMIN, toAbsoluteUrl } from "@/lib/const/admin";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ADMIN.website,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects.map((project) => {
      const lastModified = project.repository?.lastUpdated;

      return {
        url: toAbsoluteUrl(`/projects/${project.coverKey}`),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      };
    }),
  ];
}
