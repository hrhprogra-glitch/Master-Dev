import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { InteractiveCircuits } from '../components/InteractiveCircuits';

export const Hero = () => {
  const containerRef = useRef(null);
  
  // Orquestación del Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transformaciones cinemáticas
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]); // Sube más rápido
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-tech">
      
      {/* 1. Fondo de Circuitos con Parallax Lento */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <InteractiveCircuits />
      </motion.div>

      {/* 2. Capa de viñeta para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-1" />

      {/* 3. Contenido Principal */}
      <motion.div 
        style={{ y: textY, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        {/* Badge superior */}
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

        {/* Título Rockstar */}
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(15px)" }}
          animate={{ opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-6xl md:text-9xl font-black leading-none mb-4 italic uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          MASTER<span className="text-brand-gold">DEV</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-brand-white/40 font-medium tracking-[0.6em] text-xs md:text-sm uppercase mb-12"
        >
          Next. Generation. Systems.
        </motion.p>

        {/* 4. BOTONES RECUPERADOS Y MEJORADOS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row justify-center gap-8"
        >
          {/* Botón Proyectos */}
          <button className="group relative px-12 py-4 bg-brand-gold text-brand-black font-black uppercase tracking-widest text-[11px] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Proyectos_</span>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
          
          {/* Botón Contacto */}
          <button className="group relative px-12 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] overflow-hidden">
            <span className="relative z-10">Contacto</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              Contacto
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Frame decorativo de esquinas */}
      <div className="absolute inset-12 border border-brand-gold/5 pointer-events-none z-1">
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-gold/40" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-brand-gold/40" />
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-gold/40" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-brand-gold/40" />
      </div>

      {/* Indicador de Scroll Estilo GTA VI */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[8px] text-brand-gold/40 tracking-[0.5em] uppercase">Scroll_to_explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
};