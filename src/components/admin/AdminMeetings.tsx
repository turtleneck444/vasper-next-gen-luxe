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
  X,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Share,
  MessageSquare,
  Phone,
  PhoneOff,
  Settings,
  Users as UsersIcon,
  FileText as FileTextIcon,
  Presentation,
  Camera,
  Headphones,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop,
  Globe as GlobeIcon,
  MapPin,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  User,
  UserPlus,
  UserMinus,
  MessageCircle,
  Send,
  Paperclip,
  Image,
  File,
  Link,
  MoreHorizontal,
  Star,
  StarOff,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Printer,
  Mail,
  Copy,
  Eye as EyeIcon,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Wifi as WifiIcon,
  Signal,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  WifiOff,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero
} from "lucide-react";

// Advanced Virtual Meeting Data
const securityMeetings = [
  {
    id: 1,
    title: "Quarterly Security Review - Acme Corp",
    type: "Security Briefing",
    client: "Acme Corporation",
    date: "2024-06-10",
    time: "10:00 AM",
    duration: "90 minutes",
    status: "Scheduled",
    priority: "High",
    participants: [
      { name: "John Smith", role: "Security Analyst", email: "john@veloratek.com", avatar: "JS", status: "confirmed" },
      { name: "Sarah Johnson", role: "Client Security Officer", email: "sarah@acme.com", avatar: "SJ", status: "confirmed" },
      { name: "Mike Chen", role: "Network Engineer", email: "mike@veloratek.com", avatar: "MC", status: "pending" },
      { name: "Lisa Wang", role: "IT Director", email: "lisa@acme.com", avatar: "LW", status: "confirmed" }
    ],
    agenda: [
      "Security posture review",
      "Threat intelligence briefing",
      "Vulnerability assessment results",
      "Incident response updates",
      "Compliance status check"
    ],
    meetingLink: "https://meet.veloratek.com/acme-q2-2024",
    passcode: "Acme2024!",
    recording: true,
    transcription: true,
    securityLevel: "Confidential",
    room: "Virtual Security Operations Center",
    notes: "Focus on recent phishing attempts and new security measures implementation."
  },
  {
    id: 2,
    title: "Incident Response Tabletop Exercise",
    type: "Training Session",
    client: "Globex Industries",
    date: "2024-06-11",
    time: "2:00 PM",
    duration: "120 minutes",
    status: "Completed",
    priority: "Critical",
    participants: [
      { name: "Alex Rodriguez", role: "Incident Response Lead", email: "alex@veloratek.com", avatar: "AR", status: "attended" },
      { name: "Emma Thompson", role: "Security Manager", email: "emma@globex.com", avatar: "ET", status: "attended" },
      { name: "David Kim", role: "SOC Analyst", email: "david@veloratek.com", avatar: "DK", status: "attended" },
      { name: "Rachel Green", role: "IT Manager", email: "rachel@globex.com", avatar: "RG", status: "attended" }
    ],
    agenda: [
      "Ransomware attack scenario",
      "Response team coordination",
      "Communication protocols",
      "Recovery procedures",
      "Lessons learned discussion"
    ],
    meetingLink: "https://meet.veloratek.com/globex-ir-exercise",
    passcode: "GlobexIR2024",
    recording: true,
    transcription: true,
    securityLevel: "Top Secret",
    room: "Incident Response Command Center",
    notes: "Excellent team coordination. Need to improve communication with external stakeholders.",
    outcomes: [
      "Response time improved by 15%",
      "New communication protocols established",
      "Additional training identified for IT team"
    ]
  },
  {
    id: 3,
    title: "Compliance Audit Preparation",
    type: "Compliance Review",
    client: "Wayne Enterprises",
    date: "2024-06-12",
    time: "9:00 AM",
    duration: "60 minutes",
    status: "Scheduled",
    priority: "High",
    participants: [
      { name: "Bruce Wayne", role: "CEO", email: "bruce@wayneent.com", avatar: "BW", status: "confirmed" },
      { name: "Alfred Pennyworth", role: "CTO", email: "alfred@wayneent.com", avatar: "AP", status: "confirmed" },
      { name: "Tom Anderson", role: "Compliance Officer", email: "tom@veloratek.com", avatar: "TA", status: "confirmed" },
      { name: "Maria Garcia", role: "Audit Specialist", email: "maria@veloratek.com", avatar: "MG", status: "pending" }
    ],
    agenda: [
      "SOC 2 Type II audit preparation",
      "Documentation review",
      "Control testing procedures",
      "Evidence collection planning",
      "Timeline and milestones"
    ],
    meetingLink: "https://meet.veloratek.com/wayne-compliance-2024",
    passcode: "WayneSOC2024",
    recording: false,
    transcription: true,
    securityLevel: "Confidential",
    room: "Compliance Review Room",
    notes: "Prepare all documentation for external auditor review."
  },
  {
    id: 4,
    title: "New Client Onboarding - Stark Industries",
    type: "Client Introduction",
    client: "Stark Industries",
    date: "2024-06-13",
    time: "11:00 AM",
    duration: "45 minutes",
    status: "Scheduled",
    priority: "Medium",
    participants: [
      { name: "Tony Stark", role: "CEO", email: "tony@stark.com", avatar: "TS", status: "confirmed" },
      { name: "Pepper Potts", role: "COO", email: "pepper@stark.com", avatar: "PP", status: "confirmed" },
      { name: "Happy Hogan", role: "Security Director", email: "happy@stark.com", avatar: "HH", status: "confirmed" },
      { name: "James Wilson", role: "Account Manager", email: "james@veloratek.com", avatar: "JW", status: "confirmed" }
    ],
    agenda: [
      "Service overview presentation",
      "Security assessment scope",
      "Timeline and deliverables",
      "Team introductions",
      "Next steps and expectations"
    ],
    meetingLink: "https://meet.veloratek.com/stark-onboarding",
    passcode: "StarkWelcome2024",
    recording: true,
    transcription: true,
    securityLevel: "Internal",
    room: "Client Presentation Hall",
    notes: "Focus on AI security and advanced threat protection capabilities."
  },
  {
    id: 5,
    title: "Threat Intelligence Sharing Session",
    type: "Intelligence Briefing",
    client: "Multiple Clients",
    date: "2024-06-14",
    time: "3:00 PM",
    duration: "75 minutes",
    status: "Scheduled",
    priority: "High",
    participants: [
      { name: "Rachel Green", role: "Threat Intel Analyst", email: "rachel@veloratek.com", avatar: "RG", status: "confirmed" },
      { name: "Various Clients", role: "Security Teams", email: "clients@veloratek.com", avatar: "VC", status: "confirmed" }
    ],
    agenda: [
      "Latest threat landscape overview",
      "Emerging attack vectors",
      "APT group activities",
      "Defense recommendations",
      "Q&A session"
    ],
    meetingLink: "https://meet.veloratek.com/threat-intel-june2024",
    passcode: "ThreatIntel2024",
    recording: true,
    transcription: true,
    securityLevel: "Confidential",
    room: "Threat Intelligence Center",
    notes: "Share latest findings on nation-state actors and ransomware groups."
  }
];

const meetingTypes = [
  { name: "Security Briefing", count: 8, color: "#EF4444" },
  { name: "Training Session", count: 5, color: "#F97316" },
  { name: "Compliance Review", count: 4, color: "#EAB308" },
  { name: "Client Introduction", count: 3, color: "#22C55E" },
  { name: "Intelligence Briefing", count: 2, color: "#8B5CF6" }
];

const meetingStats = [
  { month: 'Jan', scheduled: 12, completed: 11, cancelled: 1, avgDuration: 75 },
  { month: 'Feb', scheduled: 15, completed: 14, cancelled: 1, avgDuration: 82 },
  { month: 'Mar', scheduled: 18, completed: 17, cancelled: 1, avgDuration: 78 },
  { month: 'Apr', scheduled: 14, completed: 13, cancelled: 1, avgDuration: 85 },
  { month: 'May', scheduled: 16, completed: 15, cancelled: 1, avgDuration: 80 },
  { month: 'Jun', scheduled: 20, completed: 18, cancelled: 2, avgDuration: 88 }
];

const statusColors = {
  "Scheduled": "bg-blue-100 text-blue-800 border-blue-200",
  "Completed": "bg-green-100 text-green-800 border-green-200",
  "Cancelled": "bg-red-100 text-red-800 border-red-200",
  "In Progress": "bg-yellow-100 text-yellow-800 border-yellow-200"
};

const priorityColors = {
  "Critical": "bg-red-100 text-red-800 border-red-200",
  "High": "bg-orange-100 text-orange-800 border-orange-200",
  "Medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Low": "bg-green-100 text-green-800 border-green-200"
};

const securityLevelColors = {
  "Top Secret": "bg-red-100 text-red-800 border-red-200",
  "Confidential": "bg-orange-100 text-orange-800 border-orange-200",
  "Internal": "bg-blue-100 text-blue-800 border-blue-200",
  "Public": "bg-green-100 text-green-800 border-green-200"
};

export default function AdminMeetings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [selectedMeeting, setSelectedMeeting] = useState<typeof securityMeetings[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showMeetingRoom, setShowMeetingRoom] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const filteredMeetings = securityMeetings.filter(meeting => {
    const matchesSearch = meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meeting.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "All" || meeting.status === selectedStatus;
    const matchesType = selectedType === "All" || meeting.type === selectedType;
    const matchesPriority = selectedPriority === "All" || meeting.priority === selectedPriority;
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  const upcomingMeetings = securityMeetings.filter(meeting => meeting.status === "Scheduled");
  const completedMeetings = securityMeetings.filter(meeting => meeting.status === "Completed");

  const handleJoinMeeting = (meeting: typeof securityMeetings[0]) => {
    setSelectedMeeting(meeting);
    setShowMeetingRoom(true);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-500 flex items-center justify-center shadow-lg">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Virtual Security Meetings
            </h1>
            <p className="text-sm text-gray-500">
              Client security reviews, training sessions & intelligence briefings
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium text-sm">Schedule Meeting</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 font-medium text-sm">Calendar View</span>
          </button>
        </div>
      </div>

      {/* Meeting Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Upcoming Meetings</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{upcomingMeetings.length}</p>
              <p className="text-xs text-gray-500">Next 7 days</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{completedMeetings.length}</p>
              <p className="text-xs text-gray-500">This month</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total Participants</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">47</p>
              <p className="text-xs text-gray-500">Across all meetings</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Avg Duration</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">82 min</p>
              <p className="text-xs text-gray-500">Per meeting</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Meeting Statistics */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Meeting Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={meetingStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="scheduled" fill="#3b82f6" name="Scheduled" />
              <Bar dataKey="completed" fill="#10b981" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Meeting Types Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Meeting Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={meetingTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="count"
              >
                {meetingTypes.map((type, index) => (
                  <Cell key={`cell-${index}`} fill={type.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {meetingTypes.map((type, index) => (
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

      {/* Meetings Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Security Meetings</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search meetings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
                <option value="In Progress">In Progress</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Types</option>
                <option value="Security Briefing">Security Briefing</option>
                <option value="Training Session">Training Session</option>
                <option value="Compliance Review">Compliance Review</option>
                <option value="Client Introduction">Client Introduction</option>
                <option value="Intelligence Briefing">Intelligence Briefing</option>
              </select>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meeting</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredMeetings.map((meeting) => (
                <tr key={meeting.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{meeting.title}</p>
                        <p className="text-xs text-gray-500">{meeting.duration} • {meeting.securityLevel}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">{meeting.client}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-900">{meeting.date}</p>
                      <p className="text-xs text-gray-500">{meeting.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{meeting.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[meeting.status as keyof typeof statusColors]}`}>
                      {meeting.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-700">{meeting.participants.length}</span>
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center space-x-2">
                      {meeting.status === "Scheduled" && (
                        <button 
                          onClick={() => handleJoinMeeting(meeting)}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Join
                        </button>
                      )}
                      <button 
                        onClick={() => {
                          setSelectedMeeting(meeting);
                          setShowModal(true);
                        }}
                        className="text-gray-700 hover:text-gray-900 font-medium text-sm"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Meeting Details Modal */}
      {showModal && selectedMeeting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">{selectedMeeting.title}</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Meeting Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Client:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedMeeting.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Type:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedMeeting.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Date & Time:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedMeeting.date} at {selectedMeeting.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium text-gray-900">{selectedMeeting.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Security Level:</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${securityLevelColors[selectedMeeting.securityLevel as keyof typeof securityLevelColors]}`}>
                        {selectedMeeting.securityLevel}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Access</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Meeting Link:</p>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text" 
                          value={selectedMeeting.meetingLink}
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                        />
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Passcode:</p>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text" 
                          value={selectedMeeting.passcode}
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
                        />
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" checked={selectedMeeting.recording} readOnly className="rounded" />
                        <span className="text-sm text-gray-700">Recording</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" checked={selectedMeeting.transcription} readOnly className="rounded" />
                        <span className="text-sm text-gray-700">Transcription</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participants */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Participants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMeeting.participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{participant.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                        <p className="text-xs text-gray-500">{participant.role}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        participant.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        participant.status === 'attended' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {participant.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Agenda</h3>
                <div className="space-y-2">
                  {selectedMeeting.agenda.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {selectedMeeting.notes && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{selectedMeeting.notes}</p>
                </div>
              )}

              {/* Outcomes for completed meetings */}
              {selectedMeeting.outcomes && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meeting Outcomes</h3>
                  <div className="space-y-2">
                    {selectedMeeting.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              {selectedMeeting.status === "Scheduled" && (
                <button 
                  onClick={() => {
                    setShowModal(false);
                    handleJoinMeeting(selectedMeeting);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Join Meeting
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Virtual Meeting Room */}
      {showMeetingRoom && selectedMeeting && (
        <div className="fixed inset-0 bg-black flex flex-col z-50">
          {/* Meeting Header */}
          <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold">{selectedMeeting.title}</h2>
              <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">LIVE</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">{selectedMeeting.client}</span>
              <button 
                onClick={() => setShowMeetingRoom(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Meeting Area */}
          <div className="flex-1 flex">
            {/* Video Area */}
            <div className="flex-1 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <Video className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-lg font-semibold">Security Operations Center</p>
                  <p className="text-sm text-gray-400">Meeting in progress</p>
                </div>
              </div>
              
              {/* Participant Grid */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
                {selectedMeeting.participants.slice(0, 4).map((participant, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-2 text-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-semibold">{participant.avatar}</span>
                    </div>
                    <p className="text-xs text-white">{participant.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-gray-900 flex flex-col">
              {/* Controls */}
              <div className="p-4 border-b border-gray-700">
                <div className="grid grid-cols-4 gap-2">
                  <button 
                    onClick={toggleMute}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      isMuted ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={toggleVideo}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      !isVideoOn ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {!isVideoOn ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={toggleScreenShare}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      isScreenSharing ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Share className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={toggleRecording}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      isRecording ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-current"></div>
                  </button>
                </div>
              </div>

              {/* Participants List */}
              <div className="flex-1 p-4 overflow-y-auto">
                <h3 className="text-white font-semibold mb-4">Participants ({selectedMeeting.participants.length})</h3>
                <div className="space-y-2">
                  {selectedMeeting.participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{participant.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-medium">{participant.name}</p>
                        <p className="text-xs text-gray-400">{participant.role}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Mic className="w-4 h-4 text-green-400" />
                        <Video className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-semibold">Chat</span>
                </div>
                <div className="h-32 bg-gray-800 rounded-lg p-3 mb-3 overflow-y-auto">
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">John Smith: Meeting starting in 2 minutes</div>
                    <div className="text-xs text-gray-400">Sarah Johnson: Ready for the security review</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 