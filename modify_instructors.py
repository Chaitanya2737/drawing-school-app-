import re

with open("renderer/component/tabs/InstructorsTab.jsx", "r") as f:
    content = f.read()

imports = """import React, { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../component/ui/dialog";
"""

state_and_handlers = """
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    licenseNumber: "",
    jobType: "INSTRUCTOR",
    joiningDate: "",
    isActive: true,
    payment: "",
    paymentDate: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
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
  };
"""

button_replacement = """
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
              <span>+ Add Instructor</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl transition-all duration-300 bg-white dark:bg-[#1e222d] border-gray-200 dark:border-[#2c3242]">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-[#f2e9de]">Add New Instructor</DialogTitle>
              <DialogDescription className="text-gray-500 dark:text-[#8a8d96]">
                Enter the details of the new instructor or reception staff here.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Mobile</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">License Number</label>
                  <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" placeholder="DL-1234567" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Job Type</label>
                  <select name="jobType" value={formData.jobType} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]">
                    <option value="INSTRUCTOR">Instructor</option>
                    <option value="RECEPTION">Reception</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Joining Date</label>
                  <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Payment Amount</label>
                  <input type="number" name="payment" value={formData.payment} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Payment Month</label>
                  <input type="month" name="paymentDate" value={formData.paymentDate} onChange={handleChange} required className="w-full bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-3 py-2 text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c]" />
                </div>

                <div className="space-y-2 flex items-center mt-6">
                  <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="w-4 h-4 text-[#c1552c] bg-gray-100 border-gray-300 rounded focus:ring-[#c1552c] focus:ring-2 dark:bg-[#171a22] dark:border-[#3a3d45]" id="isActiveCheck" />
                  <label htmlFor="isActiveCheck" className="ml-2 text-sm font-medium text-gray-700 dark:text-[#cfd3da]">Is Active</label>
                </div>
              </div>
              
              <DialogFooter className="mt-6 sm:justify-end">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c1552c] dark:bg-[#1e222d] dark:text-[#cfd3da] dark:border-[#3a3d45] dark:hover:bg-[#2c3242]">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#c1552c] border border-transparent rounded-lg hover:bg-[#a64724] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c1552c]">Save Instructor</button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
"""

# Replace imports
content = re.sub(r'import React from \'react\';\nimport {.*?} from "../../component/ui/table";\nimport {.*?} from "../../component/ui/select";', imports, content, flags=re.DOTALL)

# Add state and handlers
content = content.replace("export function InstructorsTab() {", "export function InstructorsTab() {" + state_and_handlers)

# Replace button
content = re.sub(r'<button className="bg-\[#c1552c\].*?<span>\+ Add Instructor</span>\s*</button>', button_replacement, content, flags=re.DOTALL)

with open("renderer/component/tabs/InstructorsTab.jsx", "w") as f:
    f.write(content)

