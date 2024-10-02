import type { Metadata } from "next";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import PageContainer from "@/components/layout/page-container";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Your Dashboard",
  description: "View your tasks.",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        <PageContainer scrollable={true}>
          <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome, {session?.user.name}
              </h2>
            </div>
            {children}
          </div>
        </PageContainer>
      </main>
    </div>
  );
}
