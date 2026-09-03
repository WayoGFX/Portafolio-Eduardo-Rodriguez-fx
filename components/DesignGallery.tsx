import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Layers } from 'lucide-react';
import { DesignProject } from '../types';
import { LightboxMedia } from './LightboxModal';

interface DesignGalleryProps {
  designs: DesignProject[];
  onOpenLightbox: (media: LightboxMedia) => void;
}

export const DesignGallery: React.FC<DesignGalleryProps> = ({
  designs,
  onOpenLightbox
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Branding & UI',
    'Social Media',
    'Flyers & Posters',
    'Imprenta & Editorial'
  ];

  const filteredDesigns = selectedCategory === 'all'
    ? designs
    : designs.filter(d => d.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenDesign = (design: DesignProject) => {
    onOpenLightbox({
      type: 'image',
      src: design.imageUrl,
      galleryImages: design.images && design.images.length > 0 ? design.images : [design.imageUrl],
      title: design.title,
      subtitle: design.category,
      description: design.description,
      client: design.client,
      year: design.year,
      tags: [design.category],
      tools: design.tools
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-[#2739e5] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat === 'all' ? 'Todos los Proyectos' : cat}
          </button>
        ))}
      </div>

      {/* Pinterest-style Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredDesigns.map((design, idx) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            onClick={() => handleOpenDesign(design)}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all cursor-pointer"
          >
            {/* Image */}
            <img
              src={design.imageUrl}
              alt={design.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Top Multi-image indicator badge */}
            {design.images && design.images.length > 1 && (
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-tech flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#2739e5]" />
                <span>{design.images.length} imágenes</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold mb-1">
                {design.category}
              </span>
              <h4 className="font-editorial text-lg font-bold leading-snug">
                {design.title}
              </h4>
              {design.client && (
                <p className="text-xs text-gray-300 mt-1">
                  Cliente/Proyecto: {design.client}
                </p>
              )}
              {design.tools && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {design.tools.map((t, i) => (
                    <span key={i} className="text-[10px] bg-white/20 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Corner Badge */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="w-8 h-8 rounded-full bg-white text-[#2739e5] flex items-center justify-center shadow-lg">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignGallery;
