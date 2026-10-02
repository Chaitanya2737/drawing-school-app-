import React, { useState, useEffect } from "react";
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

const School = ({ onComplete }) => {
  // 1. Define the state for all form fields
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
  });

  // Load initial data from local storage (user object)
  useEffect(() => {
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const user = JSON.parse(userStr);
        setFormData((prevData) => ({
          ...prevData,
          name: user.businessName || prevData.name,
          mobile: user.mobileNumber || prevData.mobile,
        }));
      }
    } catch (error) {
      console.error("Error reading user data from local storage", error);
    }
  }, []);

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting School Data:", formData);

    try {
      let systemID = undefined;
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const user = JSON.parse(userStr);
        systemID = user.systemUserId;
      }

      const payload = {
        ...formData,
        ...(systemID && { systemID })
      };

      // Passing the method, headers, and body as the second argument
      const fetchData = await fetchApi("/school-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Assuming fetchApi returns a standard fetch Response object
      const result = await fetchData.json();
      
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error("Error submitting school data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label
          htmlFor="school-name"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          School Name
        </Label>
        <Input
          id="school-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Springfield Driving School"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="school-email"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          Email Address
        </Label>
        <Input
          id="school-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="contact@school.com"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="school-mobile"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          Phone mobile
        </Label>
        <Input
          id="school-mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="school-address"
          className="text-gray-900 dark:text-[#f2e9de]"
        >
          Full Address
        </Label>
        <Input
          id="school-address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="123 Main St, City, State, Zip"
          required
          className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c] placeholder:text-gray-400 dark:placeholder:text-[#5a5f6e]"
        />
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
          Save School Details
        </Button>
      </div>
    </form>
  );
};

export default School;