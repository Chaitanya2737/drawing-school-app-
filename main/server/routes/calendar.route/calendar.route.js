import express from "express";
import { getEvents, createEvent } from "../../controllers/calendar.controller/calendar.controller.js";

const router = express.Router();

router.get("/calendar", getEvents);
router.post("/calendar", createEvent);

export default router;
