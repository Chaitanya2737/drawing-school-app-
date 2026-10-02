import prisma from "./main/config/database.js";
async function test() {
  const schedules = await prisma.schedule.findMany();
  console.log(schedules.slice(0, 5));
}
test().catch(console.error).finally(() => process.exit(0));
