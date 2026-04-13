"use client";

import { cn } from "@/lib/utils";
import {
  CalendarClock,
  ClipboardList,
  Cog,
  PanelLeftClose,
  PanelRightClose,
  PanelsTopLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AddJobButton from "./AddJobButton";

export default function Sidebar({setIsModalOpen}:{
  setIsModalOpen: (value: boolean) => void;
}) {
  const navigation = [
    { href: "/", label: "Dashboard", icon: PanelsTopLeft },
    { href: "/applications", label: "Applications", icon: ClipboardList },
    { href: "/interviews", label: "Interviews", icon: CalendarClock },
    { href: "/settings", label: "Settings", icon: Cog },
  ];

  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "min-h-screen bg-sidebar overflow-hidden transition-[width] duration-500 ease-in-out border-r border-border hidden md:block",
        isCollapsed ? "w-[88px]" : "w-[248px]",
      )}
    >
      <div className="flex h-full flex-col px-5 py-6 relative">
        {/* Header */}
        <div
          className={cn(
            "flex items-center",
            isCollapsed ? "justify-center" : "justify-between",
          )}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="cursor-pointer border border-border-strong bg-foreground-1 rounded-[10px] h-9 w-9 flex shrink-0 items-center justify-center font-semibold">
              H
            </div>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isCollapsed
                  ? "w-0 opacity-0 -translate-x-2"
                  : "w-auto opacity-100 translate-x-0",
              )}
            >
              <p className="text-[15px] font-extrabold text-foreground-1 whitespace-nowrap">
                HireTrack
              </p>
              <p className="text-xs text-foreground-2 whitespace-nowrap">
                Application tracker
              </p>
            </div>
          </div>

          {!isCollapsed && (
            <button onClick={() => setIsCollapsed(true)}>
              <PanelLeftClose className="h-4 w-4 cursor-pointer text-foreground-1" />
            </button>
          )}

          {isCollapsed && (
            <button onClick={() => setIsCollapsed(false)}>
              <PanelRightClose className="h-4 w-4 cursor-pointer text-foreground-1 absolute top-[35px] left-[65px] " />
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className={cn("mt-8", isCollapsed ? "space-y-4" : "space-y-1.5")}>
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link href={href} key={href}>
              <button
                onClick={() => setActiveSection(label)}
                className={cn(
                  "flex w-full items-center rounded-[10px] px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  isCollapsed ? "justify-center" : "gap-3",
                  activeSection === label
                    ? "border border-border-strong bg-surface text-foreground-1"
                    : "border border-transparent text-foreground-3 hover:border-border hover:bg-surface",
                )}
              >
                <Icon className={cn("shrink-0", isCollapsed ? "h-5 w-5" : "h-4 w-4")} />

                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out",
                    isCollapsed
                      ? "max-w-0 opacity-0"
                      : "max-w-[160px] opacity-100",
                  )}
                >
                  {label}
                </span>
              </button>
            </Link>
          ))}
        </nav>
          <AddJobButton isCollapsed={isCollapsed} setIsModalOpen={setIsModalOpen}/>
        {/* Bottom box */}
        <div className="mt-9">
          <div
            className={cn(
              "overflow-hidden rounded-[10px] border border-border-strong bg-surface text-foreground-1 flex items-center justify-center transition-all duration-300 ease-in-out",
              isCollapsed
                ? "h-0 opacity-0 scale-95 pointer-events-none"
                : "h-[200px] opacity-100 scale-100",
            )}
          >
            {!isCollapsed && <div className="w-full h-full flex items-center justify-center">SomeContainer</div>}
          </div>
        </div>
      </div>
    </aside>
  );
}