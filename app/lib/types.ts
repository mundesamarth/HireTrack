export type Status = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

export type applicationType = {
  id: number;
  companyName: string;
  positionTitle: string;
  status: Status;
  interviewType: string;
  interviewDate: string;
  source: string;
  receivedAt: string;
  createdAt: string;
};

export type Props = {
  fetchData: () => Promise<void>;
};

export type searchProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
