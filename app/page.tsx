import { Button } from "@/components/ui/button";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import TopheaderSection from "./components/Topheader";
import Dashboard from "./Dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Dashboard/>
    </div>
    // <div className="flex items-center justify-center h-40 bg-background ">
    //   <Button className="p-10 bg-secondary text-foreground-3 text-2xl">
    //     <Link href="api/auth/signin"> Google Sign In</Link>
    //   </Button>
    //       <Button className="p-10 bg-secondary text-foreground-3 text-2xl ">
    //     <Link href="/api/google"> Check Gmail</Link>
    //   </Button>
    // </div>
  );
}
