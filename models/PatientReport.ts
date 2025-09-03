import mongoose, { Schema, SchemaTypes } from "mongoose";

const patientReportSchema = new Schema(
  {
    patientId: {
      type: SchemaTypes.ObjectId,
      ref: "Patient",
      required: true,
    },
    testId: {
      type: SchemaTypes.ObjectId,
      ref: "DiagnosticTest",
      required: true,
    },
    reportData: {
      result: String,
      remarks: String,
      testedAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

const PatientReport = mongoose.model("PatientReport", patientReportSchema);

export default PatientReport;
