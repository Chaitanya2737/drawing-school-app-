import prisma from "../../config/database.js";

export async function supportDataForInstructor(req, res) {
  try {
    // You might only want to fetch active/available cars in the future:
    const cars = await prisma.car.findMany({
      // where: { isActive: true }, 
    });

    return res.status(200).json({
      status: true, // Changed to boolean to match your other APIs
      data: {
        cars: cars, // Renamed 'existCar' to 'cars' for easier reading
      },
    });
  } catch (error) {
    console.error("Error fetching support data:", error);
    return res.status(500).json({
      status: false, // Changed to boolean
      message: "Internal server error",
    });
  }
}