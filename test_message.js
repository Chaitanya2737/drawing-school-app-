import prisma from "./main/server/config/database.js";

async function testQueue() {
  console.log("Creating test WhatsApp Template...");
  
  // 1. Create or find a test template
  const template = await prisma.whatsAppTemplate.upsert({
    where: { name: "testing_" },
    update: {},
    create: {
      name: "testing_",
      language: "en",
      category: "MARKETING",
      status: "APPROVED",
      body: "This is a test message.",
      variables: {}, // Empty if your testing_ template has no {{1}} variables
    },
  });

  console.log("Template created:", template.name);

  // 2. Insert a test message into the queue
  // Replace this recipient phone number with your actual test WhatsApp number
  const recipientPhone = "9130452737"; // Remember: No '+' prefix, include country code

  console.log(`Queuing message to ${recipientPhone}...`);

  const message = await prisma.messageQueue.create({
    data: {
      templateId: template.id,
      recipient: recipientPhone,
      variables: {}, // If testing_ has variables, put them here e.g. { "1": "Chaitanya" }
      status: "PENDING",
    },
  });

  console.log("✅ Message successfully queued!");
  console.log("Message ID:", message.id);
  console.log("\nIf your Next.js/Express server is running (npm run dev), the worker should pick this up in a few seconds.");
  console.log("Watch your application console for worker logs and check the Messages tab in the UI!");
  
  process.exit(0);
}

testQueue().catch((e) => {
  console.error("Error setting up test message:", e);
  process.exit(1);
});
