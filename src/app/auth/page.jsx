import SignInComponent from "@/components/SignInComponent";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col  py-24 justify-center gap-24 items-center">
      <div className="flex flex-col justify-center items-center ">
        <Image
          src={"/assets/branding/logo.png"}
          alt="logo"
          height={250}
          width={250}
          className="mb-8"
        />
        <h1
          style={{ fontSize: "8vw" }}
          className="font-bold text-conference_primary"
        >
          REACT INDIA 2024
          {/* CONFERENCE NAME */}
        </h1>
      </div>

      <SignInComponent />
    </div>
  );
};

export default page;
