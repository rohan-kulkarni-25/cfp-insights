"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

import { useToast } from "../ui/use-toast";
import { getUsers } from "@/services/api/users/getUsers";

const CommitteeTable = () => {
  const [data, setData] = useState([]);
  const { toast } = useToast();

  const handleGetAllMembers = async () => {
    try {
      let response = await getUsers();
      setData(response.data.data.data.users);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    handleGetAllMembers();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CommitteeTable;
