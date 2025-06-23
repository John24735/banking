"use client";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const loanSummary = [
    { label: "Total Borrowed", value: "$25,000" },
    { label: "Outstanding", value: "$8,200" },
    { label: "Total Paid", value: "$16,800" },
    { label: "Active Loans", value: 2 },
];

const loanTrendData = [
    { month: "Jan", borrowed: 20000, paid: 4000, outstanding: 16000 },
    { month: "Feb", borrowed: 22000, paid: 6000, outstanding: 16000 },
    { month: "Mar", borrowed: 25000, paid: 8000, outstanding: 17000 },
    { month: "Apr", borrowed: 25000, paid: 10000, outstanding: 15000 },
    { month: "May", borrowed: 25000, paid: 12000, outstanding: 13000 },
    { month: "Jun", borrowed: 25000, paid: 14000, outstanding: 11000 },
    { month: "Jul", borrowed: 25000, paid: 16800, outstanding: 8200 },
];

const trendKeys = {
    borrowed: { label: "Borrowed", color: "#f59e0b" },
    paid: { label: "Paid", color: "#16a34a" },
    outstanding: { label: "Outstanding", color: "#ef4444" },
};

const activeLoans = [
    { name: "Car Loan", amount: "$5,000", status: "Active", nextDue: "2024-07-10" },
    { name: "Personal Loan", amount: "$3,200", status: "Active", nextDue: "2024-07-15" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-1">{label}</p>
                {payload.map((entry: any) => {
                    const key = entry.dataKey as keyof typeof trendKeys;
                    return (
                        <div key={entry.dataKey} className="flex items-center text-sm mb-0.5">
                            <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: entry.color }}></span>
                            <span className="text-gray-700 mr-2">{trendKeys[key]?.label || entry.dataKey}</span>
                            <span className="font-semibold text-gray-900">{entry.value.toLocaleString()}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
    return null;
};

export default function LoansPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Loans</h1>
                    <p className="text-gray-500">Your borrowed funds, repayments, and active loans</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {loanSummary.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                        <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Loan Trends</h2>
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={loanTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="month" stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
                            <YAxis stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
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
                <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Active Loans</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 text-xs">
                                <th className="py-2">Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Next Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeLoans.map((loan, idx) => (
                                <tr key={idx} className="border-t border-gray-100">
                                    <td className="py-2 font-medium text-gray-800">{loan.name}</td>
                                    <td>{loan.amount}</td>
                                    <td><span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">{loan.status}</span></td>
                                    <td>{loan.nextDue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 