import { cn } from "@/lib/utils";
import KanbanContent from "./KanbanContent";

export default function KanbanSection() {
 

  return (
    <div className="mt-5 mb-4 ">
      {/* Header section */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-foreground-1 text-lg font-semibold">Board</h3>
          <p className="text-foreground-3 text-sm">
            Scroll the section to view everything
          </p>
        </div>
        <div>
          <p className="text-foreground-3 text-sm">52 visible roles</p>
        </div>
      </div>
      {/* KanBan Section */}
      <div className="lg:overflow-x-auto scrollbar">
        <KanbanContent/>
      </div>
    </div>
  );
}
