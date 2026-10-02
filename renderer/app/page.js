"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "../../component/theme/ThemeToggle";
import { CarLoader, CarLoaderCompact } from "../../component/loader/CarLoader";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/ui/table";
import { OverviewTab } from "../component/tabs/OverviewTab";
import { StudentsTab } from "../component/tabs/StudentsTab";
import { InstructorsTab } from "../component/tabs/InstructorsTab";
import { VehiclesTab } from "../component/tabs/VehiclesTab";
import { ScheduleTab } from "../component/tabs/ScheduleTab";
import { SettingsTab } from "../component/tabs/SettingsTab";
import { MessagesTab } from "../component/tabs/MessagesTab";
import { WhatsAppTab } from "../component/tabs/WhatsAppTab";
import { CalendarTab } from "../component/tabs/CalendarTab";
import Index from "../component/setup";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const [serverData, setServerData] = useState(null);
  const [serverIp, setServerIp] = useState(null);
  const [isWorking, setIsWorking] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Check Authentication
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      router.push("/login");
      return;
    }
    setIsAuthenticated(true);
    
    // Check if demo is expired to lock screen
    const isDemo = localStorage.getItem("isDemoMode");
    if (isDemo) {
      async function checkDemoStatus() {
        try {
          const res = await fetch("http://localhost:49215/api/demo-status");
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.isExpired) {
              setIsLockedOut(true);
            }
          }
        } catch (error) {
          console.error("Failed to check demo status", error);
        } finally {
          setIsChecking(false);
        }
      }
      checkDemoStatus();
    } else {
      setIsChecking(false);
    }

    // 1. Listen for the 'server-status' message from Electron
    const unsubscribe = window.ipc?.on("server-Internat-status", (data) => {
      console.log("Received from Electron:", data);
      setServerData(data.status);
    });

    // Listen for the Local IP address so we can show it to the Owner
    const unsubscribeIp = window.ipc?.on("server-local-ip", (data) => {
      setServerIp(`${data.ip}:${data.port}`);
    });

    // 2. Ask the Main Process for the current status now that we are listening
    window.ipc?.send("request-server-status");
    window.ipc?.send("request-local-ip");

    // 3. Listen for mid-session internet drops (if router crashes while app is running)
    const handleOffline = () => {
      console.log("Internet dropped mid-session!");
      setServerData({ status: false });
    };
    const handleOnline = () => {
      console.log("Internet reconnected mid-session!");
      setServerData({ status: true });
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // 4. Clean up the listeners when the component unmounts
    return () => {
      if (unsubscribe) unsubscribe();
      if (unsubscribeIp) unsubscribeIp();
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [router]);

  useEffect(() => {
    const getRequest = async () => {
      try {
        // Now we explicitly hit our Express server running in the background!
        const response = await fetch("http://localhost:49215/api");
        const data = await response.json();
        console.log("API Response:", data);
        setIsWorking(data.message);
      } catch (error) {
        console.error("API Error:", error);
        setIsWorking("API FAILED");
      }
    };
    getRequest();
  }, []);
  console.log("Received from Electron:", serverData);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isDemoMode");
    localStorage.removeItem("demoStartDate");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  if (isChecking || !isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <CarLoader size={100} />
      </div>
    );
  }

  if (isLockedOut) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-[#12141a] font-sans">
        <div className="max-w-md w-full mx-4 p-8 bg-white dark:bg-[#1e222d] shadow-2xl rounded-2xl border border-gray-100 dark:border-[#2c3242] text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-2">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Free Trial Concluded</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Your 15-day evaluation period has ended. To regain access to Driving School Pro and continue managing your business, please activate your license.
          </p>
          <div className="pt-4 space-y-3">
            <button className="w-full py-3 px-4 bg-[#c1552c] hover:bg-[#a84a26] text-white rounded-lg font-medium transition-colors shadow-lg shadow-[#c1552c]/20">
              Proceed to Payment
            </button>
            <button onClick={handleLogout} className="w-full py-3 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#12141a] font-sans transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-[#1e222d] border-r border-gray-200 dark:border-[#2c3242] flex flex-col transition-colors duration-300">
        <div className="p-6 flex flex-col items-center border-b border-gray-200 dark:border-[#2c3242]">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mb-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none"
            title="Click to toggle theme!"
            type="button"
          >
            <CarLoaderCompact size={100} />
          </button>
          <span className="font-bold text-xl text-gray-900 dark:text-[#f2e9de] tracking-tight">
            Driving School
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: "overview", label: "Dashboard", icon: "🏠" },
            { id: "students", label: "Students", icon: "👥" },
            { id: "instructors", label: "Instructors", icon: "👨‍🏫" },
            { id: "vehicles", label: "Vehicles", icon: "🚗" },
            { id: "schedule", label: "Schedule", icon: "📅" },
            { id: "calendar", label: "Calendar", icon: "📆" },
            { id: "messages", label: "Messages", icon: "💬" },
            { id: "whatsapp", label: "WhatsApp Setup", icon: "🔗" },
            { id: "settings", label: "Settings", icon: "⚙️" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeTab === item.id
                  ? "bg-[#c1552c] text-white shadow-md shadow-[#c1552c]/20"
                  : "text-gray-600 dark:text-[#a8967b] hover:bg-gray-100 dark:hover:bg-[#232734]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Connection Status in Sidebar */}
        <div className="p-4 border-t border-gray-200 dark:border-[#2c3242] bg-gray-50 dark:bg-[#171a22]">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-[#8a8d96]">
              Server Status
            </span>
            <div
              className={`flex items-center space-x-1.5 ${serverData ? "text-green-500" : "text-red-500"}`}
            >
              <span
                className={`w-2 h-2 rounded-full ${serverData ? "bg-green-500" : "bg-red-500"}`}
              ></span>
              <span className="font-medium">
                {serverData ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          {serverIp && (
            <div className="mt-2 text-xs text-gray-400 dark:text-[#5a5f6e] break-all">
              IP: {serverIp}
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-[#1e222d]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#2c3242] sticky top-0 z-10 transition-colors duration-300">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de] capitalize">
              {activeTab}
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            {/* Status indicator for API */}
            <div className="hidden md:flex items-center text-sm font-medium text-gray-500 dark:text-[#a8967b]">
              API:{" "}
              {isWorking ? (
                <span className="text-[#c1552c] ml-1">{isWorking}</span>
              ) : (
                "Checking..."
              )}
            </div>
            
            <ThemeToggle />

            {/* User Profile Mock & Logout */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c1552c] to-[#e0574a] shadow-sm border-2 border-white dark:border-[#1e222d]"></div>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-gray-600 dark:text-[#a8967b] hover:text-[#c1552c] dark:hover:text-[#e0574a] transition-colors"
                title="Logout"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-auto p-8">
          {/* Dashboard Overview Content */}
          {activeTab === "overview" && <OverviewTab />}

          {/* Students Content */}
          {activeTab === "students" && <StudentsTab />}

          {/* Instructors Content */}
          {activeTab === "instructors" && <InstructorsTab />}

          {/* Vehicles Content */}
          {activeTab === "vehicles" && <VehiclesTab />}

          {/* Schedule Content */}
          {activeTab === "schedule" && <ScheduleTab />}
          {activeTab === "calendar" && <CalendarTab />}

          {/* Messages Content */}
          {activeTab === "messages" && <MessagesTab />}

          {/* WhatsApp Content */}
          {activeTab === "whatsapp" && <WhatsAppTab />}

          {/* Settings Content */}
          {activeTab === "settings" && <SettingsTab />}

          {/* Placeholder for other tabs */}
          {activeTab !== "overview" &&
            activeTab !== "students" &&
            activeTab !== "instructors" &&
            activeTab !== "vehicles" &&
            activeTab !== "schedule" &&
            activeTab !== "calendar" &&
            activeTab !== "messages" &&
            activeTab !== "whatsapp" &&
            activeTab !== "settings" && (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 dark:text-[#5a5f6e]">
                <div className="text-6xl mb-4 opacity-50">🚧</div>
                <h2 className="text-xl font-medium text-gray-600 dark:text-[#a8967b]">
                  The {activeTab} module is under construction.
                </h2>
                <p className="mt-2 text-sm text-center max-w-md">
                  This area will be built out soon.
                </p>
              </div>
            )}
        </div>
      </main>

      <Index></Index>
    </div>
  );
}