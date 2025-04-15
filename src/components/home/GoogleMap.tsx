import React from 'react';
import { Timer } from 'lucide-react';
import Map from './Map';

// First, make a google cloud account
// Go into https://console.cloud.google.com/apis/library and install javascript map
// Make a new api key and restrict it to that
// Make a billing account

function App() {
  const waterloo = { lat: 43.47273, lng: -80.54046 };

  return (
    <div className="min-h-screen bg-transparent p-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-black">Join Us</h1>
          </div>
          <h2 className="text-2xl font-semibold text-black">Augest Date, 2025</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg">
            <Map center={waterloo} zoom={17} />
          </div>
          
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg">
            <p className="text-black text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, mauris ac malesuada venenatis, ex nunc sollicitudin nunc, ac aliquet nunc augue ac velit. Nam nec ante et massa porta tempor. Vivamus placerat urna sed augue pharetra rhoncus. Quisque et imperdiet ex, ut dignissim magna. Sed ut convallis ligula, in interdum enim. Vivamus ac leo arcu. Cras semper elementum diam, quis commodo risus suscipit vitae. Morbi fringilla placerat euismod. Morbi nec efficitur nibh. Aliquam erat volutpat. Aliquam iaculis maximus leo. Maecenas et sollicitudin diam, id elementum nibh. Fusce consectetur lorem ipsum, ac elementum velit ullamcorper at. Quisque orci justo, scelerisque ut metus ac, dapibus consectetur velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;