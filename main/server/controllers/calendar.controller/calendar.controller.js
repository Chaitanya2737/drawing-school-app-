import prisma from "../../config/database.js";

// Basic in-memory cache to prevent fetching the ICS file on every single page load
let cachedHolidays = [];
let lastFetchTime = 0;

async function getGoogleHolidays() {
  const CACHE_DURATION = 1000 * 60 * 60 * 24; // Cache for 24 hours
  
  if (cachedHolidays.length > 0 && (Date.now() - lastFetchTime) < CACHE_DURATION) {
    return cachedHolidays;
  }

  try {
    // Official Google Calendar Public feed for Indian Holidays
    const url = "https://calendar.google.com/calendar/ical/en.indian%23holiday%40group.v.calendar.google.com/public/basic.ics";
    const response = await fetch(url);
    const icsData = await response.text();

    const holidays = [];
    const lines = icsData.split(/\r?\n/);
    
    let currentEvent = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line === "BEGIN:VEVENT") {
        currentEvent = {};
      } else if (line === "END:VEVENT") {
        if (currentEvent && currentEvent.date && currentEvent.title) {
          
          // Inject matching icons for popular holidays
          let icon = "🎊"; // default holiday icon
          const t = currentEvent.title.toLowerCase();
          if (t.includes("diwali")) icon = "🪔";
          else if (t.includes("eid")) icon = "🌙";
          else if (t.includes("christmas")) icon = "🎄";
          else if (t.includes("republic") || t.includes("independence")) icon = "🇮🇳";
          else if (t.includes("holi")) icon = "🎨";
          else if (t.includes("ganesh") || t.includes("ganpati")) icon = "🐘";
          else if (t.includes("gandhi")) icon = "👓";
          else if (t.includes("guru") || t.includes("buddha") || t.includes("mahavir")) icon = "🕉️";
          
          holidays.push({
            id: `gcal_${holidays.length}`,
            title: `${icon} ${currentEvent.title}`,
            date: currentEvent.date,
            type: "HOLIDAY",
            color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          });
        }
        currentEvent = null;
      } else if (currentEvent) {
        if (line.startsWith("DTSTART;VALUE=DATE:")) {
          // Parse YYYYMMDD to YYYY-MM-DD
          const val = line.split(":")[1];
          if (val && val.length === 8) {
            currentEvent.date = `${val.substring(0,4)}-${val.substring(4,6)}-${val.substring(6,8)}`;
          }
        } else if (line.startsWith("SUMMARY:")) {
          currentEvent.title = line.substring(8).trim();
        }
      }
    }
    
    cachedHolidays = holidays;
    lastFetchTime = Date.now();
    return holidays;
  } catch (err) {
    console.error("Error fetching Google iCal:", err);
    return []; // Return empty on error so we don't crash the UI
  }
}

export const getEvents = async (req, res) => {
  try {
    const googleHolidays = await getGoogleHolidays();
    const dbEvents = await prisma.calendarEvent.findMany();
    
    // Combine dynamic Google Holidays with custom DB tasks
    const allEvents = [...googleHolidays, ...dbEvents];
    
    return res.status(200).json({ status: true, data: allEvents });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { title, date, description, type, color } = req.body;
    
    if (!title || !date) {
      return res.status(400).json({ status: false, message: "Title and date are required" });
    }

    const newEvent = await prisma.calendarEvent.create({
      data: {
        title,
        date,
        description: description || "",
        type: type || "TASK",
        color: color || "bg-blue-100 text-blue-700 border-blue-200 border"
      }
    });

    return res.status(201).json({ status: true, message: "Event created", data: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};
