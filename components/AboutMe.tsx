import React from 'react';
import { motion } from 'framer-motion';
import RetroStar from './RetroStar';
import { personalInfo, contactData, educationData, toolsData, skillsData } from '../data/portfolioData';

interface AboutMeProps {
  onViewWorksClick: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onViewWorksClick }) => {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Banner Header matching Reference Image 2 */}
      <div className="relative bg-[#2739e5] text-white rounded-t-3xl md:rounded-t-[32px] px-6 py-8 md:py-10 overflow-hidden flex items-center justify-between shadow-xl">
        <div className="relative z-10">
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl tracking-wide font-normal">
            About <span className="italic font-editorial font-bold">Me!</span>
          </h2>
          <p className="font-tech text-xs sm:text-sm text-blue-100 tracking-wider uppercase mt-1">
            Eduardo "Wayo" Rodríguez · Audiovisual Specialist
          </p>
        </div>

        {/* Big Pixel Star on the top right */}
        <div className="absolute -right-6 -bottom-8 md:-right-4 md:-bottom-6 opacity-30 md:opacity-40">
          <RetroStar size={140} color="#FFFFFF" variant="pixel" />
        </div>
      </div>

      {/* Main Content Split Container */}
      <div className="bg-white rounded-b-3xl md:rounded-b-[32px] border-2 border-t-0 border-[#2739e5]/20 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Profile, Contact & Socials) - 5 Cols on Desktop */}
        <div className="lg:col-span-5 bg-[#2739e5] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Background Star */}
          <div className="absolute top-1/2 -left-12 opacity-10 pointer-events-none">
            <RetroStar size={180} color="#FFFFFF" variant="smooth" />
          </div>

          <div className="relative z-10 flex flex-col items-center sm:items-start">
            {/* Avatar Image Card */}
            <div className="w-full max-w-[260px] sm:max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 mb-8 mx-auto lg:mx-0 group">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Contact Me Section */}
            <div className="w-full">
              <h3 className="font-serif-display text-2xl sm:text-3xl text-white mb-4 italic">
                Contact <span className="font-editorial not-italic font-bold">Me!</span>
              </h3>

              <div className="flex flex-col gap-3 text-sm font-medium">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contactData.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-200 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-base">
                    📱
                  </span>
                  <span>{contactData.phone}</span>
                </a>

                {/* Instagram */}
                <a
                  href={contactData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-200 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-base">
                    📸
                  </span>
                  <span>{contactData.instagram}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-3 hover:text-blue-200 transition-colors bg-white/10 hover:bg-white/20 p-2.5 rounded-xl backdrop-blur-sm break-all"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-base flex-shrink-0">
                    ✉️
                  </span>
                  <span className="text-xs sm:text-sm">{contactData.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-xs font-tech text-blue-100 flex justify-between items-center">
            <span>DISPONIBLE PARA PROYECTOS</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        {/* Right Column (Bio, Education, Tools & Skills) - 7 Cols on Desktop */}
        <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 flex flex-col justify-between">
          <div className="space-y-8">
            {/* Bio Section */}
            <div>
              <h3 className="font-serif-display text-4xl sm:text-5xl text-[#2739e5] mb-4">
                ¡Hola!
              </h3>
              {personalInfo.bioParagraphs.map((para, idx) => (
                <p key={idx} className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Education Section */}
            <div>
              <h4 className="font-serif-display text-2xl text-[#2739e5] mb-3 flex items-center gap-2">
                <span>Educación & Trayectoria</span>
              </h4>
              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-[#2739e5] pl-4 py-1">
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{edu.degree}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">{edu.institution} · <span className="font-tech text-[#2739e5] font-bold">{edu.period}</span></p>
                    {edu.description && (
                      <p className="text-xs text-gray-500 mt-0.5">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h4 className="font-serif-display text-2xl text-[#2739e5] mb-3">
                Herramientas
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {toolsData.map((tool) => (
                  <div
                    key={tool.id}
                    style={{ backgroundColor: tool.bgColor, color: tool.textColor }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg shadow-sm border border-black/10 font-bold text-xs sm:text-sm hover:scale-105 transition-transform"
                    title={tool.name}
                  >
                    <span className="font-tech text-xs tracking-wider">{tool.shortCode}</span>
                    <span className="font-medium text-white text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Pills */}
            <div>
              <h4 className="font-serif-display text-2xl text-[#2739e5] mb-3">
                Habilidades
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#2739e5]/10 text-[#2739e5] border border-[#2739e5]/30 px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#2739e5] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Button to View Works matching reference arrow style */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex justify-end">
            <motion.button
              onClick={onViewWorksClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-[#2739e5] text-white px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:bg-[#1a28bf] transition-all"
            >
              <span>Ver mis trabajos</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

