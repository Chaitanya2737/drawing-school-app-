"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../component/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/select";
import { CalendarIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { fetchApi } from "@/lib/api";
import { InstructorProfile } from "./InstructorProfile";

export function InstructorsTab() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    open: false,
    title: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    licenseNumber: "",
    jobType: "",
    joiningDate: "",
    payment: "",
    paymentDate: "",
    Assigned_car_id: "",
    Assigned_car_name: "",
  });

  const [instructor, setInstructor] = useState({
    data: [],
    pagination: {
      currentPage: 1,
      limit: 10,
      totalStudents: 0,
      totalPages: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  });

  const [supportData, setSupportData] = useState({
    cars: [],
  });

  const nextStep = () => {
    // Validation
    if (step === 1) {
      if (!formData.name || !formData.mobile) {
        setAlertInfo({
          open: true,
          title: "Missing Details",
          message: "Please fill all details (Name, Mobile).",
        });
        return;
      }
    } else if (step === 2) {
      if (
        !formData.licenseNumber ||
        !formData.joiningDate ||
        !formData.Assigned_car_id
      ) {
        setAlertInfo({
          open: true,
          title: "Missing Selection",
          message:
            "Please fill license number, joining date, and assign a car.",
        });
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => setStep(1), 300);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveInstructor = async () => {
    if (!formData.payment || !formData.paymentDate) {
      setAlertInfo({
        open: true,
        title: "Missing Details",
        message: "Please enter the Decided Amount and select a Payment Date.",
      });
      return;
    }

    try {
      const res = await fetchApi("/create-instructor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        toast.error(res.message || "Failed to create instructor");
        return;
      }

      toast.success(res.message || "Instructor created successfully");

      handleOpenChange(false);
      setFormData({
        name: "",
        mobile: "",
        licenseNumber: "",
        jobType: "",
        joiningDate: "",
        payment: "",
        paymentDate: "",
        Assigned_car_id: "",
        Assigned_car_name: "",
      });

      fetchInstructorData();
    } catch (error) {
      console.error("Failed to save instructor:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const fetchInstructorData = async () => {
    try {
      const res = await fetchApi("/get-instructor-data");
      const data = await res.json();

      if (data && data.status) {
        setInstructor({
          data: data.data || [],
          pagination: data.pagination || {},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadSupportData = async () => {
      try {
        const res = await fetchApi("/support-instructor");
        const resData = await res.json();

        if (res.status === 200 || resData?.status === 200) {
          setSupportData({
            cars: resData?.data?.cars || [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch support data:", error);
      }
    };

    if (isOpen) {
      loadSupportData();
    }
  }, [isOpen]);

  useEffect(() => {
    fetchInstructorData();
  }, []);

  // Helpers for dynamic styling
  const avatarColors = [
    "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
    "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300",
    "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
    "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
    "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300",
  ];

  const getStatusColor = (status) => {
    const s = status?.toUpperCase() || "";
    if (s === "AVAILABLE" || s === "ACTIVE")
      return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50";
    if (s === "ON LESSON")
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50";
    return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700/50";
  };

  const getInitials = (name) => {
    if (!name) return "UN";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  if (selectedInstructor) {
    return <InstructorProfile instructor={selectedInstructor} onBack={() => setSelectedInstructor(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search instructors..."
            className="w-full sm:w-64 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] placeholder-gray-400 dark:placeholder-[#5a5f6e] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c] transition-colors"
          />
          <div className="w-40 hidden sm:block">
            <Select defaultValue="All Status">
              <SelectTrigger className="bg-gray-50 dark:bg-[#171a22]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="On Lesson">On Lesson</SelectItem>
                <SelectItem value="Off Duty">Off Duty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
              <span>+ Add Instructor</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl transition-all duration-300">
            <DialogHeader>
              <DialogTitle>Add Instructor</DialogTitle>
              <DialogDescription>
                Step {step} of {totalSteps}:{" "}
                {step === 1
                  ? "Personal Details"
                  : step === 2
                    ? "Assignment Details"
                    : "Payment & Status"}
              </DialogDescription>
            </DialogHeader>

            {/* Stepper Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-[#3a3d45] rounded-full h-1.5 mt-2 mb-4">
              <div
                className="bg-[#c1552c] h-1.5 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>

            {/* Form Steps */}
            <div className="min-h-[220px] py-2 relative">
              {/* STEP 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4 animate-in slide-in-from-right-4 fade-in duration-300">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="E.g. Jane Doe"
                      onChange={handleChange}
                      value={formData.name}
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mobile"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      placeholder="+91 9876543210"
                      onChange={handleChange}
                      value={formData.mobile}
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Package & Assignments */}
              {step === 2 && (
                <div className="space-y-4 animate-in slide-in-from-right-4 fade-in duration-300">
                  <div className="space-y-2 col-span-2 sm:col-span-1 relative z-10">
                    <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                      Assigned Car
                    </label>
                    <Select
                      value={String(formData.Assigned_car_id)}
                      onValueChange={(val) => {
                        const selectedCar = supportData.cars.find(
                          (c) => String(c.id) === val,
                        );
                        setFormData((prev) => ({
                          ...prev,
                          Assigned_car_id: val,
                          Assigned_car_name: selectedCar
                            ? selectedCar.model || selectedCar.name
                            : "",
                        }));
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Car" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportData.cars.map((car) => {
                          const carName = car.model || car.name;
                          return (
                            <SelectItem key={car.id} value={String(car.id)}>
                              {carName}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="licenseNumber"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      License Number
                    </label>
                    <input
                      id="licenseNumber"
                      name="licenseNumber"
                      placeholder="E.g. AB1234567"
                      onChange={handleChange}
                      value={formData.licenseNumber}
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]"
                    />
                  </div>

                  {/* Joining Date Picker */}
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label
                      htmlFor="joiningDate"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      Joining Date
                    </label>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal border-gray-300 dark:border-[#3a3d45] bg-transparent text-gray-900 dark:text-[#f2e9de] hover:bg-gray-50 dark:hover:bg-[#2c3242] focus:ring-2 focus:ring-[#c1552c] ${!formData.joiningDate && "text-gray-400 dark:text-gray-500"}`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.joiningDate ? (
                            format(new Date(formData.joiningDate), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            formData.joiningDate
                              ? new Date(formData.joiningDate)
                              : undefined
                          }
                          onSelect={(date) => {
                            handleChange({
                              target: {
                                name: "joiningDate",
                                value: date ? format(date, "yyyy-MM-dd") : "",
                              },
                            });
                            setIsCalendarOpen(false);
                          }}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              )}
              {/* STEP 3: Payment & Status */}
              {step === 3 && (
                <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-right-4 fade-in duration-300">
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label
                      htmlFor="payment"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      Decided Amount (₹)
                    </label>
                    <input
                      id="payment"
                      name="payment"
                      type="number"
                      placeholder="0.00"
                      onChange={handleChange}
                      value={formData.payment}
                      className="flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]"
                    />
                  </div>

                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label
                      htmlFor="paymentDay"
                      className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]"
                    >
                      Payment Day
                    </label>
                    <Select
                      value={
                        formData.paymentDate ? String(formData.paymentDate) : ""
                      }
                      onValueChange={(value) => {
                        handleChange({
                          target: {
                            name: "paymentDate",
                            value: value,
                          },
                        });
                      }}
                    >
                      <SelectTrigger className="w-full border-gray-300 dark:border-[#3a3d45] bg-transparent text-gray-900 dark:text-[#f2e9de] focus:ring-2 focus:ring-[#c1552c]">
                        <SelectValue placeholder="Select a day" />
                      </SelectTrigger>

                      <SelectContent>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(
                          (day) => (
                            <SelectItem key={day} value={String(day)}>
                              {day}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="flex justify-between items-center sm:justify-between pt-4 mt-2 border-t border-gray-100 dark:border-[#2c3242]">
              <div>
                {step > 1 ? (
                  <button
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 dark:border-[#3a3d45] text-gray-700 dark:text-[#cfd3da] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2c3242] transition-colors text-sm font-medium"
                  >
                    Back
                  </button>
                ) : (
                  <button
                    onClick={() => handleOpenChange(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-[#3a3d45] text-gray-700 dark:text-[#cfd3da] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2c3242] transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>

              <div>
                {step < totalSteps ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-[#1e222d] dark:bg-gray-700 text-white rounded-lg hover:bg-black dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSaveInstructor}
                    className="px-6 py-2 bg-[#c1552c] text-white rounded-lg hover:bg-[#a64724] transition-colors shadow-sm shadow-[#c1552c]/20 text-sm font-medium"
                  >
                    Save Instructor
                  </button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Instructors Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Instructor</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Assigned Vehicle</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Joined At</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instructor?.data.map((instructor, i) => (
              <TableRow key={instructor.id || i} className="group cursor-pointer hover:bg-gray-50/50 dark:hover:bg-[#252a38]/50" onClick={() => setSelectedInstructor(instructor)}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${avatarColors[i % avatarColors.length]}`}
                    >
                      {getInitials(instructor.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-[#f2e9de] group-hover:text-[#c1552c] transition-colors">
                        {instructor.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-[#8a8d96]">
                        {instructor.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da]">
                    {instructor.mobile}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="text-sm font-medium text-gray-700 dark:text-[#cfd3da] bg-gray-100 dark:bg-[#232734] px-2.5 py-1 rounded-md inline-block">
                    {instructor?.car?.name || "None"}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da] font-medium">
                    {instructor.studentCount || 0}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full border flex items-center w-fit ${getStatusColor(instructor.status)}`}
                  >
                    {instructor.status === "On Lesson" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>
                    )}
                    {(instructor.status === "Available" ||
                      instructor.status === "Active") && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                    )}
                    {instructor.status === "Off Duty" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5"></span>
                    )}
                    {instructor.status || "Unknown"}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da] font-medium">
                    {instructor.payment ? `₹${instructor.payment}` : "-"}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da] font-medium">
                    {instructor.joiningDate
                      ? format(new Date(instructor.joiningDate), "PPP")
                      : "Not specified"}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <button className="p-2 text-gray-400 hover:text-[#c1552c] dark:text-[#8a8d96] dark:hover:text-[#c1552c] rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all focus:outline-none">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 13a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 100-2 1 1 0 000 2z"></path>
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Footer */}
        <div className="bg-gray-50 dark:bg-[#171a22] px-6 py-4 border-t border-gray-200 dark:border-[#2c3242] flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-[#8a8d96]">
            Page{" "}
            <span className="text-gray-900 dark:text-[#f2e9de]">
              {instructor.pagination.currentPage}
            </span>{" "}
            of{" "}
            <span className="text-gray-900 dark:text-[#f2e9de]">
              {instructor.pagination.totalPages}
            </span>{" "}
            (Total: {instructor.pagination.totalStudents})
          </span>
          <div className="flex space-x-2">
            <button
              className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors disabled:opacity-50"
              disabled={!instructor.pagination.hasPreviousPage}
            >
              Previous
            </button>
            <button
              className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors shadow-sm disabled:opacity-50"
              disabled={!instructor.pagination.hasNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <AlertDialog
        open={alertInfo.open}
        onOpenChange={(open) => setAlertInfo((prev) => ({ ...prev, open }))}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertInfo.title}</AlertDialogTitle>
            <AlertDialogDescription>{alertInfo.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setAlertInfo((prev) => ({ ...prev, open: false }))}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
