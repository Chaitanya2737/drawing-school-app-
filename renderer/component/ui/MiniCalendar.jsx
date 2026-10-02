import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { fetchApi } from '../../lib/api';

export function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetchApi("/calendar");
        const data = await res.json();
        if (data.status) {
          setEvents(data.data || []);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="bg-white dark:bg-[#1e222d] p-5 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm flex flex-col transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-bold text-gray-900 dark:text-[#f2e9de] flex items-center">
          <CalendarIcon className="w-4 h-4 mr-2 text-indigo-500" />
          {monthNames[month]} {year}
        </h3>
        <div className="flex gap-1">
          <button onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded text-gray-500">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded text-gray-500">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
        {['S','M','T','W','T','F','S'].map((d, i) => (
          <div key={i} className="text-gray-400 font-medium">{d}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 flex-1">
        {days.map((day, idx) => {
          if (!day) return <div key={idx} className="p-1"></div>;
          
          const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = events.filter(e => e.date === dStr);
          const hasHoliday = dayEvents.some(e => e.type === 'HOLIDAY');
          const hasTask = dayEvents.some(e => e.type !== 'HOLIDAY');
          
          const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
          const tooltipText = dayEvents.length > 0 ? dayEvents.map(e => e.title).join('\n') : "";
          
          return (
            <div key={idx} title={tooltipText} className="flex flex-col items-center justify-center p-1 relative">
              <div className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium cursor-pointer transition-colors ${
                isToday ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-[#2c3242] text-gray-700 dark:text-gray-300'
              }`}>
                {day}
              </div>
              <div className="flex gap-0.5 mt-0.5 h-1">
                {hasHoliday && <div className="w-1 h-1 rounded-full bg-red-500"></div>}
                {hasTask && <div className="w-1 h-1 rounded-full bg-blue-500"></div>}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#2c3242] flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Holidays</div>
          <div className="flex items-center gap-1.5 text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Tasks</div>
        </div>
      </div>
    </div>
  );
}
