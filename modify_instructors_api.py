with open("renderer/component/tabs/InstructorsTab.jsx", "r") as f:
    content = f.read()

# Add import
if 'import { fetchApi } from "@/lib/api";' not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { fetchApi } from \"@/lib/api\";")

# Update handleSubmit
old_submit = """  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Instructor Data:", formData);
    // Add API call here
    setIsOpen(false);
    // Reset form optionally
    setFormData({
      name: "",
      mobile: "",
      licenseNumber: "",
      jobType: "INSTRUCTOR",
      joiningDate: "",
      isActive: true,
      payment: "",
      paymentDate: ""
    });
  };"""

new_submit = """  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Instructor Data:", formData);
    try {
      // The API parameters as requested
      const apiPayload = {
        name: formData.name,
        mobile: formData.mobile,
        licenseNumber: formData.licenseNumber,
        jobType: formData.jobType,
        joiningDate: formData.joiningDate,
        isActive: formData.isActive,
        payment: Number(formData.payment),
        paymentDate: formData.paymentDate,
      };

      const res = await fetchApi("/create-instructor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });
      
      const result = await res.json();
      console.log("Instructor created successfully", result);

      setIsOpen(false);
      setFormData({
        name: "",
        mobile: "",
        licenseNumber: "",
        jobType: "INSTRUCTOR",
        joiningDate: "",
        isActive: true,
        payment: "",
        paymentDate: ""
      });
    } catch (error) {
      console.error("Error creating instructor:", error);
    }
  };"""

content = content.replace(old_submit, new_submit)

with open("renderer/component/tabs/InstructorsTab.jsx", "w") as f:
    f.write(content)
