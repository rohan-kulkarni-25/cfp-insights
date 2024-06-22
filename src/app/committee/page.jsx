"use client";
import NavbarComponent from "@/components/NavbarComponent";
import AddMemberDialog from "@/components/committee/AddMemberDialog";
import { DataTable } from "@/components/committee/DataTable";
import { columns } from "@/components/committee/columns";
import React from "react";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const page = async () => {
  const data = await getData();
  return (
    <div className="">
      <NavbarComponent />
      <div className="flex flex-row justify-end m-2">
        <AddMemberDialog />
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
