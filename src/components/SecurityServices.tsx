import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Fingerprint, 
  Mail, 
  AlertTriangle,
  CheckCircle,
  Users,
  Database,
  Eye,
  ArrowRight
} from "lucide-react";

export const SecurityServices = () => {
  const securityServices = [
    {
      icon: Shield,
      title: "3-Step Authentication Setup",
      description: "Complete multi-factor authentication implementation",
      features: [
        "Something you know (Password)",
        "Something you have (Token/SMS)",
        "Something you are (Biometrics)",
        "Enterprise-grade security protocols",
        "User training and implementation"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      icon: Mail,
      title: "Phishing Prevention Training",
      description: "Comprehensive email security education",
      features: [
        "Employee awareness training",
        "Simulated phishing campaigns",
        "Email filtering setup",
        "Incident response protocols",
        "Ongoing monitoring and updates"
      ],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Database,
      title: "Data Protection Suite",
      description: "Complete data security and compliance",
      features: [
        "Data encryption at rest and transit",
        "Backup and disaster recovery",
        "Compliance auditing (GDPR, HIPAA)",
        "Access control management",
        "Security monitoring 24/7"
      ],
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 px-4 py-2">
              Cybersecurity Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-red-600">Security Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Protect your business with enterprise-grade security solutions. From multi-factor authentication to phishing prevention, we've got you covered.
            </p>
          </div>

          {/* Security Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {securityServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Phishing Prevention Highlight */}
          <Card className="p-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                  <h3 className="text-3xl font-bold text-gray-900">Stop Phishing Attacks</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  95% of successful cyber attacks start with phishing emails. Our comprehensive training program helps your team identify and prevent these threats.
                </p>
                <div className="space-y-4">
                  {[
                    "Interactive training modules",
                    "Real-world simulation testing",
                    "Detailed reporting and analytics",
                    "Ongoing security awareness updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                  <div className="text-6xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-lg text-gray-600 mb-4">Reduction in Successful Attacks</div>
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3">
                    Download Phishing Guide
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Secure Your Business?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and learn how our advanced protection services can safeguard your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4">
                <Shield className="mr-2 w-5 h-5" />
                Free Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4">
                <Users className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;