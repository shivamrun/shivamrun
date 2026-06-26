import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts/fonts";
import { ADMIN, HEADLINE } from "@/lib/const/admin";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(ADMIN.website),
  title: {
    default: `${ADMIN.siteName} | ${ADMIN.name}`,
    template: `%s | ${ADMIN.siteName}`,
  },
  description: HEADLINE,
  applicationName: ADMIN.siteName,
  creator: ADMIN.name,
  publisher: ADMIN.name,
  category: "technology",
  authors: [{ name: ADMIN.name, url: ADMIN.website }],
  alternates: {
    canonical: ADMIN.website,
  },
  keywords:
    "shivam gupta, shivam.run, shivamrun, @shivamrun, website developer, reactjs, nextjs, mern stack, open source",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: ADMIN.website,
    title: `${ADMIN.siteName} | ${ADMIN.name}`,
    description: HEADLINE,
    siteName: ADMIN.siteName,
  },
  twitter: {
    card: "summary",
    title: `${ADMIN.siteName} | ${ADMIN.name}`,
    description: HEADLINE,
    creator: `@${ADMIN.username}`,
    site: `@${ADMIN.username}`,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
