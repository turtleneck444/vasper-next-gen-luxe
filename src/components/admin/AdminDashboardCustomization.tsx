import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Palette, 
  Layout, 
  Users, 
  TrendingUp, 
  BarChart3,
  Shield,
  Globe,
  Building2,
  Target,
  Zap,
  Monitor,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Wifi,
  Database
} from "lucide-react";

export const AdminDashboardCustomization = () => {
  const [activeCustomization, setActiveCustomization] = useState("overview");

  const customizationOptions = [
    { id: "overview", label: "Dashboard Overview", icon: Layout },
    { id: "branding", label: "Company Branding", icon: Palette },
    { id: "widgets", label: "Widget Configuration", icon: Monitor },
    { id: "reports", label: "Custom Reports", icon: BarChart3 },
    { id: "alerts", label: "Alert Management", icon: Shield },
    { id: "users", label: "User Preferences", icon: Users }
  ];

  const companyMetrics = [
    { 
      label: "Virtual IT Director Clients", 
      value: "47", 
      change: "+12%", 
      trend: "up",
      color: "from-purple-600 to-pink-600" 
    },
    { 
      label: "Active Service Contracts", 
      value: "234", 
      change: "+8%", 
      trend: "up",
      color: "from-blue-600 to-cyan-600" 
    },
    { 
      label: "Emergency Response Calls", 
      value: "12", 
      change: "-23%", 
      trend: "down",
      color: "from-red-600 to-orange-600" 
    },
    { 
      label: "Client Satisfaction Score", 
      value: "4.8/5", 
      change: "+0.2", 
      trend: "up",
      color: "from-green-600 to-emerald-600" 
    }
  ];

  const quickActions = [
    { 
      label: "Schedule Emergency Response", 
      description: "Immediate outage assistance", 
      icon: Shield,
      color: "bg-red-100 text-red-800 border-red-200"
    },
    { 
      label: "Add Virtual IT Director Client", 
      description: "Onboard new strategic client", 
      icon: Users,
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    { 
      label: "Generate Service Report", 
      description: "Create comprehensive analytics", 
      icon: BarChart3,
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    { 
      label: "Update Service Offerings", 
      description: "Modify available services", 
      icon: Settings,
      color: "bg-green-100 text-green-800 border-green-200"
    }
  ];

  const servicePerformance = [
    { 
      service: "Cybersecurity Services", 
      clients: 156, 
      uptime: "99.9%", 
      satisfaction: 4.9,
      revenue: "$2.1M"
    },
    { 
      service: "Cloud Computing", 
      clients: 142, 
      uptime: "99.8%", 
      satisfaction: 4.7,
      revenue: "$1.8M"
    },
    { 
      service: "Network Management", 
      clients: 189, 
      uptime: "99.95%", 
      satisfaction: 4.8,
      revenue: "$2.3M"
    },
    { 
      service: "Virtual IT Director", 
      clients: 47, 
      uptime: "100%", 
      satisfaction: 4.9,
      revenue: "$1.4M"
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VasperNet <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600">
            Customized enterprise IT management and strategic oversight
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 bg-white rounded-xl p-2 shadow-lg">
          {customizationOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveCustomization(option.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeCustomization === option.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <option.icon className="w-4 h-4" />
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Overview */}
        {activeCustomization === "overview" && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              {companyMetrics.map((metric, index) => (
                <Card key={metric.label} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={metric.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <div key={action.label} className={`p-6 rounded-xl border-2 ${action.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                    <action.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold mb-2">{action.label}</h3>
                    <p className="text-sm opacity-75">{action.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Service Performance */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Performance Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Active Clients</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Uptime</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Satisfaction</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicePerformance.map((service, index) => (
                      <tr key={service.service} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-gray-900">{service.service}</td>
                        <td className="py-4 px-6 text-gray-700">{service.clients}</td>
                        <td className="py-4 px-6">
                          <Badge className="bg-green-100 text-green-800">{service.uptime}</Badge>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-700">{service.satisfaction}</span>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className={`w-3 h-3 rounded-full ${i < Math.floor(service.satisfaction) ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-semibold text-green-600">{service.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* Company Branding Section */}
        {activeCustomization === "branding" && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Branding Customization</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Brand Identity</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      value="VasperNet Technology" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                    <input 
                      type="text" 
                      value="Virtual IT Director & Enterprise Services" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                      <input 
                        type="text" 
                        value="#2563eb" 
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-blue-600 text-white">
                  Update Branding
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Name Suggestions</h3>
                <div className="space-y-3">
                  {[
                    "QuantumSquirrel - Agile Computing Solutions",
                    "QuantumShark - Predatory Precision Technology", 
                    "QuantumEagle - Soaring Above Competition",
                    "QuantumPanther - Stealth Technology Solutions",
                    "QuantumScale Dynamics - Dynamic Scaling Solutions"
                  ].map((suggestion, index) => (
                    <div key={index} className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors duration-200">
                      <div className="text-sm font-medium text-gray-900">{suggestion}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Widget Configuration */}
        {activeCustomization === "widgets" && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Widget Configuration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Emergency Response Monitor", icon: Shield, active: true },
                { name: "Virtual IT Director Status", icon: Users, active: true },
                { name: "Service Performance Metrics", icon: BarChart3, active: true },
                { name: "Client Satisfaction Tracker", icon: Target, active: false },
                { name: "Revenue Analytics", icon: TrendingUp, active: true },
                { name: "System Health Monitor", icon: Monitor, active: false },
                { name: "Network Status Overview", icon: Wifi, active: true },
                { name: "Database Performance", icon: Database, active: false },
                { name: "Mobile App Analytics", icon: Smartphone, active: false }
              ].map((widget, index) => (
                <div key={widget.name} className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  widget.active 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <widget.icon className={`w-8 h-8 ${widget.active ? 'text-blue-600' : 'text-gray-400'}`} />
                    <Badge className={widget.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                      {widget.active ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{widget.name}</h3>
                  <Button 
                    size="sm" 
                    variant={widget.active ? "outline" : "default"}
                    className="w-full"
                  >
                    {widget.active ? 'Configure' : 'Enable'}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};