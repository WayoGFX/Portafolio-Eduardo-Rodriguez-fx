import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Smartphone, MonitorPlay, Layers, ExternalLink, Heart, Building, Sparkles } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
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
  const [horizontalSubFilter, setHorizontalSubFilter] = useState<'all' | 'bodas' | 'corporativo' | 'animacion'>('all');

  const verticalVideos = videos.filter(v => v.type === 'vertical');
  const horizontalVideos = videos.filter(v => v.type === 'horizontal');

  const filteredHorizontalVideos = horizontalVideos.filter(v => {
    if (horizontalSubFilter === 'all') return true;
    if (horizontalSubFilter === 'bodas') return v.category.toLowerCase().includes('boda') || v.category.toLowerCase().includes('social');
    if (horizontalSubFilter === 'corporativo') return v.category.toLowerCase().includes('corporativo') || v.category.toLowerCase().includes('teaser');
    if (horizontalSubFilter === 'animacion') return v.category.toLowerCase().includes('branding') || v.category.toLowerCase().includes('animación') || v.category.toLowerCase().includes('tráiler') || v.category.toLowerCase().includes('pitch');
    return true;
  });

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
      isEmbed: isEmbed,
      externalUrl: video.externalUrl
    });
  };

  const bodasCount = horizontalVideos.filter(v => v.category.toLowerCase().includes('boda') || v.category.toLowerCase().includes('social')).length;
  const corpCount = horizontalVideos.filter(v => v.category.toLowerCase().includes('corporativo') || v.category.toLowerCase().includes('teaser')).length;
  const animCount = horizontalVideos.filter(v => v.category.toLowerCase().includes('branding') || v.category.toLowerCase().includes('animación') || v.category.toLowerCase().includes('tráiler') || v.category.toLowerCase().includes('pitch')).length;

  return (
    <div className="space-y-14">
      {/* Primary Video Format Filter */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
        <button
          onClick={() => setVideoFilter('all')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
            videoFilter === 'all'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Todos los Videos ({videos.length})</span>
        </button>
        <button
          onClick={() => setVideoFilter('vertical')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
            videoFilter === 'vertical'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Reels & Shorts ({verticalVideos.length})</span>
        </button>
        <button
          onClick={() => setVideoFilter('horizontal')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
            videoFilter === 'horizontal'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          <MonitorPlay className="w-3.5 h-3.5" />
          <span>Proyectos 16:9 ({horizontalVideos.length})</span>
        </button>
      </div>

      {/* SECTION 1: Vertical Videos (Reels / TikTok / Shorts) */}
      {(videoFilter === 'all' || videoFilter === 'vertical') && (
        <div className="bg-[#2739e5] rounded-3xl md:rounded-[36px] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => handlePlayVideo(video)}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#12121e] to-[#0d0d14] shadow-2xl cursor-pointer border-2 border-white/20 hover:border-white transition-all flex flex-col justify-between p-5 text-white"
              >
                {/* Background Image if available */}
                {video.thumbnailUrl && (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 group-hover:from-black/90 transition-colors" />

                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-center text-xs font-tech">
                  <span className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/10">
                    {video.year}
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <InstagramIcon className="w-3 h-3" />
                    <span>Reel</span>
                  </span>
                </div>

                {/* Center Branding & Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 rounded-full bg-white text-[#2739e5] flex items-center justify-center shadow-2xl group-hover:bg-[#2739e5] group-hover:text-white transition-all mb-3 border border-white/20"
                  >
                    <Play className="w-7 h-7 ml-0.5 fill-current" />
                  </motion.div>
                  <span className="font-tech text-[11px] text-blue-200 tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    Reproducir Reel
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 text-left pt-2 border-t border-white/10">
                  <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold block mb-1">
                    {video.client || 'Wayo Production'}
                  </span>
                  <h4 className="font-editorial text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-blue-200 transition-colors">
                    {video.title}
                  </h4>
                  {video.role && (
                    <p className="text-[11px] text-gray-300 mt-1 line-clamp-1 font-tech">
                      {video.role}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Horizontal Videos (16:9) */}
      {(videoFilter === 'all' || videoFilter === 'horizontal') && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="font-tech text-xs text-[#2739e5] tracking-widest uppercase bg-[#2739e5]/10 px-3 py-1 rounded-full font-bold">
              Formato Horizontal 16:9
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#121212] mt-2">
              Películas de Boda & Producciones Comerciales
            </h3>
          </div>

          {/* Sub-category pills for 16:9 */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <button
              onClick={() => setHorizontalSubFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                horizontalSubFilter === 'all'
                  ? 'bg-[#2739e5] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Todos los 16:9 ({horizontalVideos.length})
            </button>
            <button
              onClick={() => setHorizontalSubFilter('bodas')}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                horizontalSubFilter === 'bodas'
                  ? 'bg-[#2739e5] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Heart className="w-3 h-3 text-pink-500" />
              <span>Películas de Boda & Social ({bodasCount})</span>
            </button>
            <button
              onClick={() => setHorizontalSubFilter('corporativo')}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                horizontalSubFilter === 'corporativo'
                  ? 'bg-[#2739e5] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Building className="w-3 h-3 text-blue-500" />
              <span>Corporativo & Teasers ({corpCount})</span>
            </button>
            <button
              onClick={() => setHorizontalSubFilter('animacion')}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                horizontalSubFilter === 'animacion'
                  ? 'bg-[#2739e5] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Branding & Animación ({animCount})</span>
            </button>
          </div>

          <div className="space-y-8">
            {filteredHorizontalVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Horizontal Player / Thumbnail */}
                <div 
                  onClick={() => handlePlayVideo(video)}
                  className="relative aspect-video w-full bg-black group cursor-pointer overflow-hidden"
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2739e5] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Corner Year Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-tech">
                    {video.year}
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
                          Cliente/Firma: {video.client} · <strong className="text-[#2739e5]">{video.year}</strong>
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

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => handlePlayVideo(video)}
                      className="bg-[#2739e5] hover:bg-[#1a28bf] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Reproducir Video</span>
                    </button>
                    {video.externalUrl && (
                      <a
                        href={video.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 p-3 rounded-xl transition-colors"
                        title="Abrir en YouTube / Instagram"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
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
