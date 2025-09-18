import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Workflow,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const SharePointCTA = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Management",
      description: "Centralized file storage with version control"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration", 
      description: "Real-time editing and seamless communication"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Power Platform integration for business processes"
    }
  ];

  const benefits = [
    "Complete SharePoint setup & migration",
    "Custom site design & branding",
    "Power Platform integration",
    "User training & support",
    "Ongoing maintenance & optimization"
  ];

  return (
    <section className="corporate-section bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  Microsoft SharePoint Experts
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Transform Your Business with 
                  <span className="text-corporate-gradient block">SharePoint Excellence</span>
                </h2>
                
                <p className="text-xl text-corporate-gray leading-relaxed">
                  Unlock powerful collaboration, document management, and workflow automation 
                  with our comprehensive SharePoint solutions designed for modern businesses.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-corporate-gray text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/sharepoint">
                  <Button 
                    size="lg" 
                    className="gradient-primary-subtle text-white font-semibold px-8 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
                  >
                    Explore SharePoint Solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Right - Features Grid */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card 
                    key={feature.title}
                    className="relative p-6 bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg" />
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-primary' })}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-corporate-gray">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <Card className="p-6 bg-white/95 border-0 shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-corporate-gray">SharePoint Deployments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-corporate-gray">Client Satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};