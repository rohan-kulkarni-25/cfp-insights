"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronDown } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { addMemberSchema } from "@/schemas/addMemberSchema";
import { useToast } from "../ui/use-toast";
import { postUser } from "@/services/api/user/postUser";
import { getUsers } from "@/services/api/users/getUsers";
import { useDispatch } from "react-redux";
import { updateUsers } from "@/store/Slices/usersSlice";

const AddMemberForm = () => {
  const [role, setRole] = React.useState("Committee Member");
  const dispatch = useDispatch();

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(addMemberSchema),
    defaultValues: {
      username: "a",
      email: "a@gmail.com",
      name: "asdf",
      role: "Committee Member",
    },
  });

  const handleGetAllMembers = async () => {
    try {
      let response = await getUsers();
      dispatch(updateUsers(response.data.data.data.users));
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  };

  async function onSubmit(data) {
    try {
      const response = await postUser(data);
      if (response.status == 201) {
        toast({
          title: "Great work!",
          description: response.data.data.data.message,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Uhh, something went wrong !! ",
        description: error.response.data.error.errors,
      });
    }
    handleGetAllMembers();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Rohan Kulkarni" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Make sure you enter a valid Github username
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Role</FormLabel>
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="w-fit">
                    <Button className="gap-2" variant="outline">
                      {role || "Select a role"} <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <DropdownMenuRadioGroup
                      value={role}
                      onValueChange={(value) => {
                        setRole(value);
                        field.onChange(value); // Update the field value
                      }}
                    >
                      <DropdownMenuRadioItem value="Committee Member">
                        Committee Member
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Team">
                        Team
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose
          type="submit"
          className="border py-2 rounded-md bg-black  text-white font-medium"
        >
          Save Changes
        </DialogClose>
      </form>
    </Form>
  );
};

export default AddMemberForm;
