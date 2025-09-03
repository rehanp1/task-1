import { Request, Response } from "express";
import PatientReport from "../models/PatientReport";
import mongoose from "mongoose";

export const assignReport = async (req: Request, res: Response) => {
  try {
    const { patientId, testId, reportData }: ReportDetails = req.body;

    const assigned = await PatientReport.create({
      patientId,
      testId,
      reportData,
    });

    res.status(201).json({ success: true, result: assigned });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getReports = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id || "";
    const reportId = new mongoose.Types.ObjectId(id);

    //Pipeline for finding Report by Id including Patient and DiagnosticTest Details.
    const result = await PatientReport.aggregate([
      {
        $match: {
          _id: reportId,
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patientData",
        },
      },
      {
        $unwind: "$patientData",
      },
      {
        $lookup: {
          from: "diagnostictests", 
          localField: "testId",
          foreignField: "_id",
          as: "testData",
        },
      },
      {
        $unwind: "$testData",
      },
      { $project: { patientId: 0, testId: 0 } },
    ]);

    res.status(200).json({ success: true, result: result[0] });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
