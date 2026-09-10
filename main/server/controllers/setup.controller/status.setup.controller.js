import prisma from "../../config/database.js";

export async function getStatus(req, res) {
  try {
    // Note: Use camelCase for Prisma client delegates (setupChecklist)
    const checkStatus = await prisma.setupChecklist.findFirst({});

    if (!checkStatus) {
      return res.status(200).json({
        success: true,
        setupComplete: false,
        checklist: {
          schoolSetup: false,
          instructorSetup: false,
          carSetup: false,
          packageSetup: false,
        },
      });
    }

    const { schoolSetup, instructorSetup, carSetup, packageSetup } =
      checkStatus;

    const setupComplete = Boolean(
      schoolSetup && instructorSetup && carSetup && packageSetup,
    );

    return res.status(200).json({
      success: true,
      setupComplete,
      checklist: {
        schoolSetup: Boolean(schoolSetup),
        instructorSetup: Boolean(instructorSetup),
        carSetup: Boolean(carSetup),
        packageSetup: Boolean(packageSetup),
      },
    });
  } catch (error) {
    console.error("Error fetching setup status:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
