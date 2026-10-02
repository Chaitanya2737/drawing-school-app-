import express from "express";
import { createCar } from "../../controllers/car.controller/create.car.js";
import { getAllCars } from "../../controllers/car.controller/get.car.js";

const app = express.Router();

app.post("/create-car", createCar);
app.get("/get-cars", getAllCars);

export default app;
