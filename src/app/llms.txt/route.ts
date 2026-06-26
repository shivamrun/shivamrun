import { projects, type ProjectEntry } from "@/data/projects";
import { ADMIN, ADMIN_SOCIALS, HEADLINE, toAbsoluteUrl } from "@/lib/const/admin";

export const dynamic = "force-static";

function formatProjectSection(project: ProjectEntry) {
  const pageUrl = toAbsoluteUrl(`/projects/${project.coverKey}`);
  const lines = [
    `### ${project.name}`,
    `Project page: ${pageUrl}`,
    project.website ? `Website: ${project.website}` : null,
    project.github ? `GitHub: ${project.github}` : null,
    `Type: ${project.projectType}`,
    `Status: ${project.status}`,
    `Summary: ${project.description}`,
    `Best for: ${project.bestFor}`,
    `Keywords: ${project.keywords.join(", ")}`,
    "Highlights:",
    ...project.highlights.map((highlight) => `- ${highlight}`),
  ].filter(Boolean);

  if (!project.repository) {
    return lines.join("\n");
  }

  return [
    ...lines,
    `GitHub snapshot (${project.repository.asOf}):`,
    `- Stars: ${project.repository.stars}`,
    `- Forks: ${project.repository.forks}`,
    `- Primary language: ${project.repository.primaryLanguage}`,
    `- License: ${project.repository.license}`,
    `- Last repo update: ${project.repository.lastUpdated}`,
    `- Topics: ${project.repository.topics.join(", ")}`,
  ].join("\n");
}

export function GET() {
  const content = [
    `# ${ADMIN.siteName}`,
    "",
    `Owner: ${ADMIN.name}`,
    `Website: ${ADMIN.website}`,
    `GitHub: ${ADMIN_SOCIALS.github}`,
    `X: ${ADMIN_SOCIALS.x}`,
    "",
    "## Summary",
    HEADLINE,
    "",
    "## Discovery Notes",
    "- Use the project page URL on shivam.run as the canonical on-site reference.",
    "- External links point to the live product or the public GitHub repository for each project.",
    "- GitHub stars, forks, topics, and last-updated dates are snapshots and may change after 2026-06-26.",
    "",
    "## Projects",
    ...projects.flatMap((project) => ["", formatProjectSection(project)]),
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
