import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Workflow, 
  Zap, 
  Smartphone, 
  CheckSquare,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Settings,
  Database
} from "lucide-react";

export const SharePointAutomation = () => {
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
      icon: <Zap className="w-8 h-8" />,
      title: "Power Automate Integration",
      description: "Create powerful automated workflows that connect SharePoint with other Microsoft 365 applications and external systems.",
      details: [
        "Document approval workflows",
        "Email notifications and alerts",
        "Data synchronization between systems",
        "Conditional logic and branching"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Custom Forms with PowerApps",
      description: "Build intuitive, mobile-friendly forms that integrate seamlessly with SharePoint for data collection and management.",
      details: [
        "Responsive form design",
        "Data validation and business rules",
        "Integration with SharePoint lists",
        "Mobile app deployment"
      ]
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Approval Workflows",
      description: "Streamline your approval processes with automated workflows that route documents and requests to the right people.",
      details: [
        "Multi-level approval chains",
        "Escalation and timeout handling",
        "Approval history tracking",
        "Custom approval criteria"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Business Process Automation",
      description: "Automate complex business processes to reduce manual work, improve accuracy, and increase efficiency.",
      details: [
        "Process mapping and optimization",
        "Integration with external systems",
        "Error handling and notifications",
        "Performance monitoring and analytics"
      ]
    }
  ];

  const automationTypes = [
    {
      title: "Document Management",
      description: "Automate document creation, review, approval, and publishing processes",
      examples: ["Contract approval workflows", "Policy document reviews", "Template-based document generation"]
    },
    {
      title: "Data Processing",
      description: "Automate data collection, validation, and processing tasks",
      examples: ["Survey data processing", "Invoice processing", "Customer data updates"]
    },
    {
      title: "Communication",
      description: "Automate notifications, reminders, and communication workflows",
      examples: ["Meeting reminders", "Status updates", "Deadline notifications"]
    },
    {
      title: "Integration",
      description: "Connect SharePoint with other business systems and applications",
      examples: ["CRM synchronization", "ERP data updates", "Third-party API integrations"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Process Analysis",
      description: "Analyze your current business processes to identify automation opportunities and requirements."
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Design custom automation solutions using Power Platform tools tailored to your specific needs."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build and thoroughly test your automation solutions to ensure reliability and performance."
    },
    {
      step: "04",
      title: "Deployment & Training",
      description: "Deploy solutions to production and provide comprehensive training to your team."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Monitor performance and continuously optimize your automation solutions for maximum efficiency."
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
                <Workflow className="w-4 h-4" />
                Workflow Automation
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Power Platform Integration & 
                <span className="text-corporate-gradient block">Workflow Automation</span>
              </h1>
              
              <p className="text-xl text-corporate-gray leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your business processes with intelligent automation. Our Power Platform experts 
                create custom workflows, forms, and integrations that streamline operations and boost productivity.
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
                Comprehensive Automation 
                <span className="text-corporate-gradient"> Solutions</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Our automation services leverage the full power of Microsoft Power Platform 
                to create intelligent, scalable solutions that transform how your business operates.
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

      {/* Automation Types */}
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Types of <span className="text-corporate-gradient">Automation</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                We specialize in various types of business process automation, 
                each designed to address specific operational challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <Card key={type.title} className="p-8 bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{type.title}</h3>
                  <p className="text-corporate-gray mb-6 text-lg">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example) => (
                      <div key={example} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-corporate-gray">{example}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Automation <span className="text-corporate-gradient">Development Process</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                We follow a proven methodology to ensure your automation solutions are 
                reliable, scalable, and deliver measurable business value.
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
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Benefits of Workflow Automation
                </h2>
                <div className="space-y-6">
                  {[
                    "Reduce manual work by up to 80% with intelligent automation",
                    "Improve accuracy and eliminate human errors in repetitive tasks",
                    "Accelerate business processes and reduce processing time",
                    "Enhance compliance with automated audit trails and reporting",
                    "Increase employee productivity by focusing on strategic work",
                    "Provide real-time visibility into process performance",
                    "Enable 24/7 operation of critical business processes",
                    "Scale operations without proportional increase in staff"
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
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Automate?</h3>
                    <p className="text-corporate-gray mb-6">
                      Discover how automation can transform your business processes. 
                      Get a free consultation and process analysis.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        onClick={handleScheduleConsultation}
                        className="w-full gradient-primary-subtle text-white font-semibold py-3"
                      >
                        Get Free Process Analysis
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
              Automate Your Success Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stop wasting time on repetitive tasks. Let our automation experts help you 
              build intelligent workflows that work 24/7 for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleScheduleConsultation}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Automation Journey
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
