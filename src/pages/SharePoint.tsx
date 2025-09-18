import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Users, 
  Shield, 
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Settings,
  Database,
  Workflow,
  BookOpen,
  Phone
} from "lucide-react";

export const SharePoint = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  const handleCallNow = () => {
    window.location.href = "tel:(949)396-0640";
  };
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "SharePoint Setup & Configuration",
      description: "Complete SharePoint Online and On-Premises deployment with custom configuration tailored to your business needs.",
      features: ["Initial Site Architecture", "Permission Structure Setup", "Custom Branding & Themes", "Integration with Microsoft 365"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Migration & Management", 
      description: "Seamless migration from legacy systems to SharePoint with comprehensive data organization and management.",
      features: ["Legacy System Migration", "File Structure Optimization", "Metadata Management", "Version Control Setup"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Power Platform integration with SharePoint to create automated workflows that streamline your business processes.",
      features: ["Power Automate Integration", "Custom Forms with PowerApps", "Approval Workflows", "Business Process Automation"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Support",
      description: "Comprehensive user training and ongoing support to ensure maximum adoption and productivity gains.",
      features: ["End-User Training Sessions", "Administrator Training", "Best Practices Documentation", "Ongoing Support & Maintenance"]
    }
  ];

  const benefits = [
    "Centralized document management and collaboration",
    "Enhanced security with enterprise-grade permissions",
    "Seamless integration with Microsoft 365 suite", 
    "Mobile accessibility for remote work capabilities",
    "Advanced search and content discovery",
    "Automated workflows to reduce manual tasks",
    "Compliance and governance features",
    "Scalable solution that grows with your business"
  ];

  const industries = [
    "Healthcare & Medical",
    "Legal & Professional Services", 
    "Manufacturing & Engineering",
    "Financial Services",
    "Education & Research",
    "Non-Profit Organizations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-12">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <Globe className="w-4 h-4" />
                  Microsoft SharePoint Experts
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Unlock Your Business Potential with 
                  <span className="text-corporate-gradient block">SharePoint Solutions</span>
                </h1>
                
                <p className="text-xl text-corporate-gray leading-relaxed max-w-xl">
                  Transform how your team collaborates, manages documents, and automates workflows 
                  with our comprehensive SharePoint services designed for modern businesses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={handleScheduleConsultation}
                    className="gradient-primary-subtle text-white font-semibold px-8 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Right - Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-6 animate-scale-subtle">
                {[
                  { icon: <FileText />, title: "Document Management", desc: "Centralized storage & version control" },
                  { icon: <Users />, title: "Team Collaboration", desc: "Real-time editing & communication" },
                  { icon: <Shield />, title: "Security & Compliance", desc: "Enterprise-grade protection" },
                  { icon: <Search />, title: "Smart Search", desc: "AI-powered content discovery" }
                ].map((item, index) => (
                  <Card key={item.title} className="p-6 bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      {React.cloneElement(item.icon, { className: 'w-6 h-6 text-primary' })}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-corporate-gray">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive SharePoint <span className="text-corporate-gradient">Services</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                From initial setup to advanced automation, we provide end-to-end SharePoint solutions 
                that transform how your business operates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="relative p-8 bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg" />
                  
                  <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit">
                    {React.cloneElement(service.icon, { className: 'w-8 h-8 text-primary' })}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-corporate-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-corporate-gray">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Industries Section */}
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Benefits */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-foreground">
                  Why Choose SharePoint?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-corporate-gray text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-foreground">
                  Industries We Serve
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {industries.map((industry) => (
                    <Card key={industry} className="p-4 bg-white/95 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium text-foreground">{industry}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-corporate-lg p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Ready to Transform Your Business?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Get Started with SharePoint Today
            </h2>
            
            <p className="text-xl text-corporate-gray mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discover how SharePoint can revolutionize 
              your business collaboration and productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleScheduleConsultation}
                className="gradient-primary-subtle text-white font-semibold px-10 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleCallNow}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4"
              >
                Call: (949) 396-0640
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};