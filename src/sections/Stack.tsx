import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const techs = [
  { name: 'React', level: 'Senior' }, { name: 'Node.js', level: 'Backend' },
  { name: 'TypeScript', level: 'Typed' }, { name: 'PostgreSQL', level: 'Database' }
];

export const Stack = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden font-tech py-20">
      <motion.div style={{ opacity }} className="container mx-auto px-6 text-center">
        <h2 className="text-brand-gold font-bold tracking-[1em] text-[10px] uppercase mb-16 italic opacity-50">Tecnologías_Autorizadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {techs.map((tech) => (
            <div key={tech.name} className="group p-8 border border-brand-gold/10 bg-white/[0.03] backdrop-blur-sm hover:bg-brand-gold transition-all duration-500">
              <p className="text-white group-hover:text-black font-black uppercase text-2xl italic">{tech.name}</p>
              <p className="text-brand-gold group-hover:text-black/40 text-[8px] uppercase tracking-[0.3em] font-bold mt-2">{tech.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};