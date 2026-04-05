// This is the `Applied / Interviewing / Rejected / Offer` filter area.

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ### Structure
// - Four independent filter containers
// - Not one shared segmented wrapper

// ### Each Filter Chip
// - Height: `40px`
// - Horizontal padding: `14px`
// - Radius: `10px`
// - Background: primary surface
// - Border: `1px solid --border`
// - Shadow: shared raised surface
// - Typography: `14px`, medium

// ### Spacing
// - Gap between chips: `12px`
// - Gap above metrics section: `24px`
// - Gap below header separator: `24px`

// ### Interaction
// - Active state:
//   - stronger border
//   - stronger text
//   - slightly more prominent surface treatment
// - Inactive state:
//   - muted text
//   - regular surface
// - Hover:
//   - subtle border/background shift only

// ### Responsive Behavior
// - Mobile/tablet: wraps cleanly
// - Desktop: single row

// ### Design Intent
// - Each filter should feel like an independent tool
// - Should breathe visually and never hug adjacent chips

//  Stage styling
//   - Applied: neutral muted surface
//   - Interviewing: emerald-accent priority state
//   - Rejected: lowered emphasis and reduced opacity
//   - Offer: amber-accent final-state styling

const filterArea = [
  {
    label: "Applied",
    number: "25",
    badge: "border-border-strong bg-surface-muted text-foreground-2",
  },
  {
    label: "Interviewing",
    number: "14",
    badge: "border-emerald-900 bg-emerald-950/40 text-emerald-300",
  },
  {
    label: "Rejected",
    number: "9",
    badge: "border-zinc-800 bg-zinc-900 text-zinc-400",
  },
  {
    label: "Offer",
    number: "4",
    badge: "border-amber-900 bg-amber-950/40 text-amber-300",
  },
];


export default function TopmetricsSection() {
  return (
    <div className="text-foreground-1 flex gap-3 mt-5">
      {filterArea.map(({ label, number, badge }) => (
        <div key={label} className="bg-surface h-[40px] flex items-center justify-center gap-3 px-[14px] rounded-[10px] border border-border text-foreground-3 text-sm font-medium bg-raised-shadow">
          <div className= "">
            {label} 
          </div>
          <div className={cn(
            "ml-1 inline-flex items-center rounded-[8px] border px-2.5 py-1 text-xs font-medium", badge
          )}>

            {number}
          </div>
        </div>
      ))}
    </div>
  );
}
