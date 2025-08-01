import React from "react";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
          <span className="text-gray-400 text-xl">[Analytics Chart Placeholder]</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center h-64">
          <span className="text-gray-400 text-xl">[Summary Widget Placeholder]</span>
        </div>
      </div>
    </div>
  );
} 