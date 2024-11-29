"use client";

import { usePathname } from "next/navigation";

import {
  Sidebar as CatalystSidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "@/components/catalyst/sidebar";

import { Logo } from "@/components/logo";
import type { NavItem } from "@/components/navbar";

interface Props {
  navItems: NavItem[];
}

export function Sidebar({ navItems }: Props) {
  const pathname = usePathname();

  return (
    <CatalystSidebar>
      <SidebarHeader className="flex items-start">
        <Logo />
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url} current={pathname === url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </CatalystSidebar>
  );
}
