import { Phone, Mail, Shield, Award, Clock, Building2 } from "lucide-react";
import vaspernetsLogo from "@/assets/vaspernet-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src={vaspernetsLogo} 
                alt="VasperNet Technology" 
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Trusted enterprise technology partner delivering innovative IT solutions 
                to Fortune 500 companies worldwide. Excellence in every engagement.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-trust-gold/20 rounded-lg">
                  <Shield className="w-4 h-4 text-trust-gold" />
                </div>
                <div>
                  <p className="font-semibold text-trust-gold text-sm">SOC 2 Certified</p>
                  <p className="text-xs text-white/60">Enterprise Security</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-trust-gold/20 rounded-lg">
                  <Award className="w-4 h-4 text-trust-gold" />
                </div>
                <div>
                  <p className="font-semibold text-trust-gold text-sm">ISO 27001</p>
                  <p className="text-xs text-white/60">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-trust-gold">Enterprise Services</h3>
            <ul className="space-y-3">
              {[
                "Cybersecurity Solutions",
                "Cloud Infrastructure", 
                "Network Management",
                "Digital Transformation",
                "Data & Analytics",
                "Managed Services"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-trust-gold transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-trust-gold">Enterprise Support</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-trust-gold flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">+1 (555) 123-4567</p>
                  <p className="text-xs text-white/60">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-trust-gold flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">enterprise@vaspernet.com</p>
                  <p className="text-xs text-white/60">Response under 4 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-trust-gold flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Mon-Fri 8AM-6PM EST</p>
                  <p className="text-xs text-white/60">Business Hours</p>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-trust-gold" />
                <span className="text-trust-gold font-semibold text-sm">Enterprise Ready</span>
              </div>
              <p className="text-xs text-white/70">
                HIPAA • PCI DSS • SOX Compliant
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/70">
              <p>© {currentYear} VasperNet Technology. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-trust-gold transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-trust-gold transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-trust-gold transition-colors duration-200">
                  Security
                </a>
              </div>
            </div>
            
            <div className="text-xs text-white/60">
              Enterprise-grade technology solutions since 2009
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};