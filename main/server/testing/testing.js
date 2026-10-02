import prisma from "../config/database.js";

async function main() {
  const template = await prisma.whatsAppTemplate.upsert({
    where: {
      name: "student_welcome",
    },

    update: {},

    create: {
      name: "student_welcome",
      templateId: "DEV_STUDENT_WELCOME",
      language: "en",
      category: "UTILITY",
      status: "APPROVED",

      body: "Hello {{studentName}}, welcome to Drawing School. Your package is {{packageName}}.",

      variables: [
        "studentName",
        "packageName",
      ],
    },
  });

  console.log("Development WhatsApp template:", template);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });