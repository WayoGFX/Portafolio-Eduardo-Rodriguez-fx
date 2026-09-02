import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Tag } from 'lucide-react';
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

  const categories = ['all', 'Branding', 'Thumbnail', 'Poster', 'Social Media', 'Editorial'];

  const filteredDesigns = selectedCategory === 'all'
    ? designs
    : designs.filter(d => d.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenDesign = (design: DesignProject) => {
    onOpenLightbox({
      type: 'image',
      src: design.imageUrl,
      title: design.title,
      subtitle: design.category,
      description: design.description,
      client: design.client,
      year: design.year,
      tags: [design.category]
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
            {cat === 'all' ? 'Todos los Diseños' : cat}
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold mb-1">
                {design.category}
              </span>
              <h4 className="font-editorial text-lg font-bold leading-snug">
                {design.title}
              </h4>
              {design.client && (
                <p className="text-xs text-gray-300 mt-1">
                  Cliente: {design.client}
                </p>
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
