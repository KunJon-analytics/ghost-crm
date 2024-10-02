import { ModeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav session={{ ...session?.user }} />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
