// 8. Kanban Board Design System

// This is the main board section.

// ### Layout
// - Four columns:
//   - Applied
//   - Interviewing
//   - Rejected
//   - Offer
// - Desktop:
//   - 4-column lane grid
//   - board min width: `1140px`
//   - board height: `calc(100vh - 290px)`
//   - min height: `480px`
// - Narrow screens:
//   - horizontal scroll enabled

// ### Spacing
// - Gap between lanes: `16px`
// - Gap above board from metrics: `32px`

// ### Lane Container
// - Background: transparent to lightly muted depending on wrapper
// - Internal header panel + card stack + dot pagination
// - Radius follows `12px` surface family

// ### Behavior
// - Each lane has internal scroll-snap pagination
// - No arrow-based pagination
// - Dot pagination below card stack

// ### Design Intent
// - Operational board, not visual clutter
// - Content should stay visible without making the page absurdly long

export default function KanbanSection() {
  const headingContent = [
    {
      label: "Applied",
      number: "25",
      badge: "border-border-strong bg-surface-muted text-foreground-2",
    },
    {
      label: "Interviewing",
      number: "14",
      badge: "border-emerald-900 bg-emerald-950/40 text-emerald-300'",
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

  return (
    <div className="mt-5 mb-10">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-foreground-1 text-lg font-bold">Board</h3>
          <span className="text-foreground-3 text-sm">
            Scroll inside the section to view
          </span>
        </div>
        <div>
          <p className="text-foreground-3 text-sm">52 visible roles</p>
        </div>
      </div>
      <div className="mt-2  h-[calc(100vh-290px)] " >
        <div className="flex justify-between ">
            {
                headingContent.map(({label, number,badge})=>(
                    <div key={label} className="">

                    <div  className=" flex w-[400px] bg-surface-muted rounded-[10px]  h-full py-10 px-10" >
                        {label}
                    </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
