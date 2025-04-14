
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Logistics from '@/components/Logistics';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Recess Hacks 4.0 | An International Digital Hackathon";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline />
        <Logistics />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
