import { StackedLayout } from "@/components/catalyst/stacked-layout";
import { type NavItem, Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { getUserProfile } from "@/lib/auth/user";
import { redirect } from "next/navigation";

const navItems: NavItem[] = [{ label: "Home", url: "/" }];

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userProfile = await getUserProfile();
  if (!userProfile) {
    return redirect("/login");
  }

  return (
    <StackedLayout
      navbar={<Navbar userProfile={userProfile} navItems={navItems} />}
      sidebar={<Sidebar navItems={navItems} />}
    >
      {children}
    </StackedLayout>
  );
}
