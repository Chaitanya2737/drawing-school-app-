import re

with open("renderer/component/setup/instructor.js", "r") as f:
    content = f.read()

# Update state
state_pattern = r'const \[formData, setFormData\] = useState\(\{\n    name: "",\n    mobile: "",\n    licenseNumber: "",\n    jobType: "INSTRUCTOR", // Default selected type\n  \}\);'
new_state = """const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    licenseNumber: "",
    jobType: "INSTRUCTOR",
    joiningDate: "",
    isActive: true,
    payment: "",
    paymentDate: ""
  });"""

content = re.sub(state_pattern, new_state, content, flags=re.MULTILINE)

# Update handleChange to support checkbox
handle_change_pattern = r'const handleChange = \(e\) => \{\n    const \{ name, value \} = e.target;\n    setFormData\(\(prevData\) => \(\{\n      \.\.\.prevData,\n      \[name\]: value,\n    \}\)\);\n  \};'
new_handle_change = """const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };"""

content = re.sub(handle_change_pattern, new_handle_change, content, flags=re.MULTILINE)

# Add new inputs for joiningDate, isActive, payment, paymentDate
inputs_to_add = """      <div className="space-y-2">
        <Label htmlFor="Instructor-joiningDate" className="text-gray-900 dark:text-[#f2e9de]">Joining Date</Label>
        <Input id="Instructor-joiningDate" name="joiningDate" type="date" value={formData.joiningDate} onChange={handleChange} className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c]" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="Instructor-payment" className="text-gray-900 dark:text-[#f2e9de]">Payment Amount</Label>
        <Input id="Instructor-payment" name="payment" type="number" value={formData.payment} onChange={handleChange} placeholder="0.00" required className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c]" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="Instructor-paymentDate" className="text-gray-900 dark:text-[#f2e9de]">Payment Month</Label>
        <Input id="Instructor-paymentDate" name="paymentDate" type="month" value={formData.paymentDate} onChange={handleChange} required className="bg-white dark:bg-[#171a22] border border-gray-300 dark:border-[#2c3242] text-gray-900 dark:text-[#f2e9de] focus-visible:ring-[#c1552c]" />
      </div>

      <div className="space-y-2 flex items-center mt-4">
        <input type="checkbox" id="Instructor-isActive" name="isActive" checked={formData.isActive} onChange={handleChange} className="w-4 h-4 text-[#c1552c] bg-gray-100 border-gray-300 rounded focus:ring-[#c1552c] focus:ring-2" />
        <Label htmlFor="Instructor-isActive" className="ml-2 text-sm text-gray-900 dark:text-[#f2e9de]">Is Active</Label>
      </div>

      <div className="pt-4 flex gap-3">"""

content = content.replace('<div className="pt-4 flex gap-3">', inputs_to_add)

# Make payload conversions in handleSubmit
submit_pattern = r'const fetchData = await fetchApi\("/instructor-setup", \{\n        method: "POST",\n        headers: \{\n          "Content-Type": "application/json",\n        \},\n        body: JSON.stringify\(formData\),\n      \}\);'
new_submit = """const payload = {
        ...formData,
        payment: Number(formData.payment)
      };
      
      const fetchData = await fetchApi("/instructor-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });"""

content = re.sub(submit_pattern, new_submit, content)

with open("renderer/component/setup/instructor.js", "w") as f:
    f.write(content)

