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
          <Button className="text-foreground-1 w-full bg-surface border border-border focus-visible:ring-0 h-12">
            {value || placeholder}
            {(!value || value === placeholder) && <ChevronDown />}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="z-[90] bg-foreground-1">
          {options.map((opt) => (
            <DropdownMenuItem
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
