import React, { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

const STATUS_STYLES = {
  Upcoming:
    "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800",
  Running:
    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800",
  "In Progress":
    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800",
  Completed:
    "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800",
  Cancelled:
    "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800",
};
const DEFAULT_STATUS_STYLE =
  "bg-white text-gray-700 border-gray-200 dark:bg-[#232734] dark:text-[#cfd3da] dark:border-[#3a3d45]";
const getStatusStyle = (status) =>
  STATUS_STYLES[status] || DEFAULT_STATUS_STYLE;

export function ScheduleTab() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await fetchApi("/get-schedules");
        const data = await res.json();
        if (data && data.status) {
          setSchedule(data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);
  const { groupedSchedules, standaloneLineIndex } = React.useMemo(() => {
    const groups = {};
    schedule.forEach((lesson) => {
      const key = lesson.time;
      if (!groups[key]) {
        groups[key] = {
          time: key,
          duration: lesson.duration,
          lessons: [],
        };
      }
      groups[key].lessons.push(lesson);
    });

    const sorted = Object.values(groups).sort((a, b) => {
      const parseTime = (t) => {
        const match = t.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (!match) return 0;
        let hours = parseInt(match[1], 10);
        if (match[3].toUpperCase() === "PM" && hours !== 12) hours += 12;
        if (match[3].toUpperCase() === "AM" && hours === 12) hours = 0;
        return hours * 60 + parseInt(match[2], 10);
      };
      return parseTime(a.time) - parseTime(b.time);
    });

    let hasRunning = sorted.some((g) =>
      g.lessons.some((l) => l.status === "Running"),
    );
    let lineIdx = -1;

    if (!hasRunning && sorted.length > 0) {
      // Find first upcoming
      lineIdx = sorted.findIndex((g) =>
        g.lessons.some((l) => l.status === "Upcoming"),
      );
      if (lineIdx === -1) {
        // All completed, place at very end
        lineIdx = sorted.length;
      }
    }

    return { groupedSchedules: sorted, standaloneLineIndex: lineIdx };
  }, [schedule]);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-between w-48 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] transition-colors">
            <button className="text-gray-400 hover:text-[#c1552c] transition-colors">
              &lt;
            </button>
            <span className="font-medium text-sm">Today, Oct 24</span>
            <button className="text-gray-400 hover:text-[#c1552c] transition-colors">
              &gt;
            </button>
          </div>

          <div className="hidden sm:flex bg-gray-100 dark:bg-[#171a22] p-1 rounded-lg border border-gray-200 dark:border-[#3a3d45]">
            <button className="px-4 py-1.5 rounded-md bg-white dark:bg-[#2c3242] text-gray-900 dark:text-[#f2e9de] shadow-sm text-sm font-medium transition-colors">
              Agenda
            </button>
            <button className="px-4 py-1.5 rounded-md text-gray-500 dark:text-[#8a8d96] hover:text-gray-900 dark:hover:text-[#f2e9de] text-sm font-medium transition-colors">
              Week
            </button>
            <button className="px-4 py-1.5 rounded-md text-gray-500 dark:text-[#8a8d96] hover:text-gray-900 dark:hover:text-[#f2e9de] text-sm font-medium transition-colors">
              Month
            </button>
          </div>
        </div>

        <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2">
          <span>+ Schedule Lesson</span>
        </button>
      </div>

      {/* Agenda Timeline */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300 p-6">
        <div className="relative border-l-2 border-gray-100 dark:border-[#2c3242] ml-4 space-y-8 pb-4">
          {loading ? (
            <div className="text-gray-500 py-8 text-center w-full">
              Loading schedules...
            </div>
          ) : groupedSchedules.length === 0 ? (
            <div className="text-gray-500 py-8 text-center w-full">
              No schedules found.
            </div>
          ) : (
            groupedSchedules.map((group, groupIdx) => {
              const isRunning = group.lessons.some(
                (l) => l.status === "Running",
              );
              const showStandaloneLineHere = standaloneLineIndex === groupIdx;

              return (
                <div key={groupIdx} className="relative pl-8 sm:pl-12 group">
                  {/* Standalone Current Time Line (Renders in the gap before this group) */}
                  {showStandaloneLineHere && (
                    <div className="absolute -top-6 -left-[9px] right-0 flex items-center z-10 pointer-events-none">
                      <div className="w-4 h-4 rounded-full bg-[#c1552c] shadow-md shadow-[#c1552c]/60 flex-shrink-0 animate-pulse border-2 border-white dark:border-[#1e222d]"></div>
                      <div className="h-0.5 bg-[#c1552c] w-full ml-1 opacity-60"></div>
                    </div>
                  )}

                  {/* Timeline Dot & Dynamic Line (For actively running batches) */}
                  {isRunning ? (
                    <div className="absolute top-1.5 -left-[9px] right-0 flex items-center z-10 pointer-events-none">
                      <div className="w-4 h-4 rounded-full bg-[#c1552c] shadow-md shadow-[#c1552c]/80 flex-shrink-0 animate-pulse border-2 border-white dark:border-[#1e222d]"></div>
                      <div className="h-0.5 bg-[#c1552c] w-full ml-1 opacity-70"></div>
                    </div>
                  ) : (
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-[#1e222d] bg-gray-300 dark:bg-[#5a5f6e] group-hover:bg-[#c1552c] transition-colors"></div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Time Block */}
                    <div className="w-full sm:w-40 shrink-0 pt-1">
                      <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-[#f2e9de] leading-snug break-words sm:whitespace-nowrap">
                        {group.time}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-[#8a8d96] mt-0.5">
                        {group.duration}
                      </div>
                    </div>

                    {/* Batch card: all students at this time share one div, laid out inline */}
                    <div className="flex-1 rounded-xl border border-gray-100 dark:border-[#2c3242] bg-gray-50/60 dark:bg-[#171a22]/40 p-3">
                      {group.lessons.length > 1 && (
                        <div className="flex items-center gap-1.5 mb-2 px-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#c1552c]"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span className="text-xs font-semibold text-gray-600 dark:text-[#cfd3da]">
                            Batch &middot; {group.lessons.length} students
                          </span>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2.5">
                        {group.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`w-[240px] h-[104px] shrink-0 p-2.5 flex flex-col justify-between rounded-lg border-l-4 border-t border-r border-b border-t-gray-100 border-r-gray-100 border-b-gray-100 dark:border-t-[#2c3242] dark:border-r-[#2c3242] dark:border-b-[#2c3242] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${lesson.color}`}
                          >
                            <div className="flex justify-between items-start gap-1">
                              <h3 className="font-medium text-sm text-gray-900 dark:text-[#f2e9de] truncate leading-tight">
                                {lesson.student}
                              </h3>
                              <span
                                className={`px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded-full border shrink-0 leading-none ${getStatusStyle(lesson.status)}`}
                              >
                                {lesson.status}
                              </span>
                            </div>

                            <div className="flex flex-col space-y-1">
                              <div className="flex items-center text-[11px] text-gray-600 dark:text-[#cfd3da] truncate">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-1 shrink-0 text-gray-400 dark:text-[#8a8d96]"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span className="truncate">
                                  {lesson.instructor}
                                </span>
                              </div>
                              <div className="flex items-center text-[11px] text-gray-600 dark:text-[#cfd3da] truncate">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-1 shrink-0 text-gray-400 dark:text-[#8a8d96]"
                                >
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="15"
                                    rx="2"
                                    ry="2"
                                  />
                                  <polyline points="17 2 12 7 7 2" />
                                </svg>
                                <span className="truncate">
                                  {lesson.vehicle}
                                </span>
                              </div>
                              <div className="flex items-center text-[11px] font-medium text-[#c1552c] truncate">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mr-1 shrink-0"
                                >
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                  <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span className="truncate">{lesson.type}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Render at the very end if all batches are completed */}
          {!loading &&
            groupedSchedules.length > 0 &&
            standaloneLineIndex === groupedSchedules.length && (
              <div className="relative pl-8 sm:pl-12 mt-6">
                <div className="absolute top-0 -left-[9px] right-0 flex items-center z-10 pointer-events-none">
                  <div className="w-4 h-4 rounded-full bg-[#c1552c] shadow-sm shadow-[#c1552c]/50 flex-shrink-0"></div>
                  <div className="h-0.5 bg-[#c1552c] w-full ml-1 opacity-50"></div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
