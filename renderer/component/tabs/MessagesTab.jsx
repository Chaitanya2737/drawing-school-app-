import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../component/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/select";

export function MessagesTab() {
  const messages = [
    { id: "MSG-001", student: "Alice Johnson", phone: "+1 (555) 123-4567", type: "Welcome & Onboarding", status: "Sent", time: "Today, 10:45 AM" },
    { id: "MSG-002", student: "Mike Smith", phone: "+1 (555) 987-6543", type: "Balance Payment Reminder", status: "Pending", time: "Scheduled: Tomorrow, 9:00 AM" },
    { id: "MSG-003", student: "Emma Davis", phone: "+1 (555) 456-7890", type: "Visitor Follow-up", status: "Sent", time: "Yesterday, 04:30 PM" },
    { id: "MSG-004", student: "James Wilson", phone: "+1 (555) 234-5678", type: "Course Completion", status: "Failed", time: "Today, 11:15 AM" },
    { id: "MSG-005", student: "Sarah Connor", phone: "+1 (555) 345-6789", type: "Balance Payment Reminder", status: "Sent", time: "Today, 09:00 AM" },
    { id: "MSG-006", student: "John Doe", phone: "+1 (555) 876-5432", type: "Welcome & Onboarding", status: "Pending", time: "Processing..." },
  ];

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input 
            type="text" 
            placeholder="Search by student or phone..." 
            className="w-full sm:w-64 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] placeholder-gray-400 dark:placeholder-[#5a5f6e] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c] transition-colors"
          />
          <div className="w-40 hidden sm:block">
            <Select defaultValue="All Status">
              <SelectTrigger className="bg-gray-50 dark:bg-[#171a22]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Status">All Status</SelectItem>
                <SelectItem value="Sent">Sent</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="bg-white dark:bg-[#2c3242] border border-gray-200 dark:border-[#3a3d45] text-gray-700 dark:text-[#cfd3da] hover:bg-gray-50 dark:hover:bg-[#3a3d45] font-medium rounded-lg px-4 py-2 transition-colors duration-200 flex items-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Logs
          </button>
          <button className="bg-[#128C7E] hover:bg-[#075E54] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span>Manual Message</span>
          </button>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
              <TableHead className="w-24">Message ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Automation Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((msg, i) => (
              <TableRow key={i} className="group cursor-pointer">
                <TableCell>
                  <span className="text-xs font-mono text-gray-500 dark:text-[#8a8d96]">{msg.id}</span>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-[#f2e9de]">{msg.student}</div>
                    <div className="text-xs text-gray-500 dark:text-[#8a8d96]">{msg.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-medium text-gray-700 dark:text-[#cfd3da]">
                    {msg.type}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border flex items-center w-fit ${
                    msg.status === 'Sent' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50' : 
                    msg.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-500 dark:border-yellow-800/50' : 
                    'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50'
                  }`}>
                    {msg.status === 'Sent' && <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    {msg.status === 'Pending' && <svg className="w-3 h-3 mr-1 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>}
                    {msg.status === 'Failed' && <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>}
                    {msg.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-500 dark:text-[#8a8d96]">{msg.time}</div>
                </TableCell>
                <TableCell className="text-right">
                  <button className="text-sm font-medium text-[#c1552c] hover:underline">
                    View
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
