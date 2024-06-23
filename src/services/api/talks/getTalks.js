import axios from "axios";

export async function getTalks() {
  let response = await axios({
    method: "get",
    url: "/api/v1/talks",
  });

  return response;
}
