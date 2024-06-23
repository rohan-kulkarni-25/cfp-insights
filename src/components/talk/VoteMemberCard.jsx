import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const VoteMemberCard = ({ vote }) => {
  return (
    <div className="flex flex-row gap-2 items-center shadow-md border p-4 rounded-md">
      <Avatar>
        <AvatarImage
          src={`https://github.com/${vote.username}.png`}
          alt={vote.username}
        />
        <AvatarFallback>RK</AvatarFallback>
      </Avatar>
      <span className="flex-1">{vote.username}</span>
      <span>{vote.vote}</span>
    </div>
  );
};

export default VoteMemberCard;
