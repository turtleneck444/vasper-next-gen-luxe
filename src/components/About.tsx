import { Card } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import React from "react";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Timeline } from "@/components/ui/timeline";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export const About = () => {
  const features = [
    {
      title: "Our Mission",
      subtitle: "What drives us:",
      description: [
        "Deliver tailored IT solutions.",
        "Focus on reliability.",
        "Prioritize security & efficiency.",
        "Empower digital businesses."
      ],
      muted: "We help businesses thrive in the digital age.",
      icon: <Target className="w-7 h-7 text-trust-gold" />
    },
    {
      title: "Our Expertise",
      subtitle: "Our core strengths:",
      description: [
        "Certified IT professionals.",
        "Cybersecurity specialists.",
        "Cloud & infrastructure experts.",
        "Industry-leading partnerships."
      ],
      muted: "Expertise trusted by Fortune 500 companies.",
      icon: <Award className="w-7 h-7 text-trust-gold" />
    },
    {
      title: "Our Approach",
      subtitle: "How we work:",
      description: [
        "Understand client challenges.",
        "Develop strategic solutions.",
        "Consultative, business-first.",
        "Deliver measurable results."
      ],
      muted: "Your goals, our commitment to results.",
      icon: <Users className="w-7 h-7 text-trust-gold" />
    }
  ];

  return (
    <section id="about" className="corporate-section bg-background">
      <div className="w-full px-6">
        {/* Section Header - Typewriter Effect, Demo Style */}
        <div className="flex flex-col items-center justify-center mb-16">
          <p className="text-neutral-500 text-sm mb-2">
            Enterprise IT. Unmatched Excellence.
          </p>
          <TypewriterEffect
            words={[
              { text: "VasperNet empowers", className: "text-[#133a7c] font-bold" },
              { text: "Fortune 500 companies with", className: "font-bold" },
              { text: "enterprise-grade IT solutions.", className: "text-[#1976d2] font-bold" },
            ]}
            className="justify-center max-w-2xl mx-auto text-center"
            cursorClassName="bg-[#1976d2]"
          />
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-6">
            <button className="w-40 h-10 rounded-xl bg-[#133a7c] text-white text-sm font-semibold shadow hover:bg-[#0d2554] transition">
              Learn More
            </button>
            <button className="w-40 h-10 rounded-xl border border-[#133a7c] text-[#133a7c] text-sm font-semibold bg-white hover:bg-[#f5f7fa] transition">
              Our Services
            </button>
          </div>
        </div>
        {/* Features Grid - Luxury/Corporate Cards */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl">
          {features.map((feature, index) => (
            <Card key={feature.title} className="relative rounded-2xl shadow-2xl border-0 bg-white/95 p-8 flex flex-col items-start h-96 w-full animate-scale-subtle transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(191,161,74,0.15)] group overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#133a7c] via-black to-[#1976d2] rounded-t-2xl" />
              {/* Icon */}
              <div className="mb-4 p-3 bg-gradient-to-br from-[#133a7c]/10 to-[#bfa14a]/10 rounded-xl w-fit flex items-center justify-center shadow-md">
                {React.cloneElement(feature.icon, { className: 'w-7 h-7 text-[#133a7c]' })}
              </div>
              {/* Title */}
              <h3 className="font-extrabold text-[#111] mb-1 tracking-tight">{feature.title}</h3>
              {/* Subtitle */}
              <p className="text-gray-500 mb-3 text-sm">{feature.subtitle}</p>
              {/* Steps */}
              <ul className="list-none space-y-2 mb-4">
                {feature.description.map((desc: string, i: number) => (
                  <li key={i} className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#133a7c] flex-shrink-0"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" fill="currentColor" strokeWidth="0"/></svg>
                        <span className="text-gray-900 text-sm">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Muted Description */}
                  <p className="text-[#133a7c] text-xs mt-auto font-medium">{feature.muted}</p>
                </Card>
              ))}
            </div>
            {/* Timeline Section */}
            <Timeline
              data={[
                {
                  title: "2012: VasperNet Founded",
                  content: (
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                      VasperNet launches in Silicon Valley, setting out to redefine enterprise IT with a focus on security, reliability, and innovation.
                    </p>
                  ),
                },
                {
                  title: "2014: First Fortune 500 Partnership",
                  content: (
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                      Secured a landmark deal with a Fortune 500 client, establishing VasperNet as a trusted technology partner for global enterprises.
                    </p>
                  ),
                },
                {
                  title: "2017: Global Expansion",
                  content: (
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                      Opened offices in London, Singapore, and Dubai, delivering world-class cybersecurity, cloud, and infrastructure management worldwide.
                    </p>
                  ),
                },
                {
                  title: "2020: AI & Cloud Innovation",
                  content: (
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                      Launched proprietary AI-driven security and cloud platforms, empowering clients with next-generation digital transformation.
                    </p>
                  ),
                },
                {
                  title: "2024: Industry Leadership",
                  content: (
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                      Recognized as a global leader in enterprise IT, trusted by Fortune 500s for excellence, security, and innovation.
                    </p>
                  ),
                },
              ]}
            />

            {/* Certifications - Luxury Cybersecurity Theme */}
            <div className="mt-8 flex justify-center">
              <div className="relative bg-white rounded-2xl shadow-xl border-0 p-4 md:p-6 max-w-5xl w-full flex flex-col items-center">
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#133a7c] via-black to-[#1976d2] rounded-t-2xl" />
                <h3 className="font-extrabold text-[#111] mb-2 mt-1 text-center">Certified. Compliant. Trusted.</h3>
                <p className="text-gray-700 text-center mb-2">VasperNet meets the highest standards in security and compliance.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-2">
                  <div className="flex flex-col items-center">
                    <span className="p-3 bg-gradient-to-br from-[#133a7c]/10 to-[#1976d2]/10 rounded-xl mb-2">
                      <svg className="w-7 h-7 text-[#133a7c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-[#133a7c]">SOC 2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="p-3 bg-gradient-to-br from-[#133a7c]/10 to-[#1976d2]/10 rounded-xl mb-2">
                      <svg className="w-7 h-7 text-[#133a7c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-[#133a7c]">ISO 27001</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="p-3 bg-gradient-to-br from-[#133a7c]/10 to-[#1976d2]/10 rounded-xl mb-2">
                      <svg className="w-7 h-7 text-[#133a7c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-[#133a7c]">HIPAA</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="p-3 bg-gradient-to-br from-[#133a7c]/10 to-[#1976d2]/10 rounded-xl mb-2">
                      <svg className="w-7 h-7 text-[#133a7c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="6" width="12" height="12" rx="3" strokeWidth="2" /></svg>
                    </span>
                    <span className="text-sm font-semibold text-[#133a7c]">PCI DSS</span>
                  </div>
                </div>
                <button className="mt-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#133a7c] via-black to-[#1976d2] text-white font-semibold text-base shadow hover:scale-105 transition">See Our Security Practices</button>
              </div>
            </div>
      </div>
    </section>
  );
};