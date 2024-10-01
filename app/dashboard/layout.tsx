import type { Metadata } from "next";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

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
        {children}
      </main>
    </div>
  );
}
