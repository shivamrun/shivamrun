export type ProjectRepositorySnapshot = {
    stars: number;
    forks: number;
    primaryLanguage: string;
    license: string;
    lastUpdated: string;
    topics: string[];
    asOf: string;
};

export type ProjectEntry = {
    name: string;
    description: string;
    timeline: string;
    coverKey: string;
    coverImage: string;
    containerClassName: string;
    link: string;
    website?: string;
    github?: string;
    projectType: string;
    status: string;
    bestFor: string;
    keywords: string[];
    highlights: string[];
    repository?: ProjectRepositorySnapshot;
};

export const projects: ProjectEntry[] = [
    {
        name: "Better Auth Referral",
        description: "A Better Auth plugin that adds referral codes, referral attribution, dashboard stats, and referred-user lists to your app.",
        timeline: "Open source",
        coverKey: "better-auth-referral",
        coverImage: "http://github.com/better-auth.png",
        containerClassName: "p-4 sm:p-6 bg-card/80",
        link: "https://github.com/marinedotsh/better-auth-referral",
        github: "https://github.com/marinedotsh/better-auth-referral",
        projectType: "Open-source auth plugin",
        status: "Public repository",
        bestFor: "Developers building referral loops on top of Better Auth without maintaining custom referral infrastructure.",
        keywords: [
            "Better Auth",
            "TypeScript",
            "referral codes",
            "auth plugin",
            "user referrals",
            "SaaS growth",
        ],
        highlights: [
            "Generates unique referral codes for users and attributes referred email signups.",
            "Exposes typed Better Auth endpoints for referral stats and referred-user lists.",
            "Supports optional email masking and a callback for custom reward workflows.",
        ],
        repository: {
            stars: 0,
            forks: 0,
            primaryLanguage: "TypeScript",
            license: "MIT License",
            lastUpdated: "2026-07-12",
            topics: [],
            asOf: "2026-07-12",
        },
    },
    {
        name: "Reva",
        description: "A lightweight Discord timezone bot that instantly shows a member's local time for global communities and remote teams.",
        timeline: "Live now",
        coverKey: "reva",
        coverImage: "https://aurohq.b-cdn.net/reva-pfp-smaller.jpg",
        containerClassName: "bg-card/80",
        link: "https://reva.shivam.run",
        website: "https://reva.shivam.run",
        projectType: "Discord bot",
        status: "Live",
        bestFor: "Discord communities, remote teams, and gaming groups that need fast timezone coordination.",
        keywords: [
            "Discord bot",
            "timezone coordination",
            "slash commands",
            "remote teams",
            "gaming groups",
        ],
        highlights: [
            "Shows a member's local time instantly inside Discord.",
            "Keeps setup lightweight with a one-time timezone configuration flow.",
            "Handles daylight saving time automatically for global communities.",
        ],
    },
    {
        name: "Dezine Mafia",
        description: "A home for designers who build in public, with curated inspirations, tools, and portfolios in one place.",
        timeline: "Live now",
        coverKey: "dezine-mafia",
        coverImage: "https://www.dezinemafia.com/logo.png",
        containerClassName: "bg-card/80",
        link: "https://www.dezinemafia.com/",
        website: "https://www.dezinemafia.com/",
        projectType: "Design discovery platform",
        status: "Live",
        bestFor: "Designers who want one place for inspiration, tools, and portfolio visibility.",
        keywords: [
            "design portfolios",
            "design tools",
            "creative inspiration",
            "designer discovery",
            "build in public",
        ],
        highlights: [
            "Combines inspirations, tools, and portfolio discovery in one focused product.",
            "Supports public submissions with a curated quality bar before content goes live.",
            "Gives designers a dedicated surface to showcase work and get discovered.",
        ],
    },
    {
        name: "Headless Waitlist",
        description: "A production-ready headless waitlist system with email validation, rate limiting, PostgreSQL storage, and optional verification.",
        timeline: "Open source",
        coverKey: "headless-waitlist",
        coverImage: "/images/avatar.webp",
        containerClassName: "p-4 sm:p-6 bg-card/80",
        link: "https://github.com/shivamrun/headless-waitlist",
        github: "https://github.com/shivamrun/headless-waitlist",
        projectType: "Open-source waitlist system",
        status: "Public repository",
        bestFor: "Founders and indie hackers who want a production-ready waitlist backend before launch.",
        keywords: [
            "Next.js 15",
            "TypeScript",
            "PostgreSQL",
            "Drizzle ORM",
            "Resend",
            "Arcjet",
        ],
        highlights: [
            "Collects signups with email validation and rate limiting built in.",
            "Stores waitlist entries in PostgreSQL with Drizzle ORM.",
            "Supports confirmation emails and optional double opt-in verification.",
        ],
        repository: {
            stars: 69,
            forks: 3,
            primaryLanguage: "TypeScript",
            license: "MIT License",
            lastUpdated: "2026-04-10",
            topics: [
                "arcjet",
                "headless-waitlist",
                "indiedev",
                "nextjs",
                "postgresql",
                "resend",
                "waitlist",
            ],
            asOf: "2026-06-26",
        },
    },
    {
        name: "SaaS Starter",
        description: "A modern SaaS starter kit with Next.js 16, tRPC, better-auth, Drizzle ORM, email workflows, and SEO-ready foundations.",
        timeline: "Open source",
        coverKey: "saas-starter",
        coverImage: "/images/avatar.webp",
        containerClassName: "p-4 sm:p-6 bg-card/80",
        link: "https://github.com/shivamrun/saas-starter",
        github: "https://github.com/shivamrun/saas-starter",
        projectType: "Open-source SaaS starter kit",
        status: "Public repository",
        bestFor: "Developers who want a modern SaaS baseline with auth, database, email, and SEO already wired.",
        keywords: [
            "Next.js 16",
            "TypeScript",
            "tRPC",
            "better-auth",
            "Drizzle ORM",
            "SEO",
        ],
        highlights: [
            "Ships with type-safe APIs through tRPC and a modern Next.js 16 app foundation.",
            "Includes authentication, database access, and email workflows for product-ready builds.",
            "Provides reusable UI patterns and SEO-aware defaults for faster production launches.",
        ],
        repository: {
            stars: 28,
            forks: 4,
            primaryLanguage: "TypeScript",
            license: "MIT License",
            lastUpdated: "2026-04-10",
            topics: [
                "better-auth",
                "drizzle-orm",
                "nextjs",
                "postgresql",
                "react-email",
                "resend",
                "saas-starter",
                "trpc",
                "typescript",
            ],
            asOf: "2026-06-26",
        },
    },
];

export function getProjectByKey(coverKey: string) {
    return projects.find((project) => project.coverKey === coverKey);
}
