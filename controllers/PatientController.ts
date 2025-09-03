import { Request, Response } from "express";
import Patient from "../models/Patient";
import PatientReport from "../models/PatientReport";

export const addPatient = async (req: Request, res: Response) => {
  try {
    const { name, age, gender, contact }: PatientDetails = req.body;

    const created = await Patient.create({ name, age, gender, contact });

    res.status(201).json({ success: true, result: created });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPatientReports = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id || "";

    const result = await PatientReport.find({ patientId: id });

    res.status(200).json({ success: true, result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
