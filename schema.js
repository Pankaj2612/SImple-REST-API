import e from "express";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
