import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Camera, MapPin, Layers } from 'lucide-react';
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

  const categories = [
    'all',
    'Social Events',
    'Lighting & Flash'
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenPhoto = (photo: PhotoProject) => {
    onOpenLightbox({
      type: 'image',
      src: photo.imageUrl,
      galleryImages: photo.images && photo.images.length > 0 ? photo.images : [photo.imageUrl],
      title: photo.title,
      subtitle: photo.category === 'Social Events' ? 'Bodas & Cobertura Social' : photo.category,
      description: photo.description || `${photo.location || ''} ${photo.gear ? `· ${photo.gear}` : ''}`,
      client: photo.location,
      year: photo.year,
      tags: [photo.category === 'Social Events' ? 'Boda' : photo.category, photo.location || ''].filter(Boolean)
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Todos los Álbumes ({photos.length})
        </button>
        <button
          onClick={() => setSelectedCategory('Social Events')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            selectedCategory === 'Social Events'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Bodas & Eventos Sociales
        </button>
        <button
          onClick={() => setSelectedCategory('Lighting & Flash')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
            selectedCategory === 'Lighting & Flash'
              ? 'bg-[#2739e5] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Iluminación & Flash
        </button>
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

            {/* Top Multi-image indicator badge */}
            {photo.images && photo.images.length > 1 && (
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-tech flex items-center gap-1 z-10 border border-white/10">
                <Layers className="w-3 h-3 text-[#2739e5]" />
                <span>{photo.images.length} fotos</span>
              </div>
            )}

            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-tech uppercase tracking-wider text-blue-300 font-bold mb-1 flex items-center gap-1.5">
                <span>{photo.category === 'Social Events' ? 'Bodas' : photo.category}</span>
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
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
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
