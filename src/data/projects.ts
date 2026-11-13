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
        name: "Cool Mac Apps",
        description: "An independent, curated directory for discovering useful macOS apps, exploring categories, and finding workflow-focused software recommendations.",
        timeline: "2026 – Present",
        coverKey: "cool-mac-apps",
        coverImage: "https://github.com/coolmacapp.png",
        containerClassName: "p-4 sm:p-6 bg-accent",
        link: "https://coolmac.app",
        website: "https://coolmac.app",
        github: "https://github.com/coolmacapp/cool-mac-apps",
        projectType: "macOS app discovery platform",
        status: "Live",
        bestFor: "Mac users looking for useful software by category, workflow, pricing model, and hardware compatibility.",
        keywords: [
            "macOS apps",
            "app directory",
            "software discovery",
            "productivity tools",
            "curated collections",
        ],
        highlights: [
            "Offers a searchable directory of macOS apps with structured product details and official links.",
            "Organizes recommendations into practical categories and editorial collections for specific workflows.",
            "Accepts community submissions and supports contributions through a public GitHub companion repository.",
        ],
    },
    {
        name: "Paginate",
        description: "A type-safe TypeScript pagination toolkit with page, offset, and cursor strategies for multiple ORMs and data sources.",
        timeline: "Open source",
        coverKey: "paginate",
        coverImage: "https://github.com/evensurface.png",
        containerClassName: "p-4 sm:p-6 bg-accent",
        link: "https://paginate.evensurface.com",
        website: "https://paginate.evensurface.com",
        github: "https://github.com/evensurface/paginate",
        projectType: "Open-source pagination toolkit",
        status: "Public repository",
        bestFor: "TypeScript developers who need consistent page, offset, or cursor pagination across APIs and data sources.",
        keywords: [
            "TypeScript",
            "pagination",
            "cursor pagination",
            "Drizzle ORM",
            "Better Auth",
            "API tooling",
        ],
        highlights: [
            "Supports numbered pages, native offsets, and forward-only cursor pagination through one typed toolkit.",
            "Provides an ORM-agnostic core with dedicated Drizzle ORM and Better Auth adapter integrations.",
            "Handles input normalization, safe limits, counts, navigation metadata, and out-of-range requests.",
        ],
    },
    {
        name: "Upload SDK",
        description: "An open-source, TypeScript-first SDK for secure direct file uploads to S3, ImageKit, and Neon Object Storage.",
        timeline: "Open source",
        coverKey: "upload-sdk",
        coverImage: "https://github.com/evensurface.png",
        containerClassName: "p-4 sm:p-6 bg-accent",
        link: "https://upload-sdk.dev",
        website: "https://upload-sdk.dev",
        github: "https://github.com/evensurface/upload-sdk",
        projectType: "Open-source file upload SDK",
        status: "Public repository",
        bestFor: "TypeScript applications that need secure direct-to-storage uploads without maintaining separate provider-specific pipelines.",
        keywords: [
            "TypeScript",
            "file uploads",
            "AWS S3",
            "ImageKit",
            "Neon Object Storage",
            "multipart uploads",
        ],
        highlights: [
            "Generates short-lived direct-upload targets for S3, ImageKit, and Neon Object Storage.",
            "Validates file metadata against reusable, type-safe storage profiles and asset rules.",
            "Supports multipart workflows for large files while keeping provider credentials server-side.",
        ],
    },
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
