import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bryan.dev",
  description: " Brian.dev Portfolio web",
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
