"use client";
import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
    </div>
  );
};

export default layout;
