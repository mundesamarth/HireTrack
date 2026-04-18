"use client";

import { cn } from "@/lib/utils";
import {
  CalendarClock,
  ClipboardList,
  Cog,
  PanelsTopLeft,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddJobButton from "./AddJobButton";
import { useMobileDrawer } from "./context/userMobileDrawer";

export default function SidebarDrawer({
  setIsModalOpen,
  
}: {
  setIsModalOpen: (value: boolean) => void;
 
}) {
  const pathname = usePathname();
const { isMobileDrawerOpen, setIsMobileDrawerOpen } = useMobileDrawer();
  const navigation = [
    { href: "/", label: "Dashboard", icon: PanelsTopLeft },
    { href: "/applications", label: "Applications", icon: ClipboardList },
    { href: "/interviews", label: "Interviews", icon: CalendarClock },
    { href: "/settings", label: "Settings", icon: Cog },
  ];

  return (
    <div
      className={cn(
        "fixed inset-0 z-60 lg:hidden transition-all duration-300",
        isMobileDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isMobileDrawerOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsMobileDrawerOpen(false)}
      />

      <aside
        className={cn(
          "absolute left-0 top-0 h-full w-[248px] bg-sidebar border-r border-border px-5 py-6 transition-transform duration-300 ease-in-out",
          isMobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="cursor-pointer border border-border-strong bg-foreground-1 rounded-[10px] h-9 w-9 flex shrink-0 items-center justify-center font-semibold">
              H
            </div>

            <div>
              <p className="text-[15px] font-extrabold text-foreground-1 whitespace-nowrap">
                HireTrack
              </p>
              <p className="text-xs text-foreground-2 whitespace-nowrap">
                Application tracker
              </p>
            </div>
          </div>

          <button onClick={() => setIsMobileDrawerOpen(false)}>
            <X className="h-4 w-4 text-foreground-1" />
          </button>
        </div>

        <nav className="mt-8 space-y-1.5">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link
              href={href}
              key={href}
              onClick={() => setIsMobileDrawerOpen(false)}
            >
              <button
                className={cn(
                  "flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  pathname === href
                    ? "border border-border-strong bg-surface text-foreground-1"
                    : "border border-transparent text-foreground-3 hover:border-border hover:bg-surface"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{label}</span>
              </button>
            </Link>
          ))}
        </nav>

        <AddJobButton
          showLabel={true}
          setIsModalOpen={setIsModalOpen}
        />
      </aside>
    </div>
  );
}