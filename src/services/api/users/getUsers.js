import { APIError } from "@/utils/APIError";
import axios from "axios";

export async function getUsers() {
  let response = await axios({
    method: "get",
    url: "/api/v1/users",
  });

  return response;
}
