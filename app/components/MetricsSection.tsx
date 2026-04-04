// 7. 

// This is the summary area with:
// - Total Applications
// - Active Interviews
// - Offers / Rejections

// ### Grid
// - Mobile: stacked
// - Desktop: 3-column grid

// ### Card Container
// - Background: primary surface
// - Border: `1px solid --border`
// - Radius: `12px`
// - Shadow: shared raised surface
// - Padding: `20px`

// ### Internal Content
// - Label: `14px`
// - Metric number: `30px`, `600`
// - Supporting note/footer: `14px`

// ### Card Spacing
// - Gap between metric cards: `16px` to `20px`
// - Gap above board section: `32px`

// ### Active Interviews Card
// - Includes pulsing green dot
// - Dot is the only “live” visual cue in metrics
// - Accent should stay restrained, not neon

// ### Design Rules
// - Metrics should look like product stats, not marketing KPIs
// - Emphasis comes from typography and spacing, not heavy color fills

import { cn } from "@/lib/utils";
import { BriefcaseBusiness, CalendarClock, Sparkles } from "lucide-react";

export default function MetricsSection() {
  const metricsContent = [
    {
      heading: "Total Applications",
      number: "52",
      subHeading: "waiting on response",
      icon: BriefcaseBusiness,
    },
    {
      label: true,
      heading: "Active interviews",
      number: "14",
      subHeading: "loops in progress",
      icon: CalendarClock,
    },
    {
      heading: "Offeres/ Rejection",
      number: "4/9",
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
