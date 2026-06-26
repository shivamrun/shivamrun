import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ADMIN, ADMIN_SOCIALS, HEADLINE, toAbsoluteUrl } from "@/lib/const/admin";
import Header from "@/components/landing-header";
import Projects from "@/components/landing-projects";

export const metadata: Metadata = {
  alternates: {
    canonical: ADMIN.website,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: ADMIN.name,
        url: ADMIN.website,
        sameAs: [ADMIN_SOCIALS.github, ADMIN_SOCIALS.x],
        jobTitle: "Full-stack developer",
      },
      {
        "@type": "WebSite",
        name: ADMIN.siteName,
        url: ADMIN.website,
        description: HEADLINE,
        author: {
          "@type": "Person",
          name: ADMIN.name,
        },
      },
      {
        "@type": "ItemList",
        name: "Projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: toAbsoluteUrl(`/projects/${project.coverKey}`),
          description: project.description,
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Projects />
    </main>
  );
}
