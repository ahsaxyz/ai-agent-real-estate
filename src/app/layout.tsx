import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Atlas Neural Agency | Autonomous Intelligence for Real Estate",
  description: "Atlas deploys autonomous neural agents to analyze markets, detect acquisition opportunities, optimize portfolios, and execute real estate intelligence workflows in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
