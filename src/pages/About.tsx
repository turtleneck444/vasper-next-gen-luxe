import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Clock,
  Star,
  Zap,
  Lock,
  Cpu,
  Network,
  Cloud,
  Database,
  Smartphone,
  Server,
  BarChart3,
  ArrowUpRight,
  Quote,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const About = () => {
  const companyStats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Enterprise Clients", icon: Building2 },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Client Satisfaction", icon: Star }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution we deliver prioritizes enterprise-grade security and compliance.",
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We measure success by the tangible business outcomes our clients achieve.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our solutions to meet emerging enterprise challenges.",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description: "VasperNet established with a vision to deliver enterprise-grade IT solutions",
      achievement: "First Fortune 500 client secured"
    },
    {
      year: "2012",
      title: "Cybersecurity Division",
      description: "Launched comprehensive cybersecurity services division",
      achievement: "SOC 2 Type II certification achieved"
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across 25 countries",
      achievement: "100th enterprise client milestone"
    },
    {
      year: "2018",
      title: "Cloud & AI Services",
      description: "Introduced advanced cloud infrastructure and AI-powered solutions",
      achievement: "ISO 27001 certification"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched comprehensive digital transformation consulting services",
      achievement: "500th enterprise client"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in enterprise IT solutions",
      achievement: "15+ years of excellence"
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "20+ years in enterprise technology",
      expertise: "Strategic leadership, digital transformation",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "18+ years in cybersecurity",
      expertise: "Cloud architecture, security frameworks",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Security Officer",
      experience: "15+ years in information security",
      expertise: "Threat intelligence, compliance",
      image: "👩‍🔒"
    }
  ];

  const testimonials = [
    {
      quote: "VasperNet transformed our entire IT infrastructure. Their expertise in cybersecurity and cloud solutions has given us the competitive edge we needed.",
      author: "David Thompson",
      role: "CTO, Global Financial Services",
      company: "Fortune 100 Company"
    },
    {
      quote: "The level of professionalism and technical expertise VasperNet brings to every engagement is unmatched. They're true partners in our success.",
      author: "Lisa Wang",
      role: "VP of Technology",
      company: "Healthcare Network"
    },
    {
      quote: "Working with VasperNet has been a game-changer for our organization. Their 24/7 support and proactive approach give us complete peace of mind.",
      author: "Robert Martinez",
      role: "IT Director",
      company: "Manufacturing Giant"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield, description: "Security & Availability Controls" },
    { name: "ISO 27001", icon: Lock, description: "Information Security Management" },
    { name: "PCI DSS", icon: Target, description: "Payment Card Industry Compliance" },
    { name: "HIPAA", icon: Users, description: "Healthcare Information Privacy" },
    { name: "GDPR", icon: Globe, description: "Data Protection Regulation" },
    { name: "SOX", icon: BarChart3, description: "Sarbanes-Oxley Compliance" }
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
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                About VasperNet
              </Badge>
              
              <TypewriterEffect
                words={[
                  { text: "Empowering", className: "text-gray-900 font-bold" },
                  { text: "Fortune 500", className: "text-blue-600 font-bold" },
                  { text: "Enterprises", className: "text-gray-900 font-bold" }
                ]}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                cursorClassName="bg-blue-600"
              />
              
              <TextGenerateEffect
                words="For over 15 years, VasperNet has been the trusted technology partner for Fortune 500 companies worldwide, delivering enterprise-grade solutions that drive innovation, security, and growth."
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
                duration={0.7}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <p className="text-lg text-gray-600">Driving Digital Excellence</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower enterprises with cutting-edge technology solutions that enhance security, 
                  drive innovation, and accelerate digital transformation. We partner with organizations 
                  to build resilient, scalable, and future-ready technology foundations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Deliver enterprise-grade security solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Accelerate digital transformation initiatives</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Ensure operational excellence and reliability</span>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    <p className="text-lg text-gray-600">Global Technology Leadership</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the world's most trusted technology partner for enterprise organizations, 
                  recognized for our innovation, security expertise, and unwavering commitment 
                  to client success in an increasingly digital world.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Lead industry innovation and best practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Expand global presence and capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Shape the future of enterprise technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision and every client engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <Card key={value.title} className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                15+ years of innovation, growth, and unwavering commitment to excellence
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            {item.year}
                          </Badge>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-3">{item.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-medium">{item.achievement}</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Placeholder */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Executive <span className="text-blue-600">Leadership</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seasoned professionals with decades of enterprise technology experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Team Coming Soon</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our executive leadership team will be featured here. Each member brings decades of enterprise technology experience 
                and a proven track record of delivering exceptional results for Fortune 500 companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition & Awards */}
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
                Industry <span className="text-blue-400">Recognition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Recognized by leading industry analysts and trusted by Fortune 500 companies worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gartner Recognition",
                  description: "Featured in Gartner's Magic Quadrant for Managed Security Services",
                  year: "2024",
                  icon: Award
                },
                {
                  title: "Forrester Leader",
                  description: "Recognized as a Leader in Forrester's Wave for Cybersecurity Services",
                  year: "2023",
                  icon: Star
                },
                {
                  title: "Fortune 500 Trust",
                  description: "Trusted by over 200 Fortune 500 companies for critical technology needs",
                  year: "2024",
                  icon: Building2
                }
              ].map((recognition, index) => (
                <Card key={recognition.title} className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <recognition.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{recognition.title}</h3>
                  <p className="text-gray-300 mb-4">{recognition.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{recognition.year}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Client <span className="text-blue-600">Testimonials</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What Fortune 500 leaders say about working with VasperNet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group">
                  <div className="flex items-start space-x-3 mb-6">
                    <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Innovation & <span className="text-blue-600">Research</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driving the future of enterprise technology through continuous innovation and research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Security</h3>
                    <p className="text-gray-600">Leading research in machine learning and artificial intelligence for advanced threat detection and automated response systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud-Native Architecture</h3>
                    <p className="text-gray-600">Pioneering cloud-native solutions that deliver unprecedented scalability, performance, and cost efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Data Intelligence</h3>
                    <p className="text-gray-600">Advanced analytics and business intelligence solutions that transform raw data into actionable insights.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">R&D Investment</span>
                    <span className="font-bold text-gray-900">15% of Revenue</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Patents Filed</span>
                    <span className="font-bold text-gray-900">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Research Partners</span>
                    <span className="font-bold text-gray-900">12 Universities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Innovation Labs</span>
                    <span className="font-bold text-gray-900">3 Global Centers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Certifications & <span className="text-blue-600">Compliance</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-recognized certifications that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <Card key={cert.name} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-xs text-gray-600">{cert.description}</p>
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
              Ready to Partner with VasperNet?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Fortune 500 companies that trust us with their most critical technology initiatives
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl !text-white">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 