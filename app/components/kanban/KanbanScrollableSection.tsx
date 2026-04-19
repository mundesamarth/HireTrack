import { cn, kanbanTimeConversion } from "@/lib/utils";
import { CalendarClock } from "lucide-react";

import { applicationType } from "@/app/lib/types";

export default function KanbanScrollSection({
  items,
}: {
  items: applicationType[];
}) {
  const filterArea = [
    {
      label: "APPLIED",
      badge: "bg-surface-muted text-foreground-2",
    },
    {
      label: "INTERVIEW",
      badge: "bg-emerald-950/40 text-emerald-300",
    },
    {
      label: "REJECTED",
      badge: " bg-red-950/40 text-red-300",
    },
    {
      label: "OFFER",
      badge: "bg-amber-950/40 text-amber-300",
    },
  ];
  return (
    <div className="overflow-hidden">
      {items.map((app) => {
        const statusStyle = filterArea.find(
          (item) => item.label === app.status,
        );
        const formatted =
          app.status.charAt(0).toUpperCase() +
          app.status.slice(1).toLowerCase();
        return (
          <div
            key={app.id}
            className="flex mt-2 flex-col border border-border  bg-surface p-6 pt-0 space-y-3 rounded-[12px] shadow-raised-shadow"
          >
            <div className="flex justify-between items-start gap-3 px-4 pt-4 ">
              <div>
                <h2 className="text-[15px] font-semibold leading-5 text-foreground-1">
                  {app.companyName}
                </h2>
                <p className="text-sm leading-5 text-foreground-3">
                  {app.positionTitle}
                </p>
              </div>
              <div className="inline-flex  text-xs itesm-center border min-w-0 min-h-0  px-2.5 rounded-[8px] py-1 mt-0.5 font-medium shrink-0 border-strong bg-surface-muted">
                <p className=" leading-5 text-foreground-2 ">
                  {app.interviewType ? `${app.interviewType}` : "N/A"}
                </p>
              </div>
            </div>

            <div className="rounded-[10px] bg-surface-muted border border-border p-3 flex justify-between ">
              <div className="flex items-start flex-col gap-1">
                <p className="text-sm text-foreground-3">
                  {app.status === "APPLIED" ? "Applied On" : "Next Event"}
                </p>
                <p className="mt-2.5 text-sm text-foreground-2 font-medium flex items-center gap-2 ">
                  <CalendarClock className="w-4 h-4" />
                  {app.status === "APPLIED"
                    ? app.receivedAt
                      ? kanbanTimeConversion(app.receivedAt)
                      : "N/A"
                    : app.interviewDate
                      ? kanbanTimeConversion(app.interviewDate)
                      : "N/A"}
                </p>
              </div>
              <div>
                {
                  app.status === "INTERVIEW" && <div className="inline-flex items-center gap-2 rounded-[8px]   px-2 py-1 text-xs  =">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                </div>
                }
              </div>
            </div>

            <div className="flex justify-between text-sm border-t border-border px-4 py-3 items-center pb-0">
              <div>
                <p className="text-xs">
                  {app.source === "MANUAL" ? "Manual Input" : "Gmail Sync"}
                </p>
              </div>
              <div
                className={cn(
                  "inline-flex items-center text-sm px-3 py-1 rounded-full font-medium",
                  statusStyle?.badge,
                )}
              >
                {formatted}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
