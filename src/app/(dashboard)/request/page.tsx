"use client";

import ActionButtons from "@/components/ActionButtons";

const requests = [
    { id: "REQ-001", type: "Transfer", status: "Approved", amount: "$500.00", date: "2024-06-01" },
    { id: "REQ-002", type: "Withdrawal", status: "Pending", amount: "$200.00", date: "2024-05-29" },
    { id: "REQ-003", type: "Deposit", status: "Rejected", amount: "$100.00", date: "2024-05-27" },
];

export default function RequestPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Request</h1>
                    <p className="text-gray-500">Submit a new request or view your recent requests</p>
                </div>
            </div>
            <ActionButtons />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-bold mb-4">New Request</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Type</label>
                            <select className="w-full border border-gray-200 rounded-lg px-3 py-2">
                                <option>Transfer</option>
                                <option>Withdrawal</option>
                                <option>Deposit</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Amount</label>
                            <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder="$0.00" />
                        </div>
                        <button type="submit" className="w-full bg-[#16A34A] text-white font-semibold py-2 rounded-lg">Submit</button>
                    </form>
                </div>
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-bold mb-4">Recent Requests</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-500 text-xs">
                                <th className="py-2">ID</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req) => (
                                <tr key={req.id} className="border-t border-gray-100">
                                    <td className="py-2 font-mono text-xs">{req.id}</td>
                                    <td>{req.type}</td>
                                    <td>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${req.status === "Approved" ? "bg-green-100 text-green-700" : req.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>{req.status}</span>
                                    </td>
                                    <td>{req.amount}</td>
                                    <td>{req.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 