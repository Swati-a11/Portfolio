import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ isDarkMode }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999999] pointer-events-none hidden md:block"
      animate={{
        x: position.x - (isHovered ? 20 : 6),
        y: position.y - (isHovered ? 20 : 6),
        width: isHovered ? 40 : 12,
        height: isHovered ? 40 : 12,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div
        style={{
          width: isHovered ? '40px' : '12px',
          height: isHovered ? '40px' : '12px',
          borderRadius: '9999px',
          backgroundColor: isDarkMode ? 'white' : 'black',
          mixBlendMode: isDarkMode ? 'difference' : 'normal',
          opacity: isDarkMode ? 1 : 0.85,
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
