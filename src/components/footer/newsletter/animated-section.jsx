"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import FooterAnimatedLogo from '@/public/images/logos/footer-animated-logo.svg'

const AnimatedSection = () => {
  const { theme } = useTheme()
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generatePositions = () => {
      const newPositions = [];
      for (let i = 0; i < 20; i++) {
        let x, y;
        let intersects;
        do {
          intersects = false;
          x = Math.random() * 100;
          y = Math.random() * 100;
          for (const pos of newPositions) {
            const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
            if (distance < 18) { // Minimum distance to avoid intersection
              intersects = true;
              break;
            }
          }
        } while (intersects);
        newPositions.push({ x, y });
      }
      setPositions(newPositions);
    };

    generatePositions();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute dark:invert-0 invert"
          initial={{ y: '100%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ 
            left: `${pos.x}%`, 
            top: `${pos.y}%`, 
            width: '26px', // 80% of 10rem height
            height: '33px', 
            backgroundImage: `url(${FooterAnimatedLogo.src})`, 
            backgroundSize: 'cover',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedSection;
