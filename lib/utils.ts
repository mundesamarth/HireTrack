import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSyncTime(time: string | null) {
  if (!time) {
    return "Never Synced";
  } else {
    const currentTime = new Date();
    const syncedTime = new Date(time);

    const timeInMilsecond = currentTime.getTime() - syncedTime.getTime();
    const minutes = timeInMilsecond / 60000;
    const hours = minutes / 60;
    const days = hours / 24;

    if (minutes < 60) {
      const floorMinutes = Math.floor(minutes);
      if (floorMinutes === 0) {
        return "Just now";
      } else if (floorMinutes === 1) {
        return `${floorMinutes} min ago`;
      } else {
        return `${floorMinutes} mins ago`;
      }
    } else if (hours < 24) {
      const floorHours = Math.floor(hours);
      if (floorHours === 1) {
        return `${floorHours} hour ago`;
      } else {
        return `${floorHours} hours ago`;
      }
    } else {
      const floorDays = Math.floor(days);
      if (floorDays === 1) {
        return `${floorDays} day ago`;
      } else {
        return `${floorDays} days ago`;
      }
    }
  }
}

export function kanbanTimeConversion(time: string | null) {
  if (!time) {
    return "------";
  } else {
    return new Date(time).toLocaleString("en-GB", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  }
}

export async function loadApplication() {
  try {
    const res = await fetch("/api/applications/");
    const data = await res.json();

    return data.applications;
  } catch (error) {
    console.log(error);
    console.log("Something wrong in applications rendering");
  }
}
