import { applicationType } from "@/app/lib/types";
import { kanbanTimeConversion } from "@/lib/utils";
import { CalendarClock, Keyboard, Mail } from "lucide-react";

export default function CardSectionInterview({
  applicationContent,
}: {
  applicationContent: applicationType[];
}) {
  
  return (
    <>
      {applicationContent.map((m) => (
        <div
          className="border border-border shadow-raised-shadow my-3 rounded-[10px] text-foreground-1  px-4 py-5 w-full"
          key={m.id}
        >
          <div className="flex justify-between ">
            <div className="flex gap-3 flex-col">
              <span className="text-foreground-1 text-l font-bold">
                {m.companyName}
              </span>
              <span className="text-foreground-3 text-sm">
                {m.positionTitle}
              </span>
              <span className="font-bold flex gap-2 items-center">
                <CalendarClock className="w-4 h-4 text-emerald-300" />
                <span>
                  {m.interviewDate
                    ? kanbanTimeConversion(m.interviewDate)
                    : "No date scheduled"}
                </span>
              </span>
            </div>
            <div className="flex flex-col justify-between items-end">
              <span className="inline-flex px-3 py-1 rounded-full bg-surface-muted text-sm">
                 {m.interviewType || "Not specified"}
              </span>
              <span className="text-sm text-foreground-3 flex gap-2 items-center">
                {m.source === "GMAIL" ? (
                  <Mail className="w-4 h-4 " />
                ) : (
                  <Keyboard className="w-4 h-4" />
                )}

                {m.source === "GMAIL" ? "Gmail Sync" : "Manual Input"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
