"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddMemberForm from "./AddMemberForm";

const AddMemberDialog = () => {
  return (
    <div className="flex flex-row justify-start m-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Member</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Member</DialogTitle>
            <DialogDescription>
              Add new member. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <AddMemberForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMemberDialog;
