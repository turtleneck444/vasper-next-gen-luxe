import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Shield, 
  Palette, 
  Link,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Database,
  Globe
} from "lucide-react";

export const SharePointSetup = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  const handleCallNow = () => {
    window.location.href = "tel:(949)396-0640";
  };

  const handleEmailUs = () => {
    window.location.href = "mailto:support@veloratek.com";
  };

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Initial Site Architecture",
      description: "Design and implement a robust SharePoint site structure that aligns with your organizational needs and growth plans.",
      details: [
        "Custom site collection design",
        "Hierarchical site organization",
        "Content type planning",
        "Navigation structure optimization"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Permission Structure Setup",
      description: "Implement enterprise-grade security with granular permissions that protect sensitive data while enabling collaboration.",
      details: [
        "Role-based access control",
        "Group permission management",
        "Inheritance configuration",
        "Security audit implementation"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Branding & Themes",
      description: "Create a cohesive visual identity that reflects your brand while maintaining SharePoint's functionality and usability.",
      details: [
        "Custom master pages",
        "Brand-compliant color schemes",
        "Logo integration",
        "Responsive design optimization"
      ]
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Microsoft 365 Integration",
      description: "Seamlessly connect SharePoint with your existing Microsoft 365 ecosystem for maximum productivity and efficiency.",
      details: [
        "Teams integration setup",
        "OneDrive synchronization",
        "Power Platform connectivity",
        "Exchange integration"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your current infrastructure, business requirements, and user needs to create a comprehensive implementation plan."
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Design a scalable SharePoint architecture that supports your current operations and future growth objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy and configure SharePoint according to best practices, ensuring security, performance, and usability."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Thoroughly test all functionality, permissions, and integrations to ensure everything works as expected."
    },
    {
      step: "05",
      title: "Training & Handover",
      description: "Provide comprehensive training to your team and hand over complete documentation for ongoing management."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-12">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Settings className="w-4 h-4" />
                SharePoint Setup & Configuration
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Complete SharePoint 
                <span className="text-corporate-gradient block">Setup & Configuration</span>
              </h1>
              
              <p className="text-xl text-corporate-gray leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your business with a professionally configured SharePoint environment. 
                Our experts design and implement SharePoint solutions tailored to your specific needs, 
                ensuring security, scalability, and maximum user adoption.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleScheduleConsultation}
                  className="gradient-primary-subtle text-white font-semibold px-8 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleCallNow}
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                >
                  Call: (949) 396-0640
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What's Included in Our 
                <span className="text-corporate-gradient"> Setup Service</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Our comprehensive setup service covers every aspect of SharePoint configuration, 
                from initial architecture to user training and ongoing support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="relative p-8 bg-white/95 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-t-lg" />
                  
                  <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit">
                    {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-primary' })}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-corporate-gray mb-6 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-corporate-gray">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Proven <span className="text-corporate-gradient">Implementation Process</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                We follow a structured approach to ensure your SharePoint implementation is successful, 
                secure, and meets all your business requirements.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-lg text-corporate-gray leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Why Choose Our SharePoint Setup Service?
                </h2>
                <div className="space-y-6">
                  {[
                    "Expert configuration by certified SharePoint professionals",
                    "Customized solution designed for your specific business needs",
                    "Enterprise-grade security and compliance implementation",
                    "Seamless integration with existing Microsoft 365 environment",
                    "Comprehensive training and documentation provided",
                    "Ongoing support and maintenance available",
                    "Proven track record with Fortune 500 companies",
                    "Scalable architecture that grows with your business"
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-corporate-gray text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
                    <p className="text-corporate-gray mb-6">
                      Contact our SharePoint experts today to discuss your requirements and get a customized implementation plan.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        onClick={handleScheduleConsultation}
                        className="w-full gradient-primary-subtle text-white font-semibold py-3"
                      >
                        Schedule Free Consultation
                      </Button>
                      <div className="flex items-center justify-center gap-4 text-sm text-corporate-gray">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          (949) 396-0640
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          support@veloratek.com
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="w-full px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Velora Tek for their SharePoint implementation needs. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleScheduleConsultation}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleCallNow}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-xl font-semibold"
              >
                Call (949) 396-0640
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
