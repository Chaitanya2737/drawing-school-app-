-- CreateTable
CREATE TABLE "PaymentTaken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paymentCycleId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "takenAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT NOT NULL,
    CONSTRAINT "PaymentTaken_paymentCycleId_fkey" FOREIGN KEY ("paymentCycleId") REFERENCES "PaymentCycle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instructorId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NOT_TAKEN',
    "note" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "assigned_instructor" TEXT NOT NULL,
    "car_year" TEXT NOT NULL,
    "car_Number" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SetupChecklist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schoolSetup" BOOLEAN NOT NULL DEFAULT false,
    "instructorSetup" BOOLEAN NOT NULL DEFAULT false,
    "carSetup" BOOLEAN NOT NULL DEFAULT false,
    "packageSetup" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Instructor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "licenseNumber" TEXT,
    "jobType" TEXT NOT NULL DEFAULT 'INSTRUCTOR',
    "joiningDate" DATETIME,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Package" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "PaymentCycle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "instructorId" TEXT NOT NULL,
    "month" DATETIME NOT NULL,
    "amountTaken" INTEGER NOT NULL DEFAULT 0,
    "baseAmount" INTEGER NOT NULL,
    "deductions" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "netAmount" INTEGER NOT NULL,
    "paidAt" DATETIME NOT NULL,
    "note" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PaymentCycle_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "student_id" TEXT NOT NULL,
    "Batch_time" TEXT NOT NULL,
    "Duration_time" TEXT NOT NULL,
    "Car_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SchoolSetUp" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "systemId" TEXT,
    "school_name" TEXT NOT NULL,
    "support_Email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_Number" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "packageId" TEXT,
    "package_name" TEXT,
    "Enrollment_status" TEXT NOT NULL DEFAULT 'CHOSEN',
    "Course_Start_date" DATETIME,
    "Course_End_Date" DATETIME,
    "Assigned_Instructor" TEXT,
    "Total_amount" INTEGER NOT NULL,
    "Amount_paid" INTEGER NOT NULL,
    "Remaining_percentage" INTEGER NOT NULL,
    "remaining_amount" INTEGER NOT NULL,
    "Thank_you_msg" TEXT NOT NULL,
    "Welcome_msg" TEXT NOT NULL,
    "Remainder_msg" TEXT NOT NULL,
    "Balance_remaining_date" DATETIME,
    "Assigned_car_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Attendance_date_idx" ON "Attendance"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_instructorId_date_key" ON "Attendance"("instructorId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentCycle_instructorId_month_key" ON "PaymentCycle"("instructorId", "month");
