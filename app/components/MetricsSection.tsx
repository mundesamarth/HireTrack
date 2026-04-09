import { cn } from "@/lib/utils";
import { BriefcaseBusiness, CalendarClock, Sparkles } from "lucide-react";
import { applicationType } from "../lib/types";
type Props = {
  applicationContent: applicationType[];
};

export default function MetricsSection({ applicationContent }: Props) {
  const interviews = applicationContent.filter(
    (app) => app.status === "INTERVIEW",
  ).length;
  const offersCount = applicationContent.filter(
    (app) => app.status === "OFFER",
  ).length;
  const rejectionCount = applicationContent.filter(
    (app) => app.status === "REJECTED",
  ).length;


const result = `${offersCount}/${rejectionCount}`;

  const metricsContent = [
    {
      heading: "Total Applications",
      number: applicationContent.length,
      subHeading: "waiting on response",
      icon: BriefcaseBusiness,
    },
    {
      label: true,
      heading: "Active interviews",
      number: interviews,
      subHeading: "loops in progress",
      icon: CalendarClock,
    },
    {
      heading: "Offeres/ Rejection",
      number: result,
      subHeading: "resolved outcomes",
      icon: Sparkles,
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3 mt-2 ">
      {metricsContent.map(
        ({ heading, number, subHeading, icon: Icon, label }) => (
          <div
            key={heading}
            className="text-foreground-1  rounded-[10px] flex justify-between bg-surface border border-border p-5 "
          >
            <div className="min-w-0">
              <div className="text-[14px] text-foreground-3">{heading}</div>
              <div className="mt-3 text-foreground-1 leading-none tracking-[-0.04em]">
                <div className="flex gap-3 ">
                  <p className="text-[30px] font-bold ">{number}</p>
                  {label && (
                    <div className="inline-flex items-center gap-2 rounded-[8px] border  px-2 py-1 text-xs  border-emerald-900 bg-emerald-950/40 text-emerald-300">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      Live
                    </div>
                  )}
                </div>
              </div>
              <div className="text-[14px] text-foreground-3 mt-6">
                {subHeading}
              </div>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-surface-muted border border-border">
              <Icon className="text-foreground-3 w-4 h-4" />
            </div>
          </div>
        ),
      )}
    </div>
  );
}
