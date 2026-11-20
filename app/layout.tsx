import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bryan-dev.vercel.app"),
  title: "Bryan.dev — Frontend Developer Portfolio",
  description:
    "Portfolio of Brayan Reyes Rodriguez, frontend developer: responsive designs, interactive web applications and user-centric solutions built with Next.js, TypeScript and Tailwind CSS.",
  keywords: [
    "frontend",
    "developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Brayan Reyes Rodriguez" }],
  openGraph: {
    title: "Bryan.dev — Frontend Developer Portfolio",
    description:
      "Collection of frontend projects showcasing responsive design and interactive web applications.",
    type: "website",
    images: [{ url: "/Bryan.jpeg", width: 400, height: 400 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2688ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased pt-12 bg-cyan-200`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
