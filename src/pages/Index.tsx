
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Logistics from '@/components/Logistics';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import OurTeam from '@/components/OurTeam';
import Sponsors from '@/components/Sponsors'
import Stats from '@/components/Stats'
import FloatingShapes from '@/components/FloatingShapes'
import { useEffect } from 'react';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Recess Hacks 5.0 | An Highschool Hackathon";
  }, []);

  return (
    <div className='relative'>
      <FloatingShapes />
      <div className="min-h-screen flex flex-col z-10">
        <Navbar />
        <main className="flex-grow bg-gradient-to-b from-purple-100 to-blue-100">
          <Hero />
          <About />
          <Logistics />
          <Stats />
          <Sponsors />
          <FAQ />
          <OurTeam />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
