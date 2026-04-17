"use client";
import { useEffect, useState } from "react";
import TopheaderSection from "../components/Topheader";
import { applicationType } from "../lib/types";
import { filterApplications, loadApplication } from "@/lib/utils";
import MainSectionInterview from "../components/interviewSection/mainSection";

export default function Interviews() {
  const [applicationContent, setApplicationContent] = useState<
    applicationType[]
  >([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
    console.log(app.length);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const filteredApplication = filterApplications(
    applicationContent,
    searchTerm,
  );
  return (
    <div>
      <TopheaderSection
        fetchData={fetchData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MainSectionInterview applicationContent = {filteredApplication}/>
    </div>
  );
}
