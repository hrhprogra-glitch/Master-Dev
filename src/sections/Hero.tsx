import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden font-tech">
      
      {/* BACKGROUND ANIMATION (Estilo Rockstar VI) */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* Luces de neón/oro difuminadas que dan el ambiente GTA VI */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[100px] rounded-full" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* TITULO CON REVELACIÓN CINEMÁTICA */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1.5em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "0.2em", filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
        >
          <h1 className="text-brand-white text-6xl md:text-9xl font-bold leading-none mb-4 uppercase italic">
            MASTER<span className="text-brand-gold">DEV</span>
          </h1>
        </motion.div>

        {/* SUBTÍTULO QUE APARECE CON GLITCH SUTIL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-brand-gold font-bold tracking-[0.8em] text-xs md:text-sm uppercase mb-8">
            Next Generation Systems
          </h2>
          
          <div className="flex gap-6 mt-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.4)" }}
              className="px-10 py-4 bg-brand-gold text-brand-black font-black uppercase tracking-widest text-xs"
            >
              Ver Proyectos
            </motion.button>
            <button className="px-10 py-4 border border-brand-white/20 text-brand-white font-bold uppercase tracking-widest text-xs hover:border-brand-gold transition-all">
              Contacto_
            </button>
          </div>
        </motion.div>
      </div>

      {/* FRAME DECORATIVO (Esquinas tecnológicas) */}
      <div className="absolute inset-10 border border-brand-gold/5 pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-brand-gold/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-brand-gold/40" />
      </div>
    </section>
  );
};