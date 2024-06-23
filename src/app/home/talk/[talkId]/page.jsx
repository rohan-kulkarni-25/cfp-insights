"use client";

import { TalkDetails } from "@/components/talk/TalkDetails";
import TalkStatus from "@/components/talk/TalkStatus";
import VoteBox from "@/components/talk/VoteBox";
import VoteDetails from "@/components/talk/VoteDetails";
import { data } from "@/components/talks/data";

import React from "react";
import { useSelector } from "react-redux";

const Page = ({ params }) => {
  const user = useSelector((state) => state.user.user);

  let talk = data[0];
  console.log(talk);

  return (
    <div className=" bg-white rounded-md   justify-between flex flex-row h-full min-h-screen gap-4  p-8 m-2">
      <div className="w-1/2 rounded-md p-2">
        <TalkDetails data={talk} />
      </div>
      <div className="w-1/3 rounded-md p-2 flex flex-col gap-2">
        {user.role == "admin" ? (
          <>
            <TalkStatus />
            <VoteDetails />
          </>
        ) : (
          <VoteBox />
        )}
      </div>
    </div>
  );
};

export default Page;
