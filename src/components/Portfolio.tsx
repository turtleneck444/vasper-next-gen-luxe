import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Cloud, Network, Database, Smartphone, Server } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Security Overhaul",
      description: "Complete cybersecurity transformation for a Fortune 500 company, including threat detection, compliance management, and incident response protocols.",
      icon: <Shield className="w-8 h-8 text-gold" />,
      technologies: ["Zero Trust", "SIEM", "EDR", "Compliance"],
      results: "99.9% threat detection accuracy, 50% reduction in security incidents"
    },
    {
      title: "Cloud Migration Success",
      description: "Seamless migration of legacy infrastructure to multi-cloud environment with 60% cost reduction and improved scalability.",
      icon: <Cloud className="w-8 h-8 text-gold" />,
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform"],
      results: "60% cost reduction, 99.99% uptime achieved"
    },
    {
      title: "Network Infrastructure Modernization",
      description: "Complete network redesign and implementation for a healthcare organization, ensuring HIPAA compliance and high availability.",
      icon: <Network className="w-8 h-8 text-gold" />,
      technologies: ["SD-WAN", "Network Segmentation", "QoS", "Monitoring"],
      results: "40% improvement in network performance, 100% compliance"
    },
    {
      title: "Data Analytics Platform",
      description: "Custom business intelligence solution providing real-time insights and predictive analytics for informed decision-making.",
      icon: <Database className="w-8 h-8 text-gold" />,
      technologies: ["Power BI", "Data Lake", "ML Pipeline", "APIs"],
      results: "300% faster reporting, 25% increase in operational efficiency"
    },
    {
      title: "Mobile Enterprise Solution",
      description: "End-to-end mobile application development with enterprise integration, serving 10,000+ users across multiple platforms.",
      icon: <Smartphone className="w-8 h-8 text-gold" />,
      technologies: ["React Native", "Mobile DevOps", "Enterprise APIs", "Security"],
      results: "4.8/5 user rating, 10,000+ active users"
    },
    {
      title: "Infrastructure Automation",
      description: "DevOps transformation with CI/CD pipelines, infrastructure as code, and automated monitoring for improved deployment velocity.",
      icon: <Server className="w-8 h-8 text-gold" />,
      technologies: ["GitLab CI/CD", "Docker", "Ansible", "Prometheus"],
      results: "80% faster deployments, 95% reduction in errors"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Work in <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve their digital transformation goals 
            with innovative IT solutions and measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-8 shadow-luxury hover:shadow-glow transition-all duration-300 border-tech-light group bg-card h-full flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-gradient-to-br from-gold-light to-primary-light rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary-light text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gold mb-2">Key Results:</p>
                  <p className="text-sm text-muted-foreground">
                    {project.results}
                  </p>
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-primary group mt-auto"
              >
                View Details
                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Proven Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Coverage" },
              { number: "15+", label: "Industry Verticals" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Join our satisfied clients and experience the VasperNet difference. 
            Let's transform your business together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-gold text-primary font-semibold px-8 py-4 text-lg rounded-2xl shadow-luxury hover:shadow-glow transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-2xl"
            >
              View All Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};