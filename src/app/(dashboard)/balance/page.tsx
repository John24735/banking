"use client";
import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineTicket } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import ActionButtons from "@/components/ActionButtons";

const summaryData = [
    { key: "investment", title: "Investment", value: "$98,486.03", icon: <HiOutlineCurrencyDollar size={24} />, color: "#16a34a" },
    { key: "loan", title: "Loan Amount", value: "$0.00", icon: <FaBuilding size={20} />, color: "#f59e0b" },
    { key: "saving", title: "Saving", value: "$245.11", icon: <HiOutlineShieldCheck size={24} />, color: "#3B82F6" },
    { key: "cash", title: "Total Cash", value: "$245.37", icon: <HiOutlineTicket size={24} />, color: "#ef4444" },
];

const chartData = [
    { month: "Jan", investment: 10000, loan: 0, saving: 200, cash: 200, spending: 8000, earning: 12000 },
    { month: "Feb", investment: 12000, loan: 0, saving: 210, cash: 210, spending: 9000, earning: 13000 },
    { month: "Mar", investment: 15000, loan: 0, saving: 220, cash: 220, spending: 7000, earning: 17000 },
    { month: "Apr", investment: 22000, loan: 0, saving: 230, cash: 230, spending: 21000, earning: 10000 },
    { month: "May", investment: 17000, loan: 0, saving: 235, cash: 235, spending: 9000, earning: 12000 },
    { month: "Jun", investment: 25000, loan: 0, saving: 240, cash: 240, spending: 12000, earning: 18000 },
    { month: "Jul", investment: 30000, loan: 0, saving: 245, cash: 245, spending: 10000, earning: 20000 },
    { month: "Aug", investment: 35000, loan: 0, saving: 245, cash: 245, spending: 11000, earning: 22000 },
    { month: "Sep", investment: 40000, loan: 0, saving: 245, cash: 245, spending: 9000, earning: 25000 },
    { month: "Oct", investment: 42000, loan: 0, saving: 245, cash: 245, spending: 8000, earning: 27000 },
    { month: "Nov", investment: 45000, loan: 0, saving: 245, cash: 245, spending: 7000, earning: 30000 },
    { month: "Dec", investment: 50000, loan: 0, saving: 245, cash: 245, spending: 6000, earning: 35000 },
];

const chartKeys = {
    investment: { label: "Investment", color: "#16a34a" },
    loan: { label: "Loan Amount", color: "#f59e0b" },
    saving: { label: "Saving", color: "#3B82F6" },
    cash: { label: "Total Cash", color: "#ef4444" },
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-1">{label}</p>
                {payload.map((entry: any) => (
                    <div key={entry.dataKey} className="flex items-center text-sm mb-0.5">
                        <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: entry.color }}></span>
                        <span className="text-gray-700 mr-2">{chartKeys[entry.dataKey]?.label || entry.dataKey}</span>
                        <span className="font-semibold text-gray-900">{entry.value.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function BalancePage() {
    const [selected, setSelected] = useState("investment");
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Balance</h1>
                    <p className="text-gray-500">Overview of your investments, loans, savings, and cash</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryData.map((item) => (
                    <button
                        key={item.key}
                        className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4 focus:outline-none transition ring-2 ring-offset-2 ${selected === item.key ? "ring-[#16a34a]" : "ring-transparent"}`}
                        onClick={() => setSelected(item.key)}
                        aria-pressed={selected === item.key}
                        type="button"
                    >
                        <div className={`p-3 rounded-xl`} style={{ background: item.color + '22', color: item.color }}>{item.icon}</div>
                        <div className="flex-grow text-left">
                            <p className="text-sm text-gray-500">{item.title}</p>
                            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                        </div>
                    </button>
                ))}
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Cash Flow Chart</h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">Last Year</span>
                        <span className="w-2 h-2 bg-gray-200 rounded-full"></span>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis dataKey="month" stroke="#9ca3af" fontSize={13} tickLine={false} axisLine={false} />
                        <YAxis stroke="#9ca3af" fontSize={13} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? `${v / 1000}K` : v} />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }} />
                        <Legend verticalAlign="top" height={36} iconType="circle" />
                        {(Object.keys(chartKeys) as (keyof typeof chartKeys)[]).map((key) => (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={chartKeys[key].color}
                                strokeWidth={selected === key ? 4 : 2.5}
                                dot={false}
                                activeDot={{ r: 6 }}
                                name={chartKeys[key].label}
                                opacity={selected === key ? 1 : 0.7}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}