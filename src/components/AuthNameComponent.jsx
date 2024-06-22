import { useSession } from "next-auth/react";
import React from "react";

const AuthNameComponent = () => {
  const session = useSession();
  console.log(session);

  return <div>{session?.data?.user.email || "No auths"} </div>;
};

export default AuthNameComponent;
