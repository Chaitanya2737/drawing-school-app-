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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/select";

export function InstructorsTab() {
  const instructors = [
    { name: "Robert Fox", email: "robert.f@example.com", phone: "+1 (555) 123-4567", rating: 4.9, students: 24, vehicle: "Car #4 (Honda Civic)", status: "On Lesson", initial: "RF", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300" },
    { name: "Esther Howard", email: "esther.h@example.com", phone: "+1 (555) 987-6543", rating: 4.7, students: 18, vehicle: "Car #2 (Toyota Corolla)", status: "Available", initial: "EH", color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300" },
    { name: "Cameron Williamson", email: "cameron.w@example.com", phone: "+1 (555) 456-7890", rating: 4.8, students: 21, vehicle: "Car #7 (Ford Focus)", status: "Off Duty", initial: "CW", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300" },
    { name: "Brooklyn Simmons", email: "brooklyn.s@example.com", phone: "+1 (555) 789-0123", rating: 5.0, students: 15, vehicle: "Car #1 (Tesla Model 3)", status: "On Lesson", initial: "BS", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300" },
    { name: "Leslie Alexander", email: "leslie.a@example.com", phone: "+1 (555) 321-6549", rating: 4.6, students: 30, vehicle: "Car #5 (Hyundai Elantra)", status: "Available", initial: "LA", color: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300" },
    { name: "Guy Hawkins", email: "guy.h@example.com", phone: "+1 (555) 654-3210", rating: 4.5, students: 22, vehicle: "Car #3 (Nissan Sentra)", status: "Available", initial: "GH", color: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300" },
  ];

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
        
        <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
          <span>+ Add Instructor</span>
        </button>
      </div>

      {/* Instructors Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
          
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Instructor</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Assigned Vehicle</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instructors.map((instructor, i) => (
              <TableRow key={i} className="group cursor-pointer">
             
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${instructor.color}`}>
                      {instructor.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-[#f2e9de] group-hover:text-[#c1552c] transition-colors">{instructor.name}</div>
                      <div className="text-xs text-gray-500 dark:text-[#8a8d96]">{instructor.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da]">{instructor.phone}</div>
                </TableCell>
                
                <TableCell>
                  <div className="text-sm font-medium text-gray-700 dark:text-[#cfd3da] bg-gray-100 dark:bg-[#232734] px-2.5 py-1 rounded-md inline-block">
                    {instructor.vehicle}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-700 dark:text-[#cfd3da] font-medium">{instructor.students} Active</div>
                </TableCell>
                <TableCell>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border flex items-center w-fit ${
                    instructor.status === 'Available' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50' : 
                    instructor.status === 'On Lesson' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50' : 
                    'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700/50'
                  }`}>
                    {instructor.status === 'On Lesson' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>}
                    {instructor.status === 'Available' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>}
                    {instructor.status === 'Off Duty' && <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5"></span>}
                    {instructor.status}
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
          <span className="text-sm font-medium text-gray-500 dark:text-[#8a8d96]">Showing <span className="text-gray-900 dark:text-[#f2e9de]">1</span> to <span className="text-gray-900 dark:text-[#f2e9de]">6</span> of <span className="text-gray-900 dark:text-[#f2e9de]">12</span> instructors</span>
          <div className="flex space-x-2">
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
