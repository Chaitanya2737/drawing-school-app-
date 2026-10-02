import prisma from './main/server/config/database.js';

async function registerNumber() {
  try {
    const tokenRecord = await prisma.whatsAppToken.findFirst();
    if (!tokenRecord) {
      console.log("❌ No WhatsApp token found in DB.");
      return;
    }

    console.log("Found Phone Number ID:", tokenRecord.phoneNumberId);
    console.log("Registering number with Meta...");

    const url = `https://graph.facebook.com/v20.0/${tokenRecord.phoneNumberId}/register`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokenRecord.accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        pin: "123456" 
      })
    });

    const data = await response.json();
    console.log("Meta API Response Status:", response.status);
    console.dir(data, { depth: null });

    if (response.ok) {
      console.log("✅ SUCCESS! Your number is now registered. The 'Pending' status should be gone.");
    } else {
      console.log("❌ Failed to register.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

registerNumber();
