import mongoose, { Schema } from "mongoose";

const diagnosticTestSchema = new Schema(
  {
    name: String,
    description: String,
    cost: Number,
  },
  {
    timestamps: true,
  }
);

const DiagnosticTest = mongoose.model("DiagnosticTest", diagnosticTestSchema);

export default DiagnosticTest;


