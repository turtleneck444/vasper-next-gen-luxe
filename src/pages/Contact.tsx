import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Send,
  Shield,
  Award,
  CheckCircle,
  Building2,
  Globe,
  Users,
  ArrowRight,
  MessageSquare,
  Calendar,
  Video,
  FileText,
  Download,
  Star,
  Zap,
  Target
} from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry",
      description: "Our enterprise solutions team will contact you within 24 hours.",
    });
    setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Support",
      subtitle: "24/7 Critical Issues",
      contact: "(949) 396-0640",
      description: "Immediate response for urgent security incidents",
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Mail,
      title: "Enterprise Inquiries",
      subtitle: "Business Development",
      contact: "support@veloratek.com",
      description: "Strategic partnerships and enterprise solutions",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: MessageSquare,
      title: "General Support",
      subtitle: "Technical Assistance",
      contact: "support@veloratek.com",
      description: "Technical questions and general inquiries",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      country: "United States",
      address: "350 5th Avenue, New York, NY 10118",
      phone: "(949) 396-0640",
      email: "nyc@veloratek.com",
      timezone: "EST (UTC-5)",
      services: ["Cybersecurity", "Cloud Solutions", "Enterprise Consulting"]
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "30 St Mary Axe, London EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "london@veloratek.com",
      timezone: "GMT (UTC+0)",
      services: ["Network Management", "Digital Transformation", "Compliance"]
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "71 Robinson Road, Singapore 068895",
      phone: "+65 6123 4567",
      email: "singapore@veloratek.com",
      timezone: "SGT (UTC+8)",
      services: ["Data Analytics", "AI Solutions", "Regional Support"]
    }
  ];

  const consultationTypes = [
    {
      icon: Calendar,
      title: "Strategy Session",
      description: "60-minute consultation to discuss your technology roadmap",
      duration: "60 minutes",
      format: "Video Call",
      focus: "Strategic Planning"
    },
    {
      icon: Video,
      title: "Technical Deep Dive",
      description: "Comprehensive technical assessment and solution design",
      duration: "90 minutes",
      format: "Video Call + Demo",
      focus: "Technical Architecture"
    },
    {
      icon: Building2,
      title: "On-Site Assessment",
      description: "Comprehensive on-site evaluation of your infrastructure",
      duration: "1-2 days",
      format: "On-Site Visit",
      focus: "Infrastructure Review"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM – 6:00 PM EST", support: "Full Support" },
    { day: "Saturday", hours: "9:00 AM – 3:00 PM EST", support: "Limited Support" },
    { day: "Sunday", hours: "Emergency Only", support: "Critical Issues" },
    { day: "Holidays", hours: "Emergency Support", support: "24/7 Available" }
  ];

  const responseTimes = [
    { priority: "Critical Security Incident", time: "< 1 hour", icon: Shield, color: "text-red-600" },
    { priority: "System Outage", time: "< 2 hours", icon: Zap, color: "text-orange-600" },
    { priority: "General Support", time: "< 4 hours", icon: MessageSquare, color: "text-blue-600" },
    { priority: "Business Inquiry", time: "< 24 hours", icon: Building2, color: "text-green-600" }
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
                Contact Velora Tek
              </Badge>
              
              <TypewriterEffect
                words={[
                  { text: "Ready to", className: "text-gray-900 font-bold" },
                  { text: "Transform", className: "text-blue-600 font-bold" },
                  { text: "Your Enterprise?", className: "text-gray-900 font-bold" }
                ]}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                cursorClassName="bg-blue-600"
              />
              
              <TextGenerateEffect
                words="Connect with our enterprise solutions team to discuss your technology requirements and discover how Velora Tek can accelerate your digital transformation journey."
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
                duration={0.7}
              />
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className={`p-6 border-2 ${method.borderColor} hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600">{method.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-gray-900">{method.contact}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Consultation Types */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
                  <p className="text-lg text-gray-600">
                    Tell us about your enterprise technology needs and our experts will get back to you within 24 hours.
                  </p>
                </div>

                <Card className="p-8 border-2 border-gray-100">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="(949) 396-0640"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="cybersecurity">Cybersecurity Solutions</option>
                        <option value="cloud">Cloud Infrastructure</option>
                        <option value="network">Network Management</option>
                        <option value="data">Data & Analytics</option>
                        <option value="transformation">Digital Transformation</option>
                        <option value="managed">Managed IT Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your technology challenges and objectives..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Consultation Types */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Options</h2>
                  <p className="text-lg text-gray-600">
                    Choose the consultation type that best fits your needs and schedule.
                  </p>
                </div>

                <div className="space-y-6">
                  {consultationTypes.map((consultation, index) => (
                    <Card key={consultation.title} className="p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                          <consultation.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{consultation.title}</h3>
                          <p className="text-gray-600 mb-3">{consultation.description}</p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-semibold text-gray-900">Duration</p>
                              <p className="text-gray-600">{consultation.duration}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Format</p>
                              <p className="text-gray-600">{consultation.format}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Focus</p>
                              <p className="text-gray-600">{consultation.focus}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices - Placeholder */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Global <span className="text-blue-600">Presence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serving enterprise clients worldwide with local expertise and global capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">North America</h3>
                <p className="text-gray-600 mb-3">United States Operations</p>
                <p className="text-sm text-gray-500">Primary: (949) 396-0640</p>
                <p className="text-sm text-gray-500">Email: support@veloratek.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 mb-3">Global Coverage</p>
                <p className="text-sm text-gray-500">Emergency: (949) 396-0640</p>
                <p className="text-sm text-gray-500">Available worldwide</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Ready</h3>
                <p className="text-gray-600 mb-3">Fortune 500 Trusted</p>
                <p className="text-sm text-gray-500">SOC 2 Compliant</p>
                <p className="text-sm text-gray-500">ISO 27001 Certified</p>
              </div>
            </div>          </div>
        </div>
      </section>

      {/* Business Hours & Response Times */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Business Hours */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div>
                        <p className="font-semibold text-gray-900">{schedule.day}</p>
                        <p className="text-sm text-gray-600">{schedule.hours}</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        {schedule.support}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Times */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Response Times</h2>
                <div className="space-y-4">
                  {responseTimes.map((response, index) => (
                    <div key={response.priority} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className={`w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center`}>
                        <response.icon className={`w-5 h-5 ${response.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{response.priority}</p>
                        <p className="text-sm text-gray-600">Response within {response.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Support Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise <span className="text-blue-600">Support Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support infrastructure designed for enterprise-scale operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Dedicated Account Manager",
                  description: "Personal account manager assigned to every enterprise client for personalized support and strategic guidance",
                  features: ["Strategic Planning", "Quarterly Reviews", "Custom Solutions", "Priority Escalation"]
                },
                {
                  icon: Clock,
                  title: "24/7 Global Support",
                  description: "Round-the-clock support across all time zones with multilingual support teams",
                  features: ["Multi-language Support", "Follow-the-sun Coverage", "Emergency Response", "Proactive Monitoring"]
                },
                {
                  icon: Users,
                  title: "Expert Technical Team",
                  description: "Certified professionals with deep expertise in enterprise technologies and industry best practices",
                  features: ["Certified Engineers", "Industry Specialists", "Continuous Training", "Best Practices"]
                }
              ].map((feature, index) => (
                <Card key={feature.title} className="p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Fortune 500 companies that trust Velora Tek for their critical technology needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl !text-white">
                Download Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 