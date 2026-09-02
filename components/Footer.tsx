import React from 'react';
import { contactData, personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#121212] text-white border-t border-white/10 mt-20 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src="/logowayo.svg" alt="Wayo" className="h-8 w-auto brightness-200 invert" />
            <span className="font-editorial text-2xl font-bold tracking-tight">{personalInfo.name}</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-sm">
            {personalInfo.tagline} — Creando narrativas visuales de alto impacto.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="Instagram"
          >
            📸
          </a>
          {contactData.youtubeUrl && (
            <a
              href={contactData.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
              title="YouTube"
            >
              ▶️
            </a>
          )}
          {contactData.tiktokUrl && (
            <a
              href={contactData.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
              title="TikTok"
            >
              🎵
            </a>
          )}
          <a
            href={`mailto:${contactData.email}`}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="Email"
          >
            ✉️
          </a>
          <a
            href={`https://wa.me/${contactData.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="WhatsApp"
          >
            💬
          </a>
        </div>

        {/* Right: Copyright & Year */}
        <div className="text-center md:text-right font-tech text-xs text-gray-500">
          <p>© {personalInfo.year} {personalInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-1 text-gray-600">Diseñado con ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
