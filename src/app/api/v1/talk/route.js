import dbConnect from "@/lib/dbConnect";
import TalkModel from "@/models/Talk.model";
import { APIError } from "@/utils/APIError";
import { APIResponse } from "@/utils/APIResponse";
import { ApiError } from "next/dist/server/api-utils";

// GET TALK BY ID
export async function GET(request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);

    let id = searchParams.get("id");
    if (!id) {
      return Response.json({
        error: new APIError(400, "Talk ID is required."),
      });
    }

    let talk = await TalkModel.findOne({ _id: id });
    if (!talk) {
      return Response.json(
        {
          error: new ApiError(404, "Talk Not Found"),
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        data: new APIResponse(200, { talk }, "Talk Found"),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json({
      error: new APIError(400, "Something went wrong while finding talk.", [
        error.message,
      ]),
    });
  }
}

// Add single talk
export async function POST(request) {
  await dbConnect();
  try {
    let { talkTitle, talkSummary, talkDescription } = await request.json();
    if (!talkTitle && !talkSummary && !talkDescription) {
      return Response.json({
        error: new APIError(400, "Talk Details are required."),
      });
    }

    let talk = await TalkModel.create({
      talkTitle,
      talkSummary,
      talkDescription,
    });
    if (!talk) {
      return Response.json({
        error: new APIError(400, "Somthing went wront while adding talk"),
      });
    }
    console.log(talk);
    return Response.json({
      data: new APIResponse(201, { talk }, "Talk Added Sucessfully"),
    });
  } catch (error) {
    return Response.json({
      error: new APIError(400, "Something went wrong while adding talk", [
        error.message,
      ]),
    });
  }
}

// Modify talk
export async function PATCH(request) {
  await dbConnect();
  try {
    let { talkDetails } = await request.json();
    if (!talkDetails._id) {
      return Response.json(
        {
          error: new APIError(400, "Talk ID is required."),
        },
        {
          status: 400,
        }
      );
    }

    let updatedTalk = await TalkModel.findByIdAndUpdate(
      talkDetails._id,
      {
        $set: talkDetails,
      },
      { new: true }
    );
    if (!updatedTalk) {
      return Response.json(
        {
          error: new APIError(400, "Talk Not Updated. Something went wrong."),
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        data: new APIResponse(201, { updatedTalk }, "Talk Updated"),
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({
      error: new APIError(400, "Something went wrong in updating talk", [
        error.message,
      ]),
    });
  }
}

// Remove / Delete Talk
export async function DELETE(request) {
  await dbConnect();

  try {
    let { _id } = await request.json();
    console.log(_id);
    if (!_id) {
      return Response.json(
        {
          error: new APIError(400, "Id is required"),
        },
        {
          status: 400,
        }
      );
    }

    await TalkModel.deleteOne({ _id });
    return Response.json(
      {
        data: new APIResponse(200, {}, "Talk Deleted"),
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        error: new ApiError(400, "Somthing went wrong", [error.message]),
      },
      {
        status: 400,
      }
    );
  }
}
