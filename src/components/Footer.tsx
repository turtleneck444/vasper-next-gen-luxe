import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Shield, 
  Award, 
  Globe, 
  Users, 
  Server, 
  Cloud, 
  Network, 
  Database,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle,
  Building2,
  Zap,
  Target,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const enterpriseServices = [
    { name: "Cybersecurity Solutions", icon: Shield, description: "Advanced threat protection" },
    { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable cloud platforms" },
    { name: "Network Management", icon: Network, description: "Enterprise networking" },
    { name: "Data & Analytics", icon: Database, description: "Business intelligence" },
    { name: "Digital Transformation", icon: Zap, description: "Modernization services" },
    { name: "Managed IT Services", icon: Server, description: "24/7 infrastructure support" }
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield, description: "Security & Availability" },
    { name: "ISO 27001", icon: Lock, description: "Information Security" },
    { name: "PCI DSS", icon: Target, description: "Payment Card Security" },
    { name: "HIPAA", icon: Users, description: "Healthcare Compliance" }
  ];

  const quickLinks = [
    { name: "About Velora Tek", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
    { name: "Careers", href: "#careers" },
    { name: "Blog & Insights", href: "#blog" }
  ];

  const supportLinks = [
    { name: "Technical Support", href: "#support" },
    { name: "Knowledge Base", href: "#kb" },
    { name: "Service Status", href: "#status" },
    { name: "Emergency Contact", href: "#emergency" },
    { name: "Training Resources", href: "#training" },
    { name: "API Documentation", href: "#api" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-full px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Velora Tek</h3>
                  <p className="text-sm text-gray-400">Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                Empowering Fortune 500 enterprises with world-class cybersecurity, 
                cloud computing, and network management solutions. Trusted by industry 
                leaders for reliability, security, and innovation.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Fortune 500 Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">24/7 Enterprise Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">99.9% Uptime SLA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enterprise Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Enterprise Services
              </h4>
              <div className="space-y-3">
                {enterpriseServices.map((service) => (
                  <a
                    key={service.name}
                    href="#services"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-200">
                      <service.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                        {service.name}
                      </p>
                      <p className="text-xs text-gray-400">{service.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Support */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Building2 className="w-5 h-5 text-blue-400 mr-2" />
                Enterprise Support
              </h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Emergency Line</p>
                    <p className="text-xs text-gray-400">(949) 396-0640</p>
                    <p className="text-xs text-red-400">24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Enterprise Support</p>
                    <p className="text-xs text-gray-400">OscarM@veloratek.com</p>
                    <p className="text-xs text-blue-400">&lt; 4 Hour Response</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Business Hours</p>
                    <p className="text-xs text-gray-400">Mon-Fri 8AM-6PM EST</p>
                    <p className="text-xs text-green-400">Emergency 24/7</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-lg font-bold text-white mb-6 text-center">Enterprise Certifications & Compliance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-200">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <cert.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-gray-400">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Velora Tek Technology Solutions. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                  <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                  <a href="#security" className="hover:text-white transition-colors duration-200">Security</a>
                  <a href="#compliance" className="hover:text-white transition-colors duration-200">Compliance</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};