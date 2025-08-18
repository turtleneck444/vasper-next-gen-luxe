import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Award
} from "lucide-react";

export const VirtualITDirector = () => {
  const packages = [
    {
      name: "Essentials",
      price: "$2,500",
      period: "/month",
      description: "Perfect for growing businesses",
      features: [
        "Strategic IT Planning & Roadmap",
        "Vendor Selection & Management", 
        "Technology Assessment & Audits",
        "Monthly Strategy Sessions",
        "Emergency IT Decision Support",
        "Budget Planning & Cost Control"
      ],
      color: "from-blue-600 to-cyan-600",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,500",
      period: "/month", 
      description: "Comprehensive IT leadership",
      features: [
        "Everything in Essentials",
        "Virtual IT Team Coordination",
        "Advanced Security Strategy",
        "Compliance & Risk Management",
        "Digital Transformation Planning",
        "24/7 Strategic Decision Support",
        "Quarterly Business Reviews",
        "Custom Technology Solutions"
      ],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full virtual CTO services",
      features: [
        "Everything in Professional",
        "Dedicated Virtual CTO",
        "Advanced Analytics & Reporting",
        "Multi-location Management",
        "Enterprise Architecture Design",
        "Executive-level Presentations",
        "Custom Integration Solutions",
        "Unlimited Strategic Consulting"
      ],
      color: "from-gray-700 to-gray-900",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
              Virtual IT Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Virtual <span className="text-purple-600">IT Director</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get expert IT leadership without the full-time cost. Strategic guidance, vendor management, and technology planning from seasoned IT executives.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Target, label: "Strategic Planning", desc: "Technology roadmaps aligned with business goals" },
                { icon: Users, label: "Team Leadership", desc: "Coordinate internal and external IT resources" },
                { icon: Shield, label: "Risk Management", desc: "Proactive security and compliance oversight" },
                { icon: TrendingUp, label: "Cost Optimization", desc: "Maximize ROI on technology investments" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.label}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={pkg.name} className={`p-8 relative ${pkg.popular ? 'border-2 border-purple-600 shadow-2xl scale-105' : 'border border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'} transition-all duration-300`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  {pkg.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Why Choose Virtual IT Director */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose a Virtual IT Director?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Get the strategic leadership of a full-time IT Director at a fraction of the cost. Perfect for companies that need expert guidance but aren't ready for a full-time executive.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "Immediate availability - no hiring delays" },
                    { icon: Award, text: "20+ years average experience" },
                    { icon: Zap, text: "Flexible engagement - scale up or down" },
                    { icon: Settings, text: "Proven methodologies and frameworks" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                  <div className="text-6xl font-bold text-purple-600 mb-2">75%</div>
                  <div className="text-lg text-gray-600 mb-4">Cost Savings vs Full-time CTO</div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3">
                    Calculate Your Savings
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};