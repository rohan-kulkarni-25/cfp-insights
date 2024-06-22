import React from "react";
import { Button } from "./ui/button";
import { signIn } from "@/auth";
import { Github as GithubIcon } from "lucide-react";

const SignInComponent = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button className="bg-conference_secondary text-xl ">
        <GithubIcon className="mr-2 h-4 w-4" /> Login with Github
      </Button>
    </form>
  );
};

export default SignInComponent;
