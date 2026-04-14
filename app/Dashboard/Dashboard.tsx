"use client";
import { useEffect, useState } from "react";
import KanbanSection from "../components/kanban/KanbanSection";
import MetricsSection from "../components/MetricsSection";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { loadApplication } from "@/lib/utils";
import { applicationType } from "../lib/types";
import AddJobModal from "../components/addModal";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [applicationContent, setApplicationContent] = useState<
    applicationType[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>("");
  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
    console.log(app.length);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const lowerSearchTerm = searchTerm.toLowerCase();
  const filteredApplication = applicationContent.filter(
    (s) =>
      (s.companyName || "").toLowerCase().includes(lowerSearchTerm) ||
      (s.status || "").toLowerCase().includes(lowerSearchTerm) ||
      (s.positionTitle || "").toLowerCase().includes(lowerSearchTerm),
  );

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
      <AddJobModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        fetchData={fetchData}
      />
    </div>
  );
}
