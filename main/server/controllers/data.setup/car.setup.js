// Make sure to import your Prisma client at the top
import prisma from "../../config/database.js";

export async function saveCarData(req, res) {
  try {
    // Removed assigned_instructor
    const { name, transmission, car_year, car_Number } = req.body;

    console.log("Incoming Car Data:", req.body);

    // 1. Basic Validation updated
    if (!name || !transmission || !car_year || !car_Number) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, transmission, car_year, car_Number) are required.",
      });
    }

    // 2. Check if a car with this license plate already exists
    let existingCar = await prisma.car.findFirst({
      where: {
        car_Number: car_Number, 
      },
    });

    let carRecord;

    if (existingCar) {
      // 3a. If this car exists, UPDATE it
      carRecord = await prisma.car.update({
        where: { id: existingCar.id },
        data: {
          name,
          transmission,
          car_year,
          // car_Number stays the same
        },
      });
    } else {
      // 3b. If it doesn't exist, CREATE a new car
      carRecord = await prisma.car.create({
        data: {
          name,
          transmission,
          car_year,
          car_Number,
        },
      });
    }

    // 4. Update the setup checklist
    let checkSetUpIsExist = await prisma.setupChecklist.findFirst();

    if (checkSetUpIsExist) {
      await prisma.setupChecklist.update({
        where: { id: checkSetUpIsExist.id },
        data: {
          carSetup: true, 
        },
      });
    }

    // 5. Send success response
    return res.status(200).json({
      success: true,
      message: existingCar
        ? "Car data updated successfully!"
        : "New car added successfully!",
      data: carRecord,
    });
  } catch (error) {
    console.error("Prisma error saving car data:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while saving the car data.",
      error: error.message,
    });
  }
}