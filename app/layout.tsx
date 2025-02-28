import type { Metadata } from "next";
import "./globals.css";

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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
