"use client";

import {
  Navbar as CatalystNavbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
} from "@/components/catalyst/navbar";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  url: string;
}

interface Props {
  navItems: NavItem[];
}

export function Navbar({ navItems }: Props) {
  const pathname = usePathname();

  return (
    <CatalystNavbar>
      <Link
        href="/"
        className="underline decoration-zinc-950/50 underline-offset-2 hover:text-zinc-600 active:text-zinc-700 active:decoration-2 active:decoration-zinc-700"
      >
        <Logo />
      </Link>
      <NavbarDivider className="max-lg:hidden" />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem key={label} href={url} current={pathname === url}>
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
    </CatalystNavbar>
  );
}
