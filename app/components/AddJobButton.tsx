import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export default function AddJobButton({
  showLabel,
  setIsModalOpen,
}: {
  showLabel: boolean;
  setIsModalOpen: (value: boolean) => void;
}) {
  return (
    <div className="text-foreground-1 rounded-[6px] mt-[20px]">
      <Button
        className={cn(
          "w-full text-background overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer py-6 bg-foreground-1 hover:bg-foreground-2",
          showLabel ? " px-3 gap-2" : "justify-center px-0"
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <Plus className="h-4 w-4 shrink-0" />

        <span
          className={cn(
            "font-semibold overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out",
            showLabel ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"
          )}
        >
          Add Job
        </span>
      </Button>
    </div>
  );
}