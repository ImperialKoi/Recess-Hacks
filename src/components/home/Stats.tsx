import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const stats = [
  { value: 189, label: "in prizes", prefix: "$", suffix: "K+" },
  { value: 190, label: "hackers", suffix: "+" },
  { value: 25, label: "projects", suffix: "+" },
  { value: 9, label: "countries", suffix: "+" },
];

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517486430290-35657bdcef51?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245528832-0ce9373d0ccb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517436073-3b3ee71ee1e2?auto=format&fit=crop&w=800&q=80"
];

const Statistics = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && containerRef.current) {
        // Calculate when we're halfway through the second set of images
        const resetPoint = (scrollRef.current.scrollWidth * 0.75) - scrollRef.current.clientWidth;
        
        if (scrollRef.current.scrollLeft >= resetPoint) {
          // Reset to the first set of images
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1.5;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-transparent text-orange-500" id='stats'>
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0}>
          <h2 className="text-6xl font-bold text-center mb-20">
            Last year, we had...
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <ScrollReveal delay={index*150} key={index}>
                <div
                  key={index}
                  className="text-center transform transition-transform duration-500 hover:scale-110"
                >
                  <div className="text-3xl md:text-5xl font-bold mb-2">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div className="text-xl opacity-80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
        </div>

        {/* <div ref={containerRef} className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden w-full"
          > */}
            {/* Triple the images to ensure smooth transition */}
            {/* {[...images, ...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-none w-[300px] h-[200px] rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Event photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Statistics;