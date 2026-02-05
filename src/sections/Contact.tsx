import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

// --- SUB-COMPONENTE: PUNTO LÁSER VIAJERO ---
const TravelingLaser = ({ duration = 3, color = "#d4af37" }) => {
  const glowStyle = { 
    boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
    filter: 'brightness(1.5)' 
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
      <motion.div
        animate={{ left: ["-100%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        style={glowStyle}
      />
      <motion.div
        animate={{ top: ["-100%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay: duration / 4 }}
        className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent"
        style={glowStyle}
      />
      <motion.div
        animate={{ right: ["-100%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay: duration / 2 }}
        className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-brand-gold to-transparent"
        style={glowStyle}
      />
      <motion.div
        animate={{ bottom: ["-100%", "100%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay: (duration / 4) * 3 }}
        className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-brand-gold to-transparent"
        style={glowStyle}
      />
    </div>
  );
};

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
      transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className={`absolute top-1/2 h-[150vh] w-[200px] md:w-[300px] ${positionClass} bg-brand-gold/40 blur-[100px] pointer-events-none mix-blend-screen origin-center`}
    />
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.7], [-300, 0]); 
  const xRight = useTransform(scrollYProgress, [0, 0.7], [300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const yTitle = useTransform(scrollYProgress, [0, 0.7], [-100, 0]);
  const glowScale = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const auraAppearance = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("SENDING");

    try {
      const response = await fetch("https://formspree.io/f/maqdwbea", {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus("IDLE"), 4000);
      } else {
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 3000);
      }
    } catch (error) {
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 3000);
    }
  };

  return (
    <section ref={containerRef} id="contacto" className="py-32 bg-transparent font-tech text-white overflow-hidden min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div style={{ opacity: auraAppearance }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <SideAuraFlame side="left" delay={0} />
          <SideAuraFlame side="right" delay={1} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div style={{ y: yTitle, opacity }} className="text-center mb-16">
          <h2 className="text-brand-gold text-5xl md:text-7xl font-black uppercase italic tracking-tighter">INICIAR PROYECTO</h2>
          <p className="text-brand-gold/50 text-xs tracking-[0.5em] uppercase mt-2">Briefing_System_v1.0</p>
        </motion.div>

        <div className="relative p-8">
          <motion.div style={{ scaleX: glowScale, opacity: 1 }} className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleY: glowScale, opacity: 1 }} className="absolute top-0 bottom-0 left-0 w-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleY: glowScale, opacity: 1 }} className="absolute top-0 bottom-0 right-0 w-[2px] bg-brand-gold/30 origin-center" />
          <motion.div style={{ scaleX: glowScale, opacity: 1 }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold/30 origin-center" />

          <div className="absolute inset-0 z-20 pointer-events-none">
             <TravelingLaser duration={3} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
            <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Nombre Completo o Empresa *</label>
              <input required name="nombre" type="text" placeholder="Identity_Verification..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold transition-all duration-300 backdrop-blur-md" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Email *</label>
                <input required name="email" type="email" placeholder="Comms_Channel..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold transition-all duration-300 backdrop-blur-md" />
              </motion.div>
              <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Teléfono</label>
                <input name="telefono" type="tel" placeholder="Optional_Uplink..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold transition-all duration-300 backdrop-blur-md" />
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Presupuesto (S/)</label>
                <input name="presupuesto" type="text" placeholder="Resource_Allocation..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold transition-all duration-300 backdrop-blur-md" />
              </motion.div>
              <motion.div style={{ x: xLeft, opacity }} className="space-y-2 group">
                <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Entrega deseada</label>
                <input name="entrega" type="text" placeholder="Ej: 2 semanas..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold transition-all duration-300 backdrop-blur-md" />
              </motion.div>
            </div>

            <motion.div style={{ x: xRight, opacity }} className="space-y-2 group">
              <label className="text-[10px] text-brand-gold tracking-widest uppercase font-bold">Detalles del proyecto *</label>
              <textarea required name="message" rows={4} placeholder="System_Specifications..." className="w-full bg-black/60 border border-brand-gold/10 p-4 text-xs font-bold tracking-widest focus:border-brand-gold outline-none text-brand-gold resize-none transition-all duration-300 backdrop-blur-md"></textarea>
            </motion.div>

            {/* BOTÓN CON ANIMACIÓN DE LLENADO DORADO */}
            <motion.div style={{ scale: glowScale }} className="relative mt-12 group/btn">
              <AnimatePresence mode="wait">
                <motion.button
                  key={status}
                  disabled={status === "SENDING" || status === "SUCCESS"}
                  type="submit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`w-full py-6 font-black uppercase tracking-[0.5em] text-xs transition-all duration-500 relative overflow-hidden z-30 flex items-center justify-center gap-4 border
                    ${status === "SUCCESS" ? "bg-brand-gold text-black border-brand-gold shadow-[0_0_50px_rgba(212,175,55,0.6)]" : 
                      status === "ERROR" ? "bg-red-600/20 text-red-500 border-red-500" : 
                      "bg-black border-brand-gold text-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]"}
                  `}
                >
                  {status === "IDLE" && (
                    <>
                      <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-black">Ejecutar_Envío</span>
                      <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    </>
                  )}
                  {status === "SENDING" && (
                    <div className="flex items-center gap-3 relative z-10">
                      <FaSpinner className="animate-spin text-lg" />
                      <span className="animate-pulse">Transmitiendo_Datos...</span>
                    </div>
                  )}
                  {status === "SUCCESS" && (
                    <div className="flex items-center gap-3 relative z-10 text-black">
                      <FaCheckCircle className="text-xl" />
                      <span>Protocolo_Completado</span>
                    </div>
                  )}
                  {status === "ERROR" && <span className="relative z-10">Fallo_En_La_Red</span>}
                </motion.button>
              </AnimatePresence>

              {/* LÁSER RÁPIDO DEL BOTÓN */}
              <div className="absolute inset-0 z-40 pointer-events-none">
                  <TravelingLaser duration={1.5} color="#ffffff" />
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};