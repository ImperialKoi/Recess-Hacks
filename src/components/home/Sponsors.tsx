import React from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const sponsors = [
  {
    name: "Microsoft",
    tier: "platinum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    url: "https://microsoft.com"
  },
  {
    name: "Google",
    tier: "platinum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    url: "https://google.com"
  },
];

const Sponsors = () => {
  let delayCounter = 0;

  const getDelay = () => {
    const delay = delayCounter;
    delayCounter += 150;
    return delay;
  };

  return (
    <section className="py-16 bg-transparent" id='sponsors'>
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0}>
          <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
        </ScrollReveal>
        
        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div>
            <ScrollReveal delay={0}>
              <h3 className="text-lg text-center mb-8 text-black max-w-4xl mx-auto">Become a part of Canada's premier high school hackathon. Your support helps inspire the next generation of innovators and leaders in technology. Looking to make an impact? Email us at <span className='text-blue-600'>sponsorships@recesshacks.ca</span>.</h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsors
                .filter(sponsor => sponsor.tier === "platinum")
                .map(sponsor => (
                  <ScrollReveal key={sponsor.name} delay={getDelay()}>
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </a>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;