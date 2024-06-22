"use client";
import NavbarComponent from "@/components/NavbarComponent.1";
import InputSheet from "@/components/cfp/InputSheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarComponent />
      <InputSheet />
    </div>
  );
};

export default page;
