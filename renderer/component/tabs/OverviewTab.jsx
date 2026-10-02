import React from 'react';
import { MiniCalendar } from '../ui/MiniCalendar';

export function OverviewTab() {
  const chartData = [
    { day: "Mon", classes: 12 },
    { day: "Tue", classes: 18 },
    { day: "Wed", classes: 15 },
    { day: "Thu", classes: 24 },
    { day: "Fri", classes: 20 },
    { day: "Sat", classes: 32 },
    { day: "Sun", classes: 28 },
  ];
  const maxClasses = Math.max(...chartData.map(d => d.classes));

  const schedule = [
    { name: "Alice Johnson", time: "10:00 AM", duration: "1.5 hr", type: "Road Test", car: "Car #4", initial: "AJ", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40" },
    { name: "Michael Smith", time: "12:30 PM", duration: "1 hr", type: "Beginner", car: "Car #1", initial: "MS", color: "bg-green-100 text-green-600 dark:bg-green-900/40" },
    { name: "Emma Davis", time: "02:00 PM", duration: "2 hr", type: "Refresher", car: "Car #2", initial: "ED", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40" },
    { name: "James Wilson", time: "04:30 PM", duration: "1 hr", type: "Defensive", car: "Car #5", initial: "JW", color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#c1552c] to-[#e0574a] rounded-xl p-6 shadow-md text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Good morning, Admin!</h2>
          <p className="text-white/80 text-sm">Here is what is happening at Elite Driving School today.</p>
        </div>
        <div className="hidden sm:block">
          <button className="bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
            Download Daily Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Active Students", value: "142", trend: "+12%", trendUp: true, icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
          { title: "Today's Lessons", value: "28", trend: "4 Pending", trendUp: true, icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
          { title: "Available Vehicles", value: "8 / 12", trend: "4 in use", trendUp: false, icon: <><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2a3 3 0 1 0 6 0h2a3 3 0 1 0 6 0zm-8-7H5.6L6.5 8h4.5v2zm4 0v-2h1.5c.3 0 .7.2.9.5l1.6 1.5H15z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></> },
          { title: "Revenue (Month)", value: "$12,450", trend: "+8.4%", trendUp: true, icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-[#8a8d96] mb-1">{stat.title}</h3>
              <div className="flex items-end space-x-2">
                <p className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de]">{stat.value}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded mb-1.5 ${stat.trendUp ? 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400' : 'text-gray-600 bg-gray-100 dark:bg-[#2c3242] dark:text-[#a8967b]'}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-orange-50 dark:bg-[#232734] rounded-lg flex items-center justify-center text-[#c1552c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{stat.icon}</svg>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Tables Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-[#f2e9de]">Weekly Classes Activity</h3>
              <p className="text-sm text-gray-500 dark:text-[#8a8d96]">Total lessons conducted over the last 7 days</p>
            </div>
            <select className="bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-md px-3 py-1.5 text-sm text-gray-700 dark:text-[#cfd3da] focus:outline-none focus:ring-1 focus:ring-[#c1552c]">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          
          <div className="flex-1 flex items-end space-x-2 pt-8 border-b border-gray-100 dark:border-[#2c3242] pb-2 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 opacity-20">
              <div className="border-t border-gray-300 dark:border-[#5a5f6e] w-full"></div>
              <div className="border-t border-gray-300 dark:border-[#5a5f6e] w-full"></div>
              <div className="border-t border-gray-300 dark:border-[#5a5f6e] w-full"></div>
              <div className="border-t border-gray-300 dark:border-[#5a5f6e] w-full"></div>
            </div>

            {chartData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center group relative z-10 h-full justify-end">
                 <div className="w-full px-1 sm:px-4 flex justify-center items-end h-[200px]">
                   <div 
                     className="w-full max-w-[40px] bg-orange-100 dark:bg-[#c1552c]/20 rounded-t-md group-hover:bg-[#c1552c] transition-colors duration-300 relative"
                     style={{ height: `${(d.classes / maxClasses) * 100}%` }}
                   >
                     <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-700 dark:text-[#f2e9de] bg-white dark:bg-[#2c3242] px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                       {d.classes}
                     </span>
                   </div>
                 </div>
                 <span className="text-xs font-medium text-gray-500 dark:text-[#8a8d96] mt-4">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Today's Schedule Mini */}
        <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-[#f2e9de]">Today's Schedule</h3>
            <button className="text-sm font-medium text-[#c1552c] hover:underline">View All</button>
          </div>
          
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            {schedule.map((lesson, i) => (
              <div key={i} className="flex items-start p-3 rounded-xl border border-gray-100 dark:border-[#2c3242] hover:shadow-md transition-all group bg-gray-50/50 dark:bg-[#171a22]/50">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mr-3 ${lesson.color}`}>
                  {lesson.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold text-gray-900 dark:text-[#f2e9de] truncate group-hover:text-[#c1552c] transition-colors">{lesson.name}</p>
                    <span className="text-xs font-semibold text-gray-500 dark:text-[#8a8d96]">{lesson.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5 truncate">{lesson.type} • {lesson.car}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 w-full py-2.5 rounded-lg border-2 border-dashed border-gray-300 dark:border-[#3a3d45] text-gray-500 dark:text-[#8a8d96] hover:bg-gray-50 dark:hover:bg-[#232734] hover:text-[#c1552c] hover:border-[#c1552c] transition-colors font-medium text-sm">
            + Book New Lesson
          </button>
        </div>
      </div>

      {/* Quick Actions & Action Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
          <h3 className="text-lg font-bold text-gray-900 dark:text-[#f2e9de] mb-4">Quick Shortcuts</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-orange-50 dark:bg-[#c1552c]/10 text-[#c1552c] hover:bg-orange-100 dark:hover:bg-[#c1552c]/20 transition-colors border border-orange-100 dark:border-[#c1552c]/20">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              <span className="text-sm font-medium">New Student</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors border border-blue-100 dark:border-blue-900/30">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-sm font-medium">Book Lesson</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors border border-green-100 dark:border-green-900/30">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-sm font-medium">Log Payment</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors border border-purple-100 dark:border-purple-900/30">
              <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-sm font-medium">Bulk Email</span>
            </button>
          </div>
        </div>

        {/* Mini Calendar (Middle Column) */}
        <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
          <h3 className="text-lg font-bold text-gray-900 dark:text-[#f2e9de] mb-4">Upcoming Schedule</h3>
          <MiniCalendar />
        </div>

        {/* Action Items / Alerts */}
        <div className="bg-white dark:bg-[#1e222d] p-6 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-[#f2e9de]">Needs Attention</h3>
            <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2.5 py-0.5 rounded-full text-xs font-bold">3 Tasks</span>
          </div>
          
          <div className="space-y-3">
            {/* Alert 1 */}
            <div className="flex items-start justify-between p-3 rounded-lg border border-red-100 dark:border-red-900/20 bg-red-50/50 dark:bg-red-900/10">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 text-red-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">Vehicle #4 (Honda Civic) Due for Oil Change</p>
                  <p className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5">Odometer crossed 28,000 miles.</p>
                </div>
              </div>
              <button className="text-xs font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors">Schedule Service</button>
            </div>

            {/* Alert 2 */}
            <div className="flex items-start justify-between p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/20 bg-yellow-50/50 dark:bg-yellow-900/10">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 text-yellow-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">Emma Davis missed payment</p>
                  <p className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5">Invoice #INV-492 is 3 days overdue.</p>
                </div>
              </div>
              <button className="text-xs font-medium text-yellow-700 hover:text-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Send Reminder</button>
            </div>

            {/* Alert 3 */}
            <div className="flex items-start justify-between p-3 rounded-lg border border-blue-100 dark:border-blue-900/20 bg-blue-50/50 dark:bg-blue-900/10">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">3 Students completed Road Test Prep</p>
                  <p className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5">Ready for final evaluation and certification.</p>
                </div>
              </div>
              <button className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
