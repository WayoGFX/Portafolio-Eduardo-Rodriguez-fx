import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, LayoutGrid, Sparkles } from 'lucide-react';
import { AnimalState, Position, Drawing } from '../types';
import { getDrawings } from '../services/api';
import Animal from './Animal';
import RetroStar from './RetroStar';

interface DoodlesSectionProps {
  onOpenDraw: () => void;
  onOpenGallery: () => void;
}

export const DoodlesSection: React.FC<DoodlesSectionProps> = ({
  onOpenDraw,
  onOpenGallery
}) => {
  const [allDrawings, setAllDrawings] = useState<Drawing[]>([]);
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [animals, setAnimals] = useState<AnimalState[]>([]);
  const worldRef = useRef<HTMLDivElement>(null);
  const [worldDims, setWorldDims] = useState({ width: 0, height: 0 });

  const framePaddingPercentage = 0;

  // Observe world container dimensions
  useEffect(() => {
    const worldElement = worldRef.current;
    if (!worldElement) return;

    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setWorldDims({ width, height });
      }
    });

    resizeObserver.observe(worldElement);
    return () => resizeObserver.disconnect();
  }, []);

  // Fetch all drawings
  useEffect(() => {
    const fetchAllDrawings = async () => {
      try {
        const drawingsData = await getDrawings();
        if (drawingsData && drawingsData.length > 0) {
          setAllDrawings(drawingsData);
        } else {
          const saved = localStorage.getItem('miaudoodles_drawings');
          if (saved) setAllDrawings(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Error fetching drawings:', e);
        const saved = localStorage.getItem('miaudoodles_drawings');
        if (saved) setAllDrawings(JSON.parse(saved));
      }
    };
    fetchAllDrawings();
  }, []);

  // Update displayed animals
  useEffect(() => {
    if (worldDims.width === 0 || allDrawings.length === 0) return;

    const safeZoneX = worldDims.width * framePaddingPercentage;
    const safeZoneY = worldDims.height * framePaddingPercentage;
    const safeZoneWidth = worldDims.width * (1 - 2 * framePaddingPercentage);
    const safeZoneHeight = worldDims.height * (1 - 2 * framePaddingPercentage);

    const drawingsToShow = allDrawings.slice(currentDrawingIndex, currentDrawingIndex + 5);
    if (drawingsToShow.length < 5 && allDrawings.length > 0) {
      drawingsToShow.push(...allDrawings.slice(0, 5 - drawingsToShow.length));
    }

    const initialAnimals = drawingsToShow.map(drawing => ({
      ...drawing,
      currentPos: {
        x: safeZoneX + Math.random() * (safeZoneWidth - 100),
        y: safeZoneY + Math.random() * (safeZoneHeight - 100),
      },
      targetPos: { x: 0, y: 0 },
      isMoving: false,
      facingLeft: false,
      scale: 0.8 + Math.random() * 0.4,
      speed: 0.5 + Math.random() * 1,
    }));
    setAnimals(initialAnimals);
  }, [allDrawings, currentDrawingIndex, worldDims]);

  // Rotate drawings every 30 seconds
  useEffect(() => {
    if (allDrawings.length <= 5) return;
    const interval = setInterval(() => {
      setCurrentDrawingIndex(prevIndex => (prevIndex + 5) % allDrawings.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [allDrawings.length]);

  const updateAnimalPosition = useCallback((id: string, pos: Position) => {
    setAnimals(prev => prev.map(a => a.id === id ? { ...a, currentPos: pos } : a));
  }, []);

  const safeZoneX = worldDims.width * framePaddingPercentage;
  const safeZoneY = worldDims.height * framePaddingPercentage;
  const safeZoneWidth = worldDims.width * (1 - 2 * framePaddingPercentage);
  const safeZoneHeight = worldDims.height * (1 - 2 * framePaddingPercentage);

  return (
    <section id="doodles" className="relative py-12 md:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-[#FAF8F5] border-2 border-[#2739e5]/30 rounded-3xl md:rounded-[36px] p-6 sm:p-10 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-tech text-xs bg-[#2739e5] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Zona Interactiva</span>
              </span>
              <span className="text-xs text-gray-500 font-tech">Wayo Doodles</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#2739e5] mt-1">
              ¡Dibuja un <span className="font-handwritten text-4xl sm:text-6xl text-[#121212] not-italic">Doodle!</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Deja tu firma o dibujo interactivo. Aparecerá en movimiento en el cuadro en vivo de la comunidad.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDraw}
              className="bg-[#2739e5] hover:bg-[#1a28bf] text-white font-bold py-2.5 px-5 rounded-2xl text-xs sm:text-sm shadow-md transition-all transform active:scale-95 flex items-center gap-2"
            >
              <PenTool className="w-4 h-4" />
              <span>Dibujar Ahora</span>
            </button>
            <button
              onClick={onOpenGallery}
              className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-bold py-2.5 px-4 rounded-2xl text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5"
            >
              <LayoutGrid className="w-4 h-4 text-gray-600" />
              <span>Ver Galería</span>
            </button>
          </div>
        </div>

        {/* The Live Interactive Frame */}
        <div className="mt-6 flex flex-col items-center">
          <div
            ref={worldRef}
            className="relative w-full aspect-video max-w-3xl bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            style={{ backgroundImage: "url('/fondogif.webp')" }}
          >
            {/* Active Moving Doodles */}
            <AnimatePresence mode="wait">
              {worldDims.width > 0 && animals.map((animal) => (
                <Animal
                  key={animal.id}
                  animal={animal}
                  onPositionUpdate={updateAnimalPosition}
                  worldRef={worldRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  safeZoneX={safeZoneX}
                  safeZoneY={safeZoneY}
                  safeZoneWidth={safeZoneWidth}
                  safeZoneHeight={safeZoneHeight}
                />
              ))}
            </AnimatePresence>

            {animals.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs sm:text-sm font-bold">
                ¡Sé el primero en dejar un dibujo!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoodlesSection;
