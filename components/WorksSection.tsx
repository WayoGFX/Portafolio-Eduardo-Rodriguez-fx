import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioTab } from '../types';
import { videosData, designsData, photosData } from '../data/portfolioData';
import VideoGallery from './VideoGallery';
import DesignGallery from './DesignGallery';
import PhotoGallery from './PhotoGallery';
import LightboxModal, { LightboxMedia } from './LightboxModal';
import RetroStar from './RetroStar';

export const WorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('video');
  const [activeLightboxMedia, setActiveLightboxMedia] = useState<LightboxMedia | null>(null);

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'video':
        return { num: '01', title: 'Videography & Editing', sub: 'Video' };
      case 'design':
        return { num: '02', title: 'Graphic Design', sub: 'Design' };
      case 'photo':
        return { num: '03', title: 'Photography', sub: 'Photo' };
    }
  };

  const currentHeader = getSectionTitle();

  return (
    <section id="works" className="relative py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* SECTION HEADER matching Reference Image 4 */}
      <div className="relative bg-[#FAF8F5] border-2 border-[#2739e5]/30 rounded-3xl md:rounded-[36px] p-6 sm:p-12 mb-12 shadow-md overflow-hidden">
        <div className="flex justify-between items-center text-xs font-tech text-gray-500 uppercase tracking-widest pb-4 border-b border-gray-200">
          <span>Portafolio</span>
          <span className="text-[#2739e5] font-bold">[Selected Works]</span>
          <span>{currentHeader.sub}</span>
        </div>

        <div className="relative my-8 sm:my-12 flex flex-col items-center justify-center text-center">
          <div className="absolute right-4 sm:right-12 top-0 opacity-80">
            <RetroStar size={48} color="#2739e5" variant="pixel" animated />
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-serif-display text-4xl sm:text-6xl md:text-8xl text-[#2739e5] tracking-tight">
              <span className="font-editorial italic font-normal text-[#121212] mr-2 sm:mr-4">{currentHeader.num}</span>
              {currentHeader.title}
            </h2>
          </motion.div>
        </div>

        {/* Big Interactive Tabs for switching between Videógrafo, Diseñador, Fotógrafo */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all transform active:scale-95 ${
              activeTab === 'video'
                ? 'bg-[#2739e5] text-white shadow-lg ring-4 ring-[#2739e5]/20'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <span>🎬</span>
            <span>Videógrafo & Editor</span>
          </button>

          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all transform active:scale-95 ${
              activeTab === 'design'
                ? 'bg-[#2739e5] text-white shadow-lg ring-4 ring-[#2739e5]/20'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <span>🎨</span>
            <span>Diseñador Gráfico</span>
          </button>

          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all transform active:scale-95 ${
              activeTab === 'photo'
                ? 'bg-[#2739e5] text-white shadow-lg ring-4 ring-[#2739e5]/20'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <span>📸</span>
            <span>Fotógrafo</span>
          </button>
        </div>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <AnimatePresence mode="wait">
        {activeTab === 'video' && (
          <motion.div
            key="tab-video"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <VideoGallery
              videos={videosData}
              onOpenLightbox={(media) => setActiveLightboxMedia(media)}
            />
          </motion.div>
        )}

        {activeTab === 'design' && (
          <motion.div
            key="tab-design"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <DesignGallery
              designs={designsData}
              onOpenLightbox={(media) => setActiveLightboxMedia(media)}
            />
          </motion.div>
        )}

        {activeTab === 'photo' && (
          <motion.div
            key="tab-photo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <PhotoGallery
              photos={photosData}
              onOpenLightbox={(media) => setActiveLightboxMedia(media)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeLightboxMedia}
        onClose={() => setActiveLightboxMedia(null)}
        media={activeLightboxMedia}
      />
    </section>
  );
};

export default WorksSection;

