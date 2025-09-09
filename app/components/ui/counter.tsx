'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
  decimals = 0
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    if (isInView) {
      const controls = motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            ease: "easeOut"
          }}
          onUpdate={(latest) => {
            if (ref.current) {
              const displayValue = decimals > 0 
                ? latest.toFixed(decimals) 
                : Math.round(latest).toLocaleString();
              
              if (ref.current) {
                const counterElement = ref.current.querySelector('.counter-value');
                if (counterElement) {
                  counterElement.textContent = displayValue;
                }
              }
            }
          }}
        />
        <span className="counter-value">{from}</span>
      </motion.span>
      {suffix}
    </span>
  );
}