import React from 'react';

const sponsors = [
  {
    name: "Microsoft",
    tier: "platinum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    url: "https://microsoft.com"
  },
  {
    name: "Google",
    tier: "platinum",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    url: "https://google.com"
  },
  {
    name: "Amazon",
    tier: "gold",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    url: "https://amazon.com"
  },
  {
    name: "Meta",
    tier: "gold",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    url: "https://meta.com"
  },
  {
    name: "IBM",
    tier: "silver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    url: "https://ibm.com"
  },
  {
    name: "Intel",
    tier: "silver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
    url: "https://intel.com"
  }
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
        
        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-purple-600">Platinum</h3>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsors
                .filter(sponsor => sponsor.tier === "platinum")
                .map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-600">Gold</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sponsors
                .filter(sponsor => sponsor.tier === "gold")
                .map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Silver</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {sponsors
                .filter(sponsor => sponsor.tier === "silver")
                .map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;