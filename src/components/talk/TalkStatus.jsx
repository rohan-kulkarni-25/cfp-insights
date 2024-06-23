"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowDownWideNarrow, ChevronDown } from "lucide-react";

const TalkStatus = () => {
  const [status, setStatus] = React.useState("pending");
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Status</CardTitle>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex flex-row gap-2">
                {status.toString().toUpperCase()}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                <DropdownMenuRadioItem value="top">
                  Approved
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Pending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Rejected
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>
    </div>
  );
};

export default TalkStatus;
