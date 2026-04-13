"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
type Option = {
  id: number;
  label: string;
};
type Props = {
  value: string;
  setValue: (val: string) => void;
  options: Option[];
  placeholder: string;
};
export default function SelectDropdown({
  value,
  setValue,
  options,
  placeholder,
}: Props) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-foreground-1 w-full bg-surface border border-border h-12 ">
            {value || placeholder}
            {(!value || value === placeholder) && <ChevronDown />}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="z-[70] bg-surface text-foreground-1 ">
          {options.map((opt) => (
            <DropdownMenuItem
            className="flex items-center text-foreground-1 justify-center hover:bg-foreground-1 text-foreground-3 text-md hover:cursor-pointer"
              key={opt.id}
              onClick={() => {
                setValue(opt.label);
              }}
            >
              {opt.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
