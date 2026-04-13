"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import TopheaderSection from "./components/Topheader";
import Dashboard from "./Dashboard/Dashboard";
import { GooeyToaster } from "goey-toast";

export default function Home() {
  return (
    <div>
      <GooeyToaster position="bottom-right" theme="dark" />

      <Dashboard />
    </div>
  );
}
