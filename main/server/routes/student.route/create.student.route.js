import express from "express";
import { createStudent } from "../../controllers/student.controller/create.student.controller.js";
import { supportData } from "../../controllers/student.controller/support.student.contoller.js";
import { getAllStudents } from "../../controllers/student.controller/get.student.controller.js";
import { markPaymentComplete } from "../../controllers/student.controller/update.student.payment.js";

const app = express.Router()

app.post("/create-student" , createStudent)
app.get("/support-data" , supportData)
app.get("/get-student-data" , getAllStudents)
app.put("/mark-payment-complete/:id" , markPaymentComplete)

export default app