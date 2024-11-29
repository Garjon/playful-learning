import { StackedLayout } from "@/components/catalyst/stacked-layout";
import { type NavItem, Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
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

const navItems: NavItem[] = [{ label: "Home", url: "/" }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950",
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col justify-between">
        <StackedLayout
          navbar={<Navbar navItems={navItems} />}
          sidebar={<Sidebar navItems={navItems} />}
        >
          {children}
        </StackedLayout>
      </body>
    </html>
  );
}
