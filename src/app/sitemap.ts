import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { ADMIN, toAbsoluteUrl } from "@/lib/const/admin";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: ADMIN.website,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: toAbsoluteUrl(`/projects/${project.coverKey}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
