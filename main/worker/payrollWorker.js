import prisma from "../server/config/database.js";

export function initPayrollWorker() {
  console.log("💰 Payroll Worker Initialized. Checking for due payments...");
  
  // Run check immediately on startup
  checkAndGeneratePayroll();

  // Then run every 6 hours
  setInterval(checkAndGeneratePayroll, 6 * 60 * 60 * 1000);
}

async function checkAndGeneratePayroll() {
  try {
    const today = new Date();
    const currentDay = today.getDate();
    
    // Normalize current month to the 1st day of the month at 00:00:00 for uniqueness check
    const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);

    // Get all active instructors
    const instructors = await prisma.instructor.findMany({
      where: { isActive: true }
    });

    for (const instructor of instructors) {
      // If they have a paymentDate, and today is on or after that date
      if (instructor.paymentDate && currentDay >= instructor.paymentDate) {
        
        // Check if a payment cycle for THIS exact month already exists
        const existingCycle = await prisma.paymentCycle.findFirst({
          where: {
            instructorId: instructor.id,
            month: currentMonthStart
          }
        });

        // If it doesn't exist, generate it!
        if (!existingCycle) {
          console.log(`Generating automatic payroll for instructor ${instructor.name} (Due: ${instructor.paymentDate}th)`);

          // Calculate total advances (amountTaken) from PaymentTaken this month
          const advances = await prisma.paymentTaken.aggregate({
            where: {
              paymentCycle: { instructorId: instructor.id },
              takenAt: { gte: currentMonthStart }
            },
            _sum: { amount: true }
          });

          const totalAdvances = advances._sum.amount || 0;
          const baseAmount = instructor.payment || 0;
          
          await prisma.paymentCycle.create({
            data: {
              instructorId: instructor.id,
              month: currentMonthStart,
              baseAmount: baseAmount,
              amountTaken: totalAdvances,
              deductions: 0,
              bonus: 0,
              netAmount: Math.max(0, baseAmount - totalAdvances),
              paidAt: new Date(), // They can update this when they actually pay
              status: "PENDING",
              note: `Auto-generated payroll for ${currentMonthStart.toLocaleString('default', { month: 'long', year: 'numeric' })}`
            }
          });
        }
      }
    }
  } catch (error) {
    console.error("❌ Error in Payroll Worker:", error);
  }
}
