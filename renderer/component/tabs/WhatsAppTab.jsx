"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, ExternalLink, ShieldCheck, RefreshCw } from "lucide-react";
import { CarLoader } from "../../../component/loader/CarLoader";
import { fetchApi } from "../../lib/api";

export function WhatsAppTab() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [secureUrl, setSecureUrl] = useState("");
  
  // State for check button
  const [checkLoading, setCheckLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [hasStartedSetup, setHasStartedSetup] = useState(false);
  
  // State for template manager
  const [showTemplates, setShowTemplates] = useState(false);
  
  // Safe mode settings
  const [safeMode, setSafeMode] = useState(false);
  const [safeModeLoading, setSafeModeLoading] = useState(false);
  
  const fetchSettings = async () => {
    try {
      const res = await fetchApi("/whatsapp/settings");
      const data = await res.json();
      if (data.status) {
        setSafeMode(data.data.safeMode);
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  const toggleSafeMode = async () => {
    setSafeModeLoading(true);
    try {
      const newValue = !safeMode;
      const res = await fetchApi("/whatsapp/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ safeMode: newValue })
      });
      if (res.ok) {
        setSafeMode(newValue);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSafeModeLoading(false);
    }
  };

  useEffect(() => {
    // 1. Security Check: Retrieve user object from localStorage
    let userObj = null;
    try {
      const userStr = localStorage.getItem("user");
  
      if (userStr) {
        userObj = JSON.parse(userStr);
      }
      
      const started = localStorage.getItem("whatsappSetupStarted");
      if (started === "true") {
        setHasStartedSetup(true);
        fetchSettings();
      }
    } catch (e) {
      console.error("Failed to parse user from local storage");
    }
    
    // 2. Check if user object and accesstoken exist -> Redirect to logout if missing
    if (!userObj || !userObj.accessToken) {
      console.warn("No access token found in user object. Logging out.");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("isDemoMode");
      localStorage.removeItem("demoStartDate");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
      return;
    }

    // 3. Construct the backend URL with the requested parameters from the user object
    const backendUrl = new URL("https://backend-for-drawing-school.vercel.app/whatsapp/connect");
    
    if (userObj.id) backendUrl.searchParams.append("id", userObj.id);
    if (userObj.userId) backendUrl.searchParams.append("userId", userObj.userId);
    if (userObj.accessToken) backendUrl.searchParams.append("accessToken", userObj.accessToken);
    if (userObj.businessName) backendUrl.searchParams.append("businessName", userObj.businessName);

    setSecureUrl(backendUrl.toString());
    setLoading(false);
  }, [router]);

  const handleLaunch = () => {
    localStorage.setItem("whatsappSetupStarted", "true");
    setHasStartedSetup(true);
    
    if (window.ipc) {
      window.ipc.send("open-external-url", secureUrl);
    } else {
      window.open(secureUrl, "_blank");
    }
  };

  const handleCheckData = async () => {
    setCheckLoading(true);
    setStatusMessage(null);
    try {
      // Get user object to pass authentication details
      const userStr = localStorage.getItem("user");
      const userObj = userStr ? JSON.parse(userStr) : {};
      


      // We route the request through our local Express server (which runs in Node.js) 
      // to bypass the browser's CORS restrictions and save the token securely in one step.
      const response = await fetchApi("/whatsapp/verify-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userObj.id,
          userId: userObj.userId,
          accessToken: userObj.accessToken
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatusMessage({ 
          type: 'success', 
          text: data.message || "Data is successfully set in the server." 
        });
      } else {
        setStatusMessage({ 
          type: 'error', 
          text: data.message || "Data is not set yet. Please complete the setup." 
        });
      }
    } catch (error) {
      console.error("Error checking data:", error);
      setStatusMessage({ 
        type: 'error', 
        text: "Failed to verify setup status. Please try again." 
      });
    } finally {
      setCheckLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <CarLoader size={80} />
      </div>
    );
  }
  
  if (showTemplates) {
    return (
      <div className="flex h-full items-center justify-center">
        <TemplateManager onBack={() => setShowTemplates(false)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full max-h-[80vh]">
      <div className="w-full max-w-lg bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#2c3242] rounded-2xl p-6 shadow-sm text-center animate-in fade-in zoom-in duration-500">
        
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-8 h-8" />
        </div>
        
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Secure WhatsApp Setup
        </h2>
        
        <p className="text-sm text-gray-600 dark:text-[#a8967b] mb-6 leading-relaxed">
          To protect your school's data, WhatsApp configuration is securely processed on our dedicated backend servers. Click below to securely launch the integration portal.
        </p>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={handleLaunch}
            className="inline-flex items-center justify-center w-full bg-[#c1552c] hover:bg-[#a84a26] text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-lg shadow-[#c1552c]/20 hover:shadow-[#c1552c]/40 active:scale-[0.98]"
          >
            <span className="text-sm">Launch Security Portal</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>

          {hasStartedSetup && (
            <>
              <button
                onClick={handleCheckData}
                disabled={checkLoading}
                className="inline-flex items-center justify-center w-full bg-white dark:bg-[#2c3242] hover:bg-gray-50 dark:hover:bg-[#363d4f] text-gray-900 dark:text-white border border-gray-200 dark:border-[#3c445a] font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="text-sm">{checkLoading ? "Checking Status..." : "Verify Setup Status"}</span>
                {!checkLoading && <RefreshCw className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" />}
              </button>

              {statusMessage && (
                <div className={`mt-2 p-2.5 text-xs font-medium rounded-lg text-left ${
                  statusMessage.type === 'success' 
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50'
                }`}>
                  <div className="flex items-center">
                    {statusMessage.type === 'success' ? (
                      <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                    ) : (
                      <RefreshCw className="w-3.5 h-3.5 mr-2" />
                    )}
                    {statusMessage.text}
                  </div>
                </div>
              )}
              
              <div className="pt-2 border-t border-gray-100 dark:border-[#3c445a] mt-2">
                <button
                  onClick={() => setShowTemplates(true)}
                  className="inline-flex items-center justify-center w-full bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.98]"
                >
                  <span className="text-sm">Manage Templates</span>
                </button>
              </div>
              
              <div className="pt-3 mt-1 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-500" />
                    Safe Mode
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">Limits sending to 950 msgs/mo to stay in free tier.</p>
                </div>
                <button
                  onClick={toggleSafeMode}
                  disabled={safeModeLoading}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    safeMode ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      safeMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-[#2c3242] flex items-center justify-center text-xs font-medium text-emerald-600 dark:text-emerald-500">
          <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
          Session secured via token authentication
        </div>
      </div>
    </div>
  );
}

function TemplateManager({ onBack }) {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("UTILITY");
  const [language, setLanguage] = useState("en");
  const [bodyText, setBodyText] = useState("");
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const res = await fetchApi("/whatsapp/templates");
      const data = await res.json();
      if (data.status) {
        setTemplates(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setCreating(true);
    setMessage(null);
    try {
      const res = await fetchApi("/whatsapp/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, category, language, bodyText })
      });
      const data = await res.json();
      if (data.status) {
        setMessage({ type: 'success', text: "Template submitted for approval!" });
        setName("");
        setBodyText("");
        fetchTemplates();
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (err) {
      setMessage({ type: 'error', text: "Failed to create template" });
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl h-full flex gap-6 animate-in fade-in zoom-in duration-500">
      {/* Create Template Form */}
      <div className="flex-1 bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#2c3242] rounded-2xl p-6 shadow-sm overflow-y-auto">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mr-3">
            ← Back
          </button>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Template</h2>
        </div>

        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Template Name (lowercase, no spaces)</label>
            <input required type="text" value={name} onChange={e => setName(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '_'))} className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#c1552c] focus:border-transparent outline-none" placeholder="e.g. student_welcome" />
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white outline-none">
                <option value="UTILITY">Utility</option>
                <option value="MARKETING">Marketing</option>
                <option value="AUTHENTICATION">Authentication</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
              <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white outline-none">
                <option value="en">English (en)</option>
                <option value="en_US">English (US) (en_US)</option>
                <option value="en_GB">English (UK) (en_GB)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message Body</label>
            <p className="text-xs text-gray-500 mb-2">Use {"{{1}}"}, {"{{2}}"} etc. for dynamic variables.</p>
            <textarea required rows={5} value={bodyText} onChange={e => setBodyText(e.target.value)} className="w-full p-2.5 bg-gray-50 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3c445a] rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#c1552c] outline-none" placeholder="Hello {{1}}, your class starts on {{2}}." />
          </div>

          <button disabled={creating} type="submit" className="mt-2 w-full bg-[#c1552c] hover:bg-[#a84a26] text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-md disabled:opacity-70">
            {creating ? "Submitting..." : "Submit to Meta for Approval"}
          </button>

          {message && (
            <div className={`p-3 text-sm rounded-lg ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {message.text}
            </div>
          )}
        </form>
      </div>

      {/* Templates List */}
      <div className="flex-1 bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#2c3242] rounded-2xl p-6 shadow-sm overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Templates</h2>
          <button onClick={fetchTemplates} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {templates.length === 0 && !loading && (
            <p className="text-sm text-gray-500 text-center py-10">No templates found.</p>
          )}
          {templates.map(t => (
            <div key={t.id || t.name} className="p-4 border border-gray-100 dark:border-[#2c3242] bg-gray-50/50 dark:bg-[#252a38] rounded-xl flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t.name}</h3>
                  <span className="text-xs text-gray-500">{t.language} • {t.category}</span>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  t.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 
                  t.status === 'REJECTED' ? 'bg-red-100 text-red-700' : 
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
