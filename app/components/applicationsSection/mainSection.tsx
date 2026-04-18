import { Filter } from "lucide-react";
import CardsSection from "./cardsSection";
import { applicationType } from "@/app/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MainSection({
  application,
  sortOrder,
  setSortOrder,
}: {
  application: applicationType[];
  sortOrder: "newest" | "oldest";
  setSortOrder: (value: "newest" | "oldest") => void;
}) {
  const buttonStyle =
    "bg-surface-muted text-foreground-2 cursor-pointer focus:bg-surface focus:border focus:border-border";
  return (
    <div className="my-10 w-full bg-surface h-full p-3 rounded-[10px] ">
      <div className="flex justify-between items-end  border-b border-border pb-5">
        {/* TOP SECTION */}
        <div className="text-foreground-1">
          <h2 className="text-xl font-bold">Applications</h2>
          <p className="text-foreground-3 text-sm">
            Track every role you’ve applied to
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-foreground-3 flex items-center text-sm gap-1">
            <Filter className="w-4 h-4" />
            <p>Showing 1-12 of 52</p>
          </div>
          <div className="flex gap-2">
            <Button
              className={cn(
                buttonStyle,
                sortOrder === "newest" && "bg-surface border border-border",
              )}
              onClick={() => setSortOrder("newest")}
            >
              Newest
            </Button>
            <Button
              className={buttonStyle}
              onClick={() => setSortOrder("oldest")}
            >
              Oldest
            </Button>
          </div>
        </div>
      </div>
      {/* CARDS SECTION */}
      <CardsSection application={application} />
      {/* PAGINATION SECTION */}
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
