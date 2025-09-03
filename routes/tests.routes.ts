import { Router } from "express";

const TestsRouter = Router()

TestsRouter.route('/').post()
TestsRouter.route('/').get()

export default TestsRouter;