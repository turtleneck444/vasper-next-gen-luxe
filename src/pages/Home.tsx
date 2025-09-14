import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { OutageCTA } from "@/components/OutageCTA";
import { VirtualITDirector } from "@/components/VirtualITDirector";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Emergency Outage CTA - Prominent placement */}
      <div className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <OutageCTA />
        </div>
      </div>
      <VirtualITDirector />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};