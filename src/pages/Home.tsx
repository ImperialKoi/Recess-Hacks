
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Logistics from '@/components/home/Logistics';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/home/Footer';
import OurTeam from '@/components/home/OurTeam';
import Sponsors from '@/components/home/Sponsors'
import Stats from '@/components/home/Stats'
import FloatingShapes from '@/components/home/FloatingShapes'
import Maps from '@/components/home/GoogleMap'
import { useEffect } from 'react';

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Recess Hacks 5.0 | An Highschool Hackathon";
  }, []);

  return (
    <div className='relative'>
      <FloatingShapes />
      <div className="min-h-screen flex flex-col z-10 overflow-hidden">
        <Navbar />
        <main className="flex-grow bg-gradient-to-b from-purple-100 to-blue-100 min-w-screen">
          <Hero />
          <About />
          {/* <Logistics /> */}
          {/* <Maps /> */}
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
