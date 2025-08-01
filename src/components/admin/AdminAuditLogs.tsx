import React from "react";

const logs = [
  { id: 1, action: "User Login", user: "Admin", date: "2024-06-09 09:12" },
  { id: 2, action: "Project Created", user: "Admin", date: "2024-06-08 15:30" },
  { id: 3, action: "Customer Updated", user: "Admin", date: "2024-06-07 11:45" },
];

export default function AuditLogsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Audit Logs</h1>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{log.action}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{log.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 