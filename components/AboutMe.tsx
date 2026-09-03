import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './BrandIcons';
import RetroStar from './RetroStar';
import { personalInfo, contactData, educationData, toolsData, skillsData, softSkillsData } from '../data/portfolioData';

interface AboutMeProps {
  onViewWorksClick: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onViewWorksClick }) => {
  return (
    <section id="about" className="relative py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Unified Master Container */}
      <div className="bg-white rounded-3xl md:rounded-[32px] border-2 border-[#2739e5]/25 shadow-xl overflow-hidden">
        
        {/* Top Header Banner matching Reference Image 2 */}
        <div className="relative bg-[#2739e5] text-white px-6 sm:px-10 py-6 md:py-8 flex items-center justify-between overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl tracking-wide font-normal">
              About <span className="italic font-editorial font-bold">Me!</span>
            </h2>
            <p className="font-tech text-xs sm:text-sm text-blue-100 tracking-wider uppercase mt-0.5">
              {personalInfo.name} ({personalInfo.nickname}) · {personalInfo.tagline}
            </p>
          </div>

          {/* Decorative Pixel Star in banner */}
          <div className="absolute -right-4 -bottom-6 opacity-30 pointer-events-none">
            <RetroStar size={120} color="#FFFFFF" variant="pixel" />
          </div>
        </div>

        {/* Card Body - Balanced 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Photo & Contact Info (4.5 cols on desktop) */}
          <div className="lg:col-span-5 bg-[#2739e5] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-white/10 relative overflow-hidden">
            {/* Background subtle watermark star */}
            <div className="absolute top-1/2 -left-12 opacity-10 pointer-events-none">
              <RetroStar size={160} color="#FFFFFF" variant="smooth" />
            </div>

            <div className="relative z-10 flex flex-col items-center sm:items-start w-full">
              {/* Profile Image with subtle border and hover */}
              <div className="w-full max-w-[240px] sm:max-w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 mb-6 mx-auto lg:mx-0 group bg-neutral-900">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== personalInfo.fallbackAvatarUrl) {
                      target.src = personalInfo.fallbackAvatarUrl;
                    }
                  }}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Contact Me Section */}
              <div className="w-full">
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white mb-3 italic">
                  Contact <span className="font-editorial not-italic font-bold">Me!</span>
                </h3>

                <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-medium w-full">
                  {/* WhatsApp / Phone */}
                  <a
                    href={`https://wa.me/${contactData.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-blue-100 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#2739e5] flex items-center justify-center transition-colors flex-shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <span className="font-tech tracking-wide">{contactData.phone}</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={contactData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-blue-100 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#2739e5] flex items-center justify-center transition-colors flex-shrink-0">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <span>{contactData.instagram}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactData.email}`}
                    className="flex items-center gap-3 hover:text-blue-100 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm group break-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#2739e5] flex items-center justify-center transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs truncate">{contactData.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-tech text-blue-100 flex justify-between items-center w-full">
              <span className="tracking-wider uppercase">DISPONIBLE PARA PROYECTOS</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Right Column: Bio, Education, Tools & Skills (7.5 cols on desktop) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Greeting & Bio */}
              <div>
                <h3 className="font-serif-display text-4xl sm:text-5xl text-[#2739e5] mb-3">
                  ¡Hola!
                </h3>
                {personalInfo.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
                    {para}
                  </p>
                ))}
              </div>

              {/* Education Section */}
              <div>
                <h4 className="font-serif-display text-xl sm:text-2xl text-[#2739e5] mb-2.5">
                  Educación & Trayectoria
                </h4>
                <div className="space-y-2.5">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-[#2739e5] pl-3 py-0.5">
                      <p className="font-bold text-gray-900 text-xs sm:text-sm">{edu.degree}</p>
                      <p className="text-[11px] sm:text-xs text-gray-600 font-medium">
                        {edu.institution} · <span className="font-tech text-[#2739e5] font-bold">{edu.period}</span>
                      </p>
                      {edu.description && (
                        <p className="text-[11px] text-gray-500 mt-0.5">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tools */}
              <div>
                <h4 className="font-serif-display text-xl sm:text-2xl text-[#2739e5] mb-2.5">
                  Herramientas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolsData.map((tool) => (
                    <div
                      key={tool.id}
                      style={{ backgroundColor: tool.bgColor, color: tool.textColor }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg shadow-sm border border-black/15 font-bold text-xs hover:scale-105 transition-transform cursor-default"
                      title={tool.name}
                    >
                      <span className="font-tech text-xs tracking-wider opacity-90">{tool.shortCode}</span>
                      <span className="font-medium text-white text-[11px]">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Actitudes Section matching Reference 2 Dual-Tone Layout */}
              <div>
                <h4 className="font-serif-display text-xl sm:text-2xl text-[#2739e5] mb-2.5">
                  Actitudes & Habilidades
                </h4>
                
                {/* 1. Actitudes de Valor / Soft Skills (Solid Blue Pills) */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {softSkillsData.map((val, idx) => (
                    <span
                      key={`soft-${idx}`}
                      className="bg-[#2739e5] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm hover:bg-[#1a28bf] hover:scale-105 transition-all cursor-default"
                    >
                      {val}
                    </span>
                  ))}
                </div>

                {/* 2. Habilidades Técnicas (White Pills with Blue Border) */}
                <div className="flex flex-wrap gap-1.5">
                  {skillsData.map((skill, idx) => (
                    <span
                      key={`tech-${idx}`}
                      className="bg-white text-[#2739e5] border border-[#2739e5]/35 px-2.5 py-0.5 rounded-full text-xs font-semibold hover:bg-[#2739e5]/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Button to View Works */}
            <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">
              <motion.button
                onClick={onViewWorksClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 bg-[#2739e5] hover:bg-[#1a28bf] text-white px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Ver mis trabajos</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
