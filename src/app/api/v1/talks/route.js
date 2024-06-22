import dbConnect from "@/lib/dbConnect";
import TalkModel from "@/models/Talk.model";
import { APIError } from "@/utils/APIError";
import { APIResponse } from "@/utils/APIResponse";

// POST - TALKS ( BULK ADD )
export async function POST(request) {
  await dbConnect();
  try {
    let { talks } = await request.json();
    if (!talks || talks.length == 0) {
      return Response.json(
        {
          error: new APIError(400, "Please send talks to add."),
        },
        {
          status: 400,
        }
      );
    }

    let addedTalks = await TalkModel.insertMany(talks);
    if (!addedTalks) {
      return Response.json(
        {
          error: new APIError(400, "Something went wrong while adding talks."),
        },
        {
          status: 400,
        }
      );
    }

    return Response.json({
      data: new APIResponse(201, { addedTalks }, "Talks Added Sucessfully"),
    });
  } catch (error) {
    return Response.json(
      {
        error: new APIError(400, "Something went wrong while adding talks.", [
          error.message,
        ]),
      },
      {
        status: 400,
      }
    );
  }
}

// GET - TALKS
export async function GET() {
  await dbConnect();

  try {
    let talks = await TalkModel.find();
    return Response.json(
      {
        data: new APIResponse(
          200,
          { length: talks.length, talks },
          "Talks Found"
        ),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        error: new APIError(400, "Something went wrong while adding talks.", [
          error.message,
        ]),
      },
      {
        status: 400,
      }
    );
  }
}
