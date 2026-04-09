import { cn } from "@/lib/utils";
import { applicationType } from "../lib/types";

type Props = {
  applicationContent: applicationType[];
};

export default function TopmetricsSection({ applicationContent }: Props) {
  const appliedCount = applicationContent.filter((app)=> app.status === "APPLIED").length
  const interviewCount = applicationContent.filter((app)=> app.status === "INTERVIEW").length
  const rejectedCount = applicationContent.filter((app)=> app.status === "REJECTED").length
  const offerCount = applicationContent.filter((app)=> app.status === "OFFER").length


  const filterArea = [
    {
      label: "Applied",
      number: appliedCount,
      badge: "border-border-strong bg-surface-muted text-foreground-2",
    },
    {
      label: "Interviewing",
      number: interviewCount,
      badge: "border-emerald-900 bg-emerald-950/40 text-emerald-300",
    },
    {
      label: "Rejected",
      number: rejectedCount,
      badge: "border-zinc-800 bg-zinc-900 text-zinc-400",
    },
    {
      label: "Offer",
      number:offerCount,
      badge: "border-amber-900 bg-amber-950/40 text-amber-300",
    },
  ];
  return (
    <div className="text-foreground-1 flex gap-3 mt-5">
      {filterArea.map(({ label, number, badge }) => (
        <div
          key={label}
          className="bg-surface h-[40px] flex items-center justify-center gap-3 px-[14px] rounded-[10px] border border-border text-foreground-3 text-sm font-medium bg-raised-shadow"
        >
          <div className="">{label}</div>
          <div
            className={cn(
              "ml-1 inline-flex items-center rounded-[8px] border px-2.5 py-1 text-xs font-medium",
              badge,
            )}
          >
            {number}
          </div>
        </div>
      ))}
    </div>
  );
}
