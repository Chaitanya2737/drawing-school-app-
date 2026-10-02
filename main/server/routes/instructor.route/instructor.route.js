import express from "express";
import { createInstructor } from "../../controllers/instructor.controller/create.instructor.js";
import { getAllInstructors } from "../../controllers/instructor.controller/get.instructor.js";
import { supportDataForInstructor } from "../../controllers/instructor.controller/support.instructor.js";
import { getInstructorPayments } from "../../controllers/instructor.controller/get.instructor.payments.js";

const app = express.Router()

app.post("/create-instructor" , createInstructor)
app.get("/get-instructor-data" , getAllInstructors)
app.get("/support-instructor" , supportDataForInstructor)
app.get("/get-instructor-payments/:id" , getInstructorPayments)


export default app