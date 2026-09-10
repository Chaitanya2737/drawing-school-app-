"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "../../component/theme/ThemeToggle";
import { CarLoader, CarLoaderCompact } from "../../component/loader/CarLoader";
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
import Index from "../component/setup";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  const [serverData, setServerData] = useState(null);
  const [serverIp, setServerIp] = useState(null);
  const [isWorking, setIsWorking] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...");
    setIsAuthenticated(true);
  };

  useEffect(() => {
    // 1. Listen for the 'server-status' message from Electron
    const unsubscribe = window.ipc.on("server-Internat-status", (data) => {
      console.log("Received from Electron:", data);
      setServerData(data.status);
    });

    // Listen for the Local IP address so we can show it to the Owner
    const unsubscribeIp = window.ipc.on("server-local-ip", (data) => {
      const ip = `${data.ip}:${data.port}`;
      setServerIp(ip);
      if (typeof window !== "undefined") {
        window.serverIpAddress = ip;
        localStorage.setItem("serverIpAddress", ip);
      }
    });

    // 2. Ask the Main Process for the current status now that we are listening
    window.ipc.send("request-server-status");
    window.ipc.send("request-local-ip");

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
      unsubscribe();
      if (unsubscribeIp) unsubscribeIp();
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  useEffect(() => {
    const getRequest = async () => {
      try {
        // We use our fetchApi wrapper to fallback to IP if localhost fails
        const { fetchApi } = await import("../lib/api");
        const response = await fetchApi("/api");
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

  const [activeTab, setActiveTab] = useState("overview");



  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-[#12141a]">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-[#1e222d] rounded-xl shadow-lg border border-gray-200 dark:border-[#2c3242]">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-[#f2e9de]">
              {isLogin ? "Sign in to your account" : "Create an account"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-[#2c3242] placeholder-gray-500 text-gray-900 dark:text-[#f2e9de] bg-white dark:bg-[#171a22] rounded-t-md focus:outline-none focus:ring-[#c1552c] focus:border-[#c1552c] sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-[#2c3242] placeholder-gray-500 text-gray-900 dark:text-[#f2e9de] bg-white dark:bg-[#171a22] rounded-b-md focus:outline-none focus:ring-[#c1552c] focus:border-[#c1552c] sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#c1552c] hover:bg-[#a84a26] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c1552c]"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={toggleMode}
              className="text-sm text-[#c1552c] hover:text-[#a84a26]"
            >
              {isLogin
                ? "Need an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-[#2c3242]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-[#1e222d] text-gray-500">
                  Fast track (Demo)
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setIsAuthenticated(true)}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-[#2c3242] rounded-md shadow-sm bg-white dark:bg-[#171a22] text-sm font-medium text-gray-700 dark:text-[#a8967b] hover:bg-gray-50 dark:hover:bg-[#232734]"
              >
                Skip Login
              </button>
            </div>
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
            { id: "messages", label: "Messages", icon: "💬" },
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
                onClick={() => setIsAuthenticated(false)}
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

          {/* Messages Content */}
          {activeTab === "messages" && <MessagesTab />}

          {/* Settings Content */}
          {activeTab === "settings" && <SettingsTab />}

          {/* Placeholder for other tabs */}
          {activeTab !== "overview" &&
            activeTab !== "students" &&
            activeTab !== "instructors" &&
            activeTab !== "vehicles" &&
            activeTab !== "schedule" &&
            activeTab !== "messages" &&
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
