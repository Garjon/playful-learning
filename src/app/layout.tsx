import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Playful Learning",
  description: "Generate fun learning activities for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth antialiased",
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col justify-between">{children}</body>
    </html>
  );
}
