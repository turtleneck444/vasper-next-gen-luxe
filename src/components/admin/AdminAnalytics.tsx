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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Scatter,
  ScatterChart,
  ZAxis
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
  Bell,
  Target,
  Wifi,
  Database,
  Cpu,
  HardDrive,
  Network,
  Smartphone,
  Monitor,
  Router
} from "lucide-react";

// Advanced Threat Intelligence Data
const threatIntelligenceData = [
  { time: '00:00', threats: 12, blocked: 11, malware: 3, phishing: 4, ddos: 2, ransomware: 1, zeroDay: 1 },
  { time: '04:00', threats: 8, blocked: 8, malware: 2, phishing: 3, ddos: 1, ransomware: 0, zeroDay: 1 },
  { time: '08:00', threats: 15, blocked: 14, malware: 5, phishing: 6, ddos: 3, ransomware: 0, zeroDay: 1 },
  { time: '12:00', threats: 23, blocked: 21, malware: 8, phishing: 7, ddos: 4, ransomware: 2, zeroDay: 2 },
  { time: '16:00', threats: 31, blocked: 28, malware: 12, phishing: 9, ddos: 6, ransomware: 3, zeroDay: 1 },
  { time: '20:00', threats: 19, blocked: 18, malware: 6, phishing: 8, ddos: 2, ransomware: 1, zeroDay: 2 },
];

const securityPostureData = [
  { name: 'Critical', value: 3, color: '#EF4444', angle: 15 },
  { name: 'High', value: 12, color: '#F97316', angle: 45 },
  { name: 'Medium', value: 28, color: '#EAB308', angle: 120 },
  { name: 'Low', value: 45, color: '#22C55E', angle: 180 },
  { name: 'Secured', value: 412, color: '#10B981', angle: 360 },
];

const vulnerabilityTrends = [
  { month: 'Jan', discovered: 45, patched: 42, remaining: 3, critical: 2, high: 8, medium: 15, low: 20 },
  { month: 'Feb', discovered: 38, patched: 40, remaining: 1, critical: 0, high: 5, medium: 12, low: 22 },
  { month: 'Mar', discovered: 52, patched: 48, remaining: 5, critical: 3, high: 10, medium: 18, low: 21 },
  { month: 'Apr', discovered: 41, patched: 44, remaining: 2, critical: 1, high: 6, medium: 14, low: 23 },
  { month: 'May', discovered: 35, patched: 37, remaining: 0, critical: 0, high: 4, medium: 11, low: 22 },
  { month: 'Jun', discovered: 29, patched: 32, remaining: 0, critical: 0, high: 3, medium: 9, low: 20 },
];

const assetSecurityData = [
  { asset: 'Web Servers', vulnerabilities: 5, threats: 12, score: 85, status: 'Protected' },
  { asset: 'Database Servers', vulnerabilities: 3, threats: 8, score: 92, status: 'Protected' },
  { asset: 'Network Devices', vulnerabilities: 7, threats: 15, score: 78, status: 'At Risk' },
  { asset: 'Endpoints', vulnerabilities: 12, threats: 25, score: 72, status: 'At Risk' },
  { asset: 'Cloud Infrastructure', vulnerabilities: 4, threats: 9, score: 88, status: 'Protected' },
  { asset: 'Mobile Devices', vulnerabilities: 8, threats: 18, score: 75, status: 'At Risk' },
];

const threatSources = [
  { source: 'Russia', threats: 45, percentage: 25, color: '#EF4444' },
  { source: 'China', threats: 38, percentage: 21, color: '#F97316' },
  { source: 'North Korea', threats: 32, percentage: 18, color: '#EAB308' },
  { source: 'Iran', threats: 28, percentage: 15, color: '#22C55E' },
  { source: 'Other', threats: 37, percentage: 21, color: '#8B5CF6' },
];

const recentThreats = [
  {
    id: 1,
    type: "Advanced Persistent Threat",
    source: "APT29 (Cozy Bear)",
    target: "Executive Email Accounts",
    severity: "critical",
    status: "contained",
    time: "2 minutes ago",
    details: "Sophisticated spear-phishing campaign targeting C-suite executives",
    indicators: ["malware_hash_abc123", "ip_192.168.1.100", "domain_evil.com"],
    impact: "High",
    response: "Automated containment + manual investigation"
  },
  {
    id: 2,
    type: "Ransomware Attack",
    source: "REvil Group",
    target: "File Servers",
    severity: "high",
    status: "blocked",
    time: "15 minutes ago",
    details: "Ransomware attempt blocked by next-gen antivirus",
    indicators: ["encrypted_files", "ransom_note.txt", "bitcoin_wallet"],
    impact: "Medium",
    response: "Automated blocking + threat hunting"
  },
  {
    id: 3,
    type: "DDoS Attack",
    source: "Unknown Botnet",
    target: "Web Infrastructure",
    severity: "medium",
    status: "mitigated",
    time: "1 hour ago",
    details: "Large-scale DDoS attack on web servers",
    indicators: ["high_traffic_volume", "bot_signatures", "geographic_patterns"],
    impact: "Low",
    response: "Traffic filtering + CDN protection"
  },
  {
    id: 4,
    type: "Insider Threat",
    source: "Internal User",
    target: "Sensitive Data",
    severity: "high",
    status: "investigating",
    time: "3 hours ago",
    details: "Unusual data access patterns detected",
    indicators: ["after_hours_access", "bulk_download", "external_upload"],
    impact: "High",
    response: "User account suspended + forensic analysis"
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
    description: "Across all assets",
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

export default function AdminAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedView, setSelectedView] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("all");

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

  const filteredThreats = recentThreats.filter(threat => {
    const matchesSearch = threat.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         threat.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         threat.target.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = selectedSeverity === "all" || threat.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'contained': return 'bg-green-100 text-green-800';
      case 'blocked': return 'bg-blue-100 text-blue-800';
      case 'mitigated': return 'bg-yellow-100 text-yellow-800';
      case 'investigating': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Advanced Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center shadow-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Threat Intelligence & Analytics
            </h1>
            <p className="text-sm text-gray-500">
              Real-time security analytics • {currentTime.toLocaleTimeString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* View Selector */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            {['overview', 'threats', 'assets', 'intelligence'].map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                  selectedView === view
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
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
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-200">
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
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-gray-500">{metric.description}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Threat Intelligence Chart */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Threat Intelligence Timeline</h3>
            <div className="flex items-center space-x-2">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={threatIntelligenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area type="monotone" dataKey="threats" stackId="1" stroke="#ef4444" fill="#fef2f2" />
              <Line type="monotone" dataKey="blocked" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
              <Bar dataKey="malware" fill="#f97316" />
              <Bar dataKey="phishing" fill="#eab308" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Security Posture */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Posture</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={securityPostureData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {securityPostureData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {securityPostureData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Asset Security & Threat Sources */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Asset Security Radar */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Asset Security Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={assetSecurityData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="asset" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Radar
                name="Security Score"
                dataKey="score"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Sources */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Threat Sources by Geography</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={threatSources} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="source" type="category" stroke="#6b7280" width={80} />
              <Tooltip />
              <Bar dataKey="threats" radius={[0, 4, 4, 0]}>
                {threatSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Threats Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Threat Intelligence</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search threats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Severities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threat Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredThreats.map((threat) => (
                <tr key={threat.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg ${getSeverityColor(threat.severity).split(' ')[1]} flex items-center justify-center`}>
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{threat.type}</p>
                        <p className="text-xs text-gray-500">{threat.details}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{threat.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{threat.target}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(threat.severity)}`}>
                      {threat.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(threat.status)}`}>
                      {threat.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{threat.time}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 