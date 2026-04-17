"use client";

import { Menu, Search } from "lucide-react";

import { usePathname } from "next/navigation";
import Searchbar from "./Searchbar";
import Syncbutton from "./Syncbutton";
import {  Props, searchProps } from "@/app/lib/types";

export default function TopheaderSection({
  fetchData,
  searchTerm,
  setSearchTerm,
}: Props & searchProps) {
  const pathname = usePathname();

  const headingLabel = [
    {
      label: "Job applications",
      subLabel: "Track, manage, and land your next opportunity",
      href: "/",
    },
    {
      label: "Application ",
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
    <div className="flex xl:flex-row xl:justify-between xl:items-start flex-col mt-7 h-auto border-b pb-5 md:gap-2">
      {/* Left Section  */}
      <div className="flex gap-8 items-center justify-between box-border relative">
        
        <div className="pb-4 ">
          <div className="text-[34px] font-semibold leading-none tracking-[-0.06rem] text-foreground-1 ">
            {currentHeading?.label}
          </div>
          <div className="text-sm mt-2 text-foreground-2 max-w-2xl">
            {currentHeading?.subLabel}
          </div>
        </div>
        <div className="lg:hidden absolute right-0 top-3 bg-surface w-10 h-10 rounded-[30%] flex items-center justify-center cursor-pointer">
          <Menu className="text-foreground-2 "/>
        </div>
      </div>
      {/* Right side */}

      <div className="flex gap-4 min-h-[52px] sm:flex-row flex-col ">
        {/* Search Bar */}
        <div className="md:w-full ">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        {/* Sync Button */}
        <Syncbutton fetchData={fetchData} />
      </div>
    </div>
  );
}
