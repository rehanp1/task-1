import { Router } from "express";
import { addDiagnosticTest, getDiagnosticTests } from "../controllers/TestController";

const TestsRouter = Router()

TestsRouter.route('/').post(addDiagnosticTest)
TestsRouter.route('/').get(getDiagnosticTests)

export default TestsRouter;