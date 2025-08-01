import React from "react";

const tickets = [
  { id: 101, subject: "Login Issue", customer: "Acme Corp", status: "Open" },
  { id: 102, subject: "Payment Failure", customer: "Globex Inc.", status: "Closed" },
  { id: 103, subject: "Feature Request", customer: "Initech", status: "Pending" },
];

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Tickets</h1>
        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-2 rounded-lg shadow hover:from-gray-800 hover:to-gray-600 transition font-semibold">+ Add Ticket</button>
      </div>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{ticket.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ticket.status === "Closed" ? "bg-green-100 text-green-800" : ticket.status === "Open" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>{ticket.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right flex gap-2 justify-end">
                  <button className="text-blue-600 hover:underline font-medium">View</button>
                  <button className="text-gray-700 hover:underline font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 