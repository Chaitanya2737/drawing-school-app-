import prisma from "../../config/database.js";

export const getSettings = async (req, res) => {
  try {
    const token = await prisma.whatsAppToken.findFirst();
    if (!token) return res.status(404).json({ status: false, message: "Not setup" });
    
    return res.status(200).json({ status: true, data: { safeMode: token.safeMode } });
  } catch (error) {
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const { safeMode } = req.body;
    const token = await prisma.whatsAppToken.findFirst();
    if (!token) return res.status(404).json({ status: false, message: "Not setup" });
    
    await prisma.whatsAppToken.update({
      where: { id: token.id },
      data: { safeMode }
    });
    
    return res.status(200).json({ status: true, message: "Settings updated" });
  } catch (error) {
    return res.status(500).json({ status: false, message: "Server error" });
  }
};
