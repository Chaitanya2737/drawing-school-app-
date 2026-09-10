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

export function VehiclesTab() {
  const vehicles = [
    { id: "V-01", make: "Toyota Corolla", year: "2023", plate: "XYZ-9876", type: "Automatic", status: "Available", mileage: "12,450 mi", instructor: "Esther Howard" },
    { id: "V-02", make: "Honda Civic", year: "2022", plate: "ABC-1234", type: "Manual", status: "On Lesson", mileage: "28,900 mi", instructor: "Robert Fox" },
    { id: "V-03", make: "Nissan Sentra", year: "2024", plate: "LMN-4567", type: "Automatic", status: "Maintenance", mileage: "4,200 mi", instructor: "Unassigned" },
    { id: "V-04", make: "Tesla Model 3", year: "2023", plate: "EV-0099", type: "Automatic", status: "On Lesson", mileage: "18,300 mi", instructor: "Brooklyn Simmons" },
    { id: "V-05", make: "Hyundai Elantra", year: "2021", plate: "QWE-5432", type: "Manual", status: "Available", mileage: "45,120 mi", instructor: "Leslie Alexander" },
    { id: "V-06", make: "Ford Focus", year: "2022", plate: "RTY-7654", type: "Automatic", status: "Available", mileage: "32,800 mi", instructor: "Cameron Williamson" },
  ];

  return (
    <div className="space-y-6">
      {/* Fleet Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between transition-colors duration-300">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#8a8d96] mb-1">Fleet Availability</p>
            <div className="flex items-end space-x-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">3</h3>
              <span className="text-sm text-gray-500 dark:text-[#8a8d96] mb-1">/ 6 Available</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-red-200 dark:border-red-900/30 shadow-sm flex items-center justify-between transition-colors duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-red-500"></div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#8a8d96] mb-1">Maintenance Alerts</p>
            <div className="flex items-end space-x-2">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">1</h3>
              <span className="text-sm text-red-500/80 dark:text-red-400/80 mb-1">Needs Service</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.28 10.3-4.5 4.5"/><path d="M19.78 15.34A5.5 5.5 0 0 1 12 16L9.66 18.34a2.83 2.83 0 0 1-4-4L8 12a5.5 5.5 0 0 1 .66-7.78 5.5 5.5 0 0 1 7.78.66l2 2a5.5 5.5 0 0 1-.66 8.46Z"/></svg>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex items-center justify-between transition-colors duration-300">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#8a8d96] mb-1">Avg Fleet Mileage</p>
            <div className="flex items-end space-x-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">23,628</h3>
              <span className="text-sm text-gray-500 dark:text-[#8a8d96] mb-1">mi</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 12 3.5-3.5"/><path d="M12 12v3"/><path d="M12 12H9"/></svg>
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input 
            type="text" 
            placeholder="Search vehicles (make, plate)..." 
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
                <SelectItem value="Maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
          <span>+ Add Vehicle</span>
        </button>
      </div>

      {/* Vehicles Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
              <TableHead className="w-12">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 dark:border-[#3a3d45] text-[#c1552c] focus:ring-[#c1552c] bg-gray-50 dark:bg-[#1e222d] cursor-pointer" />
              </TableHead>
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Vehicle Model</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </TableHead>
              <TableHead>License Plate</TableHead>
              <TableHead>Transmission</TableHead>
              <TableHead>Current Mileage</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle, i) => (
              <TableRow key={i} className="group cursor-pointer">
                <TableCell>
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 dark:border-[#3a3d45] text-[#c1552c] focus:ring-[#c1552c] bg-gray-50 dark:bg-[#1e222d] cursor-pointer" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#2c3242] flex items-center justify-center text-gray-500 dark:text-[#8a8d96]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2a3 3 0 1 0 6 0h2a3 3 0 1 0 6 0zm-8-7H5.6L6.5 8h4.5v2zm4 0v-2h1.5c.3 0 .7.2.9.5l1.6 1.5H15z" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-[#f2e9de] group-hover:text-[#c1552c] transition-colors">{vehicle.make}</div>
                      <div className="text-xs text-gray-500 dark:text-[#8a8d96]">{vehicle.year} • Fleet ID: {vehicle.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-bold text-gray-700 dark:text-[#cfd3da] uppercase tracking-wider bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-500 px-2.5 py-1 rounded border border-yellow-200 dark:border-yellow-700/50 inline-block shadow-sm">
                    {vehicle.plate}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                    {vehicle.type === 'Manual' ? (
                      <span className="bg-gray-100 dark:bg-[#232734] px-2 py-1 rounded text-gray-600 dark:text-gray-300">Manual</span>
                    ) : (
                      <span className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded text-blue-600 dark:text-blue-400">Automatic</span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-between group/mileage">
                    <span className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">{vehicle.mileage}</span>
                    <button className="text-[10px] uppercase font-bold tracking-wider text-[#c1552c] bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded border border-orange-200 dark:border-orange-800/50 opacity-0 group-hover/mileage:opacity-100 transition-opacity hover:bg-orange-100 dark:hover:bg-orange-900/40">
                      Update
                    </button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`text-sm ${vehicle.instructor === 'Unassigned' ? 'text-gray-400 dark:text-gray-500 italic' : 'text-gray-700 dark:text-[#cfd3da] font-medium'}`}>
                    {vehicle.instructor}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border flex items-center w-fit ${
                    vehicle.status === 'Available' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50' : 
                    vehicle.status === 'On Lesson' ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50' : 
                    'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50'
                  }`}>
                    {vehicle.status === 'On Lesson' && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>}
                    {vehicle.status === 'Available' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>}
                    {vehicle.status === 'Maintenance' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>}
                    {vehicle.status}
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
          <span className="text-sm font-medium text-gray-500 dark:text-[#8a8d96]">Showing <span className="text-gray-900 dark:text-[#f2e9de]">1</span> to <span className="text-gray-900 dark:text-[#f2e9de]">6</span> of <span className="text-gray-900 dark:text-[#f2e9de]">12</span> fleet vehicles</span>
          <div className="flex space-x-2">
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors shadow-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
