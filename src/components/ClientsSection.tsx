import React from 'react';

const ClientsSection = () => {
  const stats = [
    { number: '200+', label: 'Clients' },
    { number: '500+', label: 'Leads Generated' },
    { number: '16+', label: 'Average ROAS' }
  ];

  const logos = [
    { id: 1, name: 'Brand 1' },
    { id: 2, name: 'Brand 2' },
    { id: 3, name: 'Brand 3' },
    { id: 4, name: 'Brand 4' },
    { id: 5, name: 'Brand 5' },
    { id: 6, name: 'Brand 6' },
  ];

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          We Proudly Partner With Leading Brands
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Side - Logo Marquees */}
          <div className="flex flex-col items-center justify-center gap-12">
            {/* Top Row - Right to Left */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 animate-marquee-rtl">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-32 h-24 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center text-white/70 text-sm font-medium">
                      {logo.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 animate-marquee-ltr">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-32 h-24 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center text-white/70 text-sm font-medium">
                      {logo.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Right Side - Stats */}
          <div className="flex items-center justify-center lg:pl-12">
            <div className="space-y-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-[#4DC035] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;