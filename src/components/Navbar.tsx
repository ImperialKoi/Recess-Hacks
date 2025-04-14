
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Logistics', href: '#logistics' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
              Recess Hacks 4.0
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/80 hover:text-hackathon-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:from-hackathon-purple-dark hover:to-hackathon-blue-dark text-white font-medium">
            Register Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 font-medium text-foreground/80 hover:text-hackathon-purple"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:from-hackathon-purple-dark hover:to-hackathon-blue-dark text-white font-medium w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
