import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud, Network, Database, Smartphone, Server, TrendingUp } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Fortune 500 Security Transformation",
      description: "Comprehensive cybersecurity overhaul for a global financial services corporation, implementing zero-trust architecture and advanced threat detection.",
      icon: <Shield className="w-8 h-8 text-trust-gold" />,
      industry: "Financial Services",
      results: "99.9% threat detection, 60% faster incident response, full regulatory compliance"
    },
    {
      title: "Enterprise Cloud Migration",
      description: "Strategic multi-cloud migration for a leading healthcare organization, ensuring HIPAA compliance and 99.99% availability.",
      icon: <Cloud className="w-8 h-8 text-trust-gold" />,
      industry: "Healthcare",
      results: "40% cost reduction, 99.99% uptime, seamless scalability"
    },
    {
      title: "Global Network Infrastructure",
      description: "Complete network redesign and implementation for a multinational manufacturing company across 15 countries.",
      icon: <Network className="w-8 h-8 text-trust-gold" />,
      industry: "Manufacturing",
      results: "50% performance improvement, 24/7 global connectivity, zero downtime migration"
    },
    {
      title: "Enterprise Data Platform",
      description: "Custom business intelligence solution providing real-time analytics and predictive insights for strategic decision-making.",
      icon: <Database className="w-8 h-8 text-trust-gold" />,
      industry: "Retail",
      results: "300% faster analytics, 25% revenue increase, real-time decision making"
    },
    {
      title: "Digital Transformation Initiative",
      description: "End-to-end digital modernization including legacy system migration, process automation, and workforce enablement.",
      icon: <Smartphone className="w-8 h-8 text-trust-gold" />,
      industry: "Insurance",
      results: "70% process automation, 50% faster claims processing, enhanced customer experience"
    },
    {
      title: "Infrastructure Automation",
      description: "DevOps transformation with enterprise-grade CI/CD pipelines, infrastructure as code, and automated monitoring systems.",
      icon: <Server className="w-8 h-8 text-trust-gold" />,
      industry: "Technology",
      results: "80% faster deployments, 95% error reduction, improved team productivity"
    }
  ];

  return (
    <section id="portfolio" className="corporate-section bg-gradient-corporate">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="text-corporate-gradient">Results</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            Transforming enterprise technology landscapes with measurable outcomes. 
            Trusted by industry leaders to deliver complex, mission-critical solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="corporate-card p-8 h-full flex flex-col animate-scale-subtle"
            >
              {/* Icon & Industry */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-trust-light rounded-xl">
                  {project.icon}
                </div>
                <span className="text-xs font-medium text-trust-gold bg-trust-light px-3 py-1 rounded-full">
                  {project.industry}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-corporate-gray mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="mb-6 p-4 bg-primary-light rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">Key Outcomes:</p>
                  <p className="text-xs text-corporate-gray leading-relaxed">
                    {project.results}
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-2xl shadow-corporate-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Enterprise Impact</h3>
            <p className="text-corporate-gray">Delivering measurable value across Fortune 500 organizations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Enterprise Projects", icon: <TrendingUp className="w-6 h-6 text-trust-gold" /> },
              { number: "$2.5B", label: "Cost Savings Delivered", icon: <Database className="w-6 h-6 text-trust-gold" /> },
              { number: "99.9%", label: "Average Uptime", icon: <Shield className="w-6 h-6 text-trust-gold" /> },
              { number: "98%", label: "Client Retention", icon: <Server className="w-6 h-6 text-trust-gold" /> }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-corporate-gray font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-corporate-gray mb-8 text-lg max-w-2xl mx-auto">
            Our enterprise solutions team is ready to assess your technology landscape 
            and design a strategic transformation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary-subtle text-white font-semibold px-8 py-3 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
            >
              Schedule Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Download Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};