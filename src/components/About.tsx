import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Our Mission",
      description: "VasperNet's mission is to redefine the technological landscape by delivering innovative IT solutions tailored to the unique needs of each client. With a focus on reliability, security, and efficiency, we aim to empower businesses to thrive in the digital age."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      title: "Our Expertise", 
      description: "Our team of experienced IT professionals has expertise in a variety of areas, including cybersecurity, cloud computing, and network management. We stay at the forefront of technological advancement."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Our Approach",
      description: "We take a personalized approach to each client's needs, working closely with them to understand their unique challenges and develop customized solutions that drive real business value."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-primary">VasperNet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guided by a passion for excellence and a commitment to exceeding expectations, 
            we strive to build lasting partnerships founded on trust and integrity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 shadow-luxury hover:shadow-glow transition-all duration-300 border-tech-light group"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-gold-light to-primary-light rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Clients Served" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Support Available" },
            { number: "10+", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};