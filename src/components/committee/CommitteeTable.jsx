"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

import { useToast } from "../ui/use-toast";
import { getUsers } from "@/services/api/users/getUsers";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "@/store/Slices/usersSlice";

const CommitteeTable = () => {
  const users = useSelector((state) => state.users.usersData);

  const { toast } = useToast();
  const dispatch = useDispatch();
  const handleGetAllMembers = async () => {
    try {
      let response = await getUsers();
      dispatch(updateUsers(response.data.data.data.users));
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
    <div className="bg-white">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default CommitteeTable;
