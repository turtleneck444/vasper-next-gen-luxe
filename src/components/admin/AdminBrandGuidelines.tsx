import React, { useState } from "react";
import {
  Palette,
  Type,
  Grid,
  Layers,
  Box,
  Circle,
  Square,
  Triangle,
  Star,
  Crown,
  Award,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Download,
  Copy,
  Check,
  X,
  ChevronRight,
  ChevronDown,
  Search,
  Filter,
  Settings,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Zap,
  Target,
  Globe,
  Users,
  Building,
  Briefcase,
  DollarSign,
  TrendingUp,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Camera,
  Speaker,
  Wifi,
  Signal,
  Battery,
  Power,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Archive,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Timer,
  Sunrise,
  Sunset,
  Moon,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Snowflake,
  Zap as Lightning,
  Flame,
  Sparkles,
  Star as StarIcon,
  Heart as HeartIcon,
  Diamond,
  Gem,
  Crown as CrownIcon,
  Trophy,
  Medal,
  Badge,
  Tag,
  Hash,
  AtSign,
  Percent,
  Plus,
  Minus,
  Divide,
  Equal,
  Infinity,
  Pi,
  Sigma,
  Omega
} from "lucide-react";

// Advanced Cybersecurity Brand Options - Completely Unique Identities
const luxuryBrands = {
  vaspernet: {
    name: "VasperNet",
    tagline: "Next-Generation Cybersecurity",
    description: "Elite cybersecurity solutions for the world's most discerning organizations",
    industry: "Cybersecurity & Technology",
    personality: "Sophisticated, Innovative, Trustworthy",
    founded: 2024,
    website: "vaspernet.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        midnight: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a", 950: "#020617"
        },
        sapphire: {
          50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd",
          400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8",
          800: "#1e40af", 900: "#1e3a8a", 950: "#172554"
        }
      },
      accent: {
        cyan: "#06b6d4", gold: "#d4af37", platinum: "#e5e4e2", diamond: "#b9f2ff"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  cybernetic: {
    name: "CyberNetic",
    tagline: "Intelligent Digital Defense",
    description: "AI-powered cybersecurity systems that learn and adapt to emerging threats",
    industry: "AI Cybersecurity & Machine Learning",
    personality: "Intelligent, Adaptive, Precise",
    founded: 2023,
    website: "cybernetic.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        carbon: {
          50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db",
          400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151",
          800: "#1f2937", 900: "#111827", 950: "#030712"
        },
        neon: {
          50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac",
          400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
          800: "#166534", 900: "#14532d", 950: "#052e16"
        }
      },
      accent: {
        electric: "#00ffff", cyber: "#00ff41", digital: "#ff00ff", neon: "#39ff14"
      },
      semantic: { success: "#22c55e", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  cryptosentry: {
    name: "CryptoSentry",
    tagline: "Cryptographic Security Excellence",
    description: "Advanced cryptographic solutions and blockchain security for digital assets",
    industry: "Cryptographic Security & Blockchain",
    personality: "Cryptographic, Secure, Advanced",
    founded: 2022,
    website: "cryptosentry.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        obsidian: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a", 950: "#020617"
        },
        amethyst: {
          50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe",
          400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7c3aed",
          800: "#6b21a8", 900: "#581c87", 950: "#3b0764"
        }
      },
      accent: {
        crypto: "#f7931a", bitcoin: "#ff9500", ethereum: "#627eea", blockchain: "#00d4aa"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  cyberfortress: {
    name: "CyberFortress",
    tagline: "Unbreachable Digital Defense",
    description: "Advanced threat protection and cybersecurity infrastructure for enterprise clients",
    industry: "Cybersecurity & Digital Defense",
    personality: "Powerful, Reliable, Impenetrable",
    founded: 2020,
    website: "cyberfortress.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        steel: {
          50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db",
          400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151",
          800: "#1f2937", 900: "#111827", 950: "#030712"
        },
        titanium: {
          50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
          400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857",
          800: "#065f46", 900: "#064e3b", 950: "#022c22"
        }
      },
      accent: {
        chrome: "#e8f1f2", carbon: "#36454f", iron: "#484848", metal: "#c0c0c0"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  sentinel: {
    name: "Sentinel",
    tagline: "Guardians of Digital Assets",
    description: "Comprehensive cybersecurity monitoring and incident response for critical infrastructure",
    industry: "Cybersecurity & Threat Intelligence",
    personality: "Vigilant, Protective, Strategic",
    founded: 2018,
    website: "sentinel.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        charcoal: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a", 950: "#020617"
        },
        crimson: {
          50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5",
          400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c",
          800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a"
        }
      },
      accent: {
        ruby: "#e0115f", scarlet: "#ff2400", burgundy: "#800020", garnet: "#c41e3a"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  quantum: {
    name: "Quantum",
    tagline: "Beyond Classical Security",
    description: "Quantum-resistant encryption and next-generation threat detection systems",
    industry: "Quantum Cybersecurity & Encryption",
    personality: "Cutting-Edge, Advanced, Future-Ready",
    founded: 2022,
    website: "quantum.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        void: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a", 950: "#020617"
        },
        violet: {
          50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe",
          400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7c3aed",
          800: "#6b21a8", 900: "#581c87", 950: "#3b0764"
        }
      },
      accent: {
        amethyst: "#9966cc", lavender: "#e6e6fa", plum: "#dda0dd", orchid: "#da70d6"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  nexus: {
    name: "Nexus",
    tagline: "Connected Security Intelligence",
    description: "Integrated cybersecurity platform connecting threat intelligence across global networks",
    industry: "Cybersecurity & Network Defense",
    personality: "Connected, Intelligent, Collaborative",
    founded: 2019,
    website: "nexus.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        stone: {
          50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1",
          400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c",
          800: "#292524", 900: "#1c1917", 950: "#0c0a09"
        },
        teal: {
          50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4",
          400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e",
          800: "#115e59", 900: "#134e4a", 950: "#042f2e"
        }
      },
      accent: {
        azure: "#007fff", cobalt: "#0047ab", sapphire: "#0f52ba", cerulean: "#007ba7"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  cyberwatch: {
    name: "CyberWatch",
    tagline: "24/7 Digital Surveillance",
    description: "Continuous monitoring and real-time threat detection for critical infrastructure",
    industry: "Continuous Monitoring & Threat Detection",
    personality: "Vigilant, Continuous, Reliable",
    founded: 2021,
    website: "cyberwatch.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        graphite: {
          50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db",
          400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151",
          800: "#1f2937", 900: "#111827", 950: "#030712"
        },
        forest: {
          50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac",
          400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
          800: "#166534", 900: "#14532d", 950: "#052e16"
        }
      },
      accent: {
        surveillance: "#1a1a1a", monitor: "#2d2d2d", watch: "#404040", observe: "#525252"
      },
      semantic: { success: "#22c55e", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  digitalcitadel: {
    name: "DigitalCitadel",
    tagline: "Impenetrable Digital Fortress",
    description: "Multi-layered cybersecurity architecture for the most critical digital assets",
    industry: "Multi-Layered Security & Architecture",
    personality: "Impenetrable, Architectural, Comprehensive",
    founded: 2020,
    website: "digitalcitadel.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        granite: {
          50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1",
          400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c",
          800: "#292524", 900: "#1c1917", 950: "#0c0a09"
        },
        bronze: {
          50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d",
          400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309",
          800: "#92400e", 900: "#78350f", 950: "#451a03"
        }
      },
      accent: {
        copper: "#b87333", brass: "#b5a642", gold: "#d4af37", patina: "#cd7f32"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  cyberdefender: {
    name: "CyberDefender",
    tagline: "Active Digital Protection",
    description: "Proactive cybersecurity solutions that defend against evolving threats",
    industry: "Proactive Cybersecurity & Defense",
    personality: "Proactive, Defensive, Reliable",
    founded: 2019,
    website: "cyberdefender.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        navy: {
          50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1",
          400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155",
          800: "#1e293b", 900: "#0f172a", 950: "#020617"
        },
        royal: {
          50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd",
          400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8",
          800: "#1e40af", 900: "#1e3a8a", 950: "#172554"
        }
      },
      accent: {
        cobalt: "#0047ab", sapphire: "#0f52ba", cerulean: "#007ba7", azure: "#007fff"
      },
      semantic: { success: "#10b981", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  },
  securematrix: {
    name: "SecureMatrix",
    tagline: "Multi-Dimensional Security",
    description: "Advanced security matrix providing comprehensive protection across all attack vectors",
    industry: "Multi-Dimensional Security & Protection",
    personality: "Comprehensive, Multi-Dimensional, Advanced",
    founded: 2022,
    website: "securematrix.com",
    typography: {
      primary: "Inter",
      secondary: "Inter",
      mono: "JetBrains Mono",
      weights: { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 }
    },
    colors: {
      primary: {
        matrix: {
          50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db",
          400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151",
          800: "#1f2937", 900: "#111827", 950: "#030712"
        },
        neon: {
          50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac",
          400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
          800: "#166534", 900: "#14532d", 950: "#052e16"
        }
      },
      accent: {
        digital: "#ff00ff", cyber: "#00ff41", electric: "#00ffff", neon: "#39ff14"
      },
      semantic: { success: "#22c55e", warning: "#f59e0b", error: "#ef4444", info: "#3b82f6" }
    }
  }
};

// Advanced Typography System - Aligned with Current Website
const typography = {
  fonts: {
    primary: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    secondary: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "JetBrains Mono, 'Fira Code', Consolas, monospace",
    corporate: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    modern: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    professional: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  weights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  }
};

// Spacing System
const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem",
  "6xl": "12rem"
};

// Border Radius System
const borderRadius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};

// Shadow System
const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "0 0 #0000"
};

// Component Examples
const componentExamples = {
  buttons: [
    { name: "Primary", variant: "primary", size: "md" },
    { name: "Secondary", variant: "secondary", size: "md" },
    { name: "Outline", variant: "outline", size: "md" },
    { name: "Ghost", variant: "ghost", size: "md" },
    { name: "Large", variant: "primary", size: "lg" },
    { name: "Small", variant: "primary", size: "sm" }
  ],
  cards: [
    { name: "Basic Card", variant: "basic" },
    { name: "Elevated Card", variant: "elevated" },
    { name: "Interactive Card", variant: "interactive" }
  ],
  inputs: [
    { name: "Text Input", type: "text" },
    { name: "Email Input", type: "email" },
    { name: "Password Input", type: "password" },
    { name: "Textarea", type: "textarea" }
  ]
};

export default function AdminBrandGuidelines() {
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedBrand, setSelectedBrand] = useState("vaspernet");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const ColorSwatch = ({ color, name, value, category }: { color: string; name: string; value: string; category: string }) => (
    <div className="group relative">
      <div 
        className="w-full h-24 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: color }}
        onClick={() => copyToClipboard(value, name)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
          {copiedColor === name && (
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">
              <Check className="w-4 h-4 text-green-600" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-3">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-600 font-mono">{value}</div>
        <div className="text-xs text-slate-400 uppercase tracking-wider">{category}</div>
      </div>
    </div>
  );

  const TypographyExample = ({ size, weight, lineHeight, children }: { size: string; weight: string; lineHeight: string; children: string }) => (
    <div className="space-y-2">
      <div className="text-xs text-slate-500 uppercase tracking-wider">
        {size} / {weight} / {lineHeight}
      </div>
      <div 
        className="text-slate-900"
        style={{
          fontSize: typography.sizes[size as keyof typeof typography.sizes],
          fontWeight: typography.weights[weight as keyof typeof typography.weights],
          lineHeight: typography.lineHeights[lineHeight as keyof typeof typography.lineHeights]
        }}
      >
        {children}
      </div>
    </div>
  );

  const ButtonExample = ({ variant, size, children }: { variant: string; size: string; children: string }) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-2xl";
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };
    const variantClasses = {
      primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      outline: "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50",
      ghost: "text-slate-700 hover:bg-slate-100"
    };

    return (
      <button className={`${baseClasses} ${sizeClasses[size as keyof typeof sizeClasses]} ${variantClasses[variant as keyof typeof variantClasses]}`}>
        {children}
      </button>
    );
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
                    <Palette className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                      Brand Guidelines
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                      Comprehensive design system for luxury brand identity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl shadow-2xl hover:shadow-slate-900/25 font-semibold text-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Export Guidelines</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-8 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "overview", label: "Overview", icon: Grid },
              { id: "colors", label: "Colors", icon: Palette },
              { id: "typography", label: "Typography", icon: Type },
              { id: "spacing", label: "Spacing", icon: Box },
              { id: "components", label: "Components", icon: Layers },
              { id: "icons", label: "Icons", icon: Star }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  activeSection === tab.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white/80 text-slate-700 hover:bg-white hover:shadow-md"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-8 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              {/* Brand Selection */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Brand Selection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(luxuryBrands).map(([key, brand]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedBrand(key)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedBrand === key
                          ? "border-amber-500 bg-amber-50 shadow-lg"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{brand.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{brand.name}</h3>
                          <p className="text-sm text-slate-600">{brand.industry}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 mb-3">{brand.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">Founded {brand.founded}</span>
                        <span className="text-xs text-slate-500">{brand.website}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Brand Overview */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{luxuryBrands[selectedBrand as keyof typeof luxuryBrands].name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{luxuryBrands[selectedBrand as keyof typeof luxuryBrands].name}</h2>
                    <p className="text-lg text-slate-600 font-medium">{luxuryBrands[selectedBrand as keyof typeof luxuryBrands].tagline}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Brand Philosophy</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {luxuryBrands[selectedBrand as keyof typeof luxuryBrands].description}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Our design system reflects our commitment to {luxuryBrands[selectedBrand as keyof typeof luxuryBrands].personality.toLowerCase()} excellence, creating experiences that resonate with the most discerning clients.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Brand Personality</h3>
                    <div className="space-y-3">
                      {luxuryBrands[selectedBrand as keyof typeof luxuryBrands].personality.split(', ').map((trait, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                            <Crown className="w-4 h-4 text-amber-600" />
                          </div>
                          <span className="font-medium text-slate-900">{trait}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Color System</h3>
                  <p className="text-slate-600 text-sm">Sophisticated palette with primary, accent, and semantic colors</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center mb-4">
                    <Type className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Typography</h3>
                  <p className="text-slate-600 text-sm">Refined type system with multiple weights and sizes</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Components</h3>
                  <p className="text-slate-600 text-sm">Consistent UI components with luxury aesthetics</p>
                </div>
              </div>
            </div>
          )}

          {/* Colors Section */}
          {activeSection === "colors" && (
            <div className="space-y-8">
              {/* Brand Selection */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Brand Selection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(luxuryBrands).map(([key, brand]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedBrand(key)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedBrand === key
                          ? "border-amber-500 bg-amber-50 shadow-lg"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{brand.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{brand.name}</h3>
                          <p className="text-sm text-slate-600">{brand.industry}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 mb-3">{brand.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">Founded {brand.founded}</span>
                        <span className="text-xs text-slate-500">{brand.website}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Colors */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Primary Color Palette - {luxuryBrands[selectedBrand as keyof typeof luxuryBrands].name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {Object.entries(luxuryBrands[selectedBrand as keyof typeof luxuryBrands].colors.primary).map(([colorName, colorScale]) => 
                    Object.entries(colorScale).map(([key, value]) => (
                      <ColorSwatch
                        key={`${colorName}-${key}`}
                        color={value as string}
                        name={`${colorName.charAt(0).toUpperCase() + colorName.slice(1)} ${key}`}
                        value={value as string}
                        category="Primary"
                      />
                    ))
                  )}
                </div>
              </div>

              {/* Accent Colors */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Accent Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {Object.entries(luxuryBrands[selectedBrand as keyof typeof luxuryBrands].colors.accent).map(([key, value]) => (
                    <ColorSwatch
                      key={key}
                      color={value as string}
                      name={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={value as string}
                      category="Accent"
                    />
                  ))}
                </div>
              </div>

              {/* Semantic Colors */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Semantic Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(luxuryBrands[selectedBrand as keyof typeof luxuryBrands].colors.semantic).map(([key, value]) => (
                    <ColorSwatch
                      key={key}
                      color={value as string}
                      name={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={value as string}
                      category="Semantic"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Typography Section */}
          {activeSection === "typography" && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Typography System</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Font Families</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Primary Font</div>
                        <div className="text-2xl font-semibold text-slate-900" style={{ fontFamily: typography.fonts.primary }}>
                          Inter - Clean & Modern
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Secondary Font</div>
                        <div className="text-2xl font-semibold text-slate-900" style={{ fontFamily: typography.fonts.secondary }}>
                          Playfair Display - Elegant Serif
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 uppercase tracking-wider mb-2">Monospace Font</div>
                        <div className="text-lg font-mono text-slate-900" style={{ fontFamily: typography.fonts.mono }}>
                          JetBrains Mono - Code & Data
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Font Sizes</h3>
                    <div className="space-y-4">
                      <TypographyExample size="xs" weight="normal" lineHeight="normal">
                        Extra Small (12px) - Captions and fine print
                      </TypographyExample>
                      <TypographyExample size="sm" weight="normal" lineHeight="normal">
                        Small (14px) - Secondary text and labels
                      </TypographyExample>
                      <TypographyExample size="base" weight="normal" lineHeight="normal">
                        Base (16px) - Body text and general content
                      </TypographyExample>
                      <TypographyExample size="lg" weight="semibold" lineHeight="normal">
                        Large (18px) - Subheadings and emphasis
                      </TypographyExample>
                      <TypographyExample size="2xl" weight="bold" lineHeight="tight">
                        Extra Large (24px) - Section headings
                      </TypographyExample>
                      <TypographyExample size="4xl" weight="bold" lineHeight="tight">
                        Display (36px) - Page titles and hero text
                      </TypographyExample>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Spacing Section */}
          {activeSection === "spacing" && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Spacing System</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Spacing Scale</h3>
                    <div className="space-y-4">
                      {Object.entries(spacing).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-4">
                          <div 
                            className="bg-slate-900 rounded"
                            style={{ width: value, height: value }}
                          ></div>
                          <div>
                            <div className="font-semibold text-slate-900">{key}</div>
                            <div className="text-sm text-slate-600 font-mono">{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Border Radius</h3>
                    <div className="space-y-4">
                      {Object.entries(borderRadius).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-4">
                          <div 
                            className="bg-slate-900"
                            style={{ 
                              width: "60px", 
                              height: "60px", 
                              borderRadius: value 
                            }}
                          ></div>
                          <div>
                            <div className="font-semibold text-slate-900">{key}</div>
                            <div className="text-sm text-slate-600 font-mono">{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Components Section */}
          {activeSection === "components" && (
            <div className="space-y-8">
              {/* Buttons */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Button Components</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Button Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      {componentExamples.buttons.map((button) => (
                        <ButtonExample
                          key={button.name}
                          variant={button.variant}
                          size={button.size}
                        >
                          {button.name}
                        </ButtonExample>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Card Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Basic Card</h3>
                    <p className="text-slate-600">Simple card with minimal styling</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Elevated Card</h3>
                    <p className="text-slate-600">Card with enhanced shadow for depth</p>
                  </div>
                  
                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Card</h3>
                    <p className="text-slate-600">Card with hover effects and interactions</p>
                  </div>
                </div>
              </div>

              {/* Inputs */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Input Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Text Input</label>
                    <input 
                      type="text" 
                      placeholder="Enter text..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Input</label>
                    <input 
                      type="email" 
                      placeholder="Enter email..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Password Input</label>
                    <input 
                      type="password" 
                      placeholder="Enter password..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Textarea</label>
                    <textarea 
                      rows={3}
                      placeholder="Enter message..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Icons Section */}
          {activeSection === "icons" && (
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Icon Library</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {[
                    { icon: Crown, name: "Crown" },
                    { icon: Star, name: "Star" },
                    { icon: Award, name: "Award" },
                    { icon: Shield, name: "Shield" },
                    { icon: Lock, name: "Lock" },
                    { icon: Eye, name: "Eye" },
                    { icon: Download, name: "Download" },
                    { icon: Copy, name: "Copy" },
                    { icon: Check, name: "Check" },
                    { icon: X, name: "Close" },
                    { icon: Search, name: "Search" },
                    { icon: Filter, name: "Filter" },
                    { icon: Settings, name: "Settings" },
                    { icon: FileText, name: "File" },
                    { icon: Image, name: "Image" },
                    { icon: Video, name: "Video" },
                    { icon: Music, name: "Music" },
                    { icon: Code, name: "Code" },
                    { icon: Zap, name: "Zap" },
                    { icon: Target, name: "Target" },
                    { icon: Globe, name: "Globe" },
                    { icon: Users, name: "Users" },
                    { icon: Building, name: "Building" },
                    { icon: Briefcase, name: "Briefcase" },
                    { icon: DollarSign, name: "Dollar" }
                  ].map(({ icon: Icon, name }) => (
                    <div key={name} className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-slate-700 mb-2" />
                      <span className="text-sm font-medium text-slate-700">{name}</span>
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