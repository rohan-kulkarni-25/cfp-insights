import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import { APIError } from "@/utils/APIError";
import { APIResponse } from "@/utils/APIResponse";
import { ApiError } from "next/dist/server/api-utils";

// POST  -  USER
export async function GET(request) {
  await dbConnect();
  try {
    let users = await UserModel.find();
    return Response.json(
      {
        data: new APIResponse(201, { users }, "Users"),
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        error: new APIError(400, "Something went wrong while creating user.", [
          error.message,
        ]),
      },
      {
        status: 400,
      }
    );
  }
}
