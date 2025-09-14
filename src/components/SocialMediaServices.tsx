import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Video, 
  Calendar,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Camera
} from "lucide-react";

export const SocialMediaServices = () => {
  const socialPackages = [
    {
      name: "Starter Package",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses",
      platforms: ["LinkedIn", "Facebook"],
      features: [
        "10 posts per month per platform",
        "Basic content creation",
        "Monthly analytics report",
        "Community management",
        "Content calendar planning"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Professional Package",
      price: "$2,800",
      period: "/month",
      description: "Comprehensive social presence",
      platforms: ["LinkedIn", "Facebook", "Instagram"],
      features: [
        "20 posts per month per platform",
        "Video content creation",
        "Advanced analytics & reporting",
        "Paid advertising management",
        "Community engagement",
        "Weekly strategy calls",
        "Custom graphics & visuals"
      ],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$4,500",
      period: "/month",
      description: "Full-service social media",
      platforms: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
      features: [
        "Daily posting across all platforms",
        "Professional video production",
        "Comprehensive paid ad campaigns",
        "Influencer collaboration",
        "24/7 community management",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Custom content strategies"
      ],
      color: "from-gray-700 to-gray-900"
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: "Daily Content Management",
      description: "Consistent, professional posting across all your social platforms"
    },
    {
      icon: Video,
      title: "Video Content Creation",
      description: "Engaging videos showcasing your IT services and company culture"
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising Campaigns",
      description: "Targeted ads to reach potential clients and grow your business"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed insights into performance and ROI across all platforms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200 px-4 py-2">
              Digital Marketing Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Social Media <span className="text-purple-600">Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional social media management and content creation to showcase your IT expertise and attract new clients.
            </p>
            
            {/* Platform Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Linkedin, color: "text-blue-600" },
                { icon: Facebook, color: "text-blue-700" },
                { icon: Instagram, color: "text-pink-600" },
                { icon: Video, color: "text-red-600" }
              ].map((platform, index) => (
                <div key={index} className={`w-12 h-12 ${platform.color} flex items-center justify-center`}>
                  <platform.icon className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialPackages.map((pkg, index) => (
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
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  {/* Platform badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {pkg.platforms.map((platform, platformIndex) => (
                      <Badge key={platformIndex} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
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
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Content Examples */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Create For You</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Professional content that showcases your IT expertise and builds trust with potential clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: "Educational Posts",
                  description: "IT tips, cybersecurity advice, and technology insights",
                  icon: MessageSquare
                },
                {
                  type: "Service Showcases",
                  description: "Highlight your services with compelling visuals and case studies",
                  icon: Camera
                },
                {
                  type: "Company Culture",
                  description: "Behind-the-scenes content and team expertise demonstrations",
                  icon: Users
                }
              ].map((content, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <content.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{content.type}</h4>
                  <p className="text-gray-600">{content.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Boost Your Online Presence?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us handle your social media while you focus on running your IT business. Get a custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4">
                <Calendar className="mr-2 w-5 h-5" />
                Get Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4">
                <BarChart3 className="mr-2 w-5 h-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaServices;