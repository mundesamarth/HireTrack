import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Syncbutton() {
  const [loading, setLoading] = useState(false);
  const [syncTime, setSyncTime] = useState<string | null>(null);

  // Date Helper function
  function formatSyncTime(time: string | null ) {
    if (!time) {
      return "Never Synced";
    } else {
      const currentTime = new Date();
      const syncedTime = new Date(time);

      const timeInMilsecond = currentTime.getTime() - syncedTime.getTime();
      const minutes = timeInMilsecond / 60000;
      const hours = minutes / 60;
      const days = hours / 24

      if(minutes < 60){
        const floorMinutes = Math.floor(minutes)
        if(floorMinutes === 0){
          return "Just now"
        }else if(floorMinutes === 1){
          return `${floorMinutes} min ago`

        }else{
          return `${floorMinutes} mins ago`
        }
      }else if(hours < 24) {
        
        const floorHours = Math.floor(hours)
        if(floorHours === 1){
        return `${floorHours} hour ago`

        }else{

          return `${floorHours} hours ago`
        }
      }else {
        const floorDays = Math.floor(days)
        if(floorDays === 1){
        return `${floorDays} day ago`

        }else{

          return `${floorDays} days ago`
        }
      }
    }
  }

  useEffect(() => {
    async function loadSyncTime() {
      try {
        const res = await fetch("/api/sync", { method: "GET" });
        const data = await res.json();

        setSyncTime(data.lastSyncedAt);
      } catch (error) {
        console.log("Something broke at loadSyncTime Function ");
      }
    }
    loadSyncTime();
  }, []);

  async function callSync() {
    try {
      setLoading(true);
      await fetch("/api/sync", { method: "POST" });

      const res = await fetch("/api/sync");
      const data = await res.json();

      setSyncTime(data.lastSyncedAt);
    } catch (error) {
      console.log("Something went wrong at callSync function");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" shrink-0">
      <div className="border border-border min-w-0  bg-surface rounded-[12px] min-h-[52px]  flex justify-between  gap-x-[12px]  py-2.5 px-2.5  ">
        {/* Left */}

        <div className="flex  items-center gap-1">
          <div className="w-8 h-8 flex items-center justify-center bg-surface-muted rounded-[8px]">
            <Mail className="text-foreground-3 h-4 w-4" />
          </div>
          {/* Middle */}
          <div className="min-w-0">
            <div className="text-[14px] font-medium  text-foreground-1 text-sm ">
              Gmail sync
            </div>
            <div className="text-[12px] text-foreground-3  text-xs">
              Last Synced {formatSyncTime(syncTime)}
            </div>
          </div>
        </div>
        {/* Right */}
        <div>
          <Button
            className="!rounded-[12px] text-background bg-foreground-1 text-sm py-4 hover:opacity-92 font-medium ml-auto shrink-0 cursor-pointer  !px-4"
            onClick={callSync}
          >
            <RefreshCcw
              className={cn(
                "!w-3.5 !h-3.5 scale-x-[-1]",
                loading ? "[animation:spin_1s_linear_infinite_reverse]" : "",
              )}
            />
            {loading ? "Syncing.." : "Sync Gmail"}
          </Button>
        </div>
      </div>
    </div>
  );
}
