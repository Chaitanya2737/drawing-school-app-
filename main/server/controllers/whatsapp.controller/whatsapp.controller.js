import prisma from "../../config/database.js";

export const verifyAndSaveWhatsAppToken = async (req, res) => {
  try {
    const { id, userId, accessToken } = req.body;

    // 1. Fetch from Vercel Backend securely (bypasses browser CORS because this runs in Node)
    const checkUrl = new URL(
      "https://backend-for-drawing-school.vercel.app/api/whatsapp/embedded-signup/send",
    );
    if (id) checkUrl.searchParams.append("id", id);
    if (userId) checkUrl.searchParams.append("userId", userId);

    const vercelResponse = await fetch(checkUrl.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
      body: JSON.stringify({ id, userId }),
    });

    const data = await vercelResponse.json();

    if (!vercelResponse.ok) {
      return res.status(vercelResponse.status).json({
        status: false,
        message:
          data.message || "Data is not set yet. Please complete the setup.",
      });
    }

    const { send } = data;
    if (!send || !send.accessToken || !send.wabaId || !send.phoneNumberId) {
      return res
        .status(400)
        .json({
          status: false,
          message: "Missing required WhatsApp token data from Vercel payload",
        });
    }

    // 2. Save it locally
    const existingToken = await prisma.whatsAppToken.findFirst({
      where: { schoolId: send.schoolId },
    });

    let newToken;
    if (existingToken) {
      newToken = await prisma.whatsAppToken.update({
        where: { id: existingToken.id },
        data: {
          wabaId: send.wabaId,
          accessToken: send.accessToken,
          phoneNumberId: send.phoneNumberId,
          status: send.status || "connected",
          displayPhoneNumber: send.displayPhoneNumber || null,
          verifiedName: send.verifiedName || null,
        },
      });
    } else {
      newToken = await prisma.whatsAppToken.create({
        data: {
          wabaId: send.wabaId,
          accessToken: send.accessToken,
          phoneNumberId: send.phoneNumberId,
          status: send.status || "connected",
          schoolId: send.schoolId || "",
          displayPhoneNumber: send.displayPhoneNumber || null,
          verifiedName: send.verifiedName || null,
        },
      });
    }

    return res.status(200).json({
      status: true,
      message: data.message || "WhatsApp token saved successfully",
      data: newToken,
    });
  } catch (error) {
    console.error("Error verifying and saving WhatsApp token:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const autoRegisterNumber = async (req, res) => {
  try {
    const tokenRecord = await prisma.whatsAppToken.findFirst();
    if (!tokenRecord) {
      return res
        .status(404)
        .json({ message: "No WhatsApp token found in DB." });
    }

    const url = `https://graph.facebook.com/v20.0/${tokenRecord.phoneNumberId}/register`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenRecord.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        pin: "123456",
      }),
    });

    const data = await response.json();
    return res.status(200).json({ status: response.status, data });
  } catch (error) {
    console.error("Error auto-registering number:", error);
    return res.status(500).json({ error: error.message });
  }
};
