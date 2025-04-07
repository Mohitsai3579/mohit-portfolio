'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 500 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverStart = () => setIsHovering(true);
    const hoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', move);
    const clickable = document.querySelectorAll('a, button, .cursor-pointer');
    clickable.forEach(el => {
      el.addEventListener('mouseenter', hoverStart);
      el.addEventListener('mouseleave', hoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      clickable.forEach(el => {
        el.removeEventListener('mouseenter', hoverStart);
        el.removeEventListener('mouseleave', hoverEnd);
      });
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white ${
          isHovering ? 'opacity-100 scale-150 mix-blend-difference' : 'opacity-70'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border ${
          isHovering ? 'border-white/60 scale-[2]' : 'border-white/30'
        }`}
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
        }}
      />
    </>
  );
};

export default CustomCursor;
