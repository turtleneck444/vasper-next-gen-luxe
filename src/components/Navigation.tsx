import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Shield } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "SharePoint", href: "/sharepoint" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-corporate-border">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Velora Tek
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-corporate-gray">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-trust-gold" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-trust-gold" />
                <span>(949) 396-0640</span>
              </div>
            </div>
            <LanguageSelector />
            <Link to="/contact">
              <Button className="gradient-primary-subtle text-white hover:shadow-corporate transition-all duration-200">
                Schedule a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-corporate-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-corporate-border">
                <Link to="/contact">
                  <Button className="w-full gradient-primary-subtle text-white font-semibold">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
