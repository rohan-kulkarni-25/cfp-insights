import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email."],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
