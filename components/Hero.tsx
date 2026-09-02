import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Film } from 'lucide-react';
import RetroStar from './RetroStar';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between items-center px-6 py-8 md:py-12 bg-[#FAF8F5] text-[#121212] overflow-hidden select-none">
      {/* Decorative Corner Elements */}
      <div className="w-full max-w-6xl flex justify-between items-center text-xs md:text-sm font-tech tracking-wider uppercase text-[#2739e5]">
        <motion.span 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#2739e5] animate-ping" />
          Portafolio Audiovisual
        </motion.span>
        
        <motion.span 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-medium tracking-widest text-gray-500"
        >
          [ Edición · Video · Foto ]
        </motion.span>
      </div>

      {/* Main Center Typography & Branding */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center py-8">
        {/* Floating Decorative Pixel Stars */}
        <div className="absolute -top-10 -right-6 md:-top-14 md:-right-14 z-0">
          <RetroStar size={64} color="#2739e5" variant="pixel" animated />
        </div>
        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-14 z-0">
          <RetroStar size={54} color="#2739e5" variant="pixel" animated />
        </div>

        {/* Big Stylized Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo or Main Display Typography */}
          <div className="mb-4">
            <img 
              src="/logowayo.svg" 
              alt="Wayo Rodriguez" 
              className="h-16 md:h-22 w-auto object-contain mx-auto drop-shadow-sm hover:scale-105 transition-transform" 
            />
          </div>

          <h1 className="font-serif-display text-6xl sm:text-7xl md:text-9xl text-[#2739e5] tracking-tight leading-none mt-2">
            Porto<span className="font-editorial italic font-normal text-[#121212]">folio</span>
          </h1>

          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 bg-[#2739e5] text-white px-6 py-2 rounded-full text-xs sm:text-sm font-editorial font-medium shadow-md hover:bg-[#1a28bf] transition-colors"
          >
            <span>Selected Works</span>
            <span className="text-xs opacity-75">•</span>
            <span className="text-xs font-tech">{personalInfo.year}</span>
          </motion.div>

          <p className="mt-5 max-w-md text-xs sm:text-sm text-gray-600 font-medium leading-relaxed px-4">
            {personalInfo.tagline}
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar with CTA and Metadata */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm pt-6 border-t border-gray-200/80">
        <span className="font-tech text-gray-400 order-2 sm:order-1">
          SAN SALVADOR, SV
        </span>

        {/* Conoce más de mí Button */}
        <motion.button
          onClick={onExploreClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="order-1 sm:order-2 group flex items-center gap-2.5 bg-white border-2 border-[#2739e5] text-[#2739e5] hover:bg-[#2739e5] hover:text-white px-6 py-2.5 rounded-full font-bold shadow-sm transition-all duration-300 text-xs sm:text-sm"
        >
          <span>Conoce más de mí</span>
          <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
        </motion.button>

        <span className="font-tech font-bold text-[#2739e5] order-3">
          {personalInfo.year}
        </span>
      </div>
    </section>
  );
};

export default Hero;
