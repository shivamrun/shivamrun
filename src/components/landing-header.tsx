import { geistSans, spectral } from "@/lib/fonts/fonts";
import { ADMIN_SOCIALS } from "@/lib/const/admin";
import { Github, X } from "@/lib/logo";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function HighlighDescription({ children }: { children: React.ReactNode }) {
  return (
    <strong
      className="text-orange-400 text-[15px] md:text-[17px] font-medium md:font-normal"
      style={spectral.style}
    >
      {children}
    </strong>
  );
}

const SocialLink = ({
  href,
  icon,
  className,
}: {
  href: string;
  className?: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className={cn(
          "grid size-9 place-items-center rounded-md border border-border/60 bg-card/60 text-muted-foreground transition-colors hover:border-border hover:bg-accent/70 hover:text-foreground",
          className,
        )}
      >
        {icon}
      </Link>
    </li>
  );
};

const LandingHeader = () => {
  return (
    <div className="max-w-3xl mx-auto py-28">
      <h1
        style={spectral.style}
        className="mx-auto w-fit text-2xl text-foreground sm:text-3xl md:text-4xl"
      >
        Hey there, I&apos;m Shivam!
      </h1>
      <p
        className="mt-6 px-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base"
        style={geistSans.style}
      >
        I am a <HighlighDescription>full-stack developer</HighlighDescription>,
        specializing in <HighlighDescription>improving</HighlighDescription> and{" "}
        <HighlighDescription>refining</HighlighDescription> existing products
        with better UI, UX, and functionality. I build{" "}
        <HighlighDescription>secure</HighlighDescription>,{" "}
        <HighlighDescription>scalable</HighlighDescription>, and{" "}
        <HighlighDescription>efficient</HighlighDescription> platforms using
        modern web technologies like{" "}
        <HighlighDescription>Next.Js</HighlighDescription> and{" "}
        <HighlighDescription>Hono.Js</HighlighDescription>.
      </p>
      <ul className="flex items-center justify-center space-x-2 mt-6">
        <SocialLink href={ADMIN_SOCIALS.github} icon={<Github size={20} />} />
        <SocialLink href={ADMIN_SOCIALS.x} icon={<X size={19} />} />
        <SocialLink
          href="mailto:work.shivam@proton.me"
          icon={<Mail size={20} />}
        />
      </ul>
    </div>
  );
};

export default LandingHeader;
