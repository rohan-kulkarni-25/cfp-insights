"use client";

import * as React from "react";
import Link from "next/link";
import { TableCell } from "../ui/table";
import { ColumnVisibility } from "@tanstack/react-table";
import { SquareArrowOutUpRight } from "lucide-react";

export const columns = [
  {
    id: "index",
    accessorKey: "index",
    enableHiding: false,
    header: "-",
    cell: ({ row }) => {
      return <TableCell>{row.index + 1}</TableCell>;
    },
  },
  {
    id: "talkTitle",
    accessorKey: "talkTitle",
    header: "Title",
  },
  {
    id: "talkSummary",
    accessorKey: "talkSummary",
    header: "Summary",
  },
  {
    id: "talkDescription",
    accessorKey: "talkDescription",
    header: "Description",
  },
  {
    id: "_id",
    accessorKey: "_id",
    ColumnVisibility: {
      id: false,
    },
    enableHiding: false,
  },

  {
    id: "actions",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      console.log(row);
      return (
        <Link href={`/home/talk/${row.getValue("_id")}`}>
          <SquareArrowOutUpRight size={16} />
        </Link>
      );
    },
  },
];
