import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightboxMedia {
  type: 'video-vertical' | 'video-horizontal' | 'image';
  src: string;
  title: string;
  subtitle?: string;
  description?: string;
  client?: string;
  year?: string;
  tags?: string[];
  isEmbed?: boolean;
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !media) return null;

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
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Media Display Column */}
          <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px] md:min-h-[500px]">
            {media.type === 'image' && (
              <img
                src={media.src}
                alt={media.title}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
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
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {media.description}
                </p>
              )}

              <div className="space-y-2 text-xs text-gray-400 pt-2 border-t border-white/10 font-tech">
                {media.client && (
                  <p><strong className="text-white">Cliente/Proyecto:</strong> {media.client}</p>
                )}
                {media.year && (
                  <p><strong className="text-white">Año:</strong> {media.year}</p>
                )}
              </div>

              {media.tags && media.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {media.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] bg-white/10 text-gray-200 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 mt-4 border-t border-white/10">
              <button
                onClick={onClose}
                className="w-full bg-[#2739e5] hover:bg-[#1a28bf] text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-colors text-center"
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

