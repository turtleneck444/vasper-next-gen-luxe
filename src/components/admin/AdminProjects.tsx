import React from "react";

const projects = [
  { id: 1, name: "Website Redesign", client: "Acme Corp", status: "In Progress" },
  { id: 2, name: "Mobile App", client: "Globex Inc.", status: "Completed" },
  { id: 3, name: "Cloud Migration", client: "Initech", status: "Planning" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Projects</h1>
        <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-2 rounded-lg shadow hover:from-gray-800 hover:to-gray-600 transition font-semibold">+ Add Project</button>
      </div>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{project.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{project.client}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Completed" ? "bg-green-100 text-green-800" : project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" : "bg-gray-200 text-gray-600"}`}>{project.status}</span>
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