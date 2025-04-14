import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscription logic would go here
    console.log('Subscription submitted');
  };

  return (
    <footer className="bg-[#4b2a97] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left column - Logo and social links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 mt-4">
              Recess<span className="text-hackathon-blue-light">Hacks</span> 5.0
            </h3>
            <p className="mb-4">Connect With Us</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hackathon-blue-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-hackathon-blue-light transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-hackathon-blue-light transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-hackathon-blue-light transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle column - Navigation links */}
          <div className="flex justify-center mt-8">
            <nav className="flex flex-col items-center flex-row sm:space-x-8 sm:justify-center">
              <div className="flex flex-row items-center sm:items-start space-x-8 ml-12">
                <a href="#about" className="py-1 hover:text-hackathon-blue-light transition-colors">About</a>
                <a href="#timeline" className="py-1 hover:text-hackathon-blue-light transition-colors">Past Years</a>
                <a href="#" className="py-1 hover:text-hackathon-blue-light transition-colors">Sponsors</a>
              </div>
              <div className="flex flex-row items-center sm:items-start mt-4 sm:mt-0 space-x-8 items-center">
                <a href="#faq" className="py-1 hover:text-hackathon-blue-light transition-colors">FAQ</a>
                <a href="#" className="py-1 hover:text-hackathon-blue-light transition-colors">Team</a>
                <a href="#" className="py-1 hover:text-hackathon-blue-light transition-colors">2024</a>
              </div>
            </nav>
          </div>

          {/* Right column - Newsletter signup */}
          <div className="flex flex-col items-center md:items-end mt-8">
            <h3 className="text-xl font-semibold mb-4">Sign Up for Updates</h3>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-xs flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-white text-gray-800"
                required
              />
              <Button type="submit" className="bg-[#e84981] hover:bg-[#d13870] text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom section - Legal links */}
        <div className="pt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
          <a href="#" className="hover:text-hackathon-blue-light transition-colors">Code of Conduct</a>
          <a href="#" className="hover:text-hackathon-blue-light transition-colors">Privacy Policy</a>
          <p>Copyright © RecessHACKS {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;