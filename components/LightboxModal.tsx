import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Layers, ExternalLink } from 'lucide-react';

export interface LightboxMedia {
  type: 'video-vertical' | 'video-horizontal' | 'image';
  src: string;
  galleryImages?: string[];
  title: string;
  subtitle?: string;
  description?: string;
  client?: string;
  year?: string;
  tags?: string[];
  tools?: string[];
  isEmbed?: boolean;
  externalUrl?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: LightboxMedia | null;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  media
}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [media]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (media?.galleryImages && media.galleryImages.length > 1) {
        if (e.key === 'ArrowRight') {
          setCurrentImgIndex((prev) => (prev + 1) % media.galleryImages!.length);
        }
        if (e.key === 'ArrowLeft') {
          setCurrentImgIndex((prev) => (prev - 1 + media.galleryImages!.length) % media.galleryImages!.length);
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, media]);

  if (!isOpen || !media) return null;

  const activeImageSrc = media.galleryImages && media.galleryImages.length > 0
    ? media.galleryImages[currentImgIndex]
    : media.src;

  const totalImages = media.galleryImages?.length || 1;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#121212] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Display Column */}
          <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[320px] md:min-h-[520px]">
            {media.type === 'image' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  key={activeImageSrc}
                  src={activeImageSrc}
                  alt={media.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg transition-all"
                />

                {/* Multi-image navigation arrows */}
                {totalImages > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex((prev) => (prev - 1 + totalImages) % totalImages);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#2739e5] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex((prev) => (prev + 1) % totalImages);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#2739e5] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded-full text-xs font-tech text-white border border-white/20 flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#2739e5]" />
                      <span>{currentImgIndex + 1} / {totalImages}</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {media.type === 'video-vertical' && (
              <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                {media.isEmbed ? (
                  <iframe
                    src={media.src}
                    title={media.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}

            {media.type === 'video-horizontal' && (
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                {media.isEmbed ? (
                  <iframe
                    src={media.src}
                    title={media.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}
          </div>

          {/* Info Side Panel */}
          <div className="w-full md:w-80 bg-neutral-900/95 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
            <div>
              {media.subtitle && (
                <span className="font-tech text-xs text-[#2739e5] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-md inline-block mb-2">
                  {media.subtitle}
                </span>
              )}

              <h3 className="font-editorial text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
                {media.title}
              </h3>

              {media.description && (
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {media.description}
                </p>
              )}

              <div className="space-y-1.5 text-xs text-gray-400 pt-2 border-t border-white/10 font-tech">
                {media.client && (
                  <p><strong className="text-white">Cliente/Proyecto:</strong> {media.client}</p>
                )}
                {media.year && (
                  <p><strong className="text-white">Año:</strong> {media.year}</p>
                )}
              </div>

              {/* Tools Badges */}
              {media.tools && media.tools.length > 0 && (
                <div className="mt-3 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-tech text-gray-400 uppercase tracking-wider block mb-1.5">Herramientas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {media.tools.map((tool, i) => (
                      <span key={i} className="text-[11px] bg-[#2739e5]/30 text-blue-200 border border-[#2739e5]/40 px-2 py-0.5 rounded-md font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {media.tags && media.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {media.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-5 mt-4 border-t border-white/10 flex flex-col gap-2">
              {media.externalUrl && (
                <a
                  href={media.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors text-center flex items-center justify-center gap-2 border border-white/15"
                >
                  <span>Abrir en {media.externalUrl.includes('instagram.com') ? 'Instagram' : 'YouTube'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={onClose}
                className="w-full bg-[#2739e5] hover:bg-[#1a28bf] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-colors text-center"
              >
                Cerrar vista
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LightboxModal;
