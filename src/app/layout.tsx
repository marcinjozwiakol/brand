import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneLayer — Brand Guidelines & Skills",
  description:
    "OneLayer's official brand guidelines and Claude Code skill library. Colors, typography, logos, layout principles, and downloadable skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
