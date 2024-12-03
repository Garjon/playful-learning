"use client";

import { Avatar } from "@/components/catalyst/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import {
  Navbar as CatalystNavbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar";
import { Logo } from "@/components/logo";
import type { UserProfile } from "@/lib/auth/user";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  url: string;
}

interface Props {
  userProfile: UserProfile;
  navItems: NavItem[];
}

export function Navbar({ userProfile, navItems }: Props) {
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
      <NavbarSpacer />
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src={userProfile.imageUrl} square />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom end">
            <DropdownHeader>
              <div className="pr-6">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Signed in as {userProfile.name}
                </div>
                <div className="font-semibold text-sm/7 text-zinc-800 dark:text-white">
                  {userProfile.email}
                </div>
              </div>
            </DropdownHeader>
            <DropdownDivider />
            <DropdownItem href="/logout" className="flex gap-2">
              <LogOutIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarSection>
    </CatalystNavbar>
  );
}
