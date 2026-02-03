import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden font-tech py-20"
    >
      <motion.div style={{ scale, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-brand-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 italic">The_Founders</h2>
            <h3 className="text-white text-5xl md:text-7xl font-black uppercase mb-8 italic">
              DÚO DE <br /> <span className="text-brand-gold text-4xl md:text-6xl">INGENIERÍA</span>
            </h3>
            <p className="text-brand-white/60 text-lg leading-relaxed mb-8 font-light italic">
              "Diseñamos la infraestructura del mañana con arquitectura Full-Stack."
            </p>
          </div>
          <div className="flex-1 relative group">
            <div className="relative aspect-square bg-gradient-to-br from-brand-gold/20 to-transparent overflow-hidden grayscale border border-white/5">
               <img src="/Galeria/duo1.jpg" alt="Socios" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};