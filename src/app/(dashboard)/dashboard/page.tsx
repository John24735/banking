"use client";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Cell } from "recharts";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineTicket } from "react-icons/hi";
import ReactCountryFlag from "react-country-flag";
import { MoreHorizontal, ChevronDown, ArrowLeftRight, Download, Upload } from "lucide-react";
import ActionButtons from "@/components/ActionButtons";

const summaryData = [
    { title: "Investment", value: "$98,486.03", change: "+4.85%", changeType: "increase", icon: <HiOutlineCurrencyDollar size={24} />, iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    { title: "Loan Amount", value: "$0.00", change: "-1.12%", changeType: "decrease", icon: <FaBuilding size={20} />, iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    { title: "Savings account", value: "$245.11", change: "+0.00%", changeType: "increase", icon: <HiOutlineShieldCheck size={24} />, iconBg: 'bg-green-100', iconColor: 'text-green-600' },
    { title: "Total cash", value: "$245.37", change: "+0.00%", changeType: "increase", icon: <HiOutlineTicket size={24} />, iconBg: 'bg-green-100', iconColor: 'text-green-600' },
]

const monthlySpendData = [
    { month: 'Jun', spend: 72000 },
    { month: 'Jul', spend: 80000 },
    { month: 'Aug', spend1: 35000, spend2: 25000, spend3: 40000 },
    { month: 'Sep', spend: 78000 },
    { month: 'Oct', spend: 82000 },
    { month: 'Nov', spend: 88000 },
    { month: 'Dec', spend: 95000 },
]

const balanceData = [
    { name: 'Jun', blueprintUK: 20, blueprintUS: -40, blueprintHK: -55 },
    { name: 'Jul', blueprintUK: 40, blueprintUS: -55, blueprintHK: -20 },
    { name: 'Aug', blueprintUK: 85, blueprintUS: 10, blueprintHK: 0 },
    { name: 'Sep', blueprintUK: 65, blueprintUS: -10, blueprintHK: 20 },
    { name: 'Oct', blueprintUK: 70, blueprintUS: 60, blueprintHK: 40 },
    { name: 'Nov', blueprintUK: 50, blueprintUS: 30, blueprintHK: 60 },
    { name: 'Dec', blueprintUK: 60, blueprintUS: 60, blueprintHK: 80 },
    { name: 'Jan', blueprintUK: 50, blueprintUS: 60, blueprintHK: 40 },
    { name: 'Feb', blueprintUK: 30, blueprintUS: 40, blueprintHK: 20 },
    { name: 'Mar', blueprintUK: 20, blueprintUS: 20, blueprintHK: 5 },
]

const chartData = [
    { month: "Jan", investment: 10000, loan: 0, saving: 200, cash: 200 },
    { month: "Feb", investment: 12000, loan: 0, saving: 210, cash: 210 },
    { month: "Mar", investment: 15000, loan: 0, saving: 220, cash: 220 },
    { month: "Apr", investment: 22000, loan: 0, saving: 230, cash: 230 },
    { month: "May", investment: 17000, loan: 0, saving: 235, cash: 235 },
    { month: "Jun", investment: 25000, loan: 0, saving: 240, cash: 240 },
    { month: "Jul", investment: 30000, loan: 0, saving: 245, cash: 245 },
    { month: "Aug", investment: 35000, loan: 0, saving: 245, cash: 245 },
    { month: "Sep", investment: 40000, loan: 0, saving: 245, cash: 245 },
    { month: "Oct", investment: 42000, loan: 0, saving: 245, cash: 245 },
    { month: "Nov", investment: 45000, loan: 0, saving: 245, cash: 245 },
    { month: "Dec", investment: 50000, loan: 0, saving: 245, cash: 245 },
];

const chartKeys = {
    investment: { label: "Investment", color: "#16a34a" },
    loan: { label: "Loan Amount", color: "#f59e0b" },
    saving: { label: "Saving", color: "#3B82F6" },
    cash: { label: "Total Cash", color: "#ef4444" },
};

const TrendIcon = ({ type }: { type: 'increase' | 'decrease' }) => {
    const color = type === 'increase' ? '#16a34a' : '#ef4444';
    const points = type === 'increase' ? "0 12 4 8 8 12 12 8 16 12 20 8" : "0 8 4 12 8 8 12 12 16 8 20 12";
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
    );
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
        const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
        return (
            <div className="bg-gray-900 text-white p-2 px-3 rounded-md shadow-lg">
                <p className="font-bold text-sm">Total Spend</p>
                <p className="font-semibold text-xl">{`${Math.round(total / 1000)}K`}</p>
            </div>
        );
    }
    return null;
};

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-500">Here is the summary of overall data</p>
                </div>
                <div className="flex space-x-2 mt-2 md:mt-0">
                    <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#16A34A] text-white hover:bg-green-700 transition font-semibold"><HiOutlineCurrencyDollar className="w-4 h-4 mr-1" /> Investment</button>
                    <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#16A34A] text-white hover:bg-green-700 transition font-semibold"><ArrowLeftRight className="w-4 h-4 mr-1" /> Transfer Cash</button>
                    <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#F59E42] text-white hover:bg-orange-500 transition font-semibold"><ArrowLeftRight className="w-4 h-4 mr-1" /> Withdraw</button>
                    <button className="flex items-center px-3 py-1.5 text-xs rounded bg-[#3B82F6] text-white hover:bg-blue-700 transition font-semibold"><ArrowLeftRight className="w-4 h-4 mr-1" /> Deposit</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryData.map((item) => (
                    <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${item.iconBg} ${item.iconColor}`}>
                            {item.icon}
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-gray-500">{item.title}</p>
                            <div className="flex items-end space-x-2">
                                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                                <div className={`flex items-center text-sm ${item.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                                    <TrendIcon type={item.changeType as 'increase' | 'decrease'} />
                                    <span>{item.change}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Monthly Spend</h2>
                        <button className="text-sm text-gray-500 hover:text-gray-800 flex items-center">Monthly <ChevronDown size={16} className="ml-1" /></button>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                            <XAxis dataKey="month" stroke="#9ca3af" fontSize={13} tickLine={false} axisLine={false} />
                            <YAxis stroke="#9ca3af" fontSize={13} tickLine={false} axisLine={false} tickFormatter={v => v >= 1000 ? `${v / 1000}K` : v} />
                            <Tooltip cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }} />
                            <Legend verticalAlign="top" height={36} iconType="circle" />
                            {(Object.keys(chartKeys) as (keyof typeof chartKeys)[]).map((key) => (
                                <Line
                                    key={key}
                                    type="monotone"
                                    dataKey={key}
                                    stroke={chartKeys[key].color}
                                    strokeWidth={2.5}
                                    dot={false}
                                    activeDot={{ r: 6 }}
                                    name={chartKeys[key].label}
                                    opacity={1}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Balance</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                    <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-sm text-gray-500"><ReactCountryFlag countryCode="GB" svg className="mr-2" /> Blueprint UK</span>
                            <span className="font-semibold text-gray-800">$564.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-sm text-gray-500"><ReactCountryFlag countryCode="US" svg className="mr-2" /> Blueprint US</span>
                            <span className="font-semibold text-gray-800">$827.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex items-center text-sm text-gray-500"><ReactCountryFlag countryCode="HK" svg className="mr-2" /> Blueprint HK</span>
                            <span className="font-semibold text-gray-800">$736.00</span>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                        <LineChart data={balanceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis domain={[-80, 100]} ticks={[-60, -20, 0, 20, 60, 100]} stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="blueprintUK" stroke="#16a34a" strokeWidth={2.5} dot={false} />
                            <Line type="monotone" dataKey="blueprintUS" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
                            <Line type="monotone" dataKey="blueprintHK" stroke="#ef4444" strokeWidth={2.5} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <ActionButtons />
        </div>
    );
} 