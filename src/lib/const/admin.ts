export const ADMIN_SOCIALS = {
    x: "https://x.com/shivamrun",
    github: "https://github.com/shivamrun"
};

export const ADMIN = {
    name: "Shivam Gupta",
    username: "shivamrun",
    website: "https://shivam.run",
    siteName: "shivam.run"
};

export const HEADLINE = "I am a full-stack developer, specializing in improving and refining existing products with better UI, UX, and functionality. I build secure, scalable, and efficient platforms using modern web technologies like Next.Js and Hono.Js.";

export function toAbsoluteUrl(path = "") {
    if (!path) {
        return ADMIN.website;
    }

    if (/^https?:\/\//.test(path)) {
        return path;
    }

    return new URL(path.startsWith("/") ? path : `/${path}`, ADMIN.website).toString();
}
