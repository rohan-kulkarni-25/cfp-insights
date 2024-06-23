"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { voteTalkSchema } from "@/schemas/voteTalkSchema";
import { Textarea } from "../ui/textarea";
import { Edit2Icon } from "lucide-react";

const VoteBox = () => {
  const form = useForm({
    resolver: zodResolver(voteTalkSchema),
    defaultValues: {},
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <Card className="bg-white rounded-lg shadow-md relative">
        <div className="absolute right-2 top-2">
          <Edit2Icon />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Vote for this Talk
          </CardTitle>
          <CardDescription className="text-gray-600">
            Rate this talk from 1 (lowest) to 5 (highest)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="vote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Your Vote</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your rating (1-5)"
                        min="1"
                        max="5"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-500">
                      Rate from 1 to 5
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Suggestions / Comments
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Provide your feedback (optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-500">
                      Provide any suggestions or comments you have.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                // className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit Vote
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoteBox;
