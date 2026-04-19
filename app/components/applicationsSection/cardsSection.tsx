import { applicationType } from "@/app/lib/types";
import { cn, kanbanTimeConversion } from "@/lib/utils";
import { CalendarCheck, CalendarClock, Keyboard, Mail } from "lucide-react";

export default function CardsSection({
  application,
}: {
  application: applicationType[];
}) {
  const filterArea = [
    {
      label: "APPLIED",
      badge: " bg-surface-muted text-foreground-2",
    },
    {
      label: "INTERVIEW",
      badge: " bg-emerald-950/40 text-emerald-300",
    },
    {
      label: "REJECTED",
      badge: " bg-red-950/40 text-red-300",
    },
    {
      label: "OFFER",
      badge: " bg-amber-950/40 text-amber-300",
    },
  ];

  return (
    <div className="fade-in">
      {application.map((m) => {
        const statusStyle = filterArea.find((item) => item.label === m.status);
        const formatted =
          m.status.charAt(0).toUpperCase() + m.status.slice(1).toLowerCase();
        return (
          <div
            className=" border border-border shadow-raised-shadow my-4 rounded-[10px] text-foreground-1 grid grid-cols-4 px-4 py-5 "
            key={m.id}
          >
            <div>
              <h3 className="text-foreground-1 pb-0.5">{m.companyName}</h3>
              <p className="text-foreground-3 text-sm">{m.positionTitle}</p>
            </div>
            <div>
              <div>
                <span
                  className={cn(
                    "text-sm font-medium px-2 py-0.5 rounded-full bg-opacity-20",
                    statusStyle?.badge,
                  )}
                >
                  {formatted}
                </span>
              </div>
            </div>
            <div>
              <p className="text-foreground-3 text-xs pb-1">{m.status === "APPLIED" ? ("Applied on"):("Next Event")}</p>
              <p className="flex items-center gap-1"
            >
               {m.interviewType ? ( <CalendarClock className= {cn("w-4 h-4",m.status === "INTERVIEW" && "text-emerald-300") } />): ("")}

                {m.status === "APPLIED"
                  ? m.receivedAt
                    ? kanbanTimeConversion(m.receivedAt)
                    : "N/A"
                  : m.interviewDate
                    ? kanbanTimeConversion(m.interviewDate)
                    : "N/A"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-foreground-2 inline-flex px-3 py-1 rounded-full bg-surface-muted text-sm">
                {m.interviewType ? `${m.interviewType}` : "N/A"}{" "}
              </p>
              <p className="text-xs text-foreground-3 flex gap-1">
                {" "}
                {m.source === "GMAIL" ? (
                  <Mail className="w-4 h-4 " />
                ) : (
                  <Keyboard className="w-4 h-4" />
                )}
                {m.source === "GMAIL" ? "Gmail" : "Manual"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
