import { Navigation } from "@/components/Navigation";
import { Casestudy5 } from "@/components/ui/casestudy-5";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import TrustSection from "@/components/blocks/trust-section";
import Hero from "@/components/blocks/hero";
import { Shield, Cloud, Network } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div className="w-full px-4 md:px-8 pt-8 md:pt-20">
        <TextGenerateEffect
          words={"Empowering Fortune 500 enterprises with world\u00A0class Cybersecurity, Cloud Computing, and Network Management."}
          className="text-center text-sm md:text-xl lg:text-2xl font-bold mb-0 text-[#003366] max-w-4xl mx-auto leading-tight"
          duration={0.7}
        />
        <Casestudy5
          featuredCasestudy={{
            logo: <Shield className="h-9 w-9 text-cyan-600" />, // Lucide icon
            company: "Cybersecurity",
            tags: "ENTERPRISE SECURITY / THREAT INTELLIGENCE",
            title: "Next-Gen Cybersecurity Solutions",
            subtitle: "Protecting Fortune 500 data and reputation with advanced threat intelligence, SOC, and compliance.",
            image: "/images/cybersecurity.jpg",
            link: "#",
          }}
          casestudies={[
            {
              logo: <Cloud className="h-9 w-9 text-blue-600" />, // Lucide icon
              company: "Cloud Computing",
              tags: "CLOUD INFRASTRUCTURE / DIGITAL TRANSFORMATION",
              title: "Cloud Solutions for Modern Business",
              subtitle: "Seamless migration, scalable infrastructure, and multi-cloud management for enterprise growth.",
              image: "/images/cloud-computing.jpg",
              link: "#",
            },
            {
              logo: <Network className="h-9 w-9 text-emerald-600" />, // Lucide icon
              company: "Network Management",
              tags: "INFRASTRUCTURE / PERFORMANCE MONITORING",
              title: "Resilient Network Management",
              subtitle: "Ensuring uptime, security, and performance for mission-critical operations.",
              image: "/images/network-management.jpg",
              link: "#",
            },
          ]}
        />
      </div>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;