import prisma from "./main/server/config/database.js";
async function reset() {
  await prisma.demoStatus.updateMany({
    data: { startDate: new Date() }
  });
  console.log("Demo timer reset to NOW!");
}
reset();
