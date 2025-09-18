import React, { useState } from "react";
import {
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Shield,
  Star,
  Crown,
  Award,
  TrendingUp,
  Activity,
  Clock,
  Filter,
  MoreHorizontal,
  X,
  Check,
  AlertCircle,
  UserPlus,
  FileText,
  BarChart3,
  Settings,
  Trash2,
  Archive,
  RefreshCw,
  ExternalLink,
  Copy,
  Share2,
  MessageSquare,
  Video,
  Camera,
  Briefcase,
  Building,
  Globe,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Zap,
  Target,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Tag,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10,
  Hash as HashIcon11,
  Hash as HashIcon12,
  Hash as HashIcon13,
  Hash as HashIcon14,
  Hash as HashIcon15,
  Hash as HashIcon16,
  Hash as HashIcon17,
  Hash as HashIcon18,
  Hash as HashIcon19,
  Hash as HashIcon20,
  Hash as HashIcon21,
  Hash as HashIcon22,
  Hash as HashIcon23,
  Hash as HashIcon24,
  Hash as HashIcon25,
  Hash as HashIcon26,
  Hash as HashIcon27,
  Hash as HashIcon28,
  Hash as HashIcon29,
  Hash as HashIcon30,
  Hash as HashIcon31,
  Hash as HashIcon32,
  Hash as HashIcon33,
  Hash as HashIcon34,
  Hash as HashIcon35,
  Hash as HashIcon36,
  Hash as HashIcon37,
  Hash as HashIcon38,
  Hash as HashIcon39,
  Hash as HashIcon40,
  Hash as HashIcon41,
  Hash as HashIcon42,
  Hash as HashIcon43,
  Hash as HashIcon44,
  Hash as HashIcon45,
  Hash as HashIcon46,
  Hash as HashIcon47,
  Hash as HashIcon48,
  Hash as HashIcon49,
  Hash as HashIcon50,
  Hash as HashIcon51,
  Hash as HashIcon52,
  Hash as HashIcon53,
  Hash as HashIcon54,
  Hash as HashIcon55,
  Hash as HashIcon56,
  Hash as HashIcon57,
  Hash as HashIcon58,
  Hash as HashIcon59,
  Hash as HashIcon60,
  Hash as HashIcon61,
  Hash as HashIcon62,
  Hash as HashIcon63,
  Hash as HashIcon64,
  Hash as HashIcon65,
  Hash as HashIcon66,
  Hash as HashIcon67,
  Hash as HashIcon68,
  Hash as HashIcon69,
  Hash as HashIcon70,
  Hash as HashIcon71,
  Hash as HashIcon72,
  Hash as HashIcon73,
  Hash as HashIcon74,
  Hash as HashIcon75,
  Hash as HashIcon76,
  Hash as HashIcon77,
  Hash as HashIcon78,
  Hash as HashIcon79,
  Hash as HashIcon80,
  Hash as HashIcon81,
  Hash as HashIcon82,
  Hash as HashIcon83,
  Hash as HashIcon84,
  Hash as HashIcon85,
  Hash as HashIcon86,
  Hash as HashIcon87,
  Hash as HashIcon88,
  Hash as HashIcon89,
  Hash as HashIcon90,
  Hash as HashIcon91,
  Hash as HashIcon92,
  Hash as HashIcon93,
  Hash as HashIcon94,
  Hash as HashIcon95,
  Hash as HashIcon96,
  Hash as HashIcon97,
  Hash as HashIcon98,
  Hash as HashIcon99,
  Hash as HashIcon100
} from "lucide-react";

// Luxury Client Portfolio Data
const luxuryClients = [
  {
    id: 1,
    name: "Rothschild & Associates",
    email: "contact@rothschild-associates.com",
    phone: "(949) 396-0640",
    status: "Active",
    tier: "Platinum",
    revenue: "$2,847,500",
    lastActivity: "2 hours ago",
    projects: 24,
    avatar: "RA",
    industry: "Private Banking",
    location: "New York, NY",
    founded: 1848,
    employees: 2500,
    website: "www.rothschild-associates.com",
    description: "Premier private banking and wealth management services for ultra-high-net-worth individuals and institutional clients.",
    securityLevel: "Ultra-High",
    contractValue: "$15,000,000",
    renewalDate: "2024-12-15",
    primaryContact: {
      name: "Victoria Rothschild",
      title: "Chief Security Officer",
      email: "v.rothschild@rothschild-associates.com",
      phone: "(949) 396-0640"
    },
    services: ["Penetration Testing", "Security Audits", "Compliance", "Incident Response"],
    notes: "Extremely security-conscious client. Requires 24/7 monitoring and immediate threat response.",
    riskProfile: "Low",
    satisfaction: 98
  },
  {
    id: 2,
    name: "Windsor Capital Group",
    email: "security@windsorcapital.com",
    phone: "+44 20 7123 4567",
    status: "Active",
    tier: "Diamond",
    revenue: "$1,892,300",
    lastActivity: "1 day ago",
    projects: 18,
    avatar: "WC",
    industry: "Investment Banking",
    location: "London, UK",
    founded: 1892,
    employees: 1800,
    website: "www.windsorcapital.com",
    description: "Leading investment banking firm specializing in mergers & acquisitions and private equity.",
    securityLevel: "Ultra-High",
    contractValue: "$12,500,000",
    renewalDate: "2025-03-20",
    primaryContact: {
      name: "Sir James Windsor",
      title: "Managing Director",
      email: "j.windsor@windsorcapital.com",
      phone: "+44 20 7123 4568"
    },
    services: ["Security Assessments", "Threat Intelligence", "Compliance", "Training"],
    notes: "Family-owned business with strong emphasis on discretion and confidentiality.",
    riskProfile: "Low",
    satisfaction: 96
  },
  {
    id: 3,
    name: "Monaco Financial Services",
    email: "info@monacofinancial.mc",
    phone: "+377 93 25 00 00",
    status: "Active",
    tier: "Platinum",
    revenue: "$1,567,800",
    lastActivity: "3 hours ago",
    projects: 15,
    avatar: "MF",
    industry: "Private Banking",
    location: "Monte Carlo, Monaco",
    founded: 1956,
    employees: 850,
    website: "www.monacofinancial.mc",
    description: "Exclusive private banking services for Monaco's elite clientele and international high-net-worth individuals.",
    securityLevel: "Ultra-High",
    contractValue: "$8,750,000",
    renewalDate: "2024-11-30",
    primaryContact: {
      name: "Princess Isabella Monaco",
      title: "Director of Operations",
      email: "i.monaco@monacofinancial.mc",
      phone: "+377 93 25 00 01"
    },
    services: ["Penetration Testing", "Security Audits", "Compliance", "Incident Response"],
    notes: "Requires absolute discretion. All communications must be encrypted and secure.",
    riskProfile: "Low",
    satisfaction: 97
  },
  {
    id: 4,
    name: "Dubai Royal Investments",
    email: "security@dubairoyal.ae",
    phone: "+971 4 123 4567",
    status: "Active",
    tier: "Diamond",
    revenue: "$3,245,600",
    lastActivity: "30 minutes ago",
    projects: 31,
    avatar: "DR",
    industry: "Sovereign Wealth",
    location: "Dubai, UAE",
    founded: 2006,
    employees: 3200,
    website: "www.dubairoyal.ae",
    description: "Sovereign wealth fund managing strategic investments across technology, real estate, and energy sectors.",
    securityLevel: "Ultra-High",
    contractValue: "$25,000,000",
    renewalDate: "2025-06-15",
    primaryContact: {
      name: "Sheikh Ahmed Al-Rashid",
      title: "Chief Technology Officer",
      email: "a.alrashid@dubairoyal.ae",
      phone: "+971 4 123 4568"
    },
    services: ["Advanced Threat Protection", "Security Audits", "Compliance", "Incident Response"],
    notes: "Critical infrastructure client. Requires military-grade security protocols.",
    riskProfile: "Medium",
    satisfaction: 99
  },
  {
    id: 5,
    name: "Singapore Heritage Bank",
    email: "cybersecurity@heritagebank.sg",
    phone: "+65 6123 4567",
    status: "Active",
    tier: "Platinum",
    revenue: "$1,934,200",
    lastActivity: "5 minutes ago",
    projects: 22,
    avatar: "SH",
    industry: "Private Banking",
    location: "Singapore",
    founded: 1923,
    employees: 2100,
    website: "www.heritagebank.sg",
    description: "Century-old private banking institution serving Asia's most distinguished families and corporations.",
    securityLevel: "Ultra-High",
    contractValue: "$18,500,000",
    renewalDate: "2025-01-10",
    primaryContact: {
      name: "Madam Li Wei Chen",
      title: "Chief Information Security Officer",
      email: "l.chen@heritagebank.sg",
      phone: "+65 6123 4568"
    },
    services: ["Security Assessments", "Threat Intelligence", "Compliance", "Training"],
    notes: "Traditional bank with modern security needs. Excellent long-term relationship.",
    riskProfile: "Low",
    satisfaction: 95
  }
];

const tierConfig = {
  Diamond: {
    color: "from-amber-400 to-yellow-600",
    bgColor: "bg-gradient-to-r from-amber-400 to-yellow-600",
    borderColor: "border-amber-200",
    icon: Crown,
    description: "Ultra-Premium Tier"
  },
  Platinum: {
    color: "from-slate-400 to-gray-600",
    bgColor: "bg-gradient-to-r from-slate-400 to-gray-600",
    borderColor: "border-slate-200",
    icon: Star,
    description: "Premium Tier"
  },
  Gold: {
    color: "from-yellow-400 to-orange-600",
    bgColor: "bg-gradient-to-r from-yellow-400 to-orange-600",
    borderColor: "border-yellow-200",
    icon: Award,
    description: "Executive Tier"
  }
};

const statusConfig = {
  Active: {
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    icon: Check
  },
  Inactive: {
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    icon: Clock
  },
  Pending: {
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: AlertCircle
  }
};

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedClient, setSelectedClient] = useState<typeof luxuryClients[0] | null>(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const filteredClients = luxuryClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === "All" || client.tier === selectedTier;
    const matchesStatus = selectedStatus === "All" || client.status === selectedStatus;
    return matchesSearch && matchesTier && matchesStatus;
  });

  const totalRevenue = luxuryClients.reduce((sum, client) => {
    return sum + parseInt(client.revenue.replace(/[$,]/g, ''));
  }, 0);

  const handleViewClient = (client: typeof luxuryClients[0]) => {
    setSelectedClient(client);
    setShowClientModal(true);
  };

  const handleAddClient = () => {
    setShowAddClientModal(true);
  };

  const handleExportData = () => {
    // Simulate export functionality
    const data = JSON.stringify(luxuryClients, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'luxury-clients-portfolio.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Luxury Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 via-slate-800/10 to-slate-900/5"></div>
        <div className="relative p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl">
                    <Crown className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                      Client Portfolio
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                      Managing the world's most distinguished clientele
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleAddClient}
                  className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl shadow-2xl hover:shadow-slate-900/25 font-semibold text-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add Client</span>
                  </div>
                </button>
                
                <button 
                  onClick={handleExportData}
                  className="group relative px-8 py-4 bg-white/80 backdrop-blur-xl border border-slate-200/50 text-slate-700 rounded-2xl shadow-xl hover:shadow-2xl font-semibold text-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Export Portfolio</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Statistics */}
      <div className="px-8 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-white/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl">
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{luxuryClients.length}</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Total Clients</div>
                </div>
              </div>
            </div>
            
            <div className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-white/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 flex items-center justify-center shadow-2xl">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{luxuryClients.filter(c => c.status === 'Active').length}</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Active Clients</div>
                </div>
              </div>
            </div>
            
            <div className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-white/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center shadow-2xl">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{luxuryClients.filter(c => c.tier === 'Diamond').length}</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Diamond Tier</div>
                </div>
              </div>
            </div>
            
            <div className="group relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-white/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 flex items-center justify-center shadow-2xl">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">${(totalRevenue / 1000000).toFixed(1)}M</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Total Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Filters */}
      <div className="px-8 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Search */}
              <div className="relative flex-1 lg:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search clients by name, email, or industry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
                />
              </div>

              {/* Tier Filter */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-6 py-4 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="All">All Tiers</option>
                <option value="Diamond">Diamond</option>
                <option value="Platinum">Platinum</option>
                <option value="Gold">Gold</option>
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-6 py-4 bg-slate-50/80 border border-slate-200/50 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Clients Table */}
      <div className="px-8 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/50">
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Client</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Tier</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Revenue</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Projects</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Last Activity</th>
                    <th className="px-8 py-6 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/50">
                  {filteredClients.map((client, index) => (
                    <tr 
                      key={client.id} 
                      className="hover:bg-slate-50/80 transition-all duration-500 group cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => handleViewClient(client)}
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 rounded-2xl ${tierConfig[client.tier as keyof typeof tierConfig].bgColor} flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110`}>
                            <span className="text-white font-bold text-lg">{client.avatar}</span>
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-lg group-hover:text-slate-700 transition-colors duration-300">{client.name}</div>
                            <div className="text-sm text-slate-500 font-medium">{client.industry}</div>
                            <div className="text-xs text-slate-400 flex items-center space-x-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              <span>{client.location}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-2">
                          <span className={`px-4 py-2 rounded-2xl text-xs font-bold text-white ${tierConfig[client.tier as keyof typeof tierConfig].bgColor} shadow-lg`}>
                            {client.tier}
                          </span>
                                                     {React.createElement(tierConfig[client.tier as keyof typeof tierConfig].icon, { className: "w-4 h-4 text-amber-500" })}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="font-bold text-slate-900 text-xl">{client.revenue}</div>
                        <div className="text-xs text-slate-500">Contract: {client.contractValue}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-lg">{client.projects}</span>
                          <span className="text-sm text-slate-500">active</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-4 py-2 rounded-2xl text-xs font-bold border ${statusConfig[client.status as keyof typeof statusConfig].bgColor} ${statusConfig[client.status as keyof typeof statusConfig].borderColor} ${statusConfig[client.status as keyof typeof statusConfig].color}`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm text-slate-600 font-medium">{client.lastActivity}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewClient(client);
                            }}
                            className="p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-3 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md">
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredClients.length === 0 && (
              <div className="text-center py-20">
                <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center shadow-2xl">
                  <Search className="w-16 h-16 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No clients found</h3>
                <p className="text-slate-600 font-medium mb-8">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTier("All");
                    setSelectedStatus("All");
                  }}
                  className="px-6 py-3 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Client Details Modal */}
      {showClientModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-slate-200 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl ${tierConfig[selectedClient.tier as keyof typeof tierConfig].bgColor} flex items-center justify-center shadow-2xl`}>
                    <span className="text-white font-bold text-xl">{selectedClient.avatar}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedClient.name}</h2>
                    <p className="text-slate-600 font-medium">{selectedClient.industry}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowClientModal(false)}
                  className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              {/* Client Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Company Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Founded:</span>
                        <span className="font-medium text-slate-900">{selectedClient.founded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Employees:</span>
                        <span className="font-medium text-slate-900">{selectedClient.employees.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Location:</span>
                        <span className="font-medium text-slate-900">{selectedClient.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Website:</span>
                        <a href={`https://${selectedClient.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-700">
                          {selectedClient.website}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Primary Contact</h3>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="font-medium text-slate-900">{selectedClient.primaryContact.name}</div>
                      <div className="text-sm text-slate-600">{selectedClient.primaryContact.title}</div>
                      <div className="text-sm text-slate-600">{selectedClient.primaryContact.email}</div>
                      <div className="text-sm text-slate-600">{selectedClient.primaryContact.phone}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Financial Overview</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Annual Revenue:</span>
                        <span className="font-bold text-slate-900 text-lg">{selectedClient.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Contract Value:</span>
                        <span className="font-medium text-slate-900">{selectedClient.contractValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Renewal Date:</span>
                        <span className="font-medium text-slate-900">{selectedClient.renewalDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Satisfaction Score:</span>
                        <span className="font-medium text-slate-900">{selectedClient.satisfaction}%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Security Profile</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Security Level:</span>
                        <span className="font-medium text-emerald-600">{selectedClient.securityLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Risk Profile:</span>
                        <span className={`font-medium ${selectedClient.riskProfile === 'Low' ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {selectedClient.riskProfile}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Active Projects:</span>
                        <span className="font-medium text-slate-900">{selectedClient.projects}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Active Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedClient.services.map((service, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-medium text-slate-900">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Client Notes</h3>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
                  <p className="text-slate-700">{selectedClient.notes}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Company Description</h3>
                <p className="text-slate-700 leading-relaxed">{selectedClient.description}</p>
              </div>
            </div>
            
            <div className="sticky bottom-0 bg-white rounded-b-3xl border-t border-slate-200 p-8">
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setShowClientModal(false)}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl hover:bg-slate-200 transition-colors duration-300"
                >
                  Close
                </button>
                <button className="px-6 py-3 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-colors duration-300">
                  Edit Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Modal */}
      {showAddClientModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl">
            <div className="p-8 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Add New Client</h2>
                <button 
                  onClick={() => setShowAddClientModal(false)}
                  className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" placeholder="contact@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" placeholder="(949) 396-0640" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                    <option>Private Banking</option>
                    <option>Investment Banking</option>
                    <option>Sovereign Wealth</option>
                    <option>Technology</option>
                    <option>Real Estate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tier</label>
                  <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500">
                    <option>Diamond</option>
                    <option>Platinum</option>
                    <option>Gold</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" placeholder="City, Country" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" placeholder="Brief description of the company..."></textarea>
              </div>
            </div>
            
            <div className="p-8 border-t border-slate-200">
              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setShowAddClientModal(false)}
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl hover:bg-slate-200 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-colors duration-300">
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 