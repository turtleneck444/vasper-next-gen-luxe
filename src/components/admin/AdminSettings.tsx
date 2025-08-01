import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
      <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Company Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700" placeholder="VasperNet" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700" placeholder="admin@vaspernet.com" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Theme</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700">
            <option>Luxury</option>
            <option>Corporate</option>
            <option>Minimal</option>
          </select>
        </div>
        <button type="submit" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-2 rounded-lg shadow hover:from-gray-800 hover:to-gray-600 transition font-semibold mt-4">Save Settings</button>
      </form>
    </div>
  );
} 