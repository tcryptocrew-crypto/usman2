import React from 'react';
import ClientSlider from './ClientSlider';
import VideoShowcase from './VideoShowcase';
import { testimonialData } from './testimonialData';
import { showcaseVideos } from './videoData';

const TestimonialsSection = () => {
  return (
    <section className="relative min-h-screen bg-zinc-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grain Effect */}
      <div className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 text-center mb-16 animate-fade-in-delayed max-w-2xl mx-auto">
          Success stories from businesses we've helped grow
        </p>

        {/* Featured Testimonial Video */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(77,192,53,0.08)]">
            <div className="w-full aspect-video">
              <iframe
                src="https://drive.google.com/file/d/1MF_Kn31dsmeVXLTbP0Zev_KkdWQqouHI/preview"
                width="100%"
                height="100%"
                allow="autoplay"
                className="w-full h-full"
                title="Client Testimonial"
              />
            </div>
          </div>
        </div>

        <ClientSlider testimonials={testimonialData} />

        <div className="mt-24">
          <VideoShowcase videos={showcaseVideos} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;