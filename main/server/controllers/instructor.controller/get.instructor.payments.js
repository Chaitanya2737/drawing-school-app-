import prisma from "../../config/database.js";

export async function getInstructorPayments(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ status: false, message: "Instructor ID is required" });
    }

    const payments = await prisma.paymentCycle.findMany({
      where: { instructorId: id },
      orderBy: { month: 'desc' }
    });

    return res.status(200).json({
      status: true,
      message: "Payments fetched successfully",
      data: payments
    });
  } catch (error) {
    console.error("Error fetching instructor payments:", error);
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong"
    });
  }
}
