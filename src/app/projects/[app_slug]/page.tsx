// Static Site Generated Page
import type { Metadata } from "next";
import React from "react";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/markdown-components";
import { getProjectByKey } from "@/data/projects";
import { geistSans, spectral } from "@/lib/fonts/fonts";
import { ADMIN, toAbsoluteUrl } from "@/lib/const/admin";
import { Github } from "@/lib/logo";
import { cn } from "@/lib/utils";
import {
  getAllDocuments,
  getDocumentContent,
  type ProjectMeta,
} from "./util";

function isProjectMetadata(metadata: unknown): metadata is ProjectMeta {
  return Boolean(
    metadata &&
      typeof metadata === "object" &&
      "key" in metadata &&
      "link" in metadata,
  );
}

function isGitHubUrl(url?: string) {
  return Boolean(url && url.includes("github.com"));
}

export async function generateStaticParams() {
  const projects = getAllDocuments("projects");
  return projects.map((project) => ({ app_slug: project.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app_slug: string }>;
}): Promise<Metadata> {
  const { app_slug } = await params;
  const paper = await getDocumentContent({
    documentType: "projects",
    slug: app_slug,
  });
  const projectMetadata = isProjectMetadata(paper?.metadata)
    ? paper.metadata
    : null;
  const title = paper?.metadata?.title || "Project";
  const description = paper?.metadata?.description || "";
  const canonicalUrl = toAbsoluteUrl(`/projects/${app_slug}`);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      title,
      "shivam.run",
      "shivamrun",
      "@shivamrun",
      "Shivam Gupta",
      "software project",
      "portfolio",
    ],
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: ADMIN.siteName,
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator: `@${ADMIN.username}`,
    },
  };
}

async function Page({ params }: { params: Promise<{ app_slug: string }> }) {
  const { app_slug: slug } = await params;
  const paper = await getDocumentContent({ documentType: "projects", slug });
  const projectMetadata = isProjectMetadata(paper?.metadata)
    ? paper.metadata
    : null;
  const projectEntry = getProjectByKey(slug);
  const projectUrl = toAbsoluteUrl(`/projects/${slug}`);
  const coverImage = toAbsoluteUrl(
    projectMetadata?.coverImage || `/images/projects/${slug}/cover.png`,
  );
  const metadataGithub = projectMetadata?.github;
  const metadataLink = projectMetadata?.link;
  const repositoryUrl =
    projectEntry?.github ||
    metadataGithub ||
    (metadataLink && isGitHubUrl(metadataLink) ? metadataLink : undefined);
  const websiteUrl =
    projectEntry?.website ||
    (metadataLink && !isGitHubUrl(metadataLink)
      ? metadataLink
      : undefined);
  const schemaType = repositoryUrl ? "SoftwareSourceCode" : "CreativeWork";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": schemaType,
        name: paper?.metadata?.title,
        description: paper?.metadata?.description,
        url: projectUrl,
        image: coverImage,
        author: {
          "@type": "Person",
          name: ADMIN.name,
          url: ADMIN.website,
        },
        creator: {
          "@type": "Person",
          name: ADMIN.name,
          url: ADMIN.website,
        },
        mainEntityOfPage: projectUrl,
        keywords: projectEntry?.keywords.join(", "),
        dateModified: projectEntry?.repository?.lastUpdated,
        programmingLanguage: projectEntry?.repository?.primaryLanguage,
        sameAs: [websiteUrl, repositoryUrl].filter(Boolean),
        codeRepository: repositoryUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ADMIN.website,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: paper?.metadata?.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex w-fit items-center pt-2 pb-8 leading-none">
        <Link
          href="/"
          style={geistSans.style}
          className="w-fit cursor-pointer px-4 pt-1.5 pb-1 text-sm font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-border"
        >
          Home
        </Link>
        <span>/</span>
        <span
          style={geistSans.style}
          className="w-fit cursor-pointer px-4 pt-1.5 pb-1 text-sm font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-border"
        >
          Project
        </span>
      </div>
      {paper?.content ? (
        <article
          className="paper mx-auto max-w-5xl px-4 text-[17px] sm:text-lg md:px-0 md:text-[19px]"
          style={spectral.style}
        >
          <Heading level={1} className="text-center">
            {paper.metadata.title}
          </Heading>
          <p
            className="mt-2 text-center text-muted-foreground sm:mt-6"
            style={spectral.style}
          >
            {paper.metadata.description}
          </p>
          <div
            className={cn(
              "relative my-12 grid min-h-[18rem] place-items-center overflow-hidden rounded-md border border-border/70 bg-card/40",
              projectMetadata?.containerClassName,
            )}
          >
            {websiteUrl || repositoryUrl ? (
              <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                {websiteUrl ? (
                  <Link
                    href={websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={geistSans.style}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-[#0F0F14] px-3 py-1.5 text-[12px] font-medium tracking-wide text-foreground no-underline backdrop-blur-sm transition-colors hover:bg-accent"
                  >
                    Visit
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ) : null}
                {repositoryUrl ? (
                  <Link
                    href={repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={geistSans.style}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-[#0F0F14] px-3 py-1.5 text-[12px] font-medium tracking-wide text-foreground no-underline backdrop-blur-sm transition-colors hover:bg-accent"
                  >
                    <Github size={14} />
                    GitHub
                  </Link>
                ) : null}
              </div>
            ) : null}
            <img
              src={
                paper.metadata.coverImage || `/images/projects/${slug}/cover.png`
              }
              alt={paper.metadata.title}
              className="max-h-48 w-auto select-none rounded-full object-contain sm:max-h-40"
            />
          </div>
          <Markdown
            options={{
              overrides: {
                h1: {
                  component: ({ children }) => (
                    <Heading level={1}>{children}</Heading>
                  ),
                },
                h2: {
                  component: ({ children }) => (
                    <Heading level={2}>{children}</Heading>
                  ),
                },
                h3: {
                  component: ({ children }) => (
                    <Heading level={3}>{children}</Heading>
                  ),
                },
                h4: {
                  component: ({ children }) => (
                    <Heading level={4}>{children}</Heading>
                  ),
                },
              },
            }}
          >
            {paper.content}
          </Markdown>
        </article>
      ) : (
        <p>No content available</p>
      )}
    </main>
  );
}

export const dynamic = "force-static";

export default Page;
