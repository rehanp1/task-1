import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["doctor", "assistant"],
      default: "assistant",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
