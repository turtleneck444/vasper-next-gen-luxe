import { Card } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-trust-gold" />,
      title: "Our Mission",
      description: "To redefine the technological landscape by delivering innovative IT solutions tailored to enterprise needs. We focus on reliability, security, and efficiency to empower businesses in the digital age."
    },
    {
      icon: <Award className="w-8 h-8 text-trust-gold" />,
      title: "Our Expertise", 
      description: "Our certified team of IT professionals specializes in cybersecurity, cloud computing, and infrastructure management. We maintain industry-leading certifications and partnerships."
    },
    {
      icon: <Users className="w-8 h-8 text-trust-gold" />,
      title: "Our Approach",
      description: "We partner with clients to understand their unique challenges and develop strategic solutions. Our consultative approach ensures alignment with business objectives and measurable outcomes."
    }
  ];

  return (
    <section id="about" className="corporate-section bg-gradient-corporate">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-corporate-gradient">VasperNet</span>
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            A trusted technology partner for Fortune 500 companies, delivering enterprise-grade 
            solutions with unwavering commitment to excellence and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="corporate-card p-8 animate-scale-subtle"
            >
              <div className="mb-6 p-4 bg-trust-light rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-corporate-gray leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-corporate-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h3>
            <p className="text-corporate-gray">Our commitment to excellence drives measurable results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Enterprise Clients", icon: <TrendingUp className="w-6 h-6 text-trust-gold" /> },
              { number: "99.9%", label: "Service Uptime", icon: <Target className="w-6 h-6 text-trust-gold" /> },
              { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6 text-trust-gold" /> },
              { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6 text-trust-gold" /> }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-corporate-gray font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-corporate-gray mb-4">Certified & Compliant</p>
          <div className="flex justify-center gap-8 text-sm text-corporate-gray">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>HIPAA Compliant</span>
            <span>PCI DSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};