"use client";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const kpis = [
    { label: "Active Users", value: 1200 },
    { label: "Sessions", value: 3400 },
    { label: "Conversion Rate", value: "4.2%" },
    { label: "Avg. Session Time", value: "5m 12s" },
];
const chartData = [
    { month: "Jan", users: 800 },
    { month: "Feb", users: 900 },
    { month: "Mar", users: 1000 },
    { month: "Apr", users: 1100 },
    { month: "May", users: 1200 },
    { month: "Jun", users: 1150 },
    { month: "Jul", users: 1300 },
    { month: "Aug", users: 1400 },
    { month: "Sep", users: 1500 },
    { month: "Oct", users: 1600 },
    { month: "Nov", users: 1700 },
    { month: "Dec", users: 1800 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
                    <p className="text-gray-500">Your banking analytics overview</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {kpis.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                        <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-2xl shadow p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">User Activity</h2>
                <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
                        <YAxis stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="users" stroke="#16A34A" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}