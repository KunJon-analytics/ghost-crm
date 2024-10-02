import type { Metadata } from "next";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import PageContainer from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Your Dashboard",
  description: "View your tasks and profile",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        <PageContainer scrollable={true}>
          <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome, Marina Lutsenko
              </h2>
            </div>
            {children}
          </div>
        </PageContainer>
      </main>
    </div>
  );
}
