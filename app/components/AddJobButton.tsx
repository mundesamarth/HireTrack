import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddJobModal from "./addModal";

export default function AddJobButton({
  isCollapsed,
  setIsModalOpen,
}: {
  isCollapsed: boolean;
  setIsModalOpen: (value: boolean) => void;
}) {

    return(
        <div className="text-foreground-1 rounded-[6px] mt-[20px]" >
            <Button className={cn("bg-foreground-1 w-full text-background overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer", isCollapsed ? " hover:cursor-pointer bg-foreground-1 ": "bg-foreground-1")} onClick={() =>setIsModalOpen(true)}>
                <Plus className={cn("shrink-0", isCollapsed ? "!h-5 !w-5 text-surface flex items-center justify-center" : "h-4 w-4")} />
                <span className={cn(" ",
                    isCollapsed ?  "max-w-0 opacity-0"
                      : "max-w-[160px] opacity-100"
                 )}>Add Job</span>

            </Button>

       
          
        </div>
    )
}