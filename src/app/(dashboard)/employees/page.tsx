"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const employees = [
    { name: "Alice Johnson", role: "Manager" },
    { name: "Bob Smith", role: "Developer" },
    { name: "Carol Lee", role: "Designer" },
    { name: "David Kim", role: "Support" },
];
const barData = [
    { department: "Engineering", value: 10 },
    { department: "Design", value: 4 },
    { department: "Support", value: 6 },
    { department: "Management", value: 2 },
];
const COLORS = ["#16A34A", "#F59E42", "#3B82F6", "#F97316"];

export default function EmployeesPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
                    <p className="text-gray-500">Your employees overview</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-bold mb-4">Employee List</h2>
                    <ul className="divide-y divide-gray-100">
                        {employees.map((item, idx) => (
                            <li key={idx} className="py-3 flex items-center justify-between">
                                <span className="text-gray-800 font-medium text-base">{item.name}</span>
                                <span className="text-gray-500 text-sm">{item.role}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Department Distribution</h2>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="department" stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
                                <YAxis stroke="#A3AED0" fontSize={15} tickLine={false} axisLine={false} />
                                <Tooltip />
                                <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                                    {barData.map((entry, idx) => (
                                        <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
} 