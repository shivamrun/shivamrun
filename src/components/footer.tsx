import { geistSans } from "@/lib/fonts/fonts";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-20 w-full items-center border-t border-border/70">
      <div
        className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between space-y-1.5 px-3 text-muted-foreground sm:flex-row sm:items-center sm:space-y-0 lg:px-0"
        style={geistSans.style}
      >
        <span className="text-sm md:text-[15px]">
          Not copyrighted, just{" "}
          <span className="rounded-[2px] bg-orange-600 px-1 font-medium italic text-foreground">
            emotionally
          </span>{" "}
          attached.
        </span>
        <span className="text-sm md:text-[15px]">Thank you.</span>
      </div>
    </footer>
  );
};

export default Footer;
