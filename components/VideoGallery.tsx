import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoProject } from '../types';
import { LightboxMedia } from './LightboxModal';
import RetroStar from './RetroStar';

interface VideoGalleryProps {
  videos: VideoProject[];
  onOpenLightbox: (media: LightboxMedia) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  onOpenLightbox
}) => {
  const [videoFilter, setVideoFilter] = useState<'all' | 'vertical' | 'horizontal'>('all');

  const verticalVideos = videos.filter(v => v.type === 'vertical');
  const horizontalVideos = videos.filter(v => v.type === 'horizontal');

  const handlePlayVideo = (video: VideoProject) => {
    const isEmbed = !!video.embedUrl;
    const src = video.embedUrl || video.videoUrl || '';
    onOpenLightbox({
      type: video.type === 'vertical' ? 'video-vertical' : 'video-horizontal',
      src: src,
      title: video.title,
      subtitle: video.category,
      description: video.description,
      client: video.client,
      year: video.year,
      tags: video.role ? [video.role] : [],
      isEmbed: isEmbed
    });
  };

  return (
    <div className="space-y-16">
      {/* Sub-filters for video types */}
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        <button
          onClick={() => setVideoFilter('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            videoFilter === 'all'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Todos los Videos
        </button>
        <button
          onClick={() => setVideoFilter('vertical')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            videoFilter === 'vertical'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Reels & Shorts
        </button>
        <button
          onClick={() => setVideoFilter('horizontal')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            videoFilter === 'horizontal'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          🎬 Proyectos Horizontales
        </button>
      </div>

      {/* SECTION 1: Vertical Videos (Reels / TikTok / Shorts) - 3 in 3 layout matching Reference Image 5 */}
      {(videoFilter === 'all' || videoFilter === 'vertical') && (
        <div className="bg-[#2739e5] rounded-3xl md:rounded-[36px] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle star overlay */}
          <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
            <RetroStar size={100} color="#FFFFFF" variant="pixel" />
          </div>

          <div className="relative z-10 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
            <div>
              <span className="font-tech text-xs text-blue-200 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                Formato 9:16
              </span>
              <h3 className="font-serif-display text-3xl sm:text-5xl mt-2 tracking-tight">
                Social Media <span className="italic font-editorial">Reels</span>
              </h3>
            </div>
            <p className="font-tech text-xs text-blue-100">
              [ Clic para reproducir ]
            </p>
          </div>

          {/* 3 Columns Grid for Vertical Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {verticalVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => handlePlayVideo(video)}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl cursor-pointer border-2 border-white/20 hover:border-white transition-all"
              >
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-xs font-tech">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
                    {video.year || '2025'}
                  </span>
                  <span className="bg-[#2739e5] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    Reel
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 rounded-full bg-white text-[#2739e5] flex items-center justify-center shadow-2xl group-hover:bg-[#2739e5] group-hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                  <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold block mb-1">
                    {video.client || 'Wayo Production'}
                  </span>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
                    {video.title}
                  </h4>
                  {video.role && (
                    <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                      {video.role}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Horizontal Videos (16:9) - 1 at a time featured showcase */}
      {(videoFilter === 'all' || videoFilter === 'horizontal') && (
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#121212] mt-2">
              Producciones & Spots Comerciales
            </h3>
          </div>

          <div className="space-y-8">
            {horizontalVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Horizontal Player / Thumbnail */}
                <div 
                  onClick={() => handlePlayVideo(video)}
                  className="relative aspect-video w-full bg-black group cursor-pointer overflow-hidden"
                >
                  {video.embedUrl ? (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full border-0 pointer-events-none"
                    />
                  ) : (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2739e5] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Info Bar */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FAF8F5]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-tech text-xs bg-[#2739e5] text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        {video.category}
                      </span>
                      {video.client && (
                        <span className="font-tech text-xs text-gray-500">
                          Cliente: {video.client}
                        </span>
                      )}
                    </div>
                    <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#121212]">
                      {video.title}
                    </h4>
                    {video.description && (
                      <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                        {video.description}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handlePlayVideo(video)}
                      className="w-full sm:w-auto bg-[#2739e5] hover:bg-[#1a28bf] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Reproducir Video</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;

