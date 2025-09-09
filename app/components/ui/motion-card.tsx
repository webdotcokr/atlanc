'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  whileHover?: {
    scale?: number;
    y?: number;
    transition?: {
      duration?: number;
      ease?: string | number[];
    };
  };
  whileTap?: {
    scale?: number;
  };
}

export default function MotionCard({
  children,
  className = '',
  whileHover = {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  whileTap = {
    scale: 0.98
  }
}: MotionCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
      {children}
    </motion.div>
  );
}