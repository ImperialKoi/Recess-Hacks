import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Joanna from '/Joanna.jpg'
import DanielZ from '/DanielZ.jpg'
import Alan from '/Alan.jpg'
import Jeremy from '/Jeremy.jpg'
import Henry from '/Henry.jpg'

const teamMembers = [
  { name: "Joanna Lau", image: `${Joanna}`, description: "President" },
  { name: "Daniel Zhu", image: `${DanielZ}`, description: "Co President" },
  { name: "Alan Liu", image: `${Alan}`, description: "Exec" },
  { name: "Jeremy Dong", image: `${Jeremy}`, description: "Exec" },
  { name: "Henry Yang", image: `${Henry}`, description: "Exec" },
  { name: "Jason Kim", image: "https://i.imgur.com/181920.jpg", description: "Exec" },
  { name: "Kevin Nguyen", image: "https://i.imgur.com/212223.jpg", description: "Exec" },
  { name: "Daniel Xu", image: "https://i.imgur.com/242526.jpg", description: "Web Dev" },
  { name: "TEE HEE", image: "https://i.imgur.com/238474.jpg", description: "President" },
];

function App() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("the RecessHACKS Team");
  const [isTyping, setIsTyping] = useState(false);
  const [targetText, setTargetText] = useState("the RecessHACKS Team");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let isCancelled = false;
    
    const updateText = async () => {
      setIsTyping(true);
      
      // Delete the current text
      for (let i = displayText.length; i >= 0; i--) {
        if (isCancelled) return;
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      // Type the new text
      for (let i = 1; i <= targetText.length; i++) {
        if (isCancelled) return;
        await new Promise(resolve => {
          timeout = setTimeout(() => {
            setDisplayText(targetText.substring(0, i));
            resolve(null);
          }, 50);
        });
      }
      
      setIsTyping(false);
    };

    updateText();

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [targetText]);

  useEffect(() => {
    setTargetText(hoveredMember || "the RecessHACKS Team");
  }, [hoveredMember]);

  const hoveredMemberData = hoveredMember 
    ? teamMembers.find(member => member.name === hoveredMember) 
    : null;

  return (
    <div className="bg-transparent p-8 mb-12">
      <section id='teams'>
        <div className="container mx-auto">
          <div className="min-h-[8rem]">
            <h1 className="text-4xl font-bold text-black text-center mb-4">
              Made with care by {' '}
              <span className="inline-block">
                {displayText}<span className="animate-flicker"> |</span>
              </span>
            </h1>
            
            {hoveredMemberData && (
              <p className="text-xl text-center text-black font-bold mt-8">
                {`${hoveredMemberData.name}, ${hoveredMemberData.description}`}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-4 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className={`aspect-square w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 transition-all duration-300 ${hoveredMember === member.name ? 'border-blue-500 scale-105' : 'border-black'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;