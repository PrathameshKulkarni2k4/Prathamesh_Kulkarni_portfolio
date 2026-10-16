import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathamesh Kulkarni — Full-Stack & AI Engineer",
  description:
    "Prathamesh Kulkarni — B.Tech CSE '26, GATE 2025 qualified. Full-stack engineer across React, Angular, Node.js and .NET, with Flutter mobile and applied AI work. Open to SDE roles.",
  keywords: [
    "Prathamesh Kulkarni",
    "Full Stack Engineer",
    "MERN Developer",
    "Angular Developer",
    ".NET Developer",
    "Flutter Developer",
    "Next.js Developer",
    "AI Engineer",
    "Java Developer",
    "SDE",
    "DKTE",
    "Portfolio",
  ],
  authors: [{ name: "Prathamesh Kulkarni" }],
  openGraph: {
    title: "Prathamesh Kulkarni — Full-Stack & AI Engineer",
    description:
      "Full-stack engineer building MERN products and applied AI systems. Open to SDE roles.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink font-sans text-[#ededed] antialiased">
        {children}
      </body>
    </html>
  );
}
