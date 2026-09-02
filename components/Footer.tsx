import React from 'react';
import { Mail } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from './BrandIcons';
import { contactData, personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#121212] text-white border-t border-white/10 mt-16 pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src="/logowayo.svg" alt="Wayo" className="h-7 w-auto brightness-200 invert" />
            <span className="font-editorial text-xl font-bold tracking-tight">{personalInfo.name}</span>
          </div>
          <p className="text-gray-400 text-xs mt-1.5 max-w-sm">
            {personalInfo.tagline} — Creando narrativas visuales de alto impacto.
          </p>
        </div>

        {/* Center: Clean Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={contactData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          {contactData.youtubeUrl && (
            <a
              href={contactData.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
              title="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          )}
          {contactData.tiktokUrl && (
            <a
              href={contactData.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
              title="TikTok"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={`mailto:${contactData.email}`}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${contactData.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2739e5] flex items-center justify-center transition-colors text-white"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Year */}
        <div className="text-center md:text-right font-tech text-xs text-gray-500">
          <p>© {personalInfo.year} {personalInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
