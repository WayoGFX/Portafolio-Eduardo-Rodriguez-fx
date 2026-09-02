import React from 'react';
import { motion } from 'framer-motion';
import RetroStar from './RetroStar';
import { experiencesData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Header Card matching Reference Image 3 */}
      <div className="bg-[#FAF8F5] border-2 border-[#2739e5]/30 rounded-t-3xl md:rounded-t-[32px] px-6 sm:px-10 py-8 flex items-center justify-between shadow-md relative overflow-hidden">
        <div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl text-[#2739e5] tracking-tight">
            Expe<span className="italic font-editorial font-bold text-[#121212]">rience</span>
          </h2>
          <p className="font-tech text-xs sm:text-sm text-gray-500 tracking-wider uppercase mt-1">
            [ Trayectoria Audiovisual & Producción ]
          </p>
        </div>

        {/* Decorative Pixel Star in header */}
        <div className="hidden sm:block">
          <RetroStar size={56} color="#2739e5" variant="pixel" animated />
        </div>
      </div>

      {/* Main Experience Body (Solid Cobalt Blue Block) */}
      <div className="bg-[#2739e5] text-white rounded-b-3xl md:rounded-b-[32px] p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Large Decorative Star Overlay */}
        <div className="absolute -right-16 -bottom-16 opacity-15 pointer-events-none">
          <RetroStar size={340} color="#FFFFFF" variant="smooth" />
        </div>

        {/* Experience Items List */}
        <div className="relative z-10 space-y-10 sm:space-y-12">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border-b border-white/20 pb-8 sm:pb-10 last:border-b-0 last:pb-0"
            >
              {/* Starburst Icon Indicator */}
              <div className="mt-1 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <RetroStar size={24} color="#FFFFFF" variant="pixel" />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="font-tech text-xs sm:text-sm text-blue-200 font-bold tracking-wider bg-white/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Roles Tags */}
                <div className="flex flex-wrap gap-2 my-2.5">
                  {exp.roles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-xs font-semibold text-white/90 bg-white/15 px-2.5 py-0.5 rounded-md"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {exp.description && (
                  <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed mt-2 max-w-3xl">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

