import React from 'react';
import { motion } from 'framer-motion';

interface RetroStarProps {
  className?: string;
  size?: number;
  color?: string;
  variant?: 'pixel' | 'smooth' | 'sparkle';
  animated?: boolean;
}

export const RetroStar: React.FC<RetroStarProps> = ({
  className = '',
  size = 48,
  color = '#2739e5',
  variant = 'pixel',
  animated = false
}) => {
  const content = (
    variant === 'pixel' ? (
      // Pixelated 4-point star matching reference images
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <path
          d="M24 0H28V8H32V12H36V16H40V20H48V28H40V32H36V36H32V40H28V48H20V40H16V36H12V32H8V28H0V20H8V16H12V12H16V8H20V0H24Z"
          fill={color}
        />
      </svg>
    ) : (
      // Smooth starburst
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
      >
        <path
          d="M50 0C50 30 70 50 100 50C70 50 50 70 50 100C50 70 30 50 0 50C30 50 50 30 50 0Z"
          fill={color}
        />
      </svg>
    )
  );

  if (animated) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="inline-block"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default RetroStar;

