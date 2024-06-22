import mongoose, { Schema } from "mongoose";

const talkSchema = new Schema(
  {
    talkTitle: {
      type: String,
      required: true,
    },
    talkSummary: {
      type: String,
    },
    talkDescription: {
      type: String,
    },
    votes: [
      {
        voterUsername: {
          type: String,
        },
        voteBy: {
          type: Schema.ObjectId,
          ref: "User",
        },
        vote: {
          type: Number,
        },
      },
    ],
    avgVotes: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const TalkModel = mongoose.models.Talk || mongoose.model("Talk", talkSchema);

export default TalkModel;
