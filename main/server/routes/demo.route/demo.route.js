import express from "express";
import { getDemoStatus } from "../../controllers/demo.controller/demo.controller.js";

const app = express.Router();

app.get("/demo-status", getDemoStatus);

export default app;
