import { Router } from "express";

const ReportsRouter = Router()

ReportsRouter.route('/').post()
ReportsRouter.route('/:id').get()

export default ReportsRouter;