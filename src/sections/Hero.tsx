import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { InteractiveCircuits } from '../components/InteractiveCircuits';

export const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-transparent overflow-hidden font-tech">
      
      {/* Fondo Fijo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <InteractiveCircuits />
      </div>

      {/* Viñeta de profundidad fija */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80 z-1 pointer-events-none" />

      <motion.div 
        style={{ y: textY, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-block px-4 py-1 border border-brand-gold/30 bg-brand-gold/5 backdrop-blur-sm mb-6"
        >
          <span className="text-brand-gold text-[10px] font-bold tracking-[0.5em] uppercase">
            Systems Architecture & Design
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(15px)" }}
          animate={{ opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-6xl md:text-9xl font-black leading-none mb-4 italic uppercase"
        >
          MASTER<span className="text-brand-gold">DEV</span>
        </motion.h1>
        
        <p className="text-brand-white/40 font-medium tracking-[0.6em] text-xs md:text-sm uppercase mb-12">
          Next. Generation. Systems.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <button className="group relative px-12 py-4 bg-brand-gold text-brand-black font-black uppercase tracking-widest text-[11px] transition-all duration-500">
            Proyectos_
          </button>
          <button className="group relative px-12 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px]">
            Contacto
          </button>
        </div>
      </motion.div>
    </section>
  );
};