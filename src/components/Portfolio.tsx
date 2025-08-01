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
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-5xl font-extrabold text-[#111] mb-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Proven <span className="text-[#1976d2]">Results</span></h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">Transforming enterprise technology landscapes with measurable outcomes. Trusted by industry leaders to deliver complex, mission-critical solutions.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="corporate-card p-8 h-full flex flex-col animate-scale-subtle glassmorphism-card"
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
                <h3 className="text-xl font-bold text-[#111] mb-4">
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
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-xl rounded-2xl shadow-corporate-lg p-6 md:p-8 mb-8 border border-blue-100/40 glassmorphism-card animate-fade-up">
          <div className="flex-1 flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { number: "500+", label: "Enterprise Projects", icon: <TrendingUp className="w-7 h-7 text-blue-500" /> },
              { number: "$2.5B", label: "Cost Savings Delivered", icon: <Database className="w-7 h-7 text-cyan-500" /> },
              { number: "99.9%", label: "Average Uptime", icon: <Shield className="w-7 h-7 text-green-500" /> },
              { number: "98%", label: "Client Retention", icon: <Server className="w-7 h-7 text-purple-500" /> }
            ].map((stat) => (
              <div key={stat.label} className="text-center min-w-[120px]">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 bg-clip-text mb-1">{stat.number}</div>
                <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">Contact Our Experts</Button>
          </div>
        </div>
      </div>
    </section>
  );
};