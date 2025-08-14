import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Presentation,
  Camera,
  Headphones,
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
  EyeOff,
  Unlock,
  Key,
  Fingerprint,
  Signal,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  WifiOff,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  ToggleLeft,
  ToggleRight,
  Check,
  ChevronDown,
  ChevronRight,
  Info,
  HelpCircle,
  Moon,
  Sun,
  Palette,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Grid,
  Columns,
  Rows,
  Layout,
  Sidebar,
  SidebarClose,
  Maximize2,
  Minimize2,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Crop,
  Scissors,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderSearch,
  FolderHeart,
  FolderKey,
  FolderLock,
  FolderCog,
  FolderGit,
  FolderGit2,
  FolderSymlink,
  FolderTree,
  FolderUp,
  FolderDown,
  FolderInput,
  FolderOutput
} from "lucide-react";

// Advanced System Settings Data
const securitySettings = {
  authentication: {
    twoFactorAuth: true,
    biometricAuth: true,
    sessionTimeout: 30,
    maxLoginAttempts: 5,
    passwordPolicy: {
      minLength: 12,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      expiryDays: 90
    }
  },
  encryption: {
    dataAtRest: true,
    dataInTransit: true,
    encryptionAlgorithm: "AES-256",
    keyRotationDays: 30
  },
  monitoring: {
    realTimeAlerts: true,
    logRetentionDays: 365,
    anomalyDetection: true,
    threatIntelligence: true
  },
  accessControl: {
    roleBasedAccess: true,
    ipWhitelisting: true,
    deviceManagement: true,
    timeBasedAccess: true
  }
};

const notificationSettings = {
  email: {
    securityAlerts: true,
    systemUpdates: true,
    clientReports: true,
    meetingReminders: true
  },
  push: {
    criticalAlerts: true,
    threatNotifications: true,
    systemStatus: false,
    clientUpdates: true
  },
  sms: {
    emergencyAlerts: true,
    securityBreaches: true,
    systemDown: true
  }
};

const systemPreferences = {
  appearance: {
    theme: "dark",
    accentColor: "blue",
    fontSize: "medium",
    compactMode: false
  },
  performance: {
    autoRefresh: true,
    cacheEnabled: true,
    compressionEnabled: true,
    loadBalancing: true
  },
  privacy: {
    analyticsEnabled: false,
    telemetryEnabled: false,
    personalizedAds: false,
    dataSharing: false
  }
};

const complianceSettings = {
  gdpr: {
    enabled: true,
    dataRetention: 7,
    rightToBeForgotten: true,
    dataPortability: true
  },
  soc2: {
    enabled: true,
    auditTrail: true,
    accessLogs: true,
    changeManagement: true
  },
  hipaa: {
    enabled: false,
    phiProtection: false,
    auditLogs: false,
    encryption: false
  },
  iso27001: {
    enabled: true,
    riskAssessment: true,
    incidentManagement: true,
    businessContinuity: true
  }
};

const systemStatus = {
  uptime: "99.9%",
  lastBackup: "2 hours ago",
  storageUsage: 67,
  memoryUsage: 45,
  cpuUsage: 23,
  networkStatus: "optimal",
  securityStatus: "secure"
};

export default function AdminSettings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("security");
  
  // Keyboard shortcut for brand guidelines access
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + B for Brand Guidelines
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'B') {
        event.preventDefault();
        navigate('/admin/brand-guidelines');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);
  const [securityConfig, setSecurityConfig] = useState(securitySettings);
  const [notificationConfig, setNotificationConfig] = useState(notificationSettings);
  const [systemConfig, setSystemConfig] = useState(systemPreferences);
  const [complianceConfig, setComplianceConfig] = useState(complianceSettings);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      // Here you would typically save to backend
    }, 2000);
  };

  const handleReset = () => {
    setSecurityConfig(securitySettings);
    setNotificationConfig(notificationSettings);
    setSystemConfig(systemPreferences);
    setComplianceConfig(complianceSettings);
  };

  const tabs = [
    { id: "security", label: "Security", icon: Shield, color: "text-red-600" },
    { id: "notifications", label: "Notifications", icon: Bell, color: "text-blue-600" },
    { id: "system", label: "System", icon: Settings, color: "text-green-600" },
    { id: "compliance", label: "Compliance", icon: FileText, color: "text-purple-600" },
    { id: "monitoring", label: "Monitoring", icon: Activity, color: "text-orange-600" }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gray-600 to-gray-800 flex items-center justify-center shadow-lg">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              System Settings & Configuration
            </h1>
            <p className="text-sm text-gray-500">
              Security controls, notifications, system preferences & compliance
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Hidden Brand Guidelines Access - Hover over this area to reveal */}
          <div className="relative group">
            <div className="w-8 h-8 rounded-lg bg-transparent group-hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center">
              <button
                onClick={() => navigate('/admin/brand-guidelines')}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg hover:from-amber-600 hover:to-yellow-600 font-semibold text-xs shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-1">
                  <Palette className="w-3 h-3" />
                  <span>Brand</span>
                </div>
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4 text-gray-600" />
            <span className="text-gray-600 font-medium text-sm">Reset</span>
          </button>
          
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isSaving ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span className="font-medium text-sm">{isSaving ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">System Uptime</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{systemStatus.uptime}</p>
              <p className="text-xs text-gray-500">Last 30 days</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Storage Usage</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{systemStatus.storageUsage}%</p>
              <p className="text-xs text-gray-500">2.1TB of 3.2TB</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Memory Usage</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{systemStatus.memoryUsage}%</p>
              <p className="text-xs text-gray-500">7.2GB of 16GB</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Security Status</p>
              <p className="text-2xl font-bold text-gray-900 mb-1 capitalize">{systemStatus.securityStatus}</p>
              <p className="text-xs text-gray-500">All systems secure</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Settings Tabs */}
      <div className="bg-white rounded-xl border border-gray-200">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Security Settings */}
          {activeTab === "security" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication & Access Control</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Require 2FA for all users</p>
                      </div>
                      <button
                        onClick={() => setSecurityConfig({
                          ...securityConfig,
                          authentication: {
                            ...securityConfig.authentication,
                            twoFactorAuth: !securityConfig.authentication.twoFactorAuth
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securityConfig.authentication.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securityConfig.authentication.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Biometric Authentication</p>
                        <p className="text-sm text-gray-500">Allow fingerprint/face unlock</p>
                      </div>
                      <button
                        onClick={() => setSecurityConfig({
                          ...securityConfig,
                          authentication: {
                            ...securityConfig.authentication,
                            biometricAuth: !securityConfig.authentication.biometricAuth
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securityConfig.authentication.biometricAuth ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securityConfig.authentication.biometricAuth ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        value={securityConfig.authentication.sessionTimeout}
                        onChange={(e) => setSecurityConfig({
                          ...securityConfig,
                          authentication: {
                            ...securityConfig.authentication,
                            sessionTimeout: parseInt(e.target.value)
                          }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="5"
                        max="480"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Password Policy</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Minimum Length</span>
                          <input
                            type="number"
                            value={securityConfig.authentication.passwordPolicy.minLength}
                            onChange={(e) => setSecurityConfig({
                              ...securityConfig,
                              authentication: {
                                ...securityConfig.authentication,
                                passwordPolicy: {
                                  ...securityConfig.authentication.passwordPolicy,
                                  minLength: parseInt(e.target.value)
                                }
                              }
                            })}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            min="8"
                            max="32"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Require Uppercase</span>
                          <input
                            type="checkbox"
                            checked={securityConfig.authentication.passwordPolicy.requireUppercase}
                            onChange={(e) => setSecurityConfig({
                              ...securityConfig,
                              authentication: {
                                ...securityConfig.authentication,
                                passwordPolicy: {
                                  ...securityConfig.authentication.passwordPolicy,
                                  requireUppercase: e.target.checked
                                }
                              }
                            })}
                            className="rounded"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Require Numbers</span>
                          <input
                            type="checkbox"
                            checked={securityConfig.authentication.passwordPolicy.requireNumbers}
                            onChange={(e) => setSecurityConfig({
                              ...securityConfig,
                              authentication: {
                                ...securityConfig.authentication,
                                passwordPolicy: {
                                  ...securityConfig.authentication.passwordPolicy,
                                  requireNumbers: e.target.checked
                                }
                              }
                            })}
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Encryption & Data Protection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Data at Rest Encryption</p>
                        <p className="text-sm text-gray-500">Encrypt stored data</p>
                      </div>
                      <button
                        onClick={() => setSecurityConfig({
                          ...securityConfig,
                          encryption: {
                            ...securityConfig.encryption,
                            dataAtRest: !securityConfig.encryption.dataAtRest
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securityConfig.encryption.dataAtRest ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securityConfig.encryption.dataAtRest ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Data in Transit Encryption</p>
                        <p className="text-sm text-gray-500">Encrypt data during transmission</p>
                      </div>
                      <button
                        onClick={() => setSecurityConfig({
                          ...securityConfig,
                          encryption: {
                            ...securityConfig.encryption,
                            dataInTransit: !securityConfig.encryption.dataInTransit
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          securityConfig.encryption.dataInTransit ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          securityConfig.encryption.dataInTransit ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Encryption Algorithm</label>
                      <select
                        value={securityConfig.encryption.encryptionAlgorithm}
                        onChange={(e) => setSecurityConfig({
                          ...securityConfig,
                          encryption: {
                            ...securityConfig.encryption,
                            encryptionAlgorithm: e.target.value
                          }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="AES-256">AES-256</option>
                        <option value="AES-192">AES-192</option>
                        <option value="AES-128">AES-128</option>
                        <option value="ChaCha20">ChaCha20</option>
                      </select>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Key Rotation (days)</label>
                      <input
                        type="number"
                        value={securityConfig.encryption.keyRotationDays}
                        onChange={(e) => setSecurityConfig({
                          ...securityConfig,
                          encryption: {
                            ...securityConfig.encryption,
                            keyRotationDays: parseInt(e.target.value)
                          }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="1"
                        max="365"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {Object.entries(notificationConfig.email).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-gray-500">Receive email notifications for {key.toLowerCase()}</p>
                      </div>
                      <button
                        onClick={() => setNotificationConfig({
                          ...notificationConfig,
                          email: {
                            ...notificationConfig.email,
                            [key]: !value
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
                <div className="space-y-4">
                  {Object.entries(notificationConfig.push).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-gray-500">Receive push notifications for {key.toLowerCase()}</p>
                      </div>
                      <button
                        onClick={() => setNotificationConfig({
                          ...notificationConfig,
                          push: {
                            ...notificationConfig.push,
                            [key]: !value
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* System Preferences */}
          {activeTab === "system" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                    <select
                      value={systemConfig.appearance.theme}
                      onChange={(e) => setSystemConfig({
                        ...systemConfig,
                        appearance: {
                          ...systemConfig.appearance,
                          theme: e.target.value
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                    <select
                      value={systemConfig.appearance.accentColor}
                      onChange={(e) => setSystemConfig({
                        ...systemConfig,
                        appearance: {
                          ...systemConfig.appearance,
                          accentColor: e.target.value
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="purple">Purple</option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                <div className="space-y-4">
                  {Object.entries(systemConfig.performance).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-gray-500">Enable {key.toLowerCase()} for better performance</p>
                      </div>
                      <button
                        onClick={() => setSystemConfig({
                          ...systemConfig,
                          performance: {
                            ...systemConfig.performance,
                            [key]: !value
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Compliance Settings */}
          {activeTab === "compliance" && (
            <div className="space-y-8">
              {Object.entries(complianceConfig).map(([framework, config]) => (
                <div key={framework} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 uppercase">{framework}</h3>
                      <p className="text-sm text-gray-500">Compliance framework settings</p>
                    </div>
                    <button
                      onClick={() => setComplianceConfig({
                        ...complianceConfig,
                        [framework]: {
                          ...complianceConfig[framework as keyof typeof complianceConfig],
                          enabled: !config.enabled
                        }
                      })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        config.enabled ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        config.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  
                  {config.enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(config).filter(([key]) => key !== 'enabled').map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            <p className="text-sm text-gray-500">Enable {key.toLowerCase()}</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={value as boolean}
                            onChange={(e) => setComplianceConfig({
                              ...complianceConfig,
                              [framework]: {
                                ...complianceConfig[framework as keyof typeof complianceConfig],
                                [key]: e.target.checked
                              }
                            })}
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* System Monitoring */}
          {activeTab === "monitoring" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">System Resources</h4>
                      <Activity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>CPU Usage</span>
                          <span>{systemStatus.cpuUsage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${systemStatus.cpuUsage}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Memory Usage</span>
                          <span>{systemStatus.memoryUsage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: `${systemStatus.memoryUsage}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Storage Usage</span>
                          <span>{systemStatus.storageUsage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${systemStatus.storageUsage}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">Security Status</h4>
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Firewall Status</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Antivirus</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Updated</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Intrusion Detection</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Monitoring</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Backup Status</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Recent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monitoring Configuration</h3>
                <div className="space-y-4">
                  {Object.entries(securityConfig.monitoring).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-gray-500">Enable {key.toLowerCase()} monitoring</p>
                      </div>
                      <button
                        onClick={() => setSecurityConfig({
                          ...securityConfig,
                          monitoring: {
                            ...securityConfig.monitoring,
                            [key]: !value
                          }
                        })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 