import { Router } from "express";
import { addPatient } from "../controllers/PatientController";

const PatientsRouter = Router()

PatientsRouter.route('/').post(addPatient)
PatientsRouter.route('/:id/reports').get()

export default PatientsRouter;