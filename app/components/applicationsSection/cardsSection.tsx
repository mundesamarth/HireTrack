import { applicationType } from "@/app/lib/types";
import { kanbanTimeConversion } from "@/lib/utils";

export default function CardsSection({
  application,
}: {
  application: applicationType[];
}) {
  return (
    <div>
      {application.map((m) => (
        <div
          className="border border-border shadow-raised-shadow my-7 rounded-[10px] text-foreground-1 flex px-4 py-5 justify-between "
          key={m.id}
        >
          <div>
            <h3 className="">{m.companyName}</h3>
            <p>{m.positionTitle}</p>
          </div>
          <div>
            <p>Status</p>
            <p>{m.status}</p>
          </div>
          <div>
            <p>Next event</p>
            <p>{kanbanTimeConversion(m.interviewDate)}</p>
          </div>
          <div className="flex gap-4">
            <p>{m.interviewType}</p>
            <p>{m.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
