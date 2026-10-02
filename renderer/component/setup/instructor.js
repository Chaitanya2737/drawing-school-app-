import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { fetchApi } from "@/lib/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Instructor = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    licenseNumber: "",
    jobType: "INSTRUCTOR", // Default selected type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Custom handler for the clickable divs
  const handleJobTypeSelect = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      jobType: type,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Instructor Data:", formData);

    try {
      const fetchData = await fetchApi("/instructor-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await fetchData.json();
      console.log("Success:", result);

      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error("Error submitting Instructor data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label
          htmlFor="Instructor-name"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          Instructor Name
        </Label>
        <Input
          id="Instructor-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Springfield Driving Instructor"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="Instructor-email"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          License Number
        </Label>
        <Input
          id="Instructor-email"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          placeholder="DL-1420230012345"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="Instructor-mobile"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          Phone mobile
        </Label>
        <Input
          id="Instructor-mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      {/* Clickable Divs for Job Type */}
      <div className="space-y-2">
        <Label className="text-gray-900 dark:text-[#f2e9de]">Job Type</Label>
        <div className="flex gap-4">
          <div
            onClick={() => handleJobTypeSelect("instructor")}
            className={`flex-1 cursor-pointer rounded-md border px-4 py-3 text-center transition-all ${
              formData.jobType === "instructor"
                ? "border-[#c1552c] bg-[#c1552c]/10 text-[#c1552c] ring-1 ring-[#c1552c]"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-[#2c3242] dark:bg-[#171a22] dark:text-[#f2e9de] dark:hover:bg-[#1c202a]"
            }`}
          >
            <span className="font-medium text-sm">Instructor</span>
          </div>

          <div
            onClick={() => handleJobTypeSelect("reception")}
            className={`flex-1 cursor-pointer rounded-md border px-4 py-3 text-center transition-all ${
              formData.jobType === "reception"
                ? "border-[#c1552c] bg-[#c1552c]/10 text-[#c1552c] ring-1 ring-[#c1552c]"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-[#2c3242] dark:bg-[#171a22] dark:text-[#f2e9de] dark:hover:bg-[#1c202a]"
            }`}
          >
            <span className="font-medium text-sm">RECEPTION</span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex gap-3">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-gray-300 dark:border-[#2c3242] text-gray-700 dark:text-[#a8967b] hover:bg-gray-50 dark:hover:bg-[#232734]"
            >
              Skip
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to skip?</AlertDialogTitle>
              <AlertDialogDescription>
                To provide the best services, please fill all data. You can always add this information later.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="border-gray-300 dark:border-[#2c3242] text-gray-700 dark:text-[#a8967b] hover:bg-gray-50 dark:hover:bg-[#232734]">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (onComplete) onComplete();
                }}
                className="bg-[#c1552c] text-white hover:bg-[#a84a26]"
              >
                Skip Anyway
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          type="submit"
          className="flex-1 bg-[#c1552c] text-white hover:bg-[#a84a26]"
        >
          Save Instructor Details
        </Button>
      </div>
    </form>
  );
};

export default Instructor;
