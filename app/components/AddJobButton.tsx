import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export default function AddJobButton(isCollapsed : any){
    return(
        <div className="text-foreground-1 border border-border rounded-[6px] mt-[20px]" >
            <Button className={cn("bg-foreground-2 w-full text-background", isCollapsed ? "bg-foreground-1": "bg-foreground-1")}>
                <Plus/>
                <span>Add Job</span>
            </Button>
        </div>
    )
}