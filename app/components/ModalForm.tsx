"use client ";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import DatePickerTime from "@/components/ui/datePicker";
import SelectDropdown from "@/components/ui/dropDownMenu";
import { useState } from "react";
type Props = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalForm({setIsModalOpen}:Props) {
  const [workMode, setWorkMode] = useState("");
  const workOption = [
    { id: 1, label: "Remote" },
    { id: 2, label: "Hybrid" },
    { id: 3, label: "Onsite" },
  ];
  const [stageMode, setStageMode] = useState("");

  const stageOptions = [
    { id: 1, label: "Applied" },
    { id: 2, label: "Interviewing" },
    { id: 3, label: "Rejected" },
    { id: 4, label: "Offer" },
  ];

  const inputStyle =
    "border border-border focus:border focus:border-border focus:outline-none placeholder:text-foreground-3 focus-visible:ring-0 h-12";
  return (
    <form action="">
      <FieldGroup>
        <FieldSet>
          <div className="flex justify-between border-b border-border pb-5">
            <div>
              <FieldLegend>Add Job</FieldLegend>
              <FieldDescription className="text-foreground-2">
                Create a manual application and keep track
              </FieldDescription>
            </div>
            <div
              className="w-10 h-10 border border-border flex items-center justify-center rounded-[9px] cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </div>
          </div>

          <div className="pt-5 pb-10 border-b border-border">
            <FieldGroup className="">
              <div className="flex gap-6 pb-3 ">
                <Field className="">
                  <FieldLabel>Company Name</FieldLabel>
                  <Input placeholder="Google" className={inputStyle} />
                </Field>

                <Field>
                  <FieldLabel>Position</FieldLabel>
                  <Input
                    placeholder="Software Engineer"
                    className={inputStyle}
                  />
                </Field>
              </div>
              <div className="flex gap-3 pb-3">
                <Field className="">
                  <FieldLabel>Next Event</FieldLabel>
                  <DatePickerTime />
                </Field>

                <Field>
                  <FieldLabel>Location</FieldLabel>
                  <Input placeholder="London" className={inputStyle} />
                </Field>
              </div>
              <div className="flex gap-6 pb-3 ">
                <Field className="">
                  <FieldLabel>Work Mode</FieldLabel>
                  <SelectDropdown
                    value={workMode}
                    setValue={setWorkMode}
                    options={workOption}
                    placeholder="Select Work Mode"
                  />
                </Field>

                <Field>
                  <FieldLabel>Stage</FieldLabel>
                  <SelectDropdown
                    value={stageMode}
                    setValue={setStageMode}
                    options={stageOptions}
                    placeholder="Select Stage"
                  />
                </Field>
              </div>
            </FieldGroup>
          </div>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
