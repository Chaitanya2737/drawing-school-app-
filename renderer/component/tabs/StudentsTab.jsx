import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../component/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../component/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/select";

export function StudentsTab() {
  const students = [
    { name: "John Doe", email: "john@example.com", phone: "+1 (555) 019-2834", package: "10-Hour Beginner", lesson: "Oct 24, 10:00 AM", progress: 60, status: "Active", initial: "JD", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300" },
    { name: "Sarah Smith", email: "sarah@example.com", phone: "+1 (555) 034-5982", package: "Road Test Prep", lesson: "Completed", progress: 100, status: "Completed", initial: "SS", color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300" },
    { name: "Mike Johnson", email: "mike@example.com", phone: "+1 (555) 081-2244", package: "Refresher Course", lesson: "Oct 25, 2:30 PM", progress: 20, status: "Active", initial: "MJ", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300" },
    { name: "Emma Davis", email: "emma@example.com", phone: "+1 (555) 099-1122", package: "10-Hour Beginner", lesson: "Not scheduled", progress: 0, status: "Pending", initial: "ED", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300" },
    { name: "Alex Chen", email: "alex.c@example.com", phone: "+1 (555) 774-9988", package: "Defensive Driving", lesson: "Oct 26, 9:00 AM", progress: 40, status: "Active", initial: "AC", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input 
            type="text" 
            placeholder="Search students..." 
            className="w-full sm:w-64 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] placeholder-gray-400 dark:placeholder-[#5a5f6e] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c] transition-colors"
          />
          <div className="w-40 hidden sm:block">
            <Select defaultValue="All Status">
              <SelectTrigger className="bg-gray-50 dark:bg-[#171a22]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger>
            <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
              <span>+ Add Student</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Register a new student for driving lessons. Fill in the required details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                  Full Name
                </label>
                <input id="name" placeholder="E.g. Jane Doe" className="col-span-3 flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="mobile" className="text-right text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                  Mobile
                </label>
                <input id="mobile" placeholder="E.g. +1 555-0000" className="col-span-3 flex h-10 w-full rounded-md border border-gray-300 dark:border-[#3a3d45] bg-transparent px-3 py-2 text-sm text-gray-900 dark:text-[#f2e9de] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c1552c]" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 relative z-20">
                <label className="text-right text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                  Package
                </label>
                <div className="col-span-3">
                  <Select defaultValue="10-Hour Beginner">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-Hour Beginner">10-Hour Beginner</SelectItem>
                      <SelectItem value="Road Test Prep">Road Test Prep</SelectItem>
                      <SelectItem value="Defensive Driving">Defensive Driving</SelectItem>
                      <SelectItem value="Refresher Course">Refresher Course</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4 relative z-10">
                <label className="text-right text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                  Batch Time
                </label>
                <div className="col-span-3">
                  <Select defaultValue="Morning">
                    <SelectTrigger>
                      <SelectValue placeholder="Select batch time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="Afternoon">Afternoon (1:00 PM - 5:00 PM)</SelectItem>
                      <SelectItem value="Evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                      <SelectItem value="Weekend">Weekend Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogTrigger>
                <button className="px-4 py-2 border border-gray-300 dark:border-[#3a3d45] text-gray-700 dark:text-[#cfd3da] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2c3242] transition-colors text-sm font-medium mr-2">
                  Cancel
                </button>
              </DialogTrigger>
              <button className="px-4 py-2 bg-[#c1552c] text-white rounded-lg hover:bg-[#a64724] transition-colors shadow-sm shadow-[#c1552c]/20 text-sm font-medium">
                Register Student
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Shadcn Advanced Students Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
             
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Student Name</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Enrolled Package</TableHead>
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Upcoming Lesson</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
              </TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, i) => (
              <TableRow key={i} className="group cursor-pointer">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${student.color}`}>
                      {student.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-[#f2e9de] group-hover:text-[#c1552c] transition-colors">{student.name}</div>
                      <div className="text-xs text-gray-500 dark:text-[#8a8d96]">{student.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da]">{student.phone}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium text-gray-700 dark:text-[#cfd3da] bg-gray-100 dark:bg-[#232734] px-2.5 py-1 rounded-md inline-block">
                    {student.package}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`text-sm ${student.lesson === 'Completed' || student.lesson === 'Not scheduled' ? 'text-gray-400 dark:text-[#5a5f6e] italic' : 'text-gray-700 dark:text-[#cfd3da] font-medium'}`}>
                    {student.lesson}
                  </div>
                </TableCell>
                <TableCell className="w-56">
                  <div className="flex items-center space-x-3 w-full">
                    <div className="relative w-full py-2">
                      {/* The progress track */}
                      <div className="w-full bg-gray-200 dark:bg-[#2c3242] rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${student.progress === 100 ? 'bg-green-500' : 'bg-[#c1552c]'}`} 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      {/* The moving car */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 -ml-3 transition-all duration-1000 ease-in-out drop-shadow-md" 
                        style={{ left: `${student.progress}%` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2a3 3 0 1 0 6 0h2a3 3 0 1 0 6 0zm-8-7H5.6L6.5 8h4.5v2zm4 0v-2h1.5c.3 0 .7.2.9.5l1.6 1.5H15z" />
                          <circle cx="7" cy="17" r="2" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-[#8a8d96] w-8 shrink-0">{student.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                    student.status === 'Active' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50' : 
                    student.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50' : 
                    'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800/50'
                  }`}>
                    {student.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <button className="p-2 text-gray-400 hover:text-[#c1552c] dark:text-[#8a8d96] dark:hover:text-[#c1552c] rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all focus:outline-none">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination Footer */}
        <div className="bg-gray-50 dark:bg-[#171a22] px-6 py-4 border-t border-gray-200 dark:border-[#2c3242] flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-[#8a8d96]">Showing <span className="text-gray-900 dark:text-[#f2e9de]">1</span> to <span className="text-gray-900 dark:text-[#f2e9de]">5</span> of <span className="text-gray-900 dark:text-[#f2e9de]">142</span> students</span>
          <div className="flex space-x-2">
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
