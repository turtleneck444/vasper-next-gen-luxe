import React from "react";

const meetings = [
  { id: 1, title: "Project Kickoff", date: "2024-06-10 10:00", participants: 5, status: "Scheduled" },
  { id: 2, title: "Client Review", date: "2024-06-11 14:00", participants: 3, status: "Completed" },
  { id: 3, title: "Team Sync", date: "2024-06-12 09:00", participants: 8, status: "Scheduled" },
];

export default function MeetingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Virtual Meetings</h1>
        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-2 rounded-lg shadow hover:from-gray-800 hover:to-gray-600 transition font-semibold">+ Schedule Meeting</button>
      </div>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {meetings.map((meeting) => (
              <tr key={meeting.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{meeting.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{meeting.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{meeting.participants}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${meeting.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>{meeting.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right flex gap-2 justify-end">
                  <button className="text-blue-600 hover:underline font-medium">Join</button>
                  <button className="text-gray-700 hover:underline font-medium">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 