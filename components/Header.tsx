import React from 'react';
import { View } from '../types';
import { Sparkles, PenTool, Menu, Shield } from 'lucide-react';

interface HeaderProps {
  currentView: View;
  setView: (v: View) => void;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setView,
  onMenuClick
}) => {
  const handleNavClick = (sectionId: string) => {
    if (currentView !== 'portfolio') {
      setView('portfolio');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 py-3 px-4 md:px-8 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-gray-200/80 transition-all">
      {/* --- Mobile Bar --- */}
      <div className="relative w-full flex justify-between items-center h-14 md:hidden">
        <div
          className="h-full flex items-center cursor-pointer"
          onClick={() => {
            setView('portfolio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img src="/logowayo.svg" alt="Wayo Rodriguez Logo" className="h-8 w-auto object-contain" />
        </div>

        <button
          onClick={onMenuClick}
          className="p-2 text-[#121212] hover:text-[#2739e5] rounded-lg transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* --- Desktop Navigation --- */}
      <div className="hidden md:flex w-full max-w-6xl mx-auto items-center justify-between h-14">
        <div
          className="h-full flex items-center cursor-pointer group"
          onClick={() => {
            setView('portfolio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/logowayo.svg"
            alt="Wayo Rodriguez Logo"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </div>

        <nav className="flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => handleNavClick('about')}
            className="text-gray-700 hover:text-[#2739e5] transition-colors"
          >
            sobre mí
          </button>

          <button
            onClick={() => handleNavClick('experience')}
            className="text-gray-700 hover:text-[#2739e5] transition-colors"
          >
            experiencia
          </button>

          <button
            onClick={() => handleNavClick('works')}
            className="text-gray-700 hover:text-[#2739e5] transition-colors"
          >
            trabajos
          </button>

          <button
            onClick={() => setView('live')}
            className={`transition-colors flex items-center gap-1.5 ${
              currentView === 'live' ? 'text-[#2739e5]' : 'text-gray-700 hover:text-[#2739e5]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2739e5]" />
            <span>doodles</span>
          </button>

          <span className="w-1 h-1 rounded-full bg-gray-300" />

          <button
            onClick={() => setView('draw')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              currentView === 'draw'
                ? 'bg-[#2739e5] text-white shadow-sm'
                : 'bg-[#2739e5]/10 text-[#2739e5] hover:bg-[#2739e5] hover:text-white'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>dibujar</span>
          </button>

          <button
            onClick={() => setView('gallery')}
            className={`text-xs font-bold transition-colors ${
              currentView === 'gallery' ? 'text-[#2739e5]' : 'text-gray-500 hover:text-[#2739e5]'
            }`}
          >
            galería
          </button>

          <button
            onClick={() => setView('admin-login')}
            className="text-xs text-gray-400 hover:text-gray-800 transition-colors uppercase tracking-wider font-tech flex items-center gap-1"
            title="Acceso Admin"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>admin</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
