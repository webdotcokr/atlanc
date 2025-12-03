'use client';

import { motion, TargetAndTransition } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}

export default function MotionCard({
  children,
  className = '',
  whileHover = {
    scale: 1.02,
    y: -5
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
      style={{
        // GPU 가속 및 깜빡임 방지
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}