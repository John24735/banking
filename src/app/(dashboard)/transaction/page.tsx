"use client";
import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Search, Filter, Edit, Trash2 } from "lucide-react";
import ActionButtons from "@/components/ActionButtons";

const trendData = [
    { month: "Jan", deposit: 2000, withdrawal: 500, invested: 1000, borrowed: 0 },
    { month: "Feb", deposit: 2500, withdrawal: 800, invested: 1200, borrowed: 0 },
    { month: "Mar", deposit: 1800, withdrawal: 600, invested: 1500, borrowed: 500 },
    { month: "Apr", deposit: 3000, withdrawal: 1000, invested: 2000, borrowed: 0 },
    { month: "May", deposit: 2200, withdrawal: 700, invested: 1800, borrowed: 0 },
    { month: "Jun", deposit: 2700, withdrawal: 900, invested: 2100, borrowed: 1000 },
    { month: "Jul", deposit: 3200, withdrawal: 1200, invested: 2500, borrowed: 0 },
    { month: "Aug", deposit: 3500, withdrawal: 1100, invested: 2700, borrowed: 0 },
    { month: "Sep", deposit: 4000, withdrawal: 1300, invested: 3000, borrowed: 0 },
    { month: "Oct", deposit: 4200, withdrawal: 1400, invested: 3200, borrowed: 0 },
    { month: "Nov", deposit: 4500, withdrawal: 1500, invested: 3500, borrowed: 0 },
    { month: "Dec", deposit: 5000, withdrawal: 1600, invested: 4000, borrowed: 0 },
];

const trendKeys = {
    deposit: { label: "Deposits", color: "#16a34a" },
    withdrawal: { label: "Withdrawals", color: "#ef4444" },
    invested: { label: "Invested", color: "#3B82F6" },
    borrowed: { label: "Borrowed", color: "#f59e0b" },
};

const transactions = [
    { label: "Deposit from Employer", amount: "+$2,000.00", date: "2024-06-01", type: "deposit" },
    { label: "ATM Withdrawal", amount: "-$300.00", date: "2024-05-29", type: "withdrawal" },
    { label: "Investment in ETF", amount: "-$1,000.00", date: "2024-05-27", type: "invested" },
    { label: "Loan Payment", amount: "-$500.00", date: "2024-05-25", type: "borrowed" },
    { label: "Deposit Bonus", amount: "+$150.00", date: "2024-05-20", type: "deposit" },
    { label: "Stock Purchase", amount: "-$800.00", date: "2024-05-18", type: "invested" },
    { label: "Personal Loan", amount: "+$1,000.00", date: "2024-05-15", type: "borrowed" },
    { label: "ATM Withdrawal", amount: "-$200.00", date: "2024-05-10", type: "withdrawal" },
];

const trendTypeColors = {
    deposit: "text-green-600",
    withdrawal: "text-red-500",
    invested: "text-blue-600",
    borrowed: "text-yellow-600",
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-1">{label}</p>
                {payload.map((entry: any) => (
                    <div key={entry.dataKey} className="flex items-center text-sm mb-0.5">
                        <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: entry.color }}></span>
                        <span className="text-gray-700 mr-2">{trendKeys[entry.dataKey]?.label || entry.dataKey}</span>
                        <span className="font-semibold text-gray-900">{entry.value.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function TransactionPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl font-bold text-gray-900">Transactions</h1>
                <p className="text-gray-500 text-xs">Your deposits, withdrawals, investments, and borrowings</p>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2 bg-white rounded-xl shadow p-3">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search transactions..."
                                    className="pl-7 pr-2 py-1 w-36 bg-gray-50 rounded border border-gray-200 text-xs focus:outline-none"
                                />
                            </div>
                            <select value={filter} onChange={e => setFilter(e.target.value)} className="text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50">
                                <option>All</option>
                                <option>Deposit</option>
                                <option>Withdrawal</option>
                                <option>Invested</option>
                                <option>Borrowed</option>
                            </select>
                            <button className="ml-1 p-1 rounded hover:bg-gray-100 transition"><Filter className="w-4 h-4 text-gray-400" /></button>
                        </div>
                        <button className="bg-[#16A34A] text-white text-xs px-3 py-1 rounded flex items-center hover:bg-green-700 transition"><span className="mr-1">+</span> Add</button>
                    </div>
                    <ul className="divide-y divide-gray-100">
                        {transactions
                            .filter(t => t.label.toLowerCase().includes(search.toLowerCase()) &&
                                (filter === "All" || t.type.toLowerCase() === filter.toLowerCase()))
                            .map((item, idx) => (
                                <li key={idx} className="py-1.5 flex items-center justify-between group transition hover:bg-gray-50 rounded">
                                    <div>
                                        <p className="text-gray-800 font-medium text-xs">{item.label}</p>
                                        <p className="text-[10px] text-gray-400">{item.date}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`text-xs font-semibold ${trendTypeColors[item.type as keyof typeof trendTypeColors] || "text-gray-500"}`}>{item.amount}</span>
                                        <button className="p-1 rounded hover:bg-gray-200 transition" title="Edit"><Edit className="w-4 h-4 text-gray-400 group-hover:text-gray-700" /></button>
                                        <button className="p-1 rounded hover:bg-red-100 transition" title="Delete"><Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-600" /></button>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center justify-center">
                    <h2 className="text-base font-bold mb-2">Account Trends</h2>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="month" stroke="#A3AED0" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#A3AED0" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend verticalAlign="top" height={36} iconType="circle" />
                                {(Object.keys(trendKeys) as (keyof typeof trendKeys)[]).map((key) => (
                                    <Line
                                        key={key}
                                        type="monotone"
                                        dataKey={key}
                                        stroke={trendKeys[key].color}
                                        strokeWidth={2.5}
                                        dot={false}
                                        activeDot={{ r: 6 }}
                                        name={trendKeys[key].label}
                                        opacity={1}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
} 