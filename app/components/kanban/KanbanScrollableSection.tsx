import { kanbanTimeConversion } from "@/lib/utils";
import { CalendarClock } from "lucide-react";

import { applicationType } from "@/app/lib/types";

export default function KanbanScrollSection({
  items
}: { items: applicationType[] }) {
  return (
    <div className="overflow-hidden">
      {items.map((app) => (
        <div
          key={app.id}
          className="flex mt-2 flex-col border border-border  bg-surface p-6 pt-0 space-y-3 rounded-[12px] shadow-raised-shadow"
        >
          <div className="flex justify-between items-start gap-3 px-4 pt-4 ">
            <div>
              <h2 className="text-[15px] font-semibold leading-5 text-foreground-1">
                {app.companyName}
              </h2>
              <p className="text-sm leading-5 text-foreground-3">{app.positionTitle}</p>
            </div>
            <div className="inline-flex  text-xs itesm-center border min-w-0 min-h-0  px-2.5 rounded-[8px] py-1 mt-0.5 font-medium shrink-0 border-strong bg-surface-muted">
              <p className=" leading-5 text-foreground-2 ">{app.interviewType}</p>
            </div>
          </div>
          <div className="rounded-[10px] bg-surface-muted border border-border p-3 flex items-start flex-col gap-1">
            <p className="text-sm text-foreground-3">Next event</p>
            <p className="mt-2.5 text-sm text-foreground-2 font-medium flex items-center gap-2 ">
                <CalendarClock className="w-4 h-4"/>
                {kanbanTimeConversion(app.interviewDate)}</p>
          </div>
          <div className="flex justify-between text-sm border-t border-border px-4 py-3">
            <div>
                <p className="text-xs">{app.source === "MANUAL" ? "Manual Input" : "Gmail Sync" }</p>
            </div>
            <div className="inline-flex  text-xs itesm-center border min-w-0 min-h-0  px-2.5 rounded-[8px] py-1 mt-0.5 font-medium shrink-0 border-strong bg-surface-muted">

            <p className=" leading-5 text-foreground-2 ">{app.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
