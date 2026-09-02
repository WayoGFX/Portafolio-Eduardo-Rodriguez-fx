import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Camera, MapPin } from 'lucide-react';
import { PhotoProject } from '../types';
import { LightboxMedia } from './LightboxModal';

interface PhotoGalleryProps {
  photos: PhotoProject[];
  onOpenLightbox: (media: LightboxMedia) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onOpenLightbox
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Portrait', 'Street', 'Product', 'Event'];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenPhoto = (photo: PhotoProject) => {
    onOpenLightbox({
      type: 'image',
      src: photo.imageUrl,
      title: photo.title,
      subtitle: photo.category,
      description: `${photo.location || ''} ${photo.gear ? `· ${photo.gear}` : ''}`,
      year: photo.year,
      tags: [photo.category, photo.location || ''].filter(Boolean)
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
            {cat === 'all' ? 'Todas las Fotos' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            onClick={() => handleOpenPhoto(photo)}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-200"
          >
            {/* Image */}
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold mb-1 flex items-center gap-1.5">
                <span>{photo.category}</span>
                {photo.location && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3" />
                      {photo.location}
                    </span>
                  </>
                )}
              </span>
              <h4 className="font-editorial text-lg font-bold leading-snug">
                {photo.title}
              </h4>
              {photo.gear && (
                <p className="text-xs text-gray-300 mt-1 font-tech flex items-center gap-1">
                  <Camera className="w-3 h-3 text-blue-300" />
                  <span>{photo.gear}</span>
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

export default PhotoGallery;
