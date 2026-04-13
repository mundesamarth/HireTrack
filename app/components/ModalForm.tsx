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
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  companyName: z.string().min(4),
  position: z.string().min(4),
  location: z.string(),
  workMode: z.string(),
  stage: z.string(),
  interviewDate: z.string(),
});

type Inputs = z.infer<typeof formSchema>;

export default function ModalForm({ setIsModalOpen }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const workOption = [
    { id: 1, label: "Remote" },
    { id: 2, label: "Hybrid" },
    { id: 3, label: "Onsite" },
  ];

  const stageOptions = [
    { id: 1, label: "Applied" },
    { id: 2, label: "Interviewing" },
    { id: 3, label: "Rejected" },
    { id: 4, label: "Offer" },
  ];

  const inputStyle =
    "border border-border focus:border focus:border-border focus:outline-none placeholder:text-foreground-3 focus-visible:ring-0 h-12";
  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input
                    placeholder="Google"
                    className={inputStyle}
                    {...register("companyName")}
                  />
                </Field>

                <Field>
                  <FieldLabel>Position</FieldLabel>
                  <Input
                    placeholder="Software Engineer"
                    className={inputStyle}
                    {...register("position")}
                  />
                </Field>
              </div>
              <div className="flex gap-3 pb-3">
                <Field className="">
                  <FieldLabel>Next Event</FieldLabel>
                  <DatePickerTime 
                  value={watch("interviewDate")}
                  setValue={(val) => setValue("interviewDate", val)}
                    />
                </Field>

                <Field>
                  <FieldLabel>Location</FieldLabel>
                  <Input placeholder="London" className={inputStyle} {...register("location")}/>
                </Field>
              </div>
              <div className="flex gap-6 pb-3 ">
                <Field className="">
                  <FieldLabel>Work Mode</FieldLabel>
                  <SelectDropdown
                    value={watch("workMode")}
                    setValue={(val) => setValue("workMode", val)}
                    options={workOption}
                    placeholder="Select Work Mode"
                  />
                </Field>

                <Field>
                  <FieldLabel>Stage</FieldLabel>
                  <SelectDropdown
                    value={watch("stage")}
                    setValue={(val) => setValue("stage", val)}
                    options={stageOptions}
                    placeholder="Select Stage"
                  />
                </Field>
              </div>
            </FieldGroup>
          </div>
        </FieldSet>
      </FieldGroup>
      <div className="pt-10 flex justify-end gap-4">
          <Button
            className="px-9 py-6 text-foreground-1 bg-surface border border-border cursor-pointer hover:bg-surface-muted"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button className="px-10 py-6 bg-foreground-1 text-background cursor-pointer hover:bg-foreground-2 font-[700]" type="submit">
            + Add Job
          </Button>
        </div>
    </form>
     
   </div>
  );
}
