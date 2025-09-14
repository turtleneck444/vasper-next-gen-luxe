import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud, Network, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-network-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Corporate Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <CheckCircle className="w-5 h-5 text-trust-gold" />
          <span className="text-white font-medium">Enterprise-Grade IT Solutions</span>
          <span className="text-white/70">•</span>
          <span className="text-white/90">Fortune 500 Trusted</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Virtual IT Director{" "}
          <span className="text-corporate-gradient">Services</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
          Strategic IT leadership without the overhead. Expert vendor management, 
          environment monitoring, and 24/7 emergency support for your business.
        </p>
        
        {/* Service Icons - Clean & Professional */}
        <div className="flex justify-center gap-12 mb-12">
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-white/80 font-medium">IT Strategy</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Cloud className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-white/80 font-medium">Vendor Management</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <Network className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-white/80 font-medium">24/7 Support</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="gradient-trust text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-corporate-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Virtual IT Director
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-lg"
          >
            View Services
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex justify-center items-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-trust-gold" />
            <span className="text-sm">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-trust-gold" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-trust-gold" />
            <span className="text-sm">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};