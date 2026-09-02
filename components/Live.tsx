
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimalState, Position, View, Drawing } from '../types';
import { getDrawings } from '../services/api';
import Animal from './Animal';

interface LiveProps {
  setView: (view: View) => void;
}

const Live: React.FC<LiveProps> = ({ setView }) => {
  const [allDrawings, setAllDrawings] = useState<Drawing[]>([]);
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(0);
  const [animals, setAnimals] = useState<AnimalState[]>([]);
  const worldRef = useRef<HTMLDivElement>(null);
  const [worldDims, setWorldDims] = useState({ width: 0, height: 0 });

  const framePaddingPercentage = 0; // 10% padding from each side (top, bottom, left, right)

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

  // Fetch all drawings once
  useEffect(() => {
    const fetchAllDrawings = async () => {
      const drawingsData = await getDrawings();
      setAllDrawings(drawingsData);
    };
    fetchAllDrawings();
  }, []);

  // Update displayed animals when allDrawings or currentDrawingIndex changes
  useEffect(() => {
    if (worldDims.width === 0 || allDrawings.length === 0) return;

    const safeZoneX = worldDims.width * framePaddingPercentage;
    const safeZoneY = worldDims.height * framePaddingPercentage;
    const safeZoneWidth = worldDims.width * (1 - 2 * framePaddingPercentage);
    const safeZoneHeight = worldDims.height * (1 - 2 * framePaddingPercentage);

    const drawingsToShow = allDrawings.slice(currentDrawingIndex, currentDrawingIndex + 5);
    // If we don't have 5, wrap around to the beginning
    if (drawingsToShow.length < 5 && allDrawings.length > 0) {
      drawingsToShow.push(...allDrawings.slice(0, 5 - drawingsToShow.length));
    }

    const initialAnimals = drawingsToShow.map(drawing => ({
      ...drawing,
      currentPos: {
        x: safeZoneX + Math.random() * (safeZoneWidth - 100), // 100 is animalSize
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

  // Rotate drawings every 20 seconds
  useEffect(() => {
    if (allDrawings.length <= 5) return; // No need to rotate if 5 or fewer drawings

    const interval = setInterval(() => {
      setCurrentDrawingIndex(prevIndex => (prevIndex + 5) % allDrawings.length);
    }, 30000); // 20 seconds

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
    
            <div className="w-full min-h-screen flex flex-col items-center px-4 gap-4 bg-white overflow-hidden">
    
                <h2 className="text-4xl font-handwritten text-[#2d241e] text-center drop-shadow-sm font-bold mb-8 pt-8">
    
                  ¡Cuadro de dibujos!
    
                </h2>
    
                {/* Drawings Section */}
    
                <div
    
                  ref={worldRef}
    
                  className="relative w-full aspect-square max-w-md md:max-w-md lg:max-w-lg bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
    
                  style={{ backgroundImage: "url('/fondogif.webp')" }}
    
                >
    
                    {/* Active Animals Layer */}
    
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
    
                </div>
    
        
    
                                {/* Buttons Section */}
    
        
    
                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
    
        
    
                                  <button
    
        
    
                                    onClick={() => setView('draw')}
    
        
    
                                    className="w-full max-w-xs bg-[#2739e5] hover:bg-[#1a2bbf] text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform active:scale-95 shadow-lg"
    
        
    
                                  >
    
        
    
                                    dibujar
    
        
    
                                  </button>
    
        
    
                                  <button
    
        
    
                                    onClick={() => setView('gallery')}
    
        
    
                                    className="w-full max-w-xs bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-xl text-lg transition-all transform active:scale-95 shadow-lg"
    
        
    
                                  >
    
        
    
                                   ver galería
    
        
    
                                  </button>
    
        
    
                                </div>
    
        
    
                
    
            </div>
  );
};

export default Live;
