import { CalendarDays, Clock, Globe, Users, Monitor, MessageCircle, Instagram, Github } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Logistics = () => {
  return (
    <section id="logistics" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Logistics</h2>
            <p className="text-lg text-foreground/80">
              Recess Hacks 4.0 is an international digital hackathon designed for high school students of all skill levels, from beginner to advanced.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">Event Details</h3>
              
              <div className="space-y-5">
                <ScrollReveal delay={500}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-hackathon-purple/10 p-2.5 mt-0.5">
                      <CalendarDays className="text-hackathon-purple h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p className="text-foreground/70">August 30 - September 1, 2024</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={600}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-hackathon-blue/10 p-2.5 mt-0.5">
                      <Clock className="text-hackathon-blue h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Duration</h4>
                      <p className="text-foreground/70">48 hours (5 PM EST on August 30th to 5 PM EST on September 1st)</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={700}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-hackathon-purple/10 p-2.5 mt-0.5">
                      <Globe className="text-hackathon-purple h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Format</h4>
                      <p className="text-foreground/70">International digital hackathon (fully online)</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={800}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-hackathon-blue/10 p-2.5 mt-0.5">
                      <Users className="text-hackathon-blue h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Participants</h4>
                      <p className="text-foreground/70">High school students of all skill levels</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">Platforms & Communication</h3>
              
              <div className="space-y-5">
                <ScrollReveal delay={900}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#5865F2]/10 p-2.5 mt-0.5">
                      <MessageCircle className="text-[#5865F2] h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Discord</h4>
                      <p className="text-foreground/70">Our main communication platform for announcements, team formation, and support</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={1000}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#E4405F]/10 p-2.5 mt-0.5">
                      <Instagram className="text-[#E4405F] h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <p className="text-foreground/70">Follow us for updates, sneak peeks, and event highlights</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={1100}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#0D1117]/10 p-2.5 mt-0.5">
                      <Github className="text-[#0D1117] dark:text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Devpost</h4>
                      <p className="text-foreground/70">Project submission platform where you'll showcase your work</p>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={1200}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#2D8CFF]/10 p-2.5 mt-0.5">
                      <Monitor className="text-[#2D8CFF] h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Zoom</h4>
                      <p className="text-foreground/70">Video platform for workshops, ceremonies, and events</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Logistics;