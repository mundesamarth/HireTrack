import { cn } from "@/lib/utils";
import KanbanScrollSection from "./KanbanScrollableSection";

export default function KanbanContent() {
  const headingContent = [
    {
      label: "Applied",
      number: "25",
      badge: "border-border-strong bg-surface-muted text-foreground-2",
      subHeading: "Recently sent applications waiting for a reply.",
    },
    {
      label: "Interviewing",
      number: "14",
      badge: "border-emerald-900 bg-emerald-950/40 text-emerald-300",
      subHeading: "Roles with upcoming calls, loops, or on-site steps.",
    },
    {
      label: "Rejected",
      number: "9",
      badge: "border-zinc-800 bg-zinc-900 text-zinc-400",
      subHeading: "Closed roles.",
    },
    {
      label: "Offer",
      number: "4",
      badge: "border-amber-900 bg-amber-950/40 text-amber-300",
      subHeading: "Final-stage opportunities with decisions pending.",
    },
  ];
  type Status = "Applied" | "Interviewing" | "Rejected" | "Offer";
  type applicationType = {
    company: string;
    role: string;
    status: Status;
    type: string;
    date: string;
  }
   const applicationCatalog: applicationType[] = [
    {
      company: "Vercel",
      role: "Product Designer",
      status: "Applied",
      type: "Remote",
      date: "Apr 02, 09:30",
    },
    {
      company: "Linear",
      role: "Frontend Engineer",
      status: "Applied",
      type: "Onsite",
      date: "Apr 04, 14:00",
    },
    {
      company: "Notion",
      role: "Design Systems Engineer",
      status: "Interviewing",
      type: "Remote",
      date: "Apr 01, 15:00",
    },
    {
      company: "Ramp",
      role: "Senior Product Designer",
      status: "Interviewing",
      type: "Hybrid",
      date: "Apr 03, 11:30",
    },
    {
      company: "Stripe",
      role: "Brand Designer",
      status: "Rejected",
      type: "Remote",
      date: "Closed on Mar 27",
    },
    {
      company: "Figma",
      role: "Product Designer",
      status: "Offer",
      type: "Remote",
      date: "Decision by Apr 05",
    },
  ];
  return (
    <div className=" min-h-0 grid lg:grid-cols-4 gap-3 px-2 mt-2 min-h-[480px] gap-4 lg:h-[calc(100vh-290px)] lg:min-w-[1140px]  pb-2 overflow-hidden">
      {headingContent.map(({ label, number, badge, subHeading }) => {
        const filterCompany = applicationCatalog.filter(app => app.status === label)
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
              <p className="text-sm text-foreground-3 mt-[4px]">{subHeading}</p>
            </div>
            <div>
              <p
                className={cn(
                  "inline-flex items-center rounded-[8px] border px-2.5 py-1 text-xs font-medium ",
                  badge,
                )}
              >
                {number}
              </p>
            </div>
          </div>
          {/* Scrollable content in Kanbon */}
          <div className="overflow-y-auto scrollbar-none mt-3">
            <KanbanScrollSection items={filterCompany}/>
          </div>
        </div>
      )})}
    </div>
  );
}
