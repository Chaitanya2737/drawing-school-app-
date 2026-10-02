import prisma from "../../config/database.js";

export async function createStudent(req, res) {
  try {
    console.log(req.body);

    const {
      name,
      mobile,
      packageId,
      package_name,
      instructorId,
      Amount_paid,
      Assigned_car_id,
      startDate,
      batch_time,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !mobile ||
      !packageId ||
      !package_name ||
      !instructorId ||
      Amount_paid === undefined ||
      !startDate
    ) {
      return res.status(400).json({
        status: false,
        message: "Missing required input values",
      });
    }

    // Check if student already exists
    const isUserExist = await prisma.student.findFirst({
      where: {
        mobile,
      },
    });

    if (isUserExist) {
      return res.status(409).json({
        status: false,
        message: "User already exists in this system",
      });
    }

    // Find package
    const findPackage = await prisma.package.findFirst({
      where: {
        id: packageId,
      },
    });

    if (!findPackage) {
      return res.status(404).json({
        status: false,
        message: "Package not found",
      });
    }

    // Package price & Amount paid
    const packagePrice = Number(findPackage.price);
    const amountPaid = Number(Amount_paid);

    // Validate payment
    if (isNaN(amountPaid) || amountPaid < 0) {
      return res.status(400).json({
        status: false,
        message: "Invalid Amount_paid",
      });
    }

    if (amountPaid > packagePrice) {
      return res.status(400).json({
        status: false,
        message: "Amount paid cannot be greater than package price",
      });
    }

    // Remaining payment and percentage
    const payment_remaining = packagePrice - amountPaid;
    const payment_percentage =
      packagePrice > 0 ? (payment_remaining / packagePrice) * 100 : 0;

    // Course start date
    const Course_Start_date = new Date(startDate);

    // Validate date
    if (isNaN(Course_Start_date.getTime())) {
      return res.status(400).json({
        status: false,
        message: "Invalid startDate",
      });
    }

    // Course end date
    const Course_End_Date = new Date(Course_Start_date);
    Course_End_Date.setDate(
      Course_End_Date.getDate() + Number(findPackage.duration)
    );

    // Create everything in ONE transaction
    const result = await prisma.$transaction(async (tx) => {
      
      // 1. Create student
      const student = await tx.student.create({
        data: {
          name,
          mobile,
          packageId,
          package_name,
          
          Assigned_Instructor: instructorId || null,
          Assigned_car_id: Assigned_car_id || null,
          
          Total_amount: packagePrice,
          Amount_paid: amountPaid,
          
          Remaining_percentage: Number(payment_percentage),
          remaining_amount: Number(payment_remaining),
          
          Course_Start_date,
          Course_End_Date,
        },
      });

      // 2. Create schedule
      const schedule = await tx.schedule.create({
        data: {
          student_id: student.id,
          Batch_time: batch_time,
          Duration_time: "1h",
          Car_id: Assigned_car_id,
        },
      });

      // 3. Find WhatsApp template
      let template = await tx.whatsAppTemplate.findFirst({
        where: {
          name: "student_welcome",
        },
      });

      // 4. If template doesn't exist, create it
      if (!template) {
        template = await tx.whatsAppTemplate.create({
          data: {
            name: "student_welcome",
            templateId: "DEV_STUDENT_WELCOME",
            language: "en",
            category: "UTILITY",
            status: "APPROVED",
            body: "Hello {{studentName}}, welcome to Drawing School. Your package is {{packageName}}.",
            variables: ["studentName", "packageName"],
          },
        });
      }

      // 5. Add WhatsApp message to queue
      await tx.messageQueue.create({
        data: {
          templateId: template.id,
          recipient: mobile,
          variables: {
            studentName: name,
            packageName: package_name,
          },
          status: "PENDING",
          scheduledAt: new Date(),
        },
      });

      return {
        student,
        schedule,
      };
    });

    return res.status(201).json({
      status: true,
      message: "Student created successfully",
      data: result.student,
      schedule: result.schedule,
    });
    
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
}