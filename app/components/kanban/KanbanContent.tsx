"use client";
import { cn } from "@/lib/utils";
import KanbanScrollSection from "./KanbanScrollableSection";

 type Status = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

  type applicationType = {
    companyName: string;
    positionTitle: string;
    status: Status;
    interviewType: string;
    interviewDate: string;
  };
export default function KanbanContent({
  applicationContent,
}: {
  applicationContent: applicationType[];
}) {
  const headingContent: {
    label: Status;
    badge: string;
    subHeading: string;
  }[] = [
    {
      label: "APPLIED",
      badge: "border-border-strong bg-surface-muted text-foreground-2",
      subHeading: "Recently sent applications waiting for a reply.",
    },
    {
      label: "INTERVIEW",
      badge: "border-emerald-900 bg-emerald-950/40 text-emerald-300",
      subHeading: "Roles with upcoming calls, loops, or on-site steps.",
    },
    {
      label: "REJECTED",
      badge: "border-zinc-800 bg-zinc-900 text-zinc-400",
      subHeading: "Closed roles.",
    },
    {
      label: "OFFER",
      badge: "border-amber-900 bg-amber-950/40 text-amber-300",
      subHeading: "Final-stage opportunities with decisions pending.",
    },
  ];
  type Status = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";
  type applicationType = {
    companyName: string;
    positionTitle: string;
    status: Status;
    interviewType: string;
    interviewDate: string;
  };

 

  const grouped: Record<Status, applicationType[]> = {
    APPLIED: [],
    INTERVIEW: [],
    REJECTED: [],
    OFFER: [],
  };

  applicationContent.forEach((app) => {
    grouped[app.status].push(app);
  });

  return (
    <div className=" min-h-0 grid lg:grid-cols-4 gap-3 px-2 mt-2 min-h-[480px] gap-4 lg:h-[calc(100vh-290px)] lg:min-w-[1140px]  pb-2 overflow-hidden">
      {headingContent.map(({ label, badge, subHeading }) => {
        const items = grouped[label];
        return (
          <div
            key={label}
            className="bg-surface text-foreground-1 rounded-[12px] p-3 flex min-h-0 flex-col border border-border
          "
          >
            {/* Top heading Kanban */}
            <div className="flex items-start justify-between gap-4 bg-surface-muted rounded-[10px] p-4 border border-border ">
              <div>
                <h2 className="text-sm font-semibold text-foreground-1">
                  {label}
                </h2>
                <p className="text-sm text-foreground-3 mt-[4px]">
                  {subHeading}
                </p>
              </div>
              <div>
                <p
                  className={cn(
                    "inline-flex items-center rounded-[8px] border px-2.5 py-1 text-xs font-medium ",
                    badge,
                  )}
                >
                  {items.length}
                </p>
              </div>
            </div>
            {/* Scrollable content in Kanbon */}
            <div className="overflow-y-auto scrollbar-none mt-3">
              <KanbanScrollSection items={items} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
