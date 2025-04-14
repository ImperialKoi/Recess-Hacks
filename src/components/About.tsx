
import { Lightbulb, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Recess Hacks</h2>
          <p className="text-lg text-foreground/80">
            Recess Hacks began with a vision to create an inclusive and inspiring environment where high school students from around the world could come together to learn, innovate, and create. What started as a small idea among friends has now blossomed into an event that empowers young minds to explore the possibilities of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-purple/30 transition-colors">
            <div className="rounded-full bg-hackathon-purple/10 p-3 w-fit mb-4">
              <Rocket className="text-hackathon-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Foster Innovation</h3>
            <p className="text-foreground/70">
              Introduce young programmers to the newest technology fields. Cultivate a collaborative environment that encourages creativity, critical thinking, and problem-solving, helping students to develop solutions that can make a real impact.
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-blue/30 transition-colors">
            <div className="rounded-full bg-hackathon-blue/10 p-3 w-fit mb-4">
              <Lightbulb className="text-hackathon-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Inspire the Next Generation</h3>
            <p className="text-foreground/70">
              Ignite a passion for technology and programming in students, inspiring them to pursue further education and careers in STEM fields.
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-purple/30 transition-colors">
            <div className="rounded-full bg-hackathon-purple/10 p-3 w-fit mb-4">
              <Code className="text-hackathon-purple h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Improve Programming Skills</h3>
            <p className="text-foreground/70">
              Help high school students of all skill levels to improve their programming skills through hands-on experience, workshops, and mentorship from industry experts.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-hackathon-purple/5 to-hackathon-blue/5 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Over 300+ Students</h3>
              <p className="text-lg text-foreground/80 mb-6">
                Last year, our hackathon saw over 300 enthusiastic participants from Canada, and this year, we are excited to welcome even more talented students worldwide to join us for Recess Hacks 4.0!
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-hackathon-purple to-hackathon-blue flex items-center justify-center text-white text-lg font-medium">
                Recess Hacks Highlight Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
