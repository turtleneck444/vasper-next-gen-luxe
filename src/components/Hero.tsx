import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cloud, Network } from "lucide-react";
import heroBackground from "@/assets/hero-network-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent" />
      
      {/* Animated Network Nodes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-glow rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gold rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary-glow rounded-full animate-float delay-2000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-white/20">
          <span className="text-gold text-sm font-medium">No client is too small</span>
          <span className="text-white/70">•</span>
          <span className="text-white/90 text-sm">Contact us for a quote</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Everything you need in{" "}
          <span className="text-gradient-gold">IT</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
          Our team of experienced professionals will help you stay ahead of the game 
          with our top-of-the-line technology solutions.
        </p>
        
        {/* Service Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 glass rounded-2xl group-hover:shadow-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-white/70">Cybersecurity</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 glass rounded-2xl group-hover:shadow-glow transition-all duration-300">
              <Cloud className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-white/70">Cloud Computing</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="p-4 glass rounded-2xl group-hover:shadow-glow transition-all duration-300">
              <Network className="w-8 h-8 text-gold" />
            </div>
            <span className="text-sm text-white/70">Network Management</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="gradient-gold text-primary font-semibold px-8 py-4 text-lg rounded-2xl shadow-luxury hover:shadow-glow transition-all duration-300 group"
        >
          Get In Touch
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};