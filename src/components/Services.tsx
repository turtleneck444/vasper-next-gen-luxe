import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Cloud, 
  Network, 
  Server, 
  Smartphone, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import React from "react"; // Added missing import for React

export const Services = () => {
  const services = [
    {
      icon: <Shield className="w-10 h-10 text-trust-gold" />,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your digital assets and ensure regulatory compliance.",
      features: ["Threat Intelligence", "Security Operations Center", "Compliance Management", "Incident Response"]
    },
    {
      icon: <Cloud className="w-10 h-10 text-trust-gold" />,
      title: "Cloud Solutions",
      description: "Strategic cloud adoption and migration services designed for enterprise scalability and efficiency.",
      features: ["Cloud Strategy", "Multi-Cloud Management", "DevOps Integration", "Cost Optimization"]
    },
    {
      icon: <Network className="w-10 h-10 text-trust-gold" />,
      title: "Infrastructure Management", 
      description: "Comprehensive infrastructure services ensuring optimal performance and reliability for mission-critical operations.",
      features: ["Network Architecture", "Performance Monitoring", "Capacity Planning", "Infrastructure Security"]
    },
    {
      icon: <Server className="w-10 h-10 text-trust-gold" />,
      title: "Enterprise Infrastructure",
      description: "Robust infrastructure solutions designed for high availability and enterprise-scale operations.",
      features: ["Data Center Services", "Virtualization", "Backup & Recovery", "Business Continuity"]
    },
    {
      icon: <Smartphone className="w-10 h-10 text-trust-gold" />,
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to modernize your technology landscape.",
      features: ["Legacy Modernization", "Process Automation", "Digital Strategy", "Change Management"]
    },
    {
      icon: <Database className="w-10 h-10 text-trust-gold" />,
      title: "Data & Analytics",
      description: "Enterprise data solutions enabling informed decision-making and operational intelligence.",
      features: ["Data Architecture", "Business Intelligence", "Advanced Analytics", "Data Governance"]
    }
  ];

  return (
    <section id="services" className="corporate-section bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise <span className="text-corporate-gradient">IT Services</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions engineered for enterprise environments. 
            Delivering reliability, security, and scalability at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="relative rounded-2xl shadow-2xl border-0 bg-white/95 p-8 flex flex-col h-full animate-scale-subtle transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#133a7c] via-black to-[#1976d2] rounded-t-2xl" />
              {/* Icon */}
              <div className="mb-6 p-4 bg-gradient-to-br from-[#133a7c]/10 to-[#1976d2]/10 rounded-xl w-fit flex items-center justify-center shadow-md">
                {React.cloneElement(service.icon, { className: 'w-10 h-10 text-[#133a7c]' })}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#133a7c] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full border-[#133a7c] text-[#133a7c] hover:bg-[#133a7c] hover:text-white transition-all duration-200 font-semibold rounded-xl"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-corporate-lg p-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Modernize Your IT Infrastructure?
          </h3>
          <p className="text-corporate-gray mb-8 text-lg max-w-2xl mx-auto">
            Our enterprise solutions team is ready to assess your needs and design a comprehensive technology strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary-subtle text-white font-semibold px-8 py-3 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};