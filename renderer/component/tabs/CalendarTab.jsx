"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from "lucide-react";
import { fetchApi } from "../../lib/api";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarTab() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetchApi("/calendar");
      const data = await res.json();
      if (data.status) {
        setEvents(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await fetchApi("/calendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTaskTitle,
          description: newTaskDesc,
          date: selectedDate,
          type: "TASK"
        })
      });
      setShowModal(false);
      setNewTaskTitle("");
      setNewTaskDesc("");
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Calendar Math
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const getEventsForDate = (day) => {
    if (!day) return [];
    // Date format matching YYYY-MM-DD
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(e => e.date === dStr);
  };

  const openModalForDate = (day) => {
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dStr);
    setShowModal(true);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="h-full flex flex-col p-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <CalendarIcon className="w-6 h-6 mr-3 text-indigo-500" />
            {monthNames[month]} {year}
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage your events, holidays, and tasks.</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => {
            const today = new Date();
            const dStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            setSelectedDate(dStr);
            setShowModal(true);
          }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Add Task
          </button>
          <div className="flex bg-white dark:bg-[#1e222d] rounded-lg border border-gray-200 dark:border-[#3c445a] p-1">
            <button onClick={prevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded-md text-gray-600 dark:text-gray-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded-md text-sm font-medium text-gray-700 dark:text-gray-300">
              Today
            </button>
            <button onClick={nextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-[#2c3242] rounded-md text-gray-600 dark:text-gray-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#2c3242] rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-200 dark:border-[#2c3242] bg-gray-50 dark:bg-[#252a38]">
          {DAYS_OF_WEEK.map(d => (
            <div key={d} className="p-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="flex-1 grid grid-cols-7 auto-rows-fr">
          {days.map((day, idx) => {
            const dayEvents = getEventsForDate(day);
            const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
            
            return (
              <div 
                key={idx} 
                className={`min-h-[100px] border-b border-r border-gray-100 dark:border-[#2c3242] p-2 transition-colors ${
                  day ? 'hover:bg-gray-50 dark:hover:bg-[#2a3040] cursor-pointer' : 'bg-gray-50/50 dark:bg-[#1a1d27]'
                } ${idx % 7 === 6 ? 'border-r-0' : ''}`}
                onClick={() => day && openModalForDate(day)}
              >
                {day && (
                  <div className="flex flex-col h-full">
                    <span className={`inline-flex items-center justify-center w-7 h-7 text-sm font-medium rounded-full mb-1 ${
                      isToday ? 'bg-indigo-600 text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {day}
                    </span>
                    <div className="flex flex-col gap-1 overflow-y-auto max-h-[80px] no-scrollbar">
                      {dayEvents.map(ev => (
                        <div key={ev.id} className={`text-[10px] font-medium px-1.5 py-0.5 rounded truncate ${ev.color || 'bg-blue-100 text-blue-700'}`}>
                          {ev.title}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1e222d] w-full max-w-md rounded-2xl shadow-xl border border-gray-200 dark:border-[#3c445a] p-6 animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add Event / Task</h2>
            <form onSubmit={handleCreateTask} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} required className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                <input type="text" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} required placeholder="e.g. Call new student" className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description (Optional)</label>
                <textarea rows={3} value={newTaskDesc} onChange={e => setNewTaskDesc(e.target.value)} placeholder="Details..." className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white outline-none" />
              </div>
              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-[#2c3242] dark:hover:bg-[#363d4f] text-gray-700 dark:text-gray-300 font-medium py-2.5 rounded-xl transition-all">
                  Cancel
                </button>
                <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition-all shadow-sm">
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
