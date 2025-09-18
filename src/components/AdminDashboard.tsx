import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Search, 
  X, 
  Bell, 
  ChevronDown, 
  Menu,
  Shield,
  Activity,
  Database,
  Users,
  FolderOpen,
  Ticket,
  DollarSign,
  Calendar,
  BarChart3,
  FileText,
  Settings,
  Lock,
  Eye,
  AlertTriangle,
  Zap,
  Globe,
  Server,
  Palette
} from "lucide-react";

// Import admin page components
import AdminOverview from "./admin/AdminOverview";
import AdminCustomers from "./admin/AdminCustomers";
import AdminProjects from "./admin/AdminProjects";
import AdminTickets from "./admin/AdminTickets";
import AdminRevenue from "./admin/AdminRevenue";
import AdminMeetings from "./admin/AdminMeetings";
import AdminAnalytics from "./admin/AdminAnalytics";
import AdminAuditLogs from "./admin/AdminAuditLogs";
import AdminUserManagement from "./admin/AdminUserManagement";
import AdminSettings from "./admin/AdminSettings";
import AdminBrandGuidelines from "./admin/AdminBrandGuidelines";

// Professional Cybersecurity Sidebar
function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  const location = useLocation();
  
  const navigationSections = [
    {
      title: "OVERVIEW",
      items: [
        { 
          label: "Security Dashboard", 
          href: "/admin", 
          icon: Shield,
          description: "Security overview & threats"
        }
      ]
    },
    {
      title: "SECURITY OPERATIONS",
      items: [
        { 
          label: "Threat Monitoring", 
          href: "/admin/analytics", 
          icon: Eye,
          description: "Real-time threat detection"
        },
        { 
          label: "Incident Response", 
          href: "/admin/tickets", 
          icon: AlertTriangle,
          description: "Security incidents & alerts"
        },
        { 
          label: "Vulnerability Mgmt", 
          href: "/admin/projects", 
          icon: Lock,
          description: "Security assessments"
        }
      ]
    },
    {
      title: "CLIENT MANAGEMENT",
      items: [
        { 
          label: "Client Portfolio", 
          href: "/admin/customers", 
          icon: Users,
          description: "Client security profiles"
        },
        { 
          label: "Service Contracts", 
          href: "/admin/revenue", 
          icon: DollarSign,
          description: "Security service billing"
        },
        { 
          label: "Security Meetings", 
          href: "/admin/meetings", 
          icon: Calendar,
          description: "Client security reviews"
        }
      ]
    },
    {
      title: "SYSTEM ADMINISTRATION",
      items: [
        { 
          label: "Audit & Compliance", 
          href: "/admin/audit-logs", 
          icon: FileText,
          description: "Security audit trails"
        },
        { 
          label: "User Access Control", 
          href: "/admin/user-management", 
          icon: Database,
          description: "Identity & access mgmt"
        },
        { 
          label: "System Configuration", 
          href: "/admin/settings", 
          icon: Settings,
          description: "Security settings"
        }
      ]
    },
    {
      title: "DESIGN & BRANDING",
      items: [
        { 
          label: "Brand Guidelines", 
          href: "/admin/brand-guidelines", 
          icon: Palette,
          description: "Design system & brand assets"
        }
      ]
    }
  ];
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200/60 transition-transform duration-300 ease-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Header */}
        <div className="h-20 px-6 border-b border-gray-200/60 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center space-x-3">
            {/* Velora Tek Logo */}
            <div className="relative">
              <img src="/logo.png" alt="Velora Tek Logo" className="w-16 h-16 rounded-xl shadow-lg" />
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-sm -z-10"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                VELORA TEK
              </h1>
              <p className="text-xs text-gray-500 font-semibold tracking-wider">CYBERSECURITY</p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          {navigationSections.map((section, sectionIndex) => (
            <div key={section.title} className={`${sectionIndex > 0 ? 'mt-8' : ''}`}>
              {/* Section Header */}
              <div className="px-3 mb-3">
                <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                  {section.title}
                </h3>
              </div>
              
              {/* Section Items */}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                      className={`group relative flex items-center px-3 py-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "bg-blue-50 border border-blue-100 text-blue-700 shadow-sm" 
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"></div>
                      )}
                      
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-5 h-5 mr-3 transition-colors duration-200 ${
                        isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                      }`}>
                        <Icon className="w-full h-full" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold transition-colors duration-200 ${
                          isActive ? "text-blue-900" : "text-gray-900"
                        }`}>
                          {item.label}
                        </p>
                        <p className={`text-xs mt-0.5 transition-colors duration-200 ${
                          isActive ? "text-blue-600" : "text-gray-500"
                        }`}>
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Hover indicator */}
                      {!isActive && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        
        {/* Security Status Footer */}
        <div className="p-4 border-t border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-green-700">SECURE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-green-600" />
              <span className="text-xs font-bold text-green-600">99.9%</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-500">System Security Status</p>
          </div>
        </div>
      </aside>
    </>
  );
}

// Advanced Professional Topbar
function Topbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const threatAlerts = [
    { 
      title: "Suspicious Login Attempt", 
      description: "Multiple failed login attempts detected",
      time: "2 minutes ago", 
      severity: "high",
      type: "security"
    },
    { 
      title: "Firewall Rule Updated", 
      description: "New security rule applied to client network",
      time: "15 minutes ago", 
      severity: "medium",
      type: "system"
    },
    { 
      title: "Vulnerability Scan Complete", 
      description: "Weekly security scan finished for 3 clients",
      time: "1 hour ago", 
      severity: "low",
      type: "info"
    }
  ];

  return (
    <header className="h-20 px-6 bg-white border-b border-gray-200/60 flex items-center justify-between shadow-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* Page Title */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">Security Operations Center</h2>
          <p className="text-sm text-gray-500">Real-time cybersecurity monitoring</p>
        </div>
      </div>
      
      {/* Center Section - Advanced Search */}
      <div className="flex-1 max-w-2xl mx-8">
        <form onSubmit={handleSearch} className="relative">
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
            <input
              type="text"
              placeholder="Search threats, clients, incidents, vulnerabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full px-4 py-3 pl-12 pr-12 bg-gray-50 border rounded-xl text-sm font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-blue-300 bg-white ring-2 ring-blue-500/20 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-white'
              }`}
            />
            <button
              type="submit"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
            </button>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Threat Level Indicator */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-green-700">THREAT LEVEL: LOW</span>
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
              {threatAlerts.length}
            </span>
          </button>
          
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-xl border border-gray-200 shadow-xl z-50">
              <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Security Alerts</h3>
                  <div className="flex items-center space-x-1 px-2 py-1 bg-red-100 rounded-full">
                    <AlertTriangle className="w-3 h-3 text-red-600" />
                    <span className="text-xs font-bold text-red-600">{threatAlerts.length} Active</span>
                  </div>
                </div>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {threatAlerts.map((alert, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'high' ? 'bg-red-500' :
                        alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">{alert.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-100">
                <button className="w-full text-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
                  View All Security Alerts
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Profile */}
        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900">Security Admin</p>
              <p className="text-xs text-gray-500">OscarM@veloratek.com</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          
          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-xl z-50">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">SC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Security Admin</p>
                    <p className="text-sm text-gray-500">OscarM@veloratek.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-sm font-medium text-gray-700">Profile Settings</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-sm font-medium text-gray-700">Security Preferences</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-sm font-medium text-red-600">Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Main Admin Dashboard Component
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<AdminOverview />} />
              <Route path="/customers" element={<AdminCustomers />} />
              <Route path="/projects" element={<AdminProjects />} />
              <Route path="/tickets" element={<AdminTickets />} />
              <Route path="/revenue" element={<AdminRevenue />} />
              <Route path="/meetings" element={<AdminMeetings />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
              <Route path="/audit-logs" element={<AdminAuditLogs />} />
              <Route path="/user-management" element={<AdminUserManagement />} />
              <Route path="/settings" element={<AdminSettings />} />
              <Route path="/brand-guidelines" element={<AdminBrandGuidelines />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
} 