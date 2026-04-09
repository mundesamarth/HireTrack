export type Status = "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER";

export type applicationType = {
  companyName: string;
  positionTitle: string;
  status: Status;
  interviewType: string;
  interviewDate: string;
};

export type Props = {
  fetchData: () => Promise<void>;
};
