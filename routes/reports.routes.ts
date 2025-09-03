import { Router } from "express";
import { assignReport, getReports } from "../controllers/ReportController";

const ReportsRouter = Router();

ReportsRouter.route("/").post(assignReport);
ReportsRouter.route("/:id").get(getReports);

export default ReportsRouter;
