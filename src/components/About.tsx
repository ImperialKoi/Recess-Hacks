
import { Lightbulb, Code, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react'
import img1 from '/img1.jpg'
import img2 from '/img2.jpeg'

const images = [
  img1,
  img2
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="container px-4">
        <div className='flex flex-row'>
          <div className="max-w-xl mb-16 text-left ml-20">
            <h2 className="text-5xl md:text-5xl font-bold mb-6">About Recess Hacks</h2>
            <p className="text-lg text-foreground/80">
            Recess Hacks 4.0 is a 48-hour event on August 30th-September 1st (labour day weekend) where students particpate in teams of 1-4 and work together to build innovative projects. Participants will have access to workshops, win fun prizes, learn new skills and - most importantly - have a fun time! Recess Hacks was founded in 2021, making this our 4th iteration. In the past few years, we've had over 500 participants, 20+ sponsors and mulitple dedicated teams. We are a canadian-based hackathon but will also be allowing international participants this year. Anyone attending highschool in the 2024-2025 school year is eligible to apply!
            </p>
          </div>
          <div className="relative h-[11rem] md:h-[22rem] w-[17rem] md:w-[34rem] rounded-xl overflow-hidden shadow-lg ml-28">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))} 
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-40"> {/* Remove the mt-40 later */}
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

        <div className="mt-20 rounded-2xl p-8 md:p-12">
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
