import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { 
  Shield,
  AlertTriangle,
  Eye,
  Lock,
  Users,
  Server,
  Activity,
  TrendingUp,
  TrendingDown,
  Globe,
  Zap,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Download,
  Filter,
  Search,
  Bell
} from "lucide-react";

// Cybersecurity Data
const threatData = [
  { time: '00:00', threats: 12, blocked: 11, malware: 3, phishing: 4, ddos: 2 },
  { time: '04:00', threats: 8, blocked: 8, malware: 2, phishing: 3, ddos: 1 },
  { time: '08:00', threats: 15, blocked: 14, malware: 5, phishing: 6, ddos: 3 },
  { time: '12:00', threats: 23, blocked: 21, malware: 8, phishing: 7, ddos: 4 },
  { time: '16:00', threats: 31, blocked: 28, malware: 12, phishing: 9, ddos: 6 },
  { time: '20:00', threats: 19, blocked: 18, malware: 6, phishing: 8, ddos: 2 },
];

const securityPosture = [
  { name: 'Critical', value: 3, color: '#EF4444', angle: 15 },
  { name: 'High', value: 12, color: '#F97316', angle: 45 },
  { name: 'Medium', value: 28, color: '#EAB308', angle: 120 },
  { name: 'Low', value: 45, color: '#22C55E', angle: 180 },
  { name: 'Secured', value: 412, color: '#10B981', angle: 360 },
];

const vulnerabilityTrends = [
  { month: 'Jan', discovered: 45, patched: 42, remaining: 3 },
  { month: 'Feb', discovered: 38, patched: 40, remaining: 1 },
  { month: 'Mar', discovered: 52, patched: 48, remaining: 5 },
  { month: 'Apr', discovered: 41, patched: 44, remaining: 2 },
  { month: 'May', discovered: 35, patched: 37, remaining: 0 },
  { month: 'Jun', discovered: 29, patched: 32, remaining: 0 },
];

const recentIncidents = [
  {
    id: 1,
    type: "Malware Detection",
    client: "Acme Corp",
    severity: "high",
    status: "contained",
    time: "2 minutes ago",
    details: "Trojan detected on workstation WS-001",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 2,
    type: "Phishing Attempt",
    client: "TechStart Inc",
    severity: "medium",
    status: "blocked",
    time: "12 minutes ago",
    details: "Suspicious email blocked by security filter",
    icon: Eye,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 3,
    type: "Vulnerability Scan",
    client: "Global Dynamics",
    severity: "low",
    status: "completed",
    time: "1 hour ago",
    details: "Weekly vulnerability assessment completed",
    icon: CheckCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 4,
    type: "Access Violation",
    client: "SecureBank",
    severity: "high",
    status: "investigating",
    time: "2 hours ago",
    details: "Unauthorized access attempt to admin panel",
    icon: Lock,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  }
];

const securityMetrics = [
  {
    label: "Threats Blocked",
    value: "2,847",
    change: "+12.3%",
    trend: "up",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    description: "Last 24 hours",
    chart: "success"
  },
  {
    label: "Active Vulnerabilities",
    value: "23",
    change: "-8.5%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    description: "Across all clients",
    chart: "warning"
  },
  {
    label: "Security Score",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Overall posture",
    chart: "info"
  },
  {
    label: "Monitored Assets",
    value: "1,456",
    change: "+3.2%",
    trend: "up",
    icon: Server,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "Network devices",
    chart: "primary"
  }
];

export default function AdminOverview() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Advanced Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Security Operations Center
            </h1>
            <p className="text-sm text-gray-500">
              Real-time cybersecurity monitoring • {currentTime.toLocaleTimeString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Time Range Selector */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            {['1h', '24h', '7d', '30d'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  selectedTimeframe === timeframe
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
          
          <button 
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200"
          >
            <RefreshCw className={`w-4 h-4 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="text-gray-600 font-medium text-sm">Refresh</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200">
            <Download className="w-4 h-4" />
            <span className="font-medium text-sm">Export Report</span>
          </button>
        </div>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`relative p-6 bg-white rounded-xl border ${metric.borderColor} hover:shadow-lg transition-all duration-300 group`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold ${
                metric.trend === 'up' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-900">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
            
            {/* Mini chart indicator */}
            <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Activity className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Threat Monitoring Chart */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Real-Time Threat Monitoring</h3>
              <p className="text-sm text-gray-600">Live security event detection and blocking</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-600">Threats</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-600">Blocked</span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-green-700">LIVE</span>
              </div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={threatData}>
                <defs>
                  <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="blockedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="threats"
                  stroke="#EF4444"
                  strokeWidth={2}
                  fill="url(#threatGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="blocked"
                  stroke="#10B981"
                  strokeWidth={2}
                  fill="url(#blockedGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Security Posture */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Security Posture</h3>
              <p className="text-sm text-gray-600">Overall security health</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={securityPosture}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  label={false}
                >
                  {securityPosture.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {securityPosture.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-gray-600">{item.name} ({item.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Security Incidents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Recent Security Incidents</h3>
              <p className="text-sm text-gray-600">Latest security events and responses</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-bold text-red-600">4 ACTIVE</span>
            </div>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {recentIncidents.map((incident, index) => (
              <div
                key={incident.id}
                className={`p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer ${incident.borderColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${incident.bgColor}`}>
                    <incident.icon className={`w-4 h-4 ${incident.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-semibold text-gray-900 text-sm">{incident.type}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            incident.severity === 'high' ? 'bg-red-100 text-red-700' :
                            incident.severity === 'medium' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {incident.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{incident.client}</p>
                        <p className="text-xs text-gray-500 mb-2">{incident.details}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{incident.time}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            incident.status === 'contained' ? 'bg-green-100 text-green-700' :
                            incident.status === 'blocked' ? 'bg-blue-100 text-blue-700' :
                            incident.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {incident.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full text-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
              View All Security Incidents
            </button>
          </div>
        </div>

        {/* Vulnerability Management */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Vulnerability Management</h3>
              <p className="text-sm text-gray-600">Vulnerability discovery and remediation trends</p>
            </div>
            <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span className="text-xs font-bold text-green-700">98% PATCHED</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vulnerabilityTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="discovered" fill="#F59E0B" radius={[2, 2, 0, 0]} />
                <Bar dataKey="patched" fill="#10B981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="remaining" fill="#EF4444" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-xs text-gray-600">Discovered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600">Patched</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-600">Remaining</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
