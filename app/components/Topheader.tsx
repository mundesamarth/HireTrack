"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Searchbar from "./Searchbar";
import Syncbutton from "./Syncbutton";


export default function TopheaderSection() {
  const pathname = usePathname();

  const headingLabel = [
    {
      label: "Job applications",
      subLabel: "Track, manage, and land your next opportunity",
      href: "/",
    },
    {
      label: "Application Section",
      subLabel: "Track every role you’ve applied to",
      href: "/applications",
    },
    {
      label: "Interviews",
      subLabel: "Stay prepared and never miss a step",
      href: "/interviews",
    },
    {
      label: "Settings",
      subLabel: "Manage your preferences and account",
      href: "/settings",
    },
  ];
  const icon = [
    {
      searchBar: Search,
    },
  ];
  const currentHeading = headingLabel.find((h) => h.href === pathname);
  return (
    <div className="flex justify-between mt-7 h-auto min-w-560px max-w-720px  border-b pb-5 sm:flex-wrap ">
      {/* Left Section  */}
      <div className="">
        <div className="text-[34px] font-[600] leading-none tracking-[-0.06rem] text-foreground-1">
          {currentHeading?.label}
        </div>
        <div className="text-sm mt-2 text-foreground-2">
          {currentHeading?.subLabel}
        </div>
      </div>
      {/* Right side */}
      <div>
        <div className="flex gap-4 sm:flex-wrap min-h-[52px] md:w-[100%]">
            {/* Search Bar */}
          <Searchbar/>
          {/* Sync Button */}
          <Syncbutton/>
        </div>
      </div>
    </div>
  );
}

// 4. Search Toolbar Design System

// This is the command-style search module.

// ### Container
// - Height: minimum `52px`
// - Background: primary surface
// - Border: `1px solid --border`
// - Radius: `12px`
// - Shadow: shared raised surface
// - Layout: icon tile + input/content + trailing shortcut hint

// ### Internal Layout
// - Horizontal gap: `12px`
// - Padding: `16px`
// - Icon tile size: `32x32`
// - Input height: visually aligned inside `52px` container

// ### Search Input
// - Font size: `14px`
// - Radius: `10px`
// - Background: transparent or integrated with toolbar surface
// - Shortcut hint: `/` key shown inside `Kbd`

// ### Responsive Behavior
// - Mobile: full width
// - `sm` and up: pairs with Gmail sync in a 2-column utility grid

// ### Design Intent
// - Should feel like a command/search surface
// - Must not look like a plain input dropped in the header

// ---


// ### Responsive Behavior
// - Mobile: stacks below search
// - `sm` and above: sits beside search in toolbar grid

// ---
