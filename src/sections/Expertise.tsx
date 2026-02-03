// src/sections/Expertise.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Expertise = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Las tarjetas se mueven ligeramente hacia arriba mientras scrolleas
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={targetRef} className="py-32 bg-[#050505] relative z-20">
      <motion.div style={{ y }} className="container mx-auto px-6">
        <h2 className="text-brand-gold text-4xl font-bold mb-12 uppercase italic">Expertise_</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Se activa al entrar al view
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-8 border border-brand-gold/20 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold mb-4">SISTEMA POS {i}</h3>
              <p className="text-white/40 text-sm italic">Arquitectura robusta para inventarios masivos.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};