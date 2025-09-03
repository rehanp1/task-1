import express from "express";
import dotenv from "dotenv";
import PatientsRouter from "./routes/patients.routes";
import TestsRouter from "./routes/tests.routes";
import ReportsRouter from "./routes/reports.routes";
import connectDB from "./config/db";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//Swagger api
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Routes
app.use("/patients", PatientsRouter);
app.use("/diagnostic-tests", TestsRouter);
app.use("/reports", ReportsRouter);

//MongoDB Connection
connectDB();

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
