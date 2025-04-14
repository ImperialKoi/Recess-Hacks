
import { ArrowRight, Calendar, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  
  useEffect(() => {
    const calculateDaysLeft = () => {
      const eventDate = new Date('2024-08-30T17:00:00');
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
      <div className="tech-grid absolute inset-0 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-hackathon-purple/20 floating-element blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-hackathon-blue/20 floating-element delay-100 blur-xl"></div>
      <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full bg-hackathon-purple-light/20 floating-element delay-200 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-hackathon-purple/10 to-hackathon-blue/10 text-hackathon-purple font-medium text-sm md:text-base">
            August 30 - September 1, 2024
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
            Recess Hacks 4.0
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            An international digital hackathon for high school students of all skill levels
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border">
              <Calendar className="text-hackathon-purple" size={24} />
              <span className="font-medium">48 Hours</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border">
              <Globe className="text-hackathon-blue" size={24} />
              <span className="font-medium">International</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border">
              <Users className="text-hackathon-purple" size={24} />
              <span className="font-medium">All Skill Levels</span>
            </div>
          </div>
          
          {daysLeft > 0 ? (
            <div className="mb-8">
              <div className="text-5xl font-bold text-hackathon-purple">{daysLeft}</div>
              <div className="text-lg text-foreground/70">Days until kickoff</div>
            </div>
          ) : (
            <div className="mb-8 py-2 px-4 rounded-lg bg-hackathon-purple/10 text-hackathon-purple font-medium">
              Event in progress!
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:from-hackathon-purple-dark hover:to-hackathon-blue-dark text-white font-medium group">
              Register Now
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-hackathon-purple/30 text-foreground hover:bg-hackathon-purple/5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
