"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
type Props = {
  value: string;
  setValue: (val: string) => void;
};
export default function DatePickerTime({ value, setValue }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row ">
      <Field>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker-optional"
              className="w-32 justify-between font-normal bg-surface text-foreground-1 border border-border h-12"
            >
              {value && !isNaN(new Date(value).getTime())
                ? format(new Date(value), "PPP")
                : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 z-[70] bg-foreground-1"
            align="start"
          >
            <Calendar
              mode="single"
              selected={value ? new Date(value) : undefined}
              captionLayout="dropdown"
              defaultMonth={value ? new Date(value) : undefined}
              className=""
              onSelect={(date) => {
                if (!date) return;
                setValue(date?.toISOString());
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="10:30:00"
          onChange={(e) => {
            const time = e.target.value;
            const baseDate = value ? new Date(value) : new Date(); 

            const [h, m] = time.split(":");
            baseDate.setHours(Number(h));
            baseDate.setMinutes(Number(m));

            setValue(baseDate.toISOString());
          }}
          className="h-12 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none  focus-visible:ring-0 border border-border"
        />
      </Field>
    </FieldGroup>
  );
}
