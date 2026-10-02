import prisma from "../../config/database.js";

export async function markPaymentComplete(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ status: false, message: "Student ID is required" });
    }

    const student = await prisma.student.findUnique({
      where: { id }
    });

    if (!student) {
      return res.status(404).json({ status: false, message: "Student not found" });
    }

    // Mark as fully paid
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        Amount_paid: student.Total_amount,
        remaining_amount: 0,
        Remaining_percentage: 0
      }
    });

    return res.status(200).json({
      status: true,
      message: "Payment marked as completed successfully",
      data: updatedStudent
    });
  } catch (error) {
    console.error("Error updating payment:", error);
    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong"
    });
  }
}
