// ## 5. Gmail Sync Module Design System

import { Button } from "@/components/ui/button";
import { CloudSync, Mail, RefreshCcw } from "lucide-react";

// This is the sync control in the top toolbar.

// ### Container
// - Height: minimum `52px`
// - Background: primary surface
// - Border: `1px solid --border`
// - Radius: `12px`
// - Shadow: shared raised surface

// ### Structure
// - Left: icon tile
// - Middle: sync status text block
// - Right: action button

// ### Icon Tile
// - Size: `32x32`
// - Background: muted surface
// - Radius: `10px`

// ### Text Block
// - Title/status line: `14px`, medium
// - Supporting copy: `12px`
// - Uses muted text for secondary line

// ### Action
// - Uses system button styles
// - Must feel like part of one control, not an attached random button

export default function Syncbutton() {
  return (
    <div className="rounded-[12px] border border-border min-h-[52px] bg-surface flex items-center justify-center px-2.5 gap-3">
      {/* Left */}
      <div className="w-8 h-8 flex items-center justify-center bg-surface-muted rounded-[8px]">
        <Mail className="text-foreground-3 h-4 w-4" />
      </div>
      {/* Middle */}
      <div>
        <div className="text-[14px] font-medium">Gmail sync</div>
        <div className="text-[12px] text-foreground-3">
          Last synced Today, 00:25
        </div>
      </div>
      {/* Right */}
      <div>
        <Button className="!rounded-[12px] text-background bg-foreground-1 text-sm py-4 hover:opacity-92 font-medium ml-auto shrink-0 cursor-pointer  !px-4">
          <RefreshCcw className="!w-3.5 !h-3.5 scale-x-[-1]" />
          Sync Gmail
        </Button>
      </div>
    </div>
  );
}
