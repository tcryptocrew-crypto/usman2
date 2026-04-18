import React from 'react';
import { ShowcaseVideo } from './types';

interface VideoShowcaseProps {
  videos: ShowcaseVideo[];
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ videos }) => {
  // Only show videos that have a valid URL
  const validVideos = videos.filter(video => video.videoUrl);

  if (validVideos.length === 0) return null;

  return (
    <div className="relative max-w-[200px] mx-auto">
      <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-yellow-500/10
        transform transition-all duration-300 hover:scale-105 hover:border-yellow-500/30
        hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]">
        <iframe
          src={validVideos[0].videoUrl}
          title={validVideos[0].title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoShowcase;