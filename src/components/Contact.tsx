import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Send,
  Shield,
  Award,
  CheckCircle
} from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry",
      description: "Our enterprise solutions team will contact you within 24 hours.",
    });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM – 6:00 PM EST" },
    { day: "Emergency Support", hours: "24/7 Available" },
    { day: "Response Time", hours: "< 4 Hours" }
  ];

  return (
    <section id="contact" className="corporate-section bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our <span className="text-corporate-gradient">Experts</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            Ready to transform your enterprise technology? Our certified consultants 
            are here to discuss your strategic objectives and design the right solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="corporate-card p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Schedule a Consultation
              </h3>
              <p className="text-corporate-gray">
                Connect with our enterprise solutions team to discuss your technology requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Business Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Requirements *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Please describe your technology requirements, challenges, and objectives..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary-subtle text-white font-semibold py-3 shadow-corporate hover:shadow-corporate-lg transition-all duration-300"
              >
                Submit Request
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary-light rounded-lg flex items-start gap-3">
              <Shield className="w-5 h-5 text-trust-gold mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Enterprise Security</p>
                <p className="text-corporate-gray">
                  Your information is protected by SOC 2 Type II controls and will never be shared.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="corporate-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Enterprise Support
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-trust-light rounded-xl">
                    <Phone className="w-5 h-5 text-trust-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Direct Line</p>
                    <p className="text-corporate-gray">+1 (555) 123-4567</p>
                    <p className="text-sm text-corporate-gray">Enterprise Priority Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-trust-light rounded-xl">
                    <Mail className="w-5 h-5 text-trust-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Enterprise Sales</p>
                    <p className="text-corporate-gray">enterprise@vaspernet.com</p>
                    <p className="text-sm text-corporate-gray">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-trust-light rounded-xl">
                    <Award className="w-5 h-5 text-trust-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dedicated Account Manager</p>
                    <p className="text-corporate-gray">Enterprise clients only</p>
                    <p className="text-sm text-corporate-gray">Assigned upon contract execution</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="corporate-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-trust-light rounded-xl">
                  <Clock className="w-5 h-5 text-trust-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Support Hours</h3>
              </div>

              <div className="space-y-4">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-3 border-b border-corporate-border last:border-b-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className="text-trust-gold font-medium text-sm">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-trust-light rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-trust-gold" />
                  <p className="text-sm font-medium text-foreground">SLA Guarantee</p>
                </div>
                <p className="text-sm text-corporate-gray">
                  Enterprise clients receive guaranteed response times and priority escalation.
                </p>
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="corporate-card p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Enterprise Certifications
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-corporate-gray">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-trust-gold" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-trust-gold" />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-trust-gold" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-trust-gold" />
                  <span>PCI DSS Level 1</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};