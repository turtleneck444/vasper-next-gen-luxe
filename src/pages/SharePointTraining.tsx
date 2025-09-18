import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Settings,
  Database,
  Shield
} from "lucide-react";

export const SharePointTraining = () => {
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
      icon: <Users className="w-8 h-8" />,
      title: "End-User Training Sessions",
      description: "Comprehensive training programs designed to help your team maximize productivity with SharePoint and Microsoft 365.",
      details: [
        "Interactive hands-on workshops",
        "Role-specific training modules",
        "Best practices and tips",
        "Q&A sessions and support"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Administrator Training",
      description: "Advanced training for IT administrators and power users to effectively manage and maintain SharePoint environments.",
      details: [
        "Site collection administration",
        "Security and permissions management",
        "Content management strategies",
        "Troubleshooting and maintenance"
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Best Practices Documentation",
      description: "Comprehensive documentation and guides to ensure consistent usage and optimal performance across your organization.",
      details: [
        "User guides and manuals",
        "Administrative procedures",
        "Security guidelines",
        "Troubleshooting resources"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Ongoing Support & Maintenance",
      description: "Continuous support and maintenance services to ensure your SharePoint environment runs smoothly and efficiently.",
      details: [
        "24/7 technical support",
        "Regular system maintenance",
        "Performance monitoring",
        "Feature updates and enhancements"
      ]
    }
  ];

  const trainingPrograms = [
    {
      title: "SharePoint Fundamentals",
      duration: "4 hours",
      audience: "All Users",
      description: "Essential SharePoint skills for daily productivity",
      topics: [
        "Navigation and site structure",
        "Document management basics",
        "Collaboration features",
        "Search and discovery"
      ]
    },
    {
      title: "Advanced Collaboration",
      duration: "6 hours", 
      audience: "Power Users",
      description: "Advanced features for enhanced team collaboration",
      topics: [
        "Team sites and communication sites",
        "Workflow creation and management",
        "Custom lists and libraries",
        "Integration with Microsoft Teams"
      ]
    },
    {
      title: "Administrator Certification",
      duration: "16 hours",
      audience: "IT Administrators",
      description: "Comprehensive training for SharePoint administrators",
      topics: [
        "Site collection management",
        "Security and compliance",
        "Performance optimization",
        "Backup and disaster recovery"
      ]
    },
    {
      title: "Custom Solutions Training",
      duration: "Variable",
      audience: "Developers & Power Users",
      description: "Training on custom SharePoint solutions and configurations",
      topics: [
        "Power Platform integration",
        "Custom web parts and solutions",
        "API and integration development",
        "Migration and upgrade strategies"
      ]
    }
  ];

  const supportLevels = [
    {
      level: "Basic Support",
      description: "Essential support for day-to-day operations",
      features: [
        "Email support during business hours",
        "Basic troubleshooting assistance",
        "Documentation and knowledge base access",
        "Monthly system health checks"
      ],
      responseTime: "24-48 hours"
    },
    {
      level: "Professional Support",
      description: "Comprehensive support for growing organizations",
      features: [
        "Priority email and phone support",
        "Advanced troubleshooting and issue resolution",
        "Regular system maintenance and updates",
        "Quarterly performance reviews"
      ],
      responseTime: "4-8 hours"
    },
    {
      level: "Enterprise Support",
      description: "Premium support for mission-critical environments",
      features: [
        "24/7 phone and email support",
        "Dedicated support engineer",
        "Proactive monitoring and maintenance",
        "Custom training and consultation"
      ],
      responseTime: "1-2 hours"
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
                <BookOpen className="w-4 h-4" />
                Training & Support
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Comprehensive Training & 
                <span className="text-corporate-gradient block">Ongoing Support</span>
              </h1>
              
              <p className="text-xl text-corporate-gray leading-relaxed max-w-3xl mx-auto mb-8">
                Ensure maximum adoption and productivity with our comprehensive training programs and 
                ongoing support services. We help your team master SharePoint and Microsoft 365.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleScheduleConsultation}
                  className="gradient-primary-subtle text-white font-semibold px-8 py-4 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Training
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
                Complete Training & Support 
                <span className="text-corporate-gradient"> Services</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Our training and support services are designed to ensure your team gets the most 
                out of SharePoint and Microsoft 365, with ongoing assistance to keep everything running smoothly.
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

      {/* Training Programs */}
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Training <span className="text-corporate-gradient"> Programs</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                We offer a variety of training programs tailored to different skill levels and roles, 
                ensuring everyone in your organization can effectively use SharePoint and Microsoft 365.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => (
                <Card key={program.title} className="p-8 bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                    <div className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {program.duration}
                    </div>
                  </div>
                  <p className="text-corporate-gray mb-2 font-medium">{program.audience}</p>
                  <p className="text-corporate-gray mb-6">{program.description}</p>
                  <div className="space-y-2">
                    {program.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-corporate-gray">{topic}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="corporate-section">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Support <span className="text-corporate-gradient"> Levels</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Choose the support level that best fits your organization's needs, 
                from basic assistance to enterprise-level 24/7 support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <Card key={level.level} className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  level.level === 'Professional Support' 
                    ? 'bg-gradient-to-br from-primary/5 to-secondary/5 ring-2 ring-primary' 
                    : 'bg-white/80'
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{level.level}</h3>
                    <p className="text-corporate-gray">{level.description}</p>
                    <div className="mt-4 text-sm text-primary font-semibold">
                      Response Time: {level.responseTime}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {level.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-corporate-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
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
                  Why Choose Our Training & Support?
                </h2>
                <div className="space-y-6">
                  {[
                    "Certified Microsoft trainers with years of real-world experience",
                    "Customized training programs tailored to your specific needs",
                    "Hands-on learning with your actual SharePoint environment",
                    "Comprehensive documentation and ongoing resources",
                    "Flexible delivery options (on-site, remote, or hybrid)",
                    "Proven track record with Fortune 500 companies",
                    "Ongoing support to ensure continued success",
                    "ROI-focused training that delivers measurable results"
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
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
                    <p className="text-corporate-gray mb-6">
                      Contact our training experts to discuss your needs and create a 
                      customized training and support plan for your organization.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        onClick={handleScheduleConsultation}
                        className="w-full gradient-primary-subtle text-white font-semibold py-3"
                      >
                        Schedule Training Consultation
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
              Invest in Your Team's Success
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let your SharePoint investment go to waste. Ensure your team has the knowledge 
              and support they need to maximize productivity and achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleScheduleConsultation}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Training Today
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
