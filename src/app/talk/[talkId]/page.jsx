"use client";
import Display from "@/components/talk/Display";
import { useRouter } from "next/router";

import React from "react";

const Page = ({ params }) => {
  return (
    <div>
      {params.talkId}
      <Display />
    </div>
  );
};

export default Page;
