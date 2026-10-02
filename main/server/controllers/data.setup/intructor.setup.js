// Make sure to import your Prisma client at the top
import prisma from "../../config/database.js";

export async function saveInstructorData(req, res) {
  try {
    const { name, mobile, licenseNumber, jobType } = req.body;

    // 1. Basic Validation
    if (!name || !mobile || !licenseNumber || !jobType) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, mobile, licenseNumber, jobType) are required.",
      });
    }

    // Convert jobType to uppercase
    const upperCaseJobType = String(jobType).toUpperCase();

    // 2. Check if THIS SPECIFIC instructor exists using the MOBILE NUMBER
    let existingInstructor = await prisma.instructor.findFirst({
      where: {
        mobile: mobile, // Looking up the instructor by their phone number
      },
    });

    let instructorRecord;

    if (existingInstructor) {
      // 3a. If this instructor exists, UPDATE their specific record
      instructorRecord = await prisma.instructor.update({
        where: { id: existingInstructor.id },
        data: {
          name,
          licenseNumber, // Update the license number in case it changed
          jobType: upperCaseJobType, 
        },
      });
    } else {
      // 3b. If they don't exist, CREATE a brand NEW instructor record
      instructorRecord = await prisma.instructor.create({
        data: {
          name,
          mobile,
          licenseNumber,
          jobType: upperCaseJobType, 
        },
      });
    }

    // 4. Update the setup checklist safely
    let checkSetUpIsExist = await prisma.setupChecklist.findFirst();

    if (checkSetUpIsExist) {
      await prisma.setupChecklist.update({
        where: { id: checkSetUpIsExist.id },
        data: {
          instructorSetup: true,
        },
      });
    }

    // 5. Send success response
    return res.status(200).json({
      success: true,
      message: existingInstructor
        ? "Instructor updated successfully!"
        : "New instructor added successfully!",
      data: instructorRecord,
    });
  } catch (error) {
    console.error("Prisma error saving instructor data:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while saving the data.",
      error: error.message,
    });
  }
}