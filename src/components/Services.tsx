import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Cloud, 
  Network, 
  Server, 
  Smartphone, 
  Database,
  ArrowRight 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"]
    },
    {
      icon: <Cloud className="w-12 h-12 text-gold" />,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
      features: ["Cloud Migration", "Infrastructure as Code", "Multi-Cloud Strategy", "Cost Optimization"]
    },
    {
      icon: <Network className="w-12 h-12 text-gold" />,
      title: "Network Management", 
      description: "Robust networking solutions for reliable connectivity and optimal performance.",
      features: ["Network Design", "Performance Monitoring", "Wireless Solutions", "Network Security"]
    },
    {
      icon: <Server className="w-12 h-12 text-gold" />,
      title: "Infrastructure Services",
      description: "Enterprise-grade infrastructure management and optimization for maximum efficiency.",
      features: ["Server Management", "Virtualization", "Backup Solutions", "Disaster Recovery"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-gold" />,
      title: "Digital Solutions",
      description: "Custom software development and digital transformation consulting services.",
      features: ["Custom Development", "API Integration", "Mobile Solutions", "Digital Strategy"]
    },
    {
      icon: <Database className="w-12 h-12 text-gold" />,
      title: "Data Management",
      description: "Comprehensive data solutions including analytics, storage, and governance.",
      features: ["Data Analytics", "Database Design", "Data Migration", "Business Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary-light via-background to-gold-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to empower your business 
            and drive digital transformation across all sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 shadow-luxury hover:shadow-glow transition-all duration-300 border-tech-light group bg-card/80 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-gradient-to-br from-gold-light to-primary-light rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-primary group"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 glass rounded-3xl border border-white/20">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's discuss how our IT solutions can drive your success.
          </p>
          <Button 
            size="lg" 
            className="gradient-gold text-primary font-semibold px-8 py-4 text-lg rounded-2xl shadow-luxury hover:shadow-glow transition-all duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};