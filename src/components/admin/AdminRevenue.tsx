import React from "react";

const revenueStats = [
  { label: "Total Revenue", value: "$1,240,000" },
  { label: "This Month", value: "$92,400" },
  { label: "Growth", value: "+8.2%" },
];

const transactions = [
  { id: 1, customer: "Acme Corp", amount: "$12,000", date: "2024-06-01", status: "Paid" },
  { id: 2, customer: "Globex Inc.", amount: "$8,500", date: "2024-05-28", status: "Pending" },
  { id: 3, customer: "Initech", amount: "$15,200", date: "2024-05-25", status: "Paid" },
];

export default function RevenuePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Revenue</h1>
        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-2 rounded-lg shadow hover:from-gray-800 hover:to-gray-600 transition font-semibold">View Reports</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {revenueStats.map((stat) => (
          <div key={stat.label} className="bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl shadow-lg p-6 flex flex-col gap-2">
            <div className="text-lg text-gray-300">{stat.label}</div>
            <div className="text-2xl font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-6 mt-4">
        <div className="text-lg font-bold text-gray-900 mb-4">Revenue Chart (Coming Soon)</div>
        <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xl font-semibold">[Chart Placeholder]</div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mt-4">
        <div className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{tx.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{tx.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{tx.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tx.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 