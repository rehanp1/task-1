import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema(
  {
    name: String,
    age: Number,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    contact: String,
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
