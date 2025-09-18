import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Shield, 
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe
} from "lucide-react";
import React from "react";

export const SharePointServices = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Management",
      description: "Centralized file storage and collaboration"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration", 
      description: "Real-time editing and workflow automation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade permissions and governance"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "AI-powered content discovery and insights"
    }
  ];

  return (
    <section id="sharepoint" className="corporate-section bg-gradient-to-br from-background to-muted/20">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Microsoft SharePoint Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business with 
              <span className="text-corporate-gradient block">SharePoint Excellence</span>
            </h2>
            <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
              Unlock the full potential of Microsoft SharePoint with our comprehensive setup, migration, 
              and optimization services designed for modern businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Complete SharePoint Solutions
                </h3>
                <p className="text-corporate-gray text-lg leading-relaxed">
                  From initial setup to advanced customization, we help you leverage SharePoint's 
                  powerful capabilities to streamline collaboration, enhance productivity, and 
                  secure your business data.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                {[
                  "SharePoint Online & On-Premises Setup",
                  "Custom Site Design & Branding", 
                  "Workflow Automation & Power Platform Integration",
                  "Migration from Legacy Systems",
                  "Training & User Adoption Support"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-corporate-gray">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-primary-subtle text-white font-semibold px-8 py-3 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
                >
                  Get SharePoint Setup
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  View SharePoint Solutions
                </Button>
              </div>
            </div>

            {/* Right - Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="relative p-6 bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg" />
                  
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-primary' })}
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-corporate-gray text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-white rounded-2xl shadow-corporate-lg p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Ready to Get Started?</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Transform Your Business Collaboration Today
            </h3>
            <p className="text-corporate-gray mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of businesses who've revolutionized their workflows with our SharePoint expertise.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary-subtle text-white font-semibold px-10 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
            >
              Schedule SharePoint Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};