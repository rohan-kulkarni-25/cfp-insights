"use client";

import AddMemberDialog from "@/components/committee/AddMemberDialog";
import CommitteeTable from "@/components/committee/CommitteeTable";
import React from "react";

const page = () => {
  return (
    <div className="w-3/4 ">
      <div>
        <AddMemberDialog />
      </div>
      <CommitteeTable />
    </div>
  );
};

export default page;
