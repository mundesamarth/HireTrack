"use client";
import { useEffect, useState } from "react";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { applicationType } from "../lib/types";
import { filterApplications, loadApplication } from "@/lib/utils";
import MainSection from "../components/applicationsSection/mainSection";

export default function Applications() {
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
      <TopmetricsSection applicationContent={filteredApplication} />

      <MainSection application ={filteredApplication}/>
    </div>
  );
}
