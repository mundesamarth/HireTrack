import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { searchProps } from "../lib/types";

export default function Searchbar({searchTerm, setSearchTerm}:searchProps){

    return(
        <div className="">
            <div className="border border-border min-w-0  bg-surface rounded-[12px] min-h-[52px]  flex items-center justify-center gap-x-[12px]  py-3 px-2.5  ">
              <p className=" w-8 h-8 bg-surface-muted rounded-[8px] flex items-center justify-center ">
                <Search
                  className="text-foreground-3 h-[18px] w-[18px]"
                  size={14}
                />
              </p>
              <div className="flex-1">
                <Input
                  className="border-none outline-none border-foreground-1 min-w-0 text-[14px] text-foreground-1 rounded-[10px] focus:border focus:border-border focus:outline-none placeholder:text-foreground-3 focus-visible:ring-0"
                  placeholder="Search company, role, status"
                  value={searchTerm}
                  onChange={(e)=> setSearchTerm(e.target.value)}
                />
              </div>
              <div className="text-foreground-3 flex gap-2 items-center text-xs">
                <span className="text-[9px] w-[20px] h-[20px] flex items-center justify-center rounded-[6px] border border-border ">

                  <kbd>/</kbd>
                </span>
                Search
              </div>
            </div>
          </div>
    )
}