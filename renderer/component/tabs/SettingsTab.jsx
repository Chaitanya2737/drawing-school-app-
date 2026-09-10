import React, { useState } from 'react';

export function SettingsTab() {
  const [activeSection, setActiveSection] = useState('school');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      {/* Settings Sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm p-4 transition-colors duration-300">
          <h2 className="text-sm font-bold text-gray-400 dark:text-[#5a5f6e] uppercase tracking-wider mb-4 px-3">Configuration</h2>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveSection('school')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'school' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-[#c1552c]' 
                  : 'text-gray-600 dark:text-[#a8967b] hover:bg-gray-100 dark:hover:bg-[#232734]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              School Profile
            </button>
            <button 
              onClick={() => setActiveSection('notifications')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'notifications' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-[#c1552c]' 
                  : 'text-gray-600 dark:text-[#a8967b] hover:bg-gray-100 dark:hover:bg-[#232734]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              Notifications
            </button>
            <button 
              onClick={() => setActiveSection('billing')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'billing' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-[#c1552c]' 
                  : 'text-gray-600 dark:text-[#a8967b] hover:bg-gray-100 dark:hover:bg-[#232734]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              Billing & Packages
            </button>
            <button 
              onClick={() => setActiveSection('security')}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === 'security' 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-[#c1552c]' 
                  : 'text-gray-600 dark:text-[#a8967b] hover:bg-gray-100 dark:hover:bg-[#232734]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Security
            </button>
          </nav>
        </div>
      </div>

      {/* Settings Content Area */}
      <div className="flex-1 bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        
        {activeSection === 'school' && (
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-[#f2e9de] mb-6">School Profile</h2>
            <div className="space-y-6 max-w-2xl">
              
              {/* Logo Upload Mock */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-100 dark:bg-[#2c3242] border border-gray-200 dark:border-[#3a3d45] rounded-xl flex flex-col items-center justify-center text-gray-400 dark:text-[#5a5f6e]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span className="text-xs">Logo</span>
                </div>
                <div>
                  <button className="px-4 py-2 border border-gray-300 dark:border-[#3a3d45] text-gray-700 dark:text-[#cfd3da] rounded-lg hover:bg-gray-50 dark:hover:bg-[#2c3242] transition-colors text-sm font-medium mb-2 block">
                    Upload New Logo
                  </button>
                  <p className="text-xs text-gray-500 dark:text-[#8a8d96]">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#cfd3da] mb-1.5">School Name</label>
                  <input type="text" defaultValue="Elite Driving School" className="w-full bg-transparent border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#cfd3da] mb-1.5">Support Email</label>
                  <input type="email" defaultValue="support@elitedriving.com" className="w-full bg-transparent border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c] transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#cfd3da] mb-1.5">Office Address</label>
                  <input type="text" defaultValue="1234 Main St, Suite 200, Cityville, CA 90210" className="w-full bg-transparent border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#cfd3da] mb-1.5">Contact Phone</label>
                  <input type="text" defaultValue="+1 (555) 123-4567" className="w-full bg-transparent border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#cfd3da] mb-1.5">Operating Currency</label>
                  <select className="w-full bg-transparent border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-[#f2e9de] focus:outline-none focus:ring-2 focus:ring-[#c1552c] transition-colors">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-[#2c3242] flex justify-end">
                <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-6 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications & WhatsApp Automations */}
        {activeSection === 'notifications' && (
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-[#f2e9de] flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp Automations
                </h2>
                <p className="text-sm text-gray-500 dark:text-[#8a8d96] mt-1">Configure automated messaging via WhatsApp Business API.</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600 dark:text-[#cfd3da]">API Status:</span>
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">Connected</span>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* Automation 1: Visitor Not Joined */}
              <div className="border border-gray-200 dark:border-[#3a3d45] rounded-xl p-5 bg-gray-50/50 dark:bg-[#171a22]/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f2e9de]">1. Visitor Follow-up (Not Joined)</h3>
                    <p className="text-xs text-gray-500 dark:text-[#8a8d96]">Trigger: Walk-in inquiry ends without enrollment.</p>
                  </div>
                  <div className="w-10 h-5 bg-[#c1552c] rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#3a3d45] rounded-lg p-3 relative">
                  <span className="absolute -top-2.5 left-3 bg-white dark:bg-[#1e222d] px-1 text-[10px] uppercase font-bold tracking-wider text-gray-400">Template Message</span>
                  <p className="text-sm text-gray-700 dark:text-[#cfd3da]">"Hi [Name], thank you for visiting Elite Driving School today! We'd love to help you get your license. If you have any further questions about our packages, please reply to this message!"</p>
                </div>
              </div>

              {/* Automation 2: Joined / Onboarding */}
              <div className="border border-gray-200 dark:border-[#3a3d45] rounded-xl p-5 bg-gray-50/50 dark:bg-[#171a22]/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f2e9de]">2. Welcome & Onboarding</h3>
                    <p className="text-xs text-gray-500 dark:text-[#8a8d96]">Trigger: Student successfully enrolls and pays 30% initial deposit.</p>
                  </div>
                  <div className="w-10 h-5 bg-[#c1552c] rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#3a3d45] rounded-lg p-3 relative">
                  <span className="absolute -top-2.5 left-3 bg-white dark:bg-[#1e222d] px-1 text-[10px] uppercase font-bold tracking-wider text-gray-400">Template Message</span>
                  <p className="text-sm text-gray-700 dark:text-[#cfd3da]">"Welcome to Elite Driving School, [Name]! 🎉 Your enrollment for [Package] is confirmed. We have received your initial payment. Your instructor will contact you shortly to schedule your first lesson."</p>
                </div>
              </div>

              {/* Automation 3: Payment Reminder */}
              <div className="border border-gray-200 dark:border-[#3a3d45] rounded-xl p-5 bg-gray-50/50 dark:bg-[#171a22]/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f2e9de]">3. Balance Payment Reminder</h3>
                    <p className="text-xs text-gray-500 dark:text-[#8a8d96]">Trigger: 13 days after initial 30% payment.</p>
                  </div>
                  <div className="w-10 h-5 bg-[#c1552c] rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#3a3d45] rounded-lg p-3 relative">
                  <span className="absolute -top-2.5 left-3 bg-white dark:bg-[#1e222d] px-1 text-[10px] uppercase font-bold tracking-wider text-gray-400">Template Message</span>
                  <p className="text-sm text-gray-700 dark:text-[#cfd3da]">"Hi [Name], friendly reminder that the remaining balance of [Amount] for your driving course is due tomorrow. Please use this secure link [Payment_Link] to complete your payment."</p>
                </div>
              </div>

              {/* Automation 4: Course Completed */}
              <div className="border border-gray-200 dark:border-[#3a3d45] rounded-xl p-5 bg-gray-50/50 dark:bg-[#171a22]/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f2e9de]">4. Course Completion & Review Request</h3>
                    <p className="text-xs text-gray-500 dark:text-[#8a8d96]">Trigger: Instructor marks student status as 'Completed'.</p>
                  </div>
                  <div className="w-10 h-5 bg-[#c1552c] rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e222d] border border-gray-200 dark:border-[#3a3d45] rounded-lg p-3 relative">
                  <span className="absolute -top-2.5 left-3 bg-white dark:bg-[#1e222d] px-1 text-[10px] uppercase font-bold tracking-wider text-gray-400">Template Message</span>
                  <p className="text-sm text-gray-700 dark:text-[#cfd3da]">"Congratulations on completing your course, [Name]! 🚘 It was a pleasure having you. If you enjoyed learning with [Instructor], please leave us a quick review here: [Review_Link]. Drive safe!"</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Fallback for other sections */}
        {activeSection !== 'school' && activeSection !== 'notifications' && (
          <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-gray-400 dark:text-[#5a5f6e]">
            <div className="text-5xl mb-4 opacity-50">⚙️</div>
            <h2 className="text-lg font-medium text-gray-600 dark:text-[#a8967b] capitalize">{activeSection} Preferences</h2>
            <p className="mt-1 text-sm">Configure your {activeSection} settings here.</p>
          </div>
        )}

      </div>
    </div>
  );
}
