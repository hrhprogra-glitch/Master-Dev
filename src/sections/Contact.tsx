import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// --- SUB-COMPONENTE: PUNTO LÁSER VIAJERO (EDICIÓN SUPER BRILLANTE) ---
const TravelingLaser = ({ duration = 3, color = "#d4af37" }) => {
  // Sombra aumentada para el efecto "Más Brilloso"
  const glowStyle = { 
    boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
    filter: 'brightness(1.5)' 
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
      {/* 1. LÍNEA SUPERIOR */}
      <motion.div
        animate={{ left: ["-100%", "100%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-100"
        style={glowStyle}
      />
      <motion.div 
         animate={{ left: ["0%", "100%"] }}
         transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
         className="absolute top-[-3px] left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_20px_#fff]"
      />

      {/* 2. LÍNEA DERECHA */}
      <motion.div
        animate={{ top: ["-100%", "100%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: duration / 4 }}
        className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent opacity-100"
        style={glowStyle}
      />
      <motion.div 
         animate={{ top: ["0%", "100%"] }}
         transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: duration / 4 }}
         className="absolute top-0 right-[-3px] w-2 h-2 rounded-full bg-white shadow-[0_0_20px_#fff]"
      />

      {/* 3. LÍNEA INFERIOR */}
      <motion.div
        animate={{ right: ["-100%", "100%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: duration / 2 }}
        className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-transparent via-brand-gold to-transparent opacity-100"
        style={glowStyle}
      />
      <motion.div 
         animate={{ right: ["0%", "100%"] }}
         transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: duration / 2 }}
         className="absolute bottom-[-3px] right-0 w-2 h-2 rounded-full bg-white shadow-[0_0_20px_#fff]"
      />

      {/* 4. LÍNEA IZQUIERDA */}
      <motion.div
        animate={{ bottom: ["-100%", "100%"] }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: (duration / 4) * 3 }}
        className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-t from-transparent via-brand-gold to-transparent opacity-100"
        style={glowStyle}
      />
      <motion.div 
         animate={{ bottom: ["0%", "100%"] }}
         transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: (duration / 4) * 3 }}
         className="absolute bottom-0 left-[-3px] w-2 h-2 rounded-full bg-white shadow-[0_0_20px_#fff]"
      />
    </div>
  );
};

// --- SUB-COMPONENTE: LLAMARADA LATERAL ---
const SideAuraFlame = ({ side, delay }: { side: 'left' | 'right', delay: number }) => {
  const positionClass = side === 'left' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2';
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.8 }}
      animate={{
        opacity: [0.3, 0.7, 0.3], 
        scaleY: [0.9, 1.3, 0.9],   
        scaleX: [1, 1.2, 1]        
      }}
      transition={{
        duration: 4, 
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className={`absolute top-1/2 h-[150vh] w-[200px] md:w-[300px] ${positionClass} bg-brand-gold/40 blur-[100px] pointer-events-none mix-blend-screen origin-center`}
    />
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Transformaciones
  const xLeft = useTransform(scrollYProgress, [0, 0.7], [-300, 0]); 
  const xRight = useTransform(scrollYProgress, [0, 0.7], [300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const yTitle = useTransform(scrollYProgress, [0, 0.7], [-100, 0]);

  // Activación Final
  const glowScale = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const auraAppearance = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const laserOpacity = useTransform(scrollYProgress, [0.79, 0.8], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="contacto" 
      className="py-32 bg-transparent font-tech text-white overflow-hidden min-h-screen flex items-center justify-center relative"
    >
      
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* AURA TECNOLÓGICA LATERAL */}
      <motion.div 
        style={{ opacity: auraAppearance }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
          <SideAuraFlame side="left" delay={0} />
          <SideAuraFlame side="left" delay={2} />
          <SideAuraFlame side="right" delay={1} />
          <SideAuraFlame side="right" delay={3} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* ENCABEZADO */}
        <motion.div 
          style={{ y: yTitle, opacity }}
          className="text-center mb-16 overflow-hidden"
        >
          <h2 className="text-brand-gold text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            INICIAR PROYECTO
          </h2>
          <p className="text-brand-gold/50 text-xs tracking-[0.5em] uppercase mt-2">
            Briefing_System_v1.0
          </p>
        </motion.div>

        {/* CONTENEDOR DEL FORMULARIO */}
        <div className="relative p-8">
          
          {/* MARCO LÁSER BASE */}
          <motion.div style={{ scaleX: glowScale, opacity: glowOpacity }} className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleX: glowScale, opacity: glowOpacity }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleY: glowScale, opacity: glowOpacity }} className="absolute top-0 bottom-0 left-0 w-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleY: glowScale, opacity: glowOpacity }} className="absolute top-0 bottom-0 right-0 w-[2px] bg-brand-gold/30 origin-center" />

          {/* LÁSER VIAJERO DEL MARCO (Brillante) */}
          <motion.div style={{ opacity: laserOpacity }} className="absolute inset-0 z-20 pointer-events-none">
             <TravelingLaser duration={3} />
          </motion.div>

          <motion.div style={{ opacity: glowOpacity }} className="absolute inset-0 border-[2px] border-brand-gold/10 blur-xl pointer-events-none animate-pulse" />

          {/* FORMULARIO */}
          <form className="space-y-6 relative z-10">
            {/* Campos del formulario */}
            <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Nombre Completo o Empresa *</label>
              <input required type="text" placeholder="IDENTITY_VERIFICATION..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none uppercase transition-all duration-300 backdrop-blur-md" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Email *</label>
                <input required type="email" placeholder="COMMS_CHANNEL..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none uppercase transition-all duration-300 backdrop-blur-md" />
              </motion.div>
              <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Teléfono</label>
                <input type="tel" placeholder="OPTIONAL_UPLINK..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none uppercase transition-all duration-300 backdrop-blur-md" />
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Presupuesto (S/)</label>
                <input type="text" placeholder="RESOURCE_ALLOCATION..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none uppercase transition-all duration-300 backdrop-blur-md" />
              </motion.div>
              <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Entrega deseada</label>
                <input type="date" className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none text-white/60 uppercase transition-all duration-300 backdrop-blur-md" />
              </motion.div>
            </div>

            <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold group-hover:text-white transition-colors">Detalles del proyecto *</label>
              <textarea required rows={4} placeholder="SYSTEM_SPECIFICATIONS..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold focus:bg-brand-gold/5 outline-none uppercase resize-none transition-all duration-300 backdrop-blur-md"></textarea>
            </motion.div>

            {/* BOTÓN DE ENVÍO CON LÁSER Y SUPER BRILLO */}
            <motion.div 
               style={{ scale: glowScale, opacity: glowOpacity }}
               className="relative group/btn mt-8"
            >
                {/* Láser del Botón (VISIBLE SIEMPRE, MÁS RÁPIDO) */}
                <div className="absolute inset-0 z-20">
                    <TravelingLaser duration={1.5} color="#ffffff" />
                </div>

                {/* Resplandor de fondo intenso para el botón */}
                <div className="absolute inset-0 bg-brand-gold/20 blur-xl opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse" />

                <motion.button 
                  whileHover={{ 
                    backgroundColor: "#d4af37", 
                    color: "#050505", 
                    scale: 1.05, 
                    boxShadow: "0 0 60px rgba(212,175,55,0.8)" // Brillo extremo en hover
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="w-full py-6 border border-brand-gold text-brand-gold font-black uppercase tracking-[0.5em] text-xs transition-all duration-300 relative overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.4)] z-30 bg-black/50 backdrop-blur-sm"
                >
                  <span className="relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Ejecutar_Envío</span>
                  <div className="absolute inset-0 bg-brand-gold translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};