import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/font";
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata: Metadata = {
  title: "CultureLancer",
  description: "culterlancer career job portal app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <CookiesProvider>{children}</CookiesProvider>
        </body>
    </html>
  );
}