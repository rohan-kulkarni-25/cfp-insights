import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import { APIError } from "@/utils/APIError";
import { APIResponse } from "@/utils/APIResponse";

// POST  -  USER
export async function POST(request) {
  await dbConnect();
  try {
    let { name, username, email, role } = await request.json();
    if (!name || !username || !email || !role) {
      return Response.json(
        {
          error: new APIError(400, "name,username,email,role are required"),
        },
        {
          status: 400,
        }
      );
    }

    // Check if the user exists
    let userAlredyExists = await UserModel.findOne({ email });
    console.log(email);
    if (userAlredyExists) {
      return Response.json(
        {
          error: new APIError(400, "User Alredy Exists."),
        },
        {
          status: 400,
        }
      );
    }

    let newUser = await UserModel.create({
      email,
      name,
      username,
      role,
    });
    // Create New User
    return Response.json(
      {
        data: new APIResponse(201, { user: newUser }, "User Created."),
      },
      { status: 201 }
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

export async function GET(request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);

    let email = searchParams.get("email");
    let username = searchParams.get("username");

    if (!username && !email) {
      return Response.json(
        {
          error: new APIError(400, "username or email are required"),
        },
        {
          status: 400,
        }
      );
    }

    // // Check if the user exists
    let user = await UserModel.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return Response.json(
        {
          error: new APIError(400, "User Don't Exists."),
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        data: new APIResponse(201, { user }, "User Found."),
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        error: new APIError(400, "Something went wrong while searching user.", [
          error.message,
        ]),
      },
      {
        status: 400,
      }
    );
  }
}

// DELETE
// MODIFY
