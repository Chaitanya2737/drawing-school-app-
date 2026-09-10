import React, { useMemo, useState } from 'react';
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

// Category visual language — one accent per spend type, reused across the
// summary cards and the table badges so the two stay legible together.
const CATEGORY_META = {
  Fuel: { color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50" },
  Maintenance: { color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50" },
  Insurance: { color: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/50" },
  Repairs: { color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50" },
  Fines: { color: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800/50" },
  Cleaning: { color: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-800/50" },
  Other: { color: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700/50" },
};

const STATUS_META = {
  Paid: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50",
  Pending: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800/50",
};

const EXPENSES = [
  { id: 1, date: "2026-09-05", vehicle: "Car #4 (Honda Civic)", category: "Fuel", description: "Full tank — Shell station", amount: 42.50, status: "Paid", recordedBy: "Robert Fox" },
  { id: 2, date: "2026-09-04", vehicle: "Car #1 (Tesla Model 3)", category: "Cleaning", description: "Interior detail + wash", amount: 35.00, status: "Paid", recordedBy: "Brooklyn Simmons" },
  { id: 3, date: "2026-09-03", vehicle: "Car #7 (Ford Focus)", category: "Repairs", description: "Brake pad replacement", amount: 210.00, status: "Pending", recordedBy: "Admin" },
  { id: 4, date: "2026-09-02", vehicle: "Car #2 (Toyota Corolla)", category: "Fines", description: "Parking violation — Lot B", amount: 60.00, status: "Pending", recordedBy: "Esther Howard" },
  { id: 5, date: "2026-08-30", vehicle: "Car #5 (Hyundai Elantra)", category: "Maintenance", description: "Oil change + filter", amount: 65.00, status: "Paid", recordedBy: "Leslie Alexander" },
  { id: 6, date: "2026-08-28", vehicle: "Car #3 (Nissan Sentra)", category: "Insurance", description: "Monthly premium — Sept", amount: 128.00, status: "Paid", recordedBy: "Admin" },
  { id: 7, date: "2026-08-26", vehicle: "Car #4 (Honda Civic)", category: "Fuel", description: "Half tank — Shell station", amount: 24.00, status: "Paid", recordedBy: "Robert Fox" },
  { id: 8, date: "2026-08-22", vehicle: "Car #1 (Tesla Model 3)", category: "Repairs", description: "Tire rotation", amount: 40.00, status: "Paid", recordedBy: "Brooklyn Simmons" },
];

const VEHICLES = ["All Vehicles", ...Array.from(new Set(EXPENSES.map(e => e.vehicle)))];
const CATEGORIES = ["All Categories", ...Object.keys(CATEGORY_META)];

function formatCurrency(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function ExpensesTab() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [vehicle, setVehicle] = useState("All Vehicles");

  const filtered = useMemo(() => {
    return EXPENSES.filter((e) => {
      const matchesSearch =
        e.description.toLowerCase().includes(search.toLowerCase()) ||
        e.vehicle.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All Categories" || e.category === category;
      const matchesVehicle = vehicle === "All Vehicles" || e.vehicle === vehicle;
      return matchesSearch && matchesCategory && matchesVehicle;
    });
  }, [search, category, vehicle]);

  const totalThisMonth = EXPENSES.reduce((sum, e) => sum + e.amount, 0);
  const totalFuel = EXPENSES.filter(e => e.category === "Fuel").reduce((s, e) => s + e.amount, 0);
  const totalMaintenance = EXPENSES.filter(e => ["Maintenance", "Repairs"].includes(e.category)).reduce((s, e) => s + e.amount, 0);
  const totalFines = EXPENSES.filter(e => e.category === "Fines").reduce((s, e) => s + e.amount, 0);

  const summaryCards = [
    { label: "Total Expenses", value: totalThisMonth, note: "This month" },
    { label: "Fuel", value: totalFuel, note: `${EXPENSES.filter(e => e.category === "Fuel").length} entries` },
    { label: "Maintenance & Repairs", value: totalMaintenance, note: `${EXPENSES.filter(e => ["Maintenance", "Repairs"].includes(e.category)).length} entries` },
    { label: "Fines", value: totalFines, note: `${EXPENSES.filter(e => e.category === "Fines").length} entries` },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300"
          >
            <div className="text-sm text-gray-500 dark:text-[#8a8d96]">{card.label}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-[#f2e9de] mt-1">{formatCurrency(card.value)}</div>
            <div className="text-xs text-gray-400 dark:text-[#5a5f6e] mt-1">{card.note}</div>
          </div>
        ))}
      </div>

      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e222d] p-4 rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm transition-colors duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search expenses..."
            className="w-full sm:w-64 bg-gray-50 dark:bg-[#171a22] border border-gray-300 dark:border-[#3a3d45] rounded-lg px-4 py-2 text-gray-900 dark:text-[#f2e9de] placeholder-gray-400 dark:placeholder-[#5a5f6e] focus:outline-none focus:border-[#c1552c] focus:ring-1 focus:ring-[#c1552c] transition-colors"
          />
          <div className="w-full sm:w-44">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-gray-50 dark:bg-[#171a22]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-52">
            <Select value={vehicle} onValueChange={setVehicle}>
              <SelectTrigger className="bg-gray-50 dark:bg-[#171a22]">
                <SelectValue placeholder="Vehicle" />
              </SelectTrigger>
              <SelectContent>
                {VEHICLES.map((v) => (
                  <SelectItem key={v} value={v}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <button className="bg-[#c1552c] hover:bg-[#a64724] text-white font-medium rounded-lg px-5 py-2 transition-colors duration-200 shadow-md shadow-[#c1552c]/20 flex items-center space-x-2 whitespace-nowrap">
          <span>+ Add Expense</span>
        </button>
      </div>

      {/* Expenses Table */}
      <div className="bg-white dark:bg-[#1e222d] rounded-xl border border-gray-200 dark:border-[#2c3242] shadow-sm overflow-hidden transition-colors duration-300">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50 dark:bg-[#171a22]/50 hover:bg-gray-50/50 dark:hover:bg-[#171a22]/50">
              <TableHead className="cursor-pointer hover:text-gray-900 dark:hover:text-[#cfd3da]">
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-10 text-sm text-gray-500 dark:text-[#8a8d96]">
                  No expenses match your filters.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((expense) => (
                <TableRow key={expense.id} className="group cursor-pointer">
                  <TableCell>
                    <div className="text-sm font-medium text-gray-900 dark:text-[#f2e9de]">{formatDate(expense.date)}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium text-gray-700 dark:text-[#cfd3da] bg-gray-100 dark:bg-[#232734] px-2.5 py-1 rounded-md inline-block">
                      {expense.vehicle}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border w-fit inline-block ${CATEGORY_META[expense.category].color}`}>
                      {expense.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-700 dark:text-[#cfd3da]">{expense.description}</div>
                    <div className="text-xs text-gray-400 dark:text-[#5a5f6e]">Recorded by {expense.recordedBy}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-semibold text-gray-900 dark:text-[#f2e9de]">{formatCurrency(expense.amount)}</div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border w-fit inline-block ${STATUS_META[expense.status]}`}>
                      {expense.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <button className="p-2 text-gray-400 hover:text-[#c1552c] dark:text-[#8a8d96] dark:hover:text-[#c1552c] rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all focus:outline-none">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13a1 1 0 100-2 1 1 0 000 2zm0-5a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination Footer */}
        <div className="bg-gray-50 dark:bg-[#171a22] px-6 py-4 border-t border-gray-200 dark:border-[#2c3242] flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-[#8a8d96]">
            Showing <span className="text-gray-900 dark:text-[#f2e9de]">{filtered.length}</span> of{" "}
            <span className="text-gray-900 dark:text-[#f2e9de]">{EXPENSES.length}</span> expenses
          </span>
          <div className="flex space-x-2">
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-4 py-1.5 border border-gray-300 dark:border-[#3a3d45] rounded-lg text-sm font-medium text-gray-600 dark:text-[#cfd3da] hover:bg-gray-100 dark:hover:bg-[#2c3242] transition-colors shadow-sm" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}