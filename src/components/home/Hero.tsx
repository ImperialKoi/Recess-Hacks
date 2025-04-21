import { ArrowRight, Calendar, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Hero = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const calculateDaysLeft = () => {
      const eventDate = new Date('2025-08-30T17:00:00');
      const today = new Date();
      const timeDiff = eventDate.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysLeft(daysDiff > 0 ? daysDiff : 0);
    };
    
    calculateDaysLeft();
    const timer = setInterval(calculateDaysLeft, 86400000); // Update once a day
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="tech-grid absolute inset-0 z-0 opacity-60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-hackathon-orange/20 animate-float blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-hackathon-yellow/20 animate-float delay-100 blur-xl"></div>
      <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-hackathon-orange-light/20 animate-float delay-200 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={50}>
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-hackathon-yellow/10 to-hackathon-orange/10 text-hackathon-orange font-medium text-sm md:text-base">
              August Date - August Date 2025
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-hackathon-orange to-hackathon-yellow bg-clip-text text-transparent">
              Recess Hacks 5.0
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={350}>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              August date-date, 2025 At location location location
            </p>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <ScrollReveal delay={500} className="flex items-center gap-2 p-3 rounded-lg bg-background/90 border border-border">
              <Calendar className="text-hackathon-orange" size={24} />
              <span className="font-medium">48 Hours</span>
            </ScrollReveal>
            
            <ScrollReveal delay={650} className="flex items-center gap-2 p-3 rounded-lg bg-background/90 border border-border">
              <Globe className="text-hackathon-yellow" size={24} />
              <span className="font-medium">International</span>
            </ScrollReveal>
            
            <ScrollReveal delay={800} className="flex items-center gap-2 p-3 rounded-lg bg-background/90 border border-border">
              <Users className="text-hackathon-orange" size={24} />
              <span className="font-medium">All Skill Levels</span>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={950}>
            {daysLeft > 0 ? (
              <div className="mb-8">
                <div className="text-5xl font-bold text-hackathon-orange">{daysLeft}</div>
                <div className="text-lg text-foreground/70">Days until kickoff</div>
              </div>
            ) : (
              <div className="mb-8 py-2 px-4 rounded-lg bg-hackathon-orange/10 text-hackathon-orange font-medium">
                Event in progress!
              </div>
            )}
          </ScrollReveal>
          
          <ScrollReveal delay={1200} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-hackathon-orange to-hackathon-yellow hover:from-hackathon-orange-dark hover:to-hackathon-yellow-dark text-white font-medium group" onClick={() => navigate("/login")}>
              Register Now
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-hackathon-orange/30 text-foreground hover:bg-hackathon-orange/5" onClick={scrollToAbout}>
              Learn More
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;