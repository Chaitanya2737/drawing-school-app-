import prisma from "../../config/database.js";

export async function savePackageData(req, res) {
  try {
    const { name, price, duration } = req.body;

    console.log("Incoming Package Data:", req.body);

    // 1. Basic Validation
    if (!name || !price || !duration) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, price, duration) are required.",
      });
    }

    // 2. Convert string inputs to correct numbers for Prisma
    const parsedPrice = parseFloat(price);
    const parsedDuration = parseInt(duration, 10);

    // 3. Check if a package with this exact name already exists
    let existingPackage = await prisma.package.findFirst({
      where: {
        name: name,
      },
    });

    let packageRecord;

    if (existingPackage) {
      // 4a. UPDATE existing package
      packageRecord = await prisma.package.update({
        where: { id: existingPackage.id },
        data: {
          price: parsedPrice,
          duration: parsedDuration,
        },
      });
    } else {
      // 4b. CREATE new package
      packageRecord = await prisma.package.create({
        data: {
          name: name,
          price: parsedPrice,
          duration: parsedDuration,
        },
      });
    }

    // 5. Update the setup checklist (assuming you have a packageSetup field)
    let checkSetUpIsExist = await prisma.setupChecklist.findFirst();

    if (checkSetUpIsExist) {
      await prisma.setupChecklist.update({
        where: { id: checkSetUpIsExist.id },
        data: {
          packageSetup: true, // Assuming this field exists in your checklist
        },
      });
    }

    // 6. Send success response
    return res.status(200).json({
      success: true,
      message: existingPackage
        ? "Package updated successfully!"
        : "New package added successfully!",
      data: packageRecord,
    });
  } catch (error) {
    console.error("Prisma error saving package data:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while saving the package.",
      error: error.message,
    });
  }
}