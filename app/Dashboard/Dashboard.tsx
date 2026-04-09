"use client";
import { useEffect, useState } from "react";
import KanbanSection from "../components/kanban/KanbanSection";
import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { loadApplication } from "@/lib/utils";

export default function Dashboard() {
  type Status = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

  type applicationType = {
    companyName: string;
    positionTitle: string;
    status: Status;
    interviewType: string;
    interviewDate: string;
  };
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
      <TopmetricsSection />
      <MetricsSection />
      <KanbanSection applicationContent={applicationContent} />
    </div>
  );
}
