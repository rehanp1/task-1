import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: `localhost:${process.env.PORT}`,
};

const outputFile = "./swagger.json";
const routes = ["./index.ts"];

swaggerAutogen()(outputFile, routes, doc);
