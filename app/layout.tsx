import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathamesh Kulkarni | Full-Stack Web & AI Developer",
  description:
    "Portfolio of Prathamesh Kulkarni — B.Tech CSE '26, GATE 2025 qualified. Building scalable MERN-stack applications and intelligent AI solutions.",
  keywords: [
    "Prathamesh Kulkarni",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "AI Developer",
    "DKTE",
    "Portfolio",
  ],
  authors: [{ name: "Prathamesh Kulkarni" }],
  openGraph: {
    title: "Prathamesh Kulkarni | Full-Stack Web & AI Developer",
    description:
      "Building scalable MERN-stack applications and intelligent AI solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05050f",
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#05050f] font-sans text-slate-200 antialiased selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
