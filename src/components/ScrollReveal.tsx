import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const RockstarReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efecto Rockstar: De lejos (0.7) a cerca (1) y vuelve a alejarse (1.1)
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [150, 0, -100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505] py-20">
      <motion.div style={{ scale, opacity, filter: blur, y }} className="w-full">
        {children}
      </motion.div>
    </section>
  );
};