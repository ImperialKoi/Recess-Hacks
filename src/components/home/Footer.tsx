import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription submitted');
  };

  return (
    <footer className="bg-orange-200 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left column - Logo and social links */}
          <ScrollReveal delay={0}>
            <div>
              <h3 className="text-2xl font-bold mb-4 mt-4">
                Recess<span className="text-hackathon-darkorange">Hacks</span> 5.0
              </h3>
              <p className="mb-4">Connect With Us</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/recesshacks/" className="hover:text-hackathon-orange transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/recesshacks/" className="hover:text-hackathon-orange transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/ImperialKoi/Recess-Hacks" className="hover:text-hackathon-orange transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://mailto:recesshacks@gmail.com" className="hover:text-hackathon-orange transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Middle column - Navigation links */}
          <ScrollReveal delay={150}>
            <div className="flex justify-center mt-8">
              <nav className="flex flex-col items-center flex-row sm:space-x-8 sm:justify-center">
                <div className="flex flex-row items-center sm:items-start space-x-8 ml-12">
                  <a href="#about" className="py-1 hover:text-hackathon-darkorange transition-colors">About</a>
                  <a href="#stats" className="py-1 hover:text-hackathon-darkorange transition-colors">Past Years</a>
                  <a href="#sponsors" className="py-1 hover:text-hackathon-darkorange transition-colors">Sponsors</a>
                </div>
                <div className="flex flex-row items-center sm:items-start mt-4 sm:mt-0 space-x-8 items-center">
                  <a href="#faq" className="py-1 hover:text-hackathon-darkorange transition-colors">FAQ</a>
                  <a href="#team" className="py-1 hover:text-hackathon-darkorange transition-colors">Team</a>
                  <a href="/schedule" className="py-1 hover:text-hackathon-darkorange transition-colors">Schedule</a>
                </div>
              </nav>
            </div>
          </ScrollReveal>

          {/* Right column - Newsletter signup */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col items-center md:items-end mt-8">
              <h3 className="text-xl font-semibold mb-4">Sign Up for Updates</h3>
              <form onSubmit={handleSubscribe} className="flex w-full max-w-xs flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white text-gray-800"
                  required
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom section - Legal links */}
        <ScrollReveal delay={450}>
          <div className="pt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="/code-of-conduct" className="hover:text-hackathon-darkorange transition-colors">Code of Conduct</a>
            <a href="/privacy-policy" className="hover:text-hackathon-darkorange transition-colors">Privacy Policy</a>
            <p>Copyright © RecessHACKS {new Date().getFullYear()}</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;