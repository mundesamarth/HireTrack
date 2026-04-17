import { applicationType } from "@/app/lib/types";
import CardSectionInterview from "./cardSection";

export default function MainSectionInterview({
  applicationContent,
}: {
  applicationContent: applicationType[];
}) {
  const interviewData = applicationContent.filter(
    (app) => app.status === "INTERVIEW",
  );

  const interviewCount = interviewData.length;
  return (
    <div className="my-10 w-full bg-surface h-full p-5 rounded-[10px] border border-border">
      {/* Top Section */}
      <div className="flex justify-between mb-5 pb-7 border-b border-border ">
        <div className="">
          <h3 className="text-xl text-foreground-1 font-semibold">
            Interviews
          </h3>
          <p className="text-sm pt-2 text-foreground-3">
            Stay prepared and never miss a step
          </p>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-[8px] border  px-2 py-1 text-xs  border-emerald-900 bg-emerald-950/40 text-emerald-300 ">
            <div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-70 " />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 " />
              </span>
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">{interviewCount}</span>
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div>
        <CardSectionInterview applicationContent={interviewData} />
      </div>
      {/* pagination section */}
      <div></div>
    </div>
  );
}
