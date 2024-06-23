import React from "react";
import VoteMemberCard from "./VoteMemberCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const VoteDetails = () => {
  let votes = [
    {
      username: "rohan-kulkarni-25",
      vote: 3,
    },
    {
      username: "rohan-kulkarni",
      vote: 2,
    },
    {
      username: "rohan",
      vote: 5,
    },
  ];
  return (
    <div>
      <Card className="bg-white rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            <Badge className="bg-conference_secondary text-xl px-4 ">3.4</Badge>
          </CardTitle>
          <CardDescription className="text-gray-600">
            average vote for this talk
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <span className="text-xl tracking-wide">Voted By</span>
            {votes.map((vote) => {
              return <VoteMemberCard vote={vote} key={vote} />;
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoteDetails;
