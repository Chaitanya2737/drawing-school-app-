import express from "express";
import { getStatus } from "../../controllers/setup.controller/status.setup.controller.js";

const app = express.Router()

app.get("/setup-check" , getStatus)

export default app