import { Request, Response } from "express";
import DiagnosticTest from "../models/DiagnosticTest";

export const addDiagnosticTest = async (req: Request, res: Response) => {
  try {
    const { name, description, cost }: TestDetails = req.body;

    const created = await DiagnosticTest.create({ name, description, cost });

    res.status(201).json({ success: true, result: created });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getDiagnosticTests = async (req: Request, res: Response) => {
  try {
    const result = await DiagnosticTest.find({}, {updatedAt: 0, __v: 0});
   
    res.status(200).json({ success: true, result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
