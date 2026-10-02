import prisma from "../../config/database.js";

export async function getAllCars(req, res) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100);
    const skip = (page - 1) * limit;

    const totalCars = await prisma.car.count();

    const cars = await prisma.car.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        instructors: {
          select: {
            name: true,
          }
        },
        maintenanceSchedules: true
      }
    });

    const formattedCars = cars.map((car) => {
      // Assuming a car has one assigned instructor or multiple, we take the first or "Unassigned"
      const instructorName = car.instructors && car.instructors.length > 0 ? car.instructors[0].name : "Unassigned";
      
      const isInMaintenance = car.maintenanceSchedules && car.maintenanceSchedules.length > 0;

      return {
        ...car,
        instructor: instructorName,
        status: isInMaintenance ? "Maintenance" : "Available",
      };
    });

    const totalPages = Math.ceil(totalCars / limit);

    return res.status(200).json({
      status: true,
      message: "Cars fetched successfully",
      pagination: {
        currentPage: page,
        limit,
        totalCars,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
      data: formattedCars,
    });
  } catch (error) {
    console.error("Error fetching cars:", error);

    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
}
