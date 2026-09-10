import React from 'react';

export function ScheduleTab() {
  const schedule = [
    { id: 1, time: "09:00 AM", duration: "1.5 hr", student: "John Doe", instructor: "Robert Fox", vehicle: "Car #4 (Honda Civic)", type: "10-Hour Beginner", status: "In Progress", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/10" },
    { id: 2, time: "10:30 AM", duration: "1 hr", student: "Alex Chen", instructor: "Esther Howard", vehicle: "Car #2 (Toyota Corolla)", type: "Defensive Driving", status: "Upcoming", color: "border-orange-500 bg-orange-50 dark:bg-orange-900/10" },
    { id: 3, time: "01:00 PM", duration: "2 hr", student: "Mike Johnson", instructor: "Brooklyn Simmons", vehicle: "Car #1 (Tesla Model 3)", type: "Refresher Course", status: "Upcoming", color: "border-purple-500 bg-purple-50 dark:bg-purple-900/10" },
    { id: 4, time: "03:30 PM", duration: "1 hr", student: "Sarah Smith", instructor: "Leslie Alexander", vehicle: "Car #5 (Hyundai Elantra)", type: "Road Test Prep", status: "Upcoming", color: "border-green-500 bg-green-50 dark:bg-green-900/10" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-between w-48 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] transition-colors">
            <button className="text-gray-400 hover:text-[#c1552c] transition-colors">&lt;</button>
            <span className="font-medium text-sm">Today, Oct 24</span>
            <button className="text-gray-400 hover:text-[#c1552c] transition-colors">&gt;</button>
          </div>
          
          <div className="hidden sm:flex bg-gray-100 dark:bg-[#171a22] p-1 rounded-lg border border-gray-200 dark:border-[#3a3d45]">
            <button className="px-4 py-1.5 rounded-md bg-white dark:bg-[#2c3242] text-gray-900 dark:text-[#f2e9de] shadow-sm text-sm font-medium transition-colors">Agenda</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500 dark:text-[#8a8d96] hover:text-gray-900 dark:hover:text-[#f2e9de] text-sm font-medium transition-colors">Week</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500 dark:text-[#8a8d96] hover:text-gray-900 dark:hover:text-[#f2e9de] text-sm font-medium transition-colors">Month</button>
          </div>
        </div>
        
        <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
          <span>+ Schedule Lesson</span>
        </button>
      </div>

      {/* Agenda Timeline */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300 p-6">
        
        <div className="relative border-l-2 border-gray-100 dark:border-[#2c3242] ml-4 space-y-8 pb-4">
          
          {/* Current Time Indicator Line (Mock) */}
          <div className="absolute top-16 -left-2 right-0 flex items-center z-10 pointer-events-none opacity-60">
            <div className="w-4 h-4 rounded-full bg-[#c1552c] shadow-sm shadow-[#c1552c]/50"></div>
            <div className="h-0.5 bg-[#c1552c] w-full ml-1"></div>
          </div>

          {schedule.map((lesson) => (
            <div key={lesson.id} className="relative pl-8 sm:pl-12 group cursor-pointer">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-[#1e222d] bg-gray-300 dark:bg-[#5a5f6e] group-hover:bg-[#c1552c] transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Time Block */}
                <div className="w-24 shrink-0 pt-1">
                  <div className="font-bold text-gray-900 dark:text-[#f2e9de]">{lesson.time}</div>
                  <div className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5">{lesson.duration}</div>
                </div>

                {/* Lesson Card */}
                <div className={`flex-1 p-4 rounded-xl border-l-4 border-t border-r border-b border-t-gray-100 border-r-gray-100 border-b-gray-100 dark:border-t-[#2c3242] dark:border-r-[#2c3242] dark:border-b-[#2c3242] shadow-sm hover:shadow-md transition-all duration-200 ${lesson.color}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-[#f2e9de]">{lesson.student}</h3>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                      lesson.status === 'In Progress' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800' : 
                      'bg-white text-gray-700 border-gray-200 dark:bg-[#232734] dark:text-[#cfd3da] dark:border-[#3a3d45]'
                    }`}>
                      {lesson.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-[#cfd3da]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-400 dark:text-[#8a8d96]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      {lesson.instructor}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-[#cfd3da]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-400 dark:text-[#8a8d96]"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
                      {lesson.vehicle}
                    </div>
                    <div className="flex items-center text-sm font-medium text-[#c1552c]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {lesson.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
