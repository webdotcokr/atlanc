'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

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

// 모바일 감지 훅
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
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
  const isMobile = useIsMobile();

  // 모바일에서 애니메이션 속도 향상 및 거리 감소
  const mobileDuration = isMobile ? duration * 0.7 : duration;
  const mobileAmount = isMobile ? 0.05 : amount;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: mobileAmount }}
      variants={animations[animation]}
      transition={{
        duration: mobileDuration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        // GPU 가속 강제
        type: "tween"
      }}
      style={{
        // 초기 깜빡임 방지
        willChange: 'transform, opacity'
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
  const isMobile = useIsMobile();
  const mobileStaggerDelay = isMobile ? staggerDelay * 0.5 : staggerDelay;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: mobileStaggerDelay
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }}
      variants={containerVariants}
      style={{ willChange: 'opacity' }}
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
  const isMobile = useIsMobile();
  const itemDuration = isMobile ? 0.4 : 0.6;

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      transition={{
        duration: itemDuration,
        ease: [0.25, 0.1, 0.25, 1],
        type: "tween"
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}