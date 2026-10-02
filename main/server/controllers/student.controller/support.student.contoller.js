import prisma from "../../config/database.js";

export async function supportData(req, res) {
  try {
    // Run all 3 database queries concurrently for better performance
    const [instructors, cars, packages] = await Promise.all([

      prisma.instructor.findMany({
        where: {
          jobType: "INSTRUCTOR",
        },
      }),

      // 👉 Leave Cars alone (or filter by a real Car column)
      prisma.car.findMany({}),

      prisma.package.findMany({}),
    ]);
    return res.status(200).json({
      status: 200,
      data: {
        existingInstructor: instructors,
        existCar: cars,
        existingPackage: packages,
      },
    });
  } catch (error) {
    console.error("Error fetching support data:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}
