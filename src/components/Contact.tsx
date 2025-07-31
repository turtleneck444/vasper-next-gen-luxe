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
  Shield
} from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const businessHours = [
    { day: "Monday", hours: "09:00 AM – 05:00 PM" },
    { day: "Tuesday", hours: "09:00 AM – 05:00 PM" },
    { day: "Wednesday", hours: "09:00 AM – 05:00 PM" },
    { day: "Thursday", hours: "09:00 AM – 05:00 PM" },
    { day: "Friday", hours: "09:00 AM – 05:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-primary-light to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your IT infrastructure? Let's discuss how we can help 
            transform your business with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-luxury border-tech-light bg-card/80 backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Drop us a line!
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-gold"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-gold"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="transition-all duration-200 focus:ring-2 focus:ring-gold resize-none"
                  placeholder="Tell us about your IT needs and how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-gold text-primary font-semibold py-3 rounded-xl shadow-luxury hover:shadow-glow transition-all duration-300 group"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary-light rounded-xl border border-tech-light flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Secure & Protected</p>
                <p className="text-muted-foreground">
                  Your information is protected by enterprise-grade security and will never be shared.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 shadow-luxury border-tech-light bg-card/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Better yet, see us in person!
              </h3>
              <p className="text-muted-foreground mb-6">
                We love our customers, so feel free to visit during normal business hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-gold-light to-primary-light rounded-xl">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-gold-light to-primary-light rounded-xl">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@vaspernet.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-gold-light to-primary-light rounded-xl">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8 shadow-luxury border-tech-light bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-gold-light to-primary-light rounded-xl">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>

              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-tech-light last:border-b-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className={`text-sm ${item.hours === 'Closed' ? 'text-muted-foreground' : 'text-gold font-medium'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold-light rounded-xl">
                <p className="text-sm text-tech-dark font-medium">
                  Need urgent support? We offer 24/7 emergency assistance for critical issues.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Newsletter Section */}
        <Card className="mt-16 p-8 glass border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Sign up to hear from us about specials, sales, and events.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="gradient-gold text-primary font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};