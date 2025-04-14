import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const teamMembers = [
  { name: "Aditya Bansal", image: "https://i.imgur.com/1234.jpg" },
  { name: "Aanya Bali", image: "https://i.imgur.com/5678.jpg" },
  { name: "Chloe Chen", image: "https://i.imgur.com/91011.jpg" },
  { name: "Daniel Lee", image: "https://i.imgur.com/121314.jpg" },
  { name: "Emily Zhang", image: "https://i.imgur.com/151617.jpg" },
  { name: "Jason Kim", image: "https://i.imgur.com/181920.jpg" },
  { name: "Karan Patel", image: "https://i.imgur.com/212223.jpg" },
  { name: "Kevin Nguyen", image: "https://i.imgur.com/242526.jpg" }
];

function App() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("the RecessHACKS Team");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const updateText = async (newText: string) => {
      setIsTyping(true);
      
      // First, delete the current text
      for (let i = displayText.length; i >= 0; i--) {
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      // Then, type the new text
      for (let i = 1; i <= newText.length; i++) {
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(newText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      setIsTyping(false);
    };

    if (hoveredMember) {
      updateText(hoveredMember);
    } else if (!isTyping) {
      updateText("the RecessHACKS Team");
    }

    return () => clearTimeout(timeout);
  }, [hoveredMember]);

  return (
    <div className="bg-transparent p-8 mb-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-4">
          Made with care by {' '}
          <span className="inline-block">
            {displayText}<span className="animate-flicker"> |</span>
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="aspect-square w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-black transform transition-transform duration-300 group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black bg-opacity-50 text-black p-2 rounded-lg text-sm">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;