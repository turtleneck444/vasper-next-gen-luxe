import { Phone, Mail, MapPin, Shield, Award, Clock } from "lucide-react";
import vaspernetsLogo from "@/assets/vaspernet-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src={vaspernetsLogo} 
                alt="VasperNet Technology" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/80 leading-relaxed">
                Empowering businesses through innovative IT solutions. 
                Your trusted partner in digital transformation.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-gold">Enterprise Security</p>
                <p className="text-sm text-white/70">SOC 2 Compliant</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Services</h3>
            <ul className="space-y-3">
              {[
                "Cybersecurity",
                "Cloud Computing", 
                "Network Management",
                "Infrastructure Services",
                "Digital Solutions",
                "Data Management"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
                { label: "Get Quote", href: "#contact" },
                { label: "Support", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-white/70">24/7 Emergency Support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-white font-medium">hello@vaspernet.com</p>
                  <p className="text-sm text-white/70">Response within 4 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-white font-medium">Mon-Fri 9AM-5PM</p>
                  <p className="text-sm text-white/70">Business Hours</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex gap-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Award className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-gold">Certified Experts</p>
                <p className="text-sm text-white/70">Industry Leading</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              Copyright © {currentYear} VasperNet Technology - All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};