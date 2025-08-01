import React, { useState } from "react";

const customers = [
  { 
    id: 1, 
    name: "Acme Corporation", 
    email: "contact@acme.com", 
    status: "Active",
    tier: "Enterprise",
    revenue: "$127,500",
    lastActivity: "2 hours ago",
    projects: 12,
    avatar: "AC"
  },
  { 
    id: 2, 
    name: "Globex Industries", 
    email: "info@globex.com", 
    status: "Active",
    tier: "Professional",
    revenue: "$89,200",
    lastActivity: "1 day ago",
    projects: 8,
    avatar: "GI"
  },
  { 
    id: 3, 
    name: "Initech Solutions", 
    email: "hello@initech.com", 
    status: "Inactive",
    tier: "Standard",
    revenue: "$45,600",
    lastActivity: "1 week ago",
    projects: 3,
    avatar: "IS"
  },
  { 
    id: 4, 
    name: "Wayne Enterprises", 
    email: "bruce@wayneent.com", 
    status: "Active",
    tier: "Enterprise",
    revenue: "$892,100",
    lastActivity: "30 minutes ago",
    projects: 24,
    avatar: "WE"
  },
  { 
    id: 5, 
    name: "Stark Industries", 
    email: "tony@stark.com", 
    status: "Active",
    tier: "Enterprise",
    revenue: "$1,234,500",
    lastActivity: "5 minutes ago",
    projects: 31,
    avatar: "SI"
  },
];

const tierColors = {
  Enterprise: "from-purple-500 to-purple-600",
  Professional: "from-blue-500 to-blue-600",
  Standard: "from-slate-500 to-slate-600"
};

const statusColors = {
  Active: "bg-green-100 text-green-700 border-green-200",
  Inactive: "bg-red-100 text-red-700 border-red-200"
};

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === "All" || customer.tier === selectedTier;
    const matchesStatus = selectedStatus === "All" || customer.status === selectedStatus;
    return matchesSearch && matchesTier && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl"></div>
        <div className="relative p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Customer Management</h1>
              <p className="text-lg text-slate-600 font-medium">Manage your enterprise customer relationships</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                + Add Customer
              </button>
              <button className="px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/20 text-slate-700 rounded-2xl shadow-lg hover:shadow-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                📊 Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Search */}
          <div className="relative flex-1 lg:max-w-md">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          </div>

          {/* Tier Filter */}
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="px-4 py-3 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <option value="All">All Tiers</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Professional">Professional</option>
            <option value="Standard">Standard</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-3 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/50">
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Customer</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Tier</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Revenue</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Projects</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Last Activity</th>
                <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/50">
              {filteredCustomers.map((customer, index) => (
                <tr 
                  key={customer.id} 
                  className="hover:bg-slate-50/80 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tierColors[customer.tier]} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <span className="text-white font-bold text-sm">{customer.avatar}</span>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{customer.name}</div>
                        <div className="text-sm text-slate-500 font-medium">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-2 rounded-2xl text-xs font-bold text-white bg-gradient-to-r ${tierColors[customer.tier]} shadow-lg`}>
                      {customer.tier}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="font-bold text-slate-900 text-lg">{customer.revenue}</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">{customer.projects}</span>
                      <span className="text-sm text-slate-500">projects</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-2 rounded-2xl text-xs font-bold border ${statusColors[customer.status]}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm text-slate-600 font-medium">{customer.lastActivity}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                        👁️
                      </button>
                      <button className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                        ✏️
                      </button>
                      <button className="p-2 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                        📞
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No customers found</h3>
            <p className="text-slate-600 font-medium">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">👥</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{customers.length}</div>
              <div className="text-sm font-semibold text-slate-600">Total Customers</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-500 to-green-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">✅</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{customers.filter(c => c.status === 'Active').length}</div>
              <div className="text-sm font-semibold text-slate-600">Active Customers</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">⭐</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{customers.filter(c => c.tier === 'Enterprise').length}</div>
              <div className="text-sm font-semibold text-slate-600">Enterprise Tier</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 transform hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-xl">💰</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">$2.4M</div>
              <div className="text-sm font-semibold text-slate-600">Total Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 