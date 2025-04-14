
import { Instagram, Github, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-hackathon-purple-light to-hackathon-blue-light bg-clip-text text-transparent">
              Recess Hacks 4.0
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              An international digital hackathon for high school students of all skill levels, fostering innovation and inspiring the next generation of tech leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#logistics" className="text-gray-400 hover:text-white transition-colors">Logistics</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>team@recesshacks.com</li>
              <li>@recesshacks</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Dates</h4>
              <p className="text-gray-400">August 30 - September 1, 2024</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Recess Hacks. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
