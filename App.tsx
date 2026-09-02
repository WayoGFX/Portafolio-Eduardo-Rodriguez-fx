import React, { useState, useEffect } from 'react';
import { DrawingData, getDrawings, updateDrawings, uploadImage } from './services/api';
import { View } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import WorksSection from './components/WorksSection';
import DoodlesSection from './components/DoodlesSection';
import Canvas from './components/Canvas';
import Gallery from './components/Gallery';
import AdminLogin from './components/AdminLogin';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, PenTool, Images, X, Shield, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<View>('portfolio');
  const [drawings, setDrawings] = useState<DrawingData[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Cargar dibujos desde la nube al iniciar
  useEffect(() => {
    const fetchGlobalDrawings = async () => {
      setIsLoading(true);
      try {
        const cloudDrawings = await getDrawings();
        if (cloudDrawings && cloudDrawings.length > 0) {
          setDrawings(cloudDrawings);
        } else {
          const saved = localStorage.getItem('miaudoodles_drawings');
          if (saved) setDrawings(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Error cargando galería global, usando local:', e);
        const saved = localStorage.getItem('miaudoodles_drawings');
        if (saved) setDrawings(JSON.parse(saved));
      } finally {
        setIsLoading(false);
      }
    };

    fetchGlobalDrawings();

    const adminSession = sessionStorage.getItem('is_wayo_admin');
    if (adminSession === 'true') setIsAdmin(true);
  }, []);

  const saveDrawing = async (drawing: Omit<DrawingData, 'imageData'> & { imageData: string }) => {
    setIsUploading(true);
    try {
      const imageUrl = await uploadImage(drawing.imageData);
      const newDrawing: DrawingData = { ...drawing, imageData: imageUrl };
      const newDrawings = [newDrawing, ...drawings];
      setDrawings(newDrawings);
      localStorage.setItem('miaudoodles_drawings', JSON.stringify(newDrawings));
      await updateDrawings(newDrawings);
      setView('portfolio');
      setTimeout(() => {
        const doodleSection = document.getElementById('doodles');
        if (doodleSection) doodleSection.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } catch (e: any) {
      console.error('Error guardando el dibujo y subiendo a la nube:', e);
      alert(`¡Error! No se pudo guardar el dibujo.\n\n${e.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteDrawing = async (id: string) => {
    if (!isAdmin) return;
    const newDrawings = drawings.filter((d) => d.id !== id);
    setDrawings(newDrawings);
    localStorage.setItem('miaudoodles_drawings', JSON.stringify(newDrawings));
    try {
      await updateDrawings(newDrawings);
    } catch (e) {
      console.error('Error al borrar de la nube:', e);
      setDrawings(drawings);
      localStorage.setItem('miaudoodles_drawings', JSON.stringify(drawings));
    }
  };

  const handleAdminAuth = (success: boolean) => {
    if (success) {
      setIsAdmin(true);
      sessionStorage.setItem('is_wayo_admin', 'true');
      setView('gallery');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSetView = (newView: View) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (view !== 'portfolio') {
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#121212] flex flex-col justify-between">
      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            setView={handleSetView}
            scrollToSection={scrollToSection}
            isAdmin={isAdmin}
            onClose={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Main Header */}
      <Header
        currentView={view}
        setView={handleSetView}
        onMenuClick={toggleMenu}
      />

      {/* Views Orchestrator */}
      <AnimatePresence mode="wait">
        {/* 1. Main Portfolio View */}
        {view === 'portfolio' && (
          <motion.main
            key="portfolio-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {/* Hero */}
            <Hero onExploreClick={() => scrollToSection('about')} />

            {/* About Me */}
            <AboutMe onViewWorksClick={() => scrollToSection('works')} />

            {/* Experience */}
            <Experience />

            {/* Works Section (Video, Design, Photo) */}
            <WorksSection />

            {/* Doodles Interactive Section */}
            <DoodlesSection
              onOpenDraw={() => handleSetView('draw')}
              onOpenGallery={() => handleSetView('gallery')}
            />
          </motion.main>
        )}

        {/* 2. Full Draw View */}
        {view === 'draw' && (
          <motion.main
            key="draw-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto px-4 py-8 flex-1"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => handleSetView('portfolio')}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2739e5] hover:text-[#1a28bf] bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al Portafolio</span>
              </button>
              <button
                onClick={() => handleSetView('gallery')}
                className="text-xs font-tech text-gray-500 hover:text-black flex items-center gap-1"
              >
                <Images className="w-3.5 h-3.5" />
                <span>Ver Galería</span>
              </button>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-handwritten text-[#2d241e] mb-2 text-center font-bold">
                ¡Crea un dibujo para Eduardo!
              </h2>
              <p className="text-xs text-gray-500 mb-6 text-center font-tech">
                Tu creación cobrará vida en el cuadro interactivo del portafolio.
              </p>
              <Canvas onSave={saveDrawing} isSaving={isUploading} />
            </div>
          </motion.main>
        )}

        {/* 3. Doodles Gallery View */}
        {view === 'gallery' && (
          <motion.main
            key="gallery-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto px-4 py-8 flex-1"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => handleSetView('portfolio')}
                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2739e5] hover:text-[#1a28bf] bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al Portafolio</span>
              </button>
              <button
                onClick={() => handleSetView('draw')}
                className="bg-[#2739e5] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-[#1a28bf] flex items-center gap-1.5"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Dibujar Nuevo</span>
              </button>
            </div>

            <div className="flex flex-col items-center w-full">
              <Gallery
                drawings={drawings}
                onDelete={deleteDrawing}
                isAdmin={isAdmin}
                title={isAdmin ? 'Panel de Control Wayo Doodles' : 'Galería de Dibujos'}
                extraContent={isLoading ? <p className="text-[#2739e5] font-bold animate-pulse">Cargando creaciones de la nube...</p> : null}
              />
            </div>
          </motion.main>
        )}

        {/* 4. Admin Login View */}
        {view === 'admin-login' && (
          <motion.main
            key="login-view"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="max-w-md mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center"
          >
            <div className="w-full">
              <AdminLogin onLogin={handleAdminAuth} onCancel={() => handleSetView('portfolio')} />
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Main Global Footer */}
      <Footer />
    </div>
  );
};

interface MobileNavProps {
  setView: (v: View) => void;
  scrollToSection: (s: string) => void;
  isAdmin: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  setView,
  scrollToSection,
  isAdmin,
  onClose
}) => {
  const navVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 left-0 h-full w-80 bg-[#FAF8F5] shadow-2xl z-50 p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <img src="/logowayo.svg" alt="Wayo" className="h-8 w-auto object-contain" />
            <button onClick={onClose} className="p-2 -mr-2 text-gray-700 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          </div>

          <motion.nav
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="flex flex-col gap-4 text-sm"
          >
            <motion.button
              variants={itemVariants}
              onClick={() => {
                setView('portfolio');
                onClose();
              }}
              className="w-full text-base font-bold text-left text-[#2739e5]"
            >
              Inicio / Portafolio
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => {
                scrollToSection('about');
                onClose();
              }}
              className="w-full font-medium text-left text-gray-800"
            >
              Sobre Mí
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => {
                scrollToSection('experience');
                onClose();
              }}
              className="w-full font-medium text-left text-gray-800"
            >
              Experiencia
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => {
                scrollToSection('works');
                onClose();
              }}
              className="w-full font-medium text-left text-gray-800"
            >
              Trabajos (Video, Diseño, Foto)
            </motion.button>
            <motion.button
              variants={itemVariants}
              onClick={() => {
                scrollToSection('doodles');
                onClose();
              }}
              className="w-full font-medium text-left text-gray-800 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#2739e5]" />
              <span>Cuadro de Doodles</span>
            </motion.button>

            <div className="pt-4 border-t border-gray-200 flex flex-col gap-2.5">
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setView('draw');
                  onClose();
                }}
                className="w-full bg-[#2739e5] text-white py-2.5 rounded-xl font-bold text-xs text-center shadow-md flex items-center justify-center gap-1.5"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Dibujar un Doodle</span>
              </motion.button>
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setView('gallery');
                  onClose();
                }}
                className="w-full bg-white border border-gray-300 text-gray-800 py-2 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Images className="w-3.5 h-3.5 text-gray-600" />
                <span>Ver Galería</span>
              </motion.button>
            </div>
          </motion.nav>
        </div>

        <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-xs font-tech text-gray-500">
          <button
            onClick={() => {
              setView('admin-login');
              onClose();
            }}
            className="hover:text-black uppercase flex items-center gap-1"
          >
            <Shield className="w-3 h-3" />
            <span>{isAdmin ? 'Admin Activo' : 'Acceso Admin'}</span>
          </button>
          <span>Wayo 2026</span>
        </div>
      </motion.div>
    </>
  );
};

export default App;
