"use client";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend, Pie, PieChart, Cell } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const investmentSummary = [
    { label: "Total Invested", value: "$98,486.03" },
    { label: "Current Value", value: "$104,200.00" },
    { label: "Total Return", value: "+$5,713.97" },
    { label: "Active Investments", value: 8 },
];

const trendData = [
    { month: "Jan", portfolio: 90000, returns: 500, deposits: 2000, withdrawals: 0 },
    { month: "Feb", portfolio: 92000, returns: 800, deposits: 1500, withdrawals: 0 },
    { month: "Mar", portfolio: 95000, returns: 1200, deposits: 2500, withdrawals: 0 },
    { month: "Apr", portfolio: 97000, returns: 1500, deposits: 1000, withdrawals: 500 },
    { month: "May", portfolio: 98486, returns: 1713, deposits: 1200, withdrawals: 0 },
    { month: "Jun", portfolio: 100000, returns: 2000, deposits: 2000, withdrawals: 0 },
    { month: "Jul", portfolio: 104200, returns: 2200, deposits: 1000, withdrawals: 0 },
];

const trendKeys = {
    portfolio: { label: "Portfolio Value", color: "#3B82F6" },
    returns: { label: "Returns", color: "#16a34a" },
    deposits: { label: "Deposits", color: "#f59e0b" },
    withdrawals: { label: "Withdrawals", color: "#ef4444" },
};

const assetData = [
    { name: "Stocks", value: 60000, color: "#3B82F6" },
    { name: "Bonds", value: 20000, color: "#16A34A" },
    { name: "Crypto", value: 10000, color: "#F59E42" },
    { name: "Real Estate", value: 14200, color: "#ef4444" },
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

export default function InvestmentPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Investments</h1>
                    <p className="text-gray-500">Your portfolio, returns, and investment breakdown</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {investmentSummary.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                        <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white rounded-2xl shadow p-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Trends</h2>
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                    <h2 className="text-lg font-bold mb-4">Asset Allocation</h2>
                    <div className="h-40 w-40 mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={assetData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2}>
                                    {assetData.map((entry, idx) => (
                                        <Cell key={`cell-${idx}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {assetData.map((entry, idx) => (
                            <div key={entry.name} className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-full" style={{ background: entry.color }}></span>
                                <span className="text-xs text-gray-700 font-medium">{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 