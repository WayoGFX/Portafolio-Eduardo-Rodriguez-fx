
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimalState, Position } from '../types';

interface AnimalProps {
  animal: AnimalState;
  onPositionUpdate: (id: string, pos: Position) => void;
  worldRef: React.RefObject<HTMLDivElement>;
  safeZoneX: number;
  safeZoneY: number;
  safeZoneWidth: number;
  safeZoneHeight: number;
}

const Animal: React.FC<AnimalProps> = ({ animal, onPositionUpdate, worldRef, safeZoneX, safeZoneY, safeZoneWidth, safeZoneHeight }) => {
  const controls = useAnimation();
  const [currentPos, setCurrentPos] = useState<Position>(animal.currentPos); // This now stores top-left
  const [isFacingLeft, setIsFacingLeft] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const animalSize = 100; // The fixed width/height of the animal's container motion.div

  // Perspective calculation based on Y position (higher Y = further away = smaller)
  const perspectiveScale = useMemo(() => {
    if (!worldRef.current) return 1;
    const { height: worldHeight } = worldRef.current.getBoundingClientRect();
    const minScale = 0.5;
    const maxScale = 1.3;
    // Calculate normalized Y for the center of the animal
    const normalizedY = (currentPos.y + animalSize / 2 - safeZoneY) / safeZoneHeight;
    return (minScale + (maxScale - minScale) * normalizedY) * animal.scale;
  }, [currentPos.y, animal.scale, worldRef, safeZoneY, safeZoneHeight]);

  const moveAnimal = useCallback(async () => {
    if (!worldRef.current) return;

    // Calculate target position within the safe zone
    const targetX = safeZoneX + Math.random() * (safeZoneWidth - animalSize);
    const targetY = safeZoneY + Math.random() * (safeZoneHeight - animalSize);

    const distance = Math.sqrt(
      Math.pow(targetX - currentPos.x, 2) + Math.pow(targetY - currentPos.y, 2)
    );
    
    const duration = (distance / 40) / animal.speed;

    setIsFacingLeft(targetX < currentPos.x);
    setIsWalking(true);

    // Move animation
    await controls.start({
      x: targetX,
      y: targetY,
      opacity: 1,
      transition: { 
        duration, 
        ease: "linear"
      }
    });

    setIsWalking(false);
    setCurrentPos({ x: targetX, y: targetY }); // Store top-left position
    onPositionUpdate(animal.id, { x: targetX, y: targetY });

    // Idle behavior: wait some time before next move
    const idleTime = 2000 + Math.random() * 4000;
    setTimeout(moveAnimal, idleTime);
  }, [controls, currentPos, animal.speed, animal.id, onPositionUpdate, worldRef, safeZoneX, safeZoneY, safeZoneWidth, safeZoneHeight]);

  useEffect(() => {
    // Small delay to ensure mount
    const timer = setTimeout(() => {
        moveAnimal();
    }, 100);
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  return (
    <motion.div
      initial={{ 
        x: animal.currentPos.x, 
        y: animal.currentPos.y, 
        opacity: 1
      }}
      animate={controls}
      style={{
        position: 'absolute',
        zIndex: Math.floor(currentPos.y + animalSize / 2), // zIndex based on animal center y
        cursor: 'pointer',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: animalSize,
        height: animalSize,
      }}
      onUpdate={(latest) => {
          if (typeof latest.y === 'number') {
            setCurrentPos(prev => ({ ...prev, y: latest.y as number })); // Store top-left position
          }
      }}
      className="relative group" // Add group class here for hover effect
    >
        {/* Shadow that stays on "ground" */}
        <motion.div 
            animate={{ 
                scale: isWalking ? [1, 1.1, 1] : 1,
                opacity: isWalking ? [0.2, 0.3, 0.2] : 0.2
            }}
            transition={{ duration: 0.5, repeat: isWalking ? Infinity : 0 }}
            className="absolute bottom-4 w-12 h-3 bg-black rounded-full blur-md -z-10" 
        />

        <motion.div // This motion.div only handles rotation and scaling of the animal's IMAGE
            animate={{ 
                scale: perspectiveScale,
                rotateY: isFacingLeft ? 180 : 0,
                // Walking "bob" effect
                y: isWalking ? [0, -15, 0] : 0,
                rotateZ: isWalking ? [-2, 2, -2] : 0
            }}
            transition={{
                y: { duration: 0.4, repeat: isWalking ? Infinity : 0, ease: "easeInOut" },
                rotateZ: { duration: 0.4, repeat: isWalking ? Infinity : 0, ease: "easeInOut" }
            }}
            className="flex flex-col items-center justify-center relative"
        >
            <img src={animal.imageData} alt={animal.name} className="w-24 h-24 object-contain drop-shadow-2xl" />
        </motion.div>
        
        {/* Name Label - now a direct child of the main motion.div, not the rotating one */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-handwritten text-black font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out drop-shadow-lg">
            {animal.name.toUpperCase()}
        </div>
    </motion.div>
  );
};

export default Animal;
