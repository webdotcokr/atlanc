'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp';
  once?: boolean;
  amount?: number;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
};

export default function MotionWrapper({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  animation = 'fadeInUp',
  once = true,
  amount = 0.1
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delay = 0
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  animation = 'fadeInUp'
}: {
  children: ReactNode;
  className?: string;
  animation?: keyof typeof animations;
}) {
  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}