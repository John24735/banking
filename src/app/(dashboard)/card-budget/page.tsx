"use client";
import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend, Pie, PieChart, Cell } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const cardSummary = [
    { label: "Active Cards", value: 3 },
    { label: "Total Limit", value: "$10,000" },
    { label: "Used", value: "$4,200" },
    { label: "Available", value: "$5,800" },
];

const budgetData = [
    { label: "Food", value: 1200, color: "#16A34A" },
    { label: "Bills", value: 800, color: "#F59E42" },
    { label: "Shopping", value: 600, color: "#3B82F6" },
    { label: "Travel", value: 400, color: "#F97316" },
];

const donutData = [
    { name: "Food", value: 1200, color: "#16A34A" },
    { name: "Bills", value: 800, color: "#F59E42" },
    { name: "Shopping", value: 600, color: "#3B82F6" },
    { name: "Travel", value: 400, color: "#F97316" },
];

const cardTrendData = [
    { month: "Jan", spent: 800, repaid: 400, limit: 10000 },
    { month: "Feb", spent: 1200, repaid: 600, limit: 10000 },
    { month: "Mar", spent: 1500, repaid: 800, limit: 10000 },
    { month: "Apr", spent: 1100, repaid: 700, limit: 10000 },
    { month: "May", spent: 1300, repaid: 900, limit: 10000 },
    { month: "Jun", spent: 1700, repaid: 1000, limit: 10000 },
    { month: "Jul", spent: 1400, repaid: 1200, limit: 10000 },
    { month: "Aug", spent: 1600, repaid: 1100, limit: 10000 },
    { month: "Sep", spent: 1800, repaid: 1300, limit: 10000 },
    { month: "Oct", spent: 2000, repaid: 1500, limit: 10000 },
    { month: "Nov", spent: 2100, repaid: 1600, limit: 10000 },
    { month: "Dec", spent: 2200, repaid: 1700, limit: 10000 },
];

const trendKeys = {
    spent: { label: "Spent", color: "#ef4444" },
    repaid: { label: "Repaid", color: "#16a34a" },
    limit: { label: "Limit", color: "#3B82F6" },
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

export default function CardBudgetPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Card & Budget</h1>
                <p className="text-gray-500">Manage your cards and track your budget allocation</p>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card Trends Chart */}
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center md:col-span-2">
                    <h2 className="text-lg font-bold mb-4">Card Trends</h2>
                    <div className="h-56 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={cardTrendData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
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
                {/* Card Summary */}
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Card Summary</h2>
                    <ul className="w-full space-y-2">
                        {cardSummary.map((item, idx) => (
                            <li key={idx} className="flex justify-between text-gray-700 font-medium text-base">
                                <span>{item.label}</span>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Budget Progress */}
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-center">
                    <h2 className="text-lg font-bold mb-4">Budget Progress</h2>
                    <ul className="space-y-4">
                        {budgetData.map((item, idx) => (
                            <li key={idx}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                                    <span className="text-gray-500 text-sm">${item.value}</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full">
                                    <div className="h-2 rounded-full" style={{ width: `${item.value / 20}%`, background: item.color }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Budget Allocation Donut */}
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Budget Allocation</h2>
                    <div className="h-32 w-32 mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={donutData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={2}>
                                    {donutData.map((entry, idx) => (
                                        <Cell key={`cell-${idx}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex space-x-4 mt-2">
                        {donutData.map((entry, idx) => (
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