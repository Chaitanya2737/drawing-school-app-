import React, { useState, useEffect } from "react";
import { ArrowLeft, User, Phone, Briefcase, CreditCard, Car, Calendar, DollarSign, Wallet, FileText, CheckCircle, Users } from "lucide-react";
import { fetchApi } from "../../lib/api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function InstructorProfile({ instructor, onBack }) {
  const [loading, setLoading] = useState(true);
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch assigned students for this instructor
    const fetchStudents = async () => {
      try {
        const res = await fetchApi("/get-student-data?limit=1000");
        const data = await res.json();
        if (data && data.status) {
          const allStudents = data.data || [];
          setAssignedStudents(allStudents.filter(s => s.Assigned_Instructor === instructor.id));
        }
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };

    // Fetch real payment lifecycle
    const fetchPayments = async () => {
      try {
        const res = await fetchApi(`/get-instructor-payments/${instructor.id}`);
        const data = await res.json();
        if (data && data.status) {
          setPayments(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      }
    };

    Promise.all([fetchStudents(), fetchPayments()]).finally(() => {
      setLoading(false);
    });

  }, [instructor.id]);

  const exportPDF = () => {
    const doc = new jsPDF();

    // Add Title and Header Info
    doc.setFontSize(18);
    doc.text("Instructor Payment Lifecycle", 14, 22);
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Instructor Name: ${instructor.name}`, 14, 30);
    doc.text(`Mobile: ${instructor.mobile}`, 14, 36);
    doc.text(`Base Salary: Rs. ${instructor.payment || 0}`, 14, 42);
    doc.text(`Generated On: ${new Date().toLocaleDateString()}`, 14, 48);

    // Map real payment cycles
    const tableColumn = ["Month", "Advances", "Bonuses", "Net Paid", "Status"];
    const tableRows = payments.length > 0 ? payments.map(p => {
      const monthStr = new Date(p.month).toLocaleString('default', { month: 'short', year: 'numeric' });
      return [
        monthStr,
        `-Rs. ${p.amountTaken}`,
        `+Rs. ${p.bonus}`,
        `Rs. ${p.netAmount}`,
        p.status
      ];
    }) : [["No payroll history found", "", "", "", ""]];

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 55,
      theme: 'grid',
      headStyles: { fillColor: [79, 70, 229] } // Indigo 600
    });

    doc.save(`${instructor.name.replace(/\s+/g, '_')}_Payroll_History.pdf`);
  };

  const joinDate = instructor.joiningDate ? new Date(instructor.joiningDate).toLocaleDateString() : "N/A";

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center space-x-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded-full text-gray-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-lg font-bold capitalize">
              {instructor.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#f2e9de] capitalize">{instructor.name}</h2>
              <p className="text-sm text-gray-500 flex items-center"><Phone className="w-3.5 h-3.5 mr-1" /> {instructor.mobile}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              instructor.isActive ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {instructor.isActive ? "Active" : "Inactive"}
            </span>
            <div className="hidden sm:flex items-center space-x-2 border-l border-gray-200 dark:border-[#3c445a] pl-3 ml-1">
              <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 text-green-700 dark:text-green-400 rounded-lg text-xs font-semibold transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                <span>WhatsApp</span>
              </button>
              <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-semibold transition-colors">
                <Wallet className="w-3.5 h-3.5" />
                <span>Issue Payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-[#8a8d96] mb-1 font-medium">Base Salary</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">₹{instructor.payment || 0}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-[#8a8d96] mb-1 font-medium">Pay Date</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">Day {instructor.paymentDate || "N/A"}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-[#8a8d96] mb-1 font-medium">Active Students</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">
              {loading ? "..." : assignedStudents.filter(s => s.Enrollment_status === 'Active' || s.Enrollment_status === 'CHOSEN').length}
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 dark:text-[#8a8d96] mb-1 font-medium">Vehicle Assigned</p>
            <p className="text-lg font-bold text-gray-900 dark:text-[#f2e9de] truncate max-w-[100px]">{instructor.car?.name || "None"}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Details & Lifecycle */}
        <div className="space-y-6 lg:col-span-1">
          {/* Job Details */}
          <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 dark:text-[#f2e9de] mb-4 flex items-center uppercase tracking-wider text-xs">
              <Briefcase className="w-4 h-4 mr-2 text-indigo-500" /> Employee Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase text-gray-500 dark:text-[#8a8d96] mb-0.5">Role</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de] capitalize">{instructor.jobType?.toLowerCase()}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 dark:text-[#8a8d96] mb-0.5">License Number</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">{instructor.licenseNumber || "Not Provided"}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-500 dark:text-[#8a8d96] mb-0.5">Joining Date</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">{joinDate}</p>
              </div>
            </div>
          </div>

          {/* Payroll Lifecycle Action */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Wallet className="w-24 h-24" />
            </div>
            <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2 relative z-10">Manage Payroll Cycle</h3>
            <p className="text-xs text-indigo-700/70 dark:text-indigo-400/70 mb-4 relative z-10">
              Track advances, calculate deductions, and add extra bonuses for this month.
            </p>
            <button className="w-full relative z-10 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm transition-colors">
              Open Payroll Calculator
            </button>
          </div>
        </div>

        {/* Right Column: Payments History & Students */}
        <div className="space-y-6 lg:col-span-2">
          
          {/* Payment History / Lifecycle */}
          <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-[#f2e9de] flex items-center uppercase tracking-wider text-xs">
                <FileText className="w-4 h-4 mr-2 text-indigo-500" /> Recent Payment History
              </h3>
              <div className="flex items-center space-x-3">
                <button onClick={exportPDF} className="flex items-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded transition-colors shadow-sm">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Export PDF
                </button>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 transition-colors">
                  View All
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-[#2c3242] text-xs uppercase text-gray-500">
                    <th className="pb-3 font-medium">Month</th>
                    <th className="pb-3 font-medium text-center">Advances</th>
                    <th className="pb-3 font-medium text-center">Bonuses</th>
                    <th className="pb-3 font-medium text-right">Net Paid</th>
                    <th className="pb-3 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="py-4 text-center text-sm text-gray-500">Loading history...</td>
                    </tr>
                  ) : payments.length > 0 ? (
                    payments.map((p) => (
                      <tr key={p.id} className="border-b border-gray-50 dark:border-[#2c3242]/50 last:border-0">
                        <td className="py-3 font-medium text-gray-900 dark:text-white">
                          {new Date(p.month).toLocaleString('default', { month: 'short', year: 'numeric' })}
                        </td>
                        <td className={`py-3 text-center ${p.amountTaken > 0 ? 'text-red-500' : 'text-gray-400'}`}>
                          {p.amountTaken > 0 ? `-₹${p.amountTaken}` : '₹0'}
                        </td>
                        <td className={`py-3 text-center ${p.bonus > 0 ? 'text-emerald-500' : 'text-gray-400'}`}>
                          {p.bonus > 0 ? `+₹${p.bonus}` : '₹0'}
                        </td>
                        <td className="py-3 text-right font-bold text-gray-900 dark:text-white">₹{p.netAmount}</td>
                        <td className="py-3 text-right">
                          <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                            p.status === 'PAID' ? 'bg-emerald-100 text-emerald-700' :
                            p.status === 'PARTIALLY_PAID' ? 'bg-blue-100 text-blue-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-6 text-center text-sm text-gray-500 border border-dashed border-gray-200 dark:border-[#3c445a] rounded-lg mt-2 block w-full">
                        No payroll history generated yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assigned Students */}
          <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-[#f2e9de] flex items-center uppercase tracking-wider text-xs">
                <Users className="w-4 h-4 mr-2 text-indigo-500" /> Current Students
              </h3>
            </div>
            
            {loading ? (
              <p className="text-sm text-gray-500">Loading students...</p>
            ) : assignedStudents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {assignedStudents.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-3 border border-gray-100 dark:border-[#2c3242] rounded-lg bg-gray-50 dark:bg-[#252a38]">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-xs uppercase">
                        {s.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm capitalize">{s.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase">{s.package_name || "Custom"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-gray-200 dark:border-[#3c445a] rounded-lg">
                <p className="text-sm text-gray-500">No active students assigned.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
