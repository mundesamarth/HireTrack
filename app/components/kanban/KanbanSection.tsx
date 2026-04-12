import { cn } from "@/lib/utils";
import KanbanContent from "./KanbanContent";
import { applicationType } from "@/app/lib/types";
type Props = {
  applicationContent: applicationType[];
};
export default function KanbanSection({
  applicationContent,
}:Props) {
 

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
          <p className="text-foreground-3 text-sm">{applicationContent.length} visible roles</p>
        </div>
      </div>
      {/* KanBan Section */}
      <div className="lg:overflow-x-auto scrollbar">
        <KanbanContent applicationContent={applicationContent}/>
      </div>
    </div>
  );
}
