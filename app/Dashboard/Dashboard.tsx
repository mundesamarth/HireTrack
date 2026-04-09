"use client";
import { useEffect, useState } from "react";
import KanbanSection from "../components/kanban/KanbanSection";
import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { loadApplication } from "@/lib/utils";
import { applicationType } from "../lib/types";
export default function Dashboard() {

  
  const [applicationContent, setApplicationContent] = useState<
    applicationType[]
  >([]);

  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
    console.log(app.length)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-w-0">
      <TopheaderSection fetchData={fetchData} />
      <TopmetricsSection applicationContent={applicationContent} />
      <MetricsSection applicationContent={applicationContent} />
      <KanbanSection applicationContent={applicationContent} />
    </div>
  );
}
