import { Lightbulb, Code, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import img1 from '/img1.jpg';
import img2 from '/img2.jpeg';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const images = [img1, img2];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current !== null) return;
    
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Start auto-scrolling when component mounts
    if (!isPaused) {
      startAutoScroll();
    }
    
    // Clean up the interval when component unmounts
    return () => {
      stopAutoScroll();
    };
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    
    // Reset the timer when user manually changes slides
    stopAutoScroll();
    startAutoScroll();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    // Reset the timer when user manually changes slides
    stopAutoScroll();
    startAutoScroll();
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };

  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="container px-4">
        <div className="flex md:flex-row flex-col">
          <ScrollReveal delay={50}>
            <div className="max-w-2xl mb-16 text-left left-[3rem] bg-white p-12 rounded-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Recess Hacks</h2>
              <p className="text-lg text-foreground/80">
                Recess Hacks 4.0 is a 48-hour event on August 30th-September 1st (labour day weekend) where students participate in teams of 1-4 and work together to build innovative projects. Participants will have access to workshops, win fun prizes, learn new skills and – most importantly – have a fun time! Recess Hacks was founded in 2021, making this our 4th iteration. In the past few years, we've had over 500 participants, 20+ sponsors and multiple dedicated teams. We are a Canadian-based hackathon but will also be allowing international participants this year. Any highschooler is eligible to apply!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative w-[18rem] md:w-[40rem] h-[20rem] md:h-[26rem] aspect-video rounded-xl overflow-hidden shadow-lg md:ml-28" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    onClick={() => {
                      setCurrentIndex(index);
                      // Reset timer when user selects a specific slide
                      stopAutoScroll();
                      startAutoScroll();
                    }}
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
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-40 mb-40">
          <ScrollReveal delay={350}>
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-purple/30 transition-colors h-[22rem] md:h-[17rem]">
              <div className="rounded-full bg-hackathon-purple/10 p-3 w-fit mb-4">
                <Rocket className="text-hackathon-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Foster Innovation</h3>
              <p className="text-foreground/70">
                Introduce young programmers to the newest technology fields. Cultivate a collaborative environment that encourages creativity, critical thinking, and problem-solving, helping students to develop solutions that can make a real impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-blue/30 transition-colors h-[20rem] md:h-[17rem]">
              <div className="rounded-full bg-hackathon-blue/10 p-3 w-fit mb-4">
                <Lightbulb className="text-hackathon-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inspire the Next Generation</h3>
              <p className="text-foreground/70">
                Ignite a passion for technology and programming in students, inspiring them to pursue further education and careers in STEM fields.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <div className="bg-background rounded-xl p-6 shadow-lg border border-border hover:border-hackathon-purple/30 transition-colors h-[22rem] md:h-[17rem]">
              <div className="rounded-full bg-hackathon-purple/10 p-3 w-fit mb-4">
                <Code className="text-hackathon-purple h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Improve Programming Skills</h3>
              <p className="text-foreground/70">
                Help high school students of all skill levels to improve their programming skills through hands-on experience, workshops, and mentorship from industry experts.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* <ScrollReveal delay={800}>
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
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default About;