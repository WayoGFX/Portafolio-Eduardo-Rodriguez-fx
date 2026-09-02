
import React from 'react';
import { Drawing } from '../types';
import { motion, Variants } from 'framer-motion';

interface GalleryProps {
  drawings: Drawing[];
  onDelete: (id: string) => void;
  isAdmin?: boolean;
  title: string; // Add this line
  extraContent?: React.ReactNode; // Add this line for the loading paragraph
}

const Gallery = ({ drawings, onDelete, isAdmin = false, title, extraContent }: GalleryProps) => { // Update this line
  if (drawings.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 bg-white rounded-3xl sketchy-border max-w-2xl w-full px-6 shadow-sm"
      >
        <div className="text-7xl mb-6">🎨</div>
        <h3 className="text-3xl font-handwritten text-[#2d241e] mb-3 font-bold">¡La galería está vacía!</h3>
        <p className="text-[#4a3728] font-bold text-lg">¡Crea el primer dibujo para empezar la colección!</p>
      </motion.div>
    );
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotate: -3 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 260, 
        damping: 20 
      } 
    }
  };

  const downloadDrawing = async (drawing: Drawing) => {
    const link = document.createElement('a');
    link.download = `doodle-${drawing.name}.webp`;

    if (drawing.imageData.startsWith('http')) {
        try {
            // Para imágenes de la nube (URLs), las obtenemos como un blob
            const response = await fetch(drawing.imageData);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.click();
            URL.revokeObjectURL(url); // Libera memoria
        } catch (error) {
            console.error("Error al descargar la imagen de la nube:", error);
            // Si fetch falla, abrimos en una nueva pestaña como alternativa
            window.open(drawing.imageData, '_blank');
        }
    } else {
        // Para imágenes locales (base64), el comportamiento es el mismo
        link.href = drawing.imageData;
        link.click();
    }
  };

  return (
    <div className="overflow-y-auto max-h-[80vh] hide-scrollbar flex flex-col items-center px-4 w-full"> {/* Added flex flex-col items-center px-4 w-full */}
      <h2 className="text-4xl font-handwritten text-[#2d241e] text-center drop-shadow-sm font-bold mb-8 pt-8"> {/* Moved h2 here */}
        {title}
      </h2>
      {extraContent} {/* Moved extraContent here for isLoading paragraph */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {drawings.map((drawing, index) => (
          <motion.div 
            key={drawing.id} 
            variants={itemVariants}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? 1.5 : -1.5, transition: { duration: 0.2 } }}
            className="relative bg-white p-5 rounded-xl shadow-xl border-2 border-blue-200 group"
          >
            {/* Cinta decorativa */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-blue-300/40 rotate-2 mix-blend-multiply pointer-events-none" />
            
            <div className="aspect-[4/3] bg-blue-50/50 rounded-lg overflow-hidden border border-blue-100 mb-4 shadow-inner relative group-hover:shadow-md transition-shadow">
              <img 
                src={drawing.imageData} 
                alt={drawing.name} 
                loading="lazy"
                className="w-full h-full object-contain p-2"
                crossOrigin="anonymous"
              />
              <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                <button 
                  onClick={() => downloadDrawing(drawing)}
                  className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-xl"
                  title="Guardar dibujo"
                >
                  💾
                </button>
              </div>
              

            </div>

            <div className="text-center">
              <h4 className="font-handwritten text-2xl text-[#2d241e] mb-2 font-bold">{drawing.name}</h4>
              
              <p className="text-[12px] text-[#2739e5] font-black uppercase tracking-widest mb-4">
                {new Date(drawing.timestamp).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
              </p>

              {isAdmin && (
                <motion.button 
                  whileHover={{ scale: 1.2, backgroundColor: '#dc2626' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onDelete(drawing.id)}
                  className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-red-100 text-red-700 rounded-full transition-all shadow-md z-10 font-black text-2xl"
                  title="Eliminar dibujo (Admin)" 
                >
                  ×
                </motion.button>
              )}
            </div>

            <div className="absolute -bottom-3 -left-2 text-3xl drop-shadow-md">♬⋆.˚</div>
            <div className="absolute -bottom-3 -right-2 text-3xl drop-shadow-md">⋆.˚ ☾⭒.˚</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
