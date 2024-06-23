import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export const TalkDetails = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <StarIcon height={24} width={24} />
        <StarFilledIcon color="orange" height={24} width={24} />
        <Badge
          variant="outlined"
          className={"bg-conference_secondary text-white"}
        >
          Voted
        </Badge>
        <Badge variant="destructive">Pending</Badge>
      </div>

      <p className="text-3xl">{data.title}</p>
      <Accordion
        type="multiple"
        defaultValue={["title", "description", "summary"]}
      >
        <AccordionItem value="description">
          <AccordionTrigger className="text-2xl">Description</AccordionTrigger>
          <AccordionContent className="text-lg tracking-wide text-slate-500">
            {data.description}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="summary">
          <AccordionTrigger className="text-2xl">Summary</AccordionTrigger>
          <AccordionContent className="text-lg tracking-wide text-slate-500">
            {data.summary}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
