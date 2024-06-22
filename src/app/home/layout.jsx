"use client";

import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex flex-row justify-center">{children}</div>
    </div>
  );
};

export default layout;
