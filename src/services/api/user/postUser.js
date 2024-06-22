import axios from "axios";

export async function postUser(data) {
  console.log(data);
  const response = await axios({
    method: "post",
    data: { ...data },
    url: "/api/v1/user",
  });
  return response;
}
