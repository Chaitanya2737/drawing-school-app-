import express from "express";
import { getSchedules } from "../../controllers/schedule.controller/get.schedule.js";

const scheduleRoute = express.Router();

scheduleRoute.get("/get-schedules", getSchedules);

export default scheduleRoute;
