import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Cloud, 
  Network, 
  Server, 
  Smartphone, 
  Database,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Router,
  Building2,
  Award,
  TrendingUp,
  Clock,
  Star,
  ArrowUpRight
} from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Services = () => {
  const heroStats = [
    { number: "500+", label: "Enterprise Clients", icon: Building2 },
    { number: "99.9%", label: "Uptime SLA", icon: Clock },
    { number: "24/7", label: "Global Support", icon: Globe },
    { number: "15+", label: "Years Experience", icon: Award }
  ];

  const coreServices = [
    {
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "Enterprise Security & Threat Intelligence",
      description: "Protecting Fortune 500 data and reputation with advanced threat intelligence, SOC, and compliance. Comprehensive security frameworks with zero-trust architecture and 24/7 monitoring.",
      features: [
        "Advanced Threat Detection & Response",
        "Security Operations Center (SOC)",
        "Compliance Management (SOC 2, ISO 27001)",
        "Incident Response & Forensics",
        "Vulnerability Assessment & Penetration Testing",
        "Security Awareness Training"
      ],
      stats: { clients: "200+", incidents: "10,000+", uptime: "99.99%" },
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      subtitle: "Cloud Infrastructure & Digital Transformation",
      description: "Seamless migration, scalable infrastructure, and multi-cloud management for enterprise growth. Strategic cloud adoption designed for enterprise scalability and efficiency.",
      features: [
        "Cloud Strategy & Architecture",
        "Multi-Cloud Management",
        "DevOps & CI/CD Implementation",
        "Cost Optimization & Governance",
        "Disaster Recovery & Backup",
        "Performance Monitoring & Optimization"
      ],
      stats: { clients: "150+", savings: "40%", uptime: "99.95%" },
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Network,
      title: "Network Management",
      subtitle: "Infrastructure & Performance Monitoring",
      description: "Ensuring uptime, security, and performance for mission-critical operations. End-to-end network solutions for optimal performance and reliability worldwide.",
      features: [
        "Network Architecture & Design",
        "Performance Monitoring & Analytics",
        "Capacity Planning & Optimization",
        "Network Security & Firewall Management",
        "SD-WAN Implementation",
        "Wireless & Mobility Solutions"
      ],
      stats: { clients: "300+", networks: "500+", uptime: "99.9%" },
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: "Data & Analytics",
      subtitle: "Business Intelligence Excellence",
      description: "Transform raw data into actionable insights with enterprise-grade analytics, machine learning, and business intelligence solutions.",
      features: ["Data Architecture", "Business Intelligence", "Advanced Analytics", "Data Governance"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      subtitle: "Modernization & Innovation",
      description: "Strategic consulting and implementation services to modernize legacy systems and accelerate digital innovation initiatives.",
      features: ["Legacy Modernization", "Process Automation", "Digital Strategy", "Change Management"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Server,
      title: "Enterprise Infrastructure",
      subtitle: "24/7 Infrastructure Support",
      description: "Robust infrastructure solutions designed for high availability and enterprise-scale operations with comprehensive managed services.",
      features: ["Infrastructure Management", "Help Desk Support", "Proactive Monitoring", "Strategic Consulting"],
      color: "from-gray-600 to-slate-600"
    }
  ];

  const caseStudies = [
    {
      company: "Global Financial Services",
      challenge: "Zero-day threat protection for 50,000+ endpoints",
      solution: "Implemented advanced EDR with AI-powered threat detection",
      results: "99.9% threat detection rate, 60% faster incident response",
      logo: "🏦"
    },
    {
      company: "Healthcare Network",
      challenge: "HIPAA-compliant cloud migration for patient data",
      solution: "Multi-cloud architecture with automated compliance monitoring",
      results: "40% cost reduction, 99.99% uptime, full HIPAA compliance",
      logo: "🏥"
    },
    {
      company: "Manufacturing Giant",
      challenge: "Global network optimization across 25 countries",
      solution: "SD-WAN implementation with intelligent traffic routing",
      results: "50% performance improvement, 24/7 global connectivity",
      logo: "🏭"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                Enterprise IT Solutions
              </Badge>
              
              <TypewriterEffect
                words={[
                  { text: "Enterprise-Grade", className: "text-gray-900 font-bold" },
                  { text: "IT Services", className: "text-blue-600 font-bold" },
                  { text: "That Scale", className: "text-gray-900 font-bold" }
                ]}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                cursorClassName="bg-blue-600"
              />
              
              <TextGenerateEffect
                words="Comprehensive technology solutions engineered for enterprise environments. Delivering reliability, security, and scalability at every level."
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
                duration={0.7}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Core <span className="text-blue-600">Enterprise Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our flagship services trusted by Fortune 500 companies worldwide
              </p>
            </div>

            <div className="space-y-12">
              {coreServices.map((service, index) => (
                <Card key={service.title} className={`p-8 md:p-12 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-500`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-lg text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specialized <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored services designed for specific enterprise needs and industry requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <Card key={service.title} className="p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Explore Service
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="text-blue-400">Technology Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies and platforms that power our enterprise solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { category: "Security", technologies: ["CrowdStrike", "Palo Alto", "Cisco", "Fortinet", "Splunk", "Qualys"] },
                { category: "Cloud", technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"] },
                { category: "Network", technologies: ["Cisco", "Juniper", "Aruba", "F5", "VMware", "Citrix"] },
                { category: "Analytics", technologies: ["Tableau", "Power BI", "Snowflake", "Databricks", "Python", "R"] }
              ].map((stack, index) => (
                <Card key={stack.category} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Proven <span className="text-blue-600">Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-world transformations that demonstrate our enterprise capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={study.company} className="p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{study.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.company}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                      <p className="text-sm text-gray-700">{study.results}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Methodology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven approach to delivering enterprise-grade solutions with measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description: "Comprehensive analysis of your current infrastructure, security posture, and business objectives",
                  icon: Target
                },
                {
                  step: "02",
                  title: "Strategy & Design",
                  description: "Custom solution architecture designed to meet your specific enterprise requirements",
                  icon: Shield
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Expert deployment with minimal disruption to your ongoing operations",
                  icon: Zap
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring, maintenance, and optimization for peak performance",
                  icon: TrendingUp
                }
              ].map((process, index) => (
                <Card key={process.step} className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="w-full px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Fortune 500 companies that trust VasperNet for their critical technology needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl font-semibold !text-white">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 