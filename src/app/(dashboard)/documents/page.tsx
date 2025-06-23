"use client";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import ActionButtons from "@/components/ActionButtons";

const documents = [
    { name: "Invoice.pdf", type: "Invoice", date: "2024-06-01" },
    { name: "Report.docx", type: "Report", date: "2024-05-28" },
    { name: "Contract.pdf", type: "Contract", date: "2024-05-25" },
];
const pieData = [
    { name: "Invoice", value: 5, color: "#16A34A" },
    { name: "Report", value: 3, color: "#F59E42" },
    { name: "Contract", value: 2, color: "#3B82F6" },
];

export default function DocumentsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Documents</h1>
                    <p className="text-gray-500">Your documents overview</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-bold mb-4">Document List</h2>
                    <ul className="divide-y divide-gray-100">
                        {documents.map((item, idx) => (
                            <li key={idx} className="py-3 flex items-center justify-between">
                                <span className="text-gray-800 font-medium text-base">{item.name}</span>
                                <span className="text-gray-500 text-sm">{item.type}</span>
                                <span className="text-gray-400 text-xs">{item.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">Document Types</h2>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={2}>
                                    {pieData.map((entry, idx) => (
                                        <Cell key={`cell-${idx}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex space-x-4 mt-2">
                        {pieData.map((entry, idx) => (
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