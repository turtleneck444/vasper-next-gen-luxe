import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
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
  Router,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Calendar,
  DollarSign,
  UserCheck,
  ShieldCheck,
  AlertCircle,
  Play,
  Pause,
  Square,
  X
} from "lucide-react";

// Advanced Security Projects Data
const securityProjects = [
  {
    id: 1,
    name: "Enterprise Network Security Assessment",
    client: "Acme Corporation",
    type: "Penetration Testing",
    status: "In Progress",
    priority: "High",
    startDate: "2024-06-01",
    endDate: "2024-06-15",
    progress: 65,
    budget: "$25,000",
    team: ["John Smith", "Sarah Johnson", "Mike Chen"],
    vulnerabilities: {
      critical: 2,
      high: 8,
      medium: 15,
      low: 23
    },
    riskScore: 78,
    description: "Comprehensive security assessment of corporate network infrastructure including web applications, APIs, and internal systems.",
    findings: [
      { severity: "Critical", title: "SQL Injection in Admin Panel", status: "Open" },
      { severity: "High", title: "Weak Password Policy", status: "In Progress" },
      { severity: "Medium", title: "Missing Security Headers", status: "Resolved" }
    ]
  },
  {
    id: 2,
    name: "Cloud Infrastructure Security Audit",
    client: "Globex Industries",
    type: "Security Audit",
    status: "Completed",
    priority: "Medium",
    startDate: "2024-05-15",
    endDate: "2024-05-30",
    progress: 100,
    budget: "$18,500",
    team: ["Alex Rodriguez", "Lisa Wang"],
    vulnerabilities: {
      critical: 0,
      high: 3,
      medium: 12,
      low: 18
    },
    riskScore: 42,
    description: "Security audit of AWS cloud infrastructure including IAM policies, VPC configuration, and data protection measures.",
    findings: [
      { severity: "High", title: "Overly Permissive IAM Role", status: "Resolved" },
      { severity: "Medium", title: "Unencrypted S3 Bucket", status: "Resolved" },
      { severity: "Low", title: "Missing CloudTrail Logging", status: "Resolved" }
    ]
  },
  {
    id: 3,
    name: "Mobile Application Security Testing",
    client: "Initech Solutions",
    type: "Mobile Security",
    status: "Planning",
    priority: "High",
    startDate: "2024-06-20",
    endDate: "2024-07-05",
    progress: 15,
    budget: "$12,000",
    team: ["David Kim", "Emma Thompson"],
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0
    },
    riskScore: 0,
    description: "Security testing of iOS and Android mobile applications including reverse engineering, API testing, and data storage analysis.",
    findings: []
  },
  {
    id: 4,
    name: "Compliance Assessment - SOC 2 Type II",
    client: "Wayne Enterprises",
    type: "Compliance",
    status: "In Progress",
    priority: "Critical",
    startDate: "2024-05-01",
    endDate: "2024-08-01",
    progress: 45,
    budget: "$45,000",
    team: ["Rachel Green", "Tom Anderson", "Maria Garcia", "James Wilson"],
    vulnerabilities: {
      critical: 1,
      high: 5,
      medium: 22,
      low: 35
    },
    riskScore: 85,
    description: "Comprehensive SOC 2 Type II compliance assessment covering security, availability, processing integrity, confidentiality, and privacy.",
    findings: [
      { severity: "Critical", title: "Missing Access Controls", status: "Open" },
      { severity: "High", title: "Inadequate Backup Procedures", status: "In Progress" },
      { severity: "Medium", title: "Documentation Gaps", status: "Open" }
    ]
  },
  {
    id: 5,
    name: "Incident Response Readiness Assessment",
    client: "Stark Industries",
    type: "Incident Response",
    status: "Completed",
    priority: "High",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    progress: 100,
    budget: "$22,000",
    team: ["Tony Stark", "Pepper Potts", "Happy Hogan"],
    vulnerabilities: {
      critical: 0,
      high: 2,
      medium: 8,
      low: 15
    },
    riskScore: 35,
    description: "Assessment of incident response capabilities including tabletop exercises, playbook review, and team readiness evaluation.",
    findings: [
      { severity: "High", title: "Slow Response Time", status: "Resolved" },
      { severity: "Medium", title: "Incomplete Playbooks", status: "Resolved" },
      { severity: "Low", title: "Training Gaps", status: "Resolved" }
    ]
  }
];

const projectTypes = [
  { name: "Penetration Testing", count: 12, color: "#EF4444" },
  { name: "Security Audit", count: 8, color: "#F97316" },
  { name: "Compliance", count: 6, color: "#EAB308" },
  { name: "Incident Response", count: 4, color: "#22C55E" },
  { name: "Mobile Security", count: 3, color: "#8B5CF6" }
];

const vulnerabilityTrends = [
  { month: 'Jan', discovered: 45, resolved: 42, critical: 2, high: 8 },
  { month: 'Feb', discovered: 38, resolved: 40, critical: 0, high: 5 },
  { month: 'Mar', discovered: 52, resolved: 48, critical: 3, high: 10 },
  { month: 'Apr', discovered: 41, resolved: 44, critical: 1, high: 6 },
  { month: 'May', discovered: 35, resolved: 37, critical: 0, high: 4 },
  { month: 'Jun', discovered: 29, resolved: 32, critical: 0, high: 3 }
];

const statusColors = {
  "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
  "Completed": "bg-green-100 text-green-800 border-green-200",
  "Planning": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "On Hold": "bg-gray-100 text-gray-800 border-gray-200"
};

const priorityColors = {
  "Critical": "bg-red-100 text-red-800 border-red-200",
  "High": "bg-orange-100 text-orange-800 border-orange-200",
  "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Low": "bg-green-100 text-green-800 border-green-200"
};

export default function AdminProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof securityProjects[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = securityProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesPriority = selectedPriority === "All" || project.priority === selectedPriority;
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600 bg-red-50 border-red-200";
    if (score >= 60) return "text-orange-600 bg-orange-50 border-orange-200";
    if (score >= 40) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  const totalVulnerabilities = securityProjects.reduce((acc, project) => {
    return {
      critical: acc.critical + project.vulnerabilities.critical,
      high: acc.high + project.vulnerabilities.high,
      medium: acc.medium + project.vulnerabilities.medium,
      low: acc.low + project.vulnerabilities.low
    };
  }, { critical: 0, high: 0, medium: 0, low: 0 });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-600 to-red-500 flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Vulnerability Management
            </h1>
            <p className="text-sm text-gray-500">
              Security assessments, penetration testing & compliance projects
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium text-sm">New Project</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200">
            <Download className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 font-medium text-sm">Export</span>
          </button>
        </div>
      </div>

      {/* Security Metrics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{securityProjects.filter(p => p.status === "In Progress").length}</p>
              <p className="text-xs text-gray-500">Currently running</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Critical Vulnerabilities</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{totalVulnerabilities.critical}</p>
              <p className="text-xs text-gray-500">Require immediate attention</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">High Priority</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{securityProjects.filter(p => p.priority === "High" || p.priority === "Critical").length}</p>
              <p className="text-xs text-gray-500">Projects requiring focus</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center">
              <Target className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{securityProjects.filter(p => p.status === "Completed").length}</p>
              <p className="text-xs text-gray-500">This quarter</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Vulnerability Trends */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Vulnerability Discovery Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vulnerabilityTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="discovered" stroke="#ef4444" strokeWidth={3} name="Discovered" />
              <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={3} name="Resolved" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Project Types Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="count"
              >
                {projectTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {projectTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }}></div>
                  <span className="text-gray-700">{type.name}</span>
                </div>
                <span className="font-semibold text-gray-900">{type.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Security Projects</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All">All Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Planning">Planning</option>
                <option value="On Hold">On Hold</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All">All Types</option>
                <option value="Penetration Testing">Penetration Testing</option>
                <option value="Security Audit">Security Audit</option>
                <option value="Compliance">Compliance</option>
                <option value="Incident Response">Incident Response</option>
                <option value="Mobile Security">Mobile Security</option>
              </select>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{project.name}</p>
                        <p className="text-xs text-gray-500">{project.description.substring(0, 60)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{project.client}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{project.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${priorityColors[project.priority as keyof typeof priorityColors]}`}>
                      {project.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getRiskScoreColor(project.riskScore)}`}>
                      {project.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedProject(project);
                          setShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View
                      </button>
                      <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">{selectedProject.name}</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Project Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Client:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedProject.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Budget:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedProject.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Timeline:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedProject.startDate} - {selectedProject.endDate}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Vulnerabilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <p className="text-2xl font-bold text-red-600">{selectedProject.vulnerabilities.critical}</p>
                      <p className="text-xs text-red-600">Critical</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{selectedProject.vulnerabilities.high}</p>
                      <p className="text-xs text-orange-600">High</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <p className="text-2xl font-bold text-yellow-600">{selectedProject.vulnerabilities.medium}</p>
                      <p className="text-xs text-yellow-600">Medium</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{selectedProject.vulnerabilities.low}</p>
                      <p className="text-xs text-green-600">Low</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.team.map((member, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Findings */}
              {selectedProject.findings.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Findings</h3>
                  <div className="space-y-3">
                    {selectedProject.findings.map((finding, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            finding.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                            finding.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {finding.severity}
                          </span>
                          <span className="text-sm font-medium text-gray-900">{finding.title}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          finding.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                          finding.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {finding.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors">
                Edit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 