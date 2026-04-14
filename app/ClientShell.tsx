"use client";

import { useEffect, useState } from "react";
import AddJobModal from "./components/addModal";
import Sidebar from "./components/Sidebar";
import { loadApplication } from "@/lib/utils";
import { applicationType } from "./lib/types";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationContent, setApplicationContent] = useState<
      applicationType[]
    >([]);
  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
    console.log(app.length);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar setIsModalOpen={setIsModalOpen} />
      <div className="flex-1 min-w-0">
        <div className="h-full overflow-y-auto overflow-x-hidden scrollbar">
          <div className="mx-auto w-full px-8">{children}</div>
        </div>
      </div>
      <AddJobModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} fetchData={fetchData}/>
    </div>
  );
}
