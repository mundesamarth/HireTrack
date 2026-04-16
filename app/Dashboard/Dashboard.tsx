"use client";
import { useEffect, useState } from "react";
import KanbanSection from "../components/kanban/KanbanSection";
import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { filterApplications, loadApplication } from "@/lib/utils";
import { applicationType } from "../lib/types";
import AddJobModal from "../components/addModal";

export default function Dashboard() {
  const [applicationContent, setApplicationContent] = useState<
    applicationType[]
  >([]);


  const [searchTerm, setSearchTerm] = useState<string>("");
  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filteredApplication = filterApplications(applicationContent, searchTerm);

  return (
    <div className="min-w-0">
      <TopheaderSection
        fetchData={fetchData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TopmetricsSection applicationContent={filteredApplication} />
      <MetricsSection applicationContent={filteredApplication} />
      <KanbanSection applicationContent={filteredApplication} />
     
    </div>
  );
}
