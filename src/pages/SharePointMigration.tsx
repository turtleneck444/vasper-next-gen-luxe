import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Upload, 
  FolderOpen, 
  Tag,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Settings,
  Shield
} from "lucide-react";

export const SharePointMigration = () => {
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
      icon: <Upload className="w-8 h-8" />,
      title: "Legacy System Migration",
      description: "Seamlessly migrate data from your existing systems to SharePoint with zero data loss and minimal downtime.",
      details: [
        "File server migration",
        "Email system integration",
        "Database content transfer",
        "Custom application data migration"
      ]
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: "File Structure Optimization",
      description: "Reorganize and optimize your file structure for better performance, searchability, and user experience.",
      details: [
        "Logical folder hierarchy design",
        "Duplicate file identification",
        "Archive strategy implementation",
        "Performance optimization"
      ]
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Metadata Management",
      description: "Implement comprehensive metadata strategies to improve content discoverability and organization.",
      details: [
        "Custom metadata fields",
        "Content type creation",
        "Taxonomy development",
        "Search optimization"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Version Control Setup",
      description: "Establish robust version control systems to track changes and maintain document integrity.",
      details: [
        "Version history configuration",
        "Check-in/check-out policies",
        "Approval workflows",
        "Retention policies"
      ]
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze your current data landscape, identify migration requirements, and create a detailed migration strategy."
    },
    {
      step: "02", 
      title: "Data Preparation",
      description: "Clean, organize, and prepare your data for migration, ensuring data quality and consistency."
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Execute the migration using proven tools and methodologies, with continuous monitoring and validation."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Thoroughly test migrated content, verify data integrity, and ensure all functionality works as expected."
    },
    {
      step: "05",
      title: "Go-Live & Support",
      description: "Deploy to production with user training and ongoing support to ensure smooth transition."
    }
  ];

  const supportedSystems = [
    "SharePoint On-Premises",
    "File Servers (Windows/Linux)",
    "Google Workspace",
    "Box",
    "Dropbox",
    "OneDrive for Business",
    "Exchange Server",
    "Custom Applications",
    "Network Attached Storage (NAS)",
    "Document Management Systems"
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
                <Database className="w-4 h-4" />
                Data Migration & Management
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Seamless Data Migration & 
                <span className="text-corporate-gradient block">Management Solutions</span>
              </h1>
              
              <p className="text-xl text-corporate-gray leading-relaxed max-w-3xl mx-auto mb-8">
                Migrate your data from legacy systems to SharePoint with confidence. Our experts ensure 
                zero data loss, minimal downtime, and optimal organization for maximum productivity and collaboration.
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
                Comprehensive Migration 
                <span className="text-corporate-gradient"> Services</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Our migration services cover every aspect of data transfer, from initial assessment 
                to post-migration optimization and user training.
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

      {/* Supported Systems */}
      <section className="corporate-section bg-gradient-to-br from-muted/20 to-background">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Migrate From <span className="text-corporate-gradient">Any System</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Our migration expertise covers a wide range of platforms and systems, 
                ensuring we can handle your specific migration requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedSystems.map((system, index) => (
                <div key={system} className="flex items-center gap-3 p-4 bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-corporate-gray font-medium">{system}</span>
                </div>
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
                Our Proven <span className="text-corporate-gradient">Migration Process</span>
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                We follow a structured, proven methodology to ensure your migration is successful, 
                secure, and completed on time and within budget.
              </p>
            </div>

            <div className="space-y-8">
              {migrationSteps.map((step, index) => (
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
                  Why Choose Our Migration Service?
                </h2>
                <div className="space-y-6">
                  {[
                    "Zero data loss guarantee with comprehensive backup strategies",
                    "Minimal downtime with carefully planned migration windows",
                    "Expert migration team with years of experience",
                    "Custom migration tools and automated processes",
                    "Complete data integrity validation and testing",
                    "User training and change management support",
                    "Post-migration optimization and performance tuning",
                    "Ongoing support and maintenance available"
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
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Migrate?</h3>
                    <p className="text-corporate-gray mb-6">
                      Get a free migration assessment and discover how we can help you 
                      seamlessly transition to SharePoint.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        onClick={handleScheduleConsultation}
                        className="w-full gradient-primary-subtle text-white font-semibold py-3"
                      >
                        Get Free Assessment
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
              Start Your Migration Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let legacy systems hold your business back. Contact our migration experts 
              to discuss your requirements and get started with a seamless transition to SharePoint.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleScheduleConsultation}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Migration Planning
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
