import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

const videos: Video[] = [
  { id: 1, title: 'Video Ad 1', thumbnail: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, title: 'Video Ad 2', thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, title: 'Video Ad 3', thumbnail: 'https://images.pexels.com/photos/3714901/pexels-photo-3714901.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, title: 'Video Ad 4', thumbnail: 'https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, title: 'Video Ad 5', thumbnail: 'https://images.pexels.com/photos/3975517/pexels-photo-3975517.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, title: 'Video Ad 6', thumbnail: 'https://images.pexels.com/photos/3848382/pexels-photo-3848382.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const ExplainerVideoAds: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.querySelector('[data-video-item]')?.clientWidth || 0;
    const gap = 24;
    const scrollAmount = itemWidth + gap;

    if (direction === 'right') {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        return newIndex > videos.length - 3 ? videos.length - 3 : newIndex;
      });
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    } else {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        return newIndex < 0 ? 0 : newIndex;
      });
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-black pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Explainer Video Ads
        </h2>
        <p className="text-center text-white/60 text-lg mb-16 max-w-2xl mx-auto">
          Discover our premium video ad library showcasing creative storytelling and compelling visuals
        </p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Videos Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                data-video-item
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
              >
                <div className="group relative h-full">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                    {/* Video Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                      </div>
                    </div>

                    {/* Title at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-sm">{video.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scrollCarousel('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed hover:disabled:bg-white/10 hover:disabled:border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollCarousel('right')}
            disabled={currentIndex >= videos.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed hover:disabled:bg-white/10 hover:disabled:border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: Math.max(0, videos.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-[#FFD700]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to carousel item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplainerVideoAds;
