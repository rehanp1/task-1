import { Router } from "express";
import { addPatient, getPatientReports } from "../controllers/PatientController";

const PatientsRouter = Router()

PatientsRouter.route('/').post(addPatient)
PatientsRouter.route('/:id/reports').get(getPatientReports)

export default PatientsRouter;