import { Filter } from "lucide-react";
import CardsSection from "./cardsSection";
import { applicationType } from "@/app/lib/types";

export default function MainSection({
  application,
}: {
  application: applicationType[];
}) {
  return (
    <div className="my-10 w-full bg-surface h-full p-5 rounded-[10px] ">
      <div className="flex justify-between items-end  border-b border-border pb-7">
        {/* TOP SECTION */}
        <div className="text-foreground-1">
          <h2 className="text-xl font-bold">Applications</h2>
          <p className="text-foreground-3 text-sm">
            Track every role you’ve applied to
          </p>
        </div>
        <div className="text-foreground-3 flex items-center text-sm gap-1">
          <Filter className="w-4 h-4" />
          <p>Showing 1-12 of 52</p>
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
