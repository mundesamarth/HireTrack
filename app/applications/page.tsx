"use client";
import { useEffect, useState } from "react";
import TopheaderSection from "../components/Topheader";
import TopmetricsSection from "../components/TopmetricsSection";
import { applicationType } from "../lib/types";
import { filterApplications, loadApplication, sortedApplication } from "@/lib/utils";
import MainSection from "../components/applicationsSection/mainSection";

export default function Applications() {
  const [applicationContent, setApplicationContent] = useState<
    applicationType[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");



  async function fetchData() {
    const app = await loadApplication();
    setApplicationContent(app);
    console.log(app.length);
  }
  useEffect(() => {
    fetchData();
  }, []);

  
  // UTILS to find the function for filter and sort
  const filteredApplication = filterApplications(
    applicationContent,
    searchTerm,
  );

  const sortApplication = sortedApplication(filteredApplication, sortOrder);

  return (
    <div>
      <TopheaderSection
        fetchData={fetchData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TopmetricsSection applicationContent={filteredApplication} />

      <MainSection
        application={sortApplication}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  );
}
