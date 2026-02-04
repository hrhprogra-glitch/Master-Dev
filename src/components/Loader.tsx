import { motion, type Variants } from 'framer-motion';

// Variantes para dibujar las líneas de los circuitos
const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 2.5, ease: "easeInOut" } 
  }
};

export const Loader = () => {
  return (
    <motion.div 
      // --- 1. CONFIGURACIÓN DEL CONTENEDOR PRINCIPAL ---
      initial={{ opacity: 1 }}
      
      // --- 3. ANIMACIÓN DE SALIDA (EL "ZOOM THROUGH") ---
      // Cuando loading sea false, esto se ejecutará:
      exit={{ 
        scale: 50,          // Crece descomunalmente hacia la cámara
        opacity: 0,         // Se desvanece al final para no estorbar
        filter: "blur(20px)", // Efecto de velocidad (Motion Blur)
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] // Curva de aceleración agresiva
        }
      }}
      
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-black overflow-hidden font-tech"
    >
      
      {/* FONDO DE CÓDIGO BINARIO (Opcional: puedes bajarle la opacidad si distrae) */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[10px] flex flex-wrap gap-4 p-4 text-brand-white">
        {Array.from({ length: 400 }).map((_, i) => (
          <span key={i}>{Math.round(Math.random())}</span>
        ))}
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        
        {/* --- CIRCUITOS DE FONDO --- */}
        <svg 
          className="absolute w-full h-full scale-[1.3] md:scale-[1.6]" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pulseGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-brand-gold)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-brand-white)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-brand-gold)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 90, 180, 270].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              {/* Línea Base */}
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M100 70 V40 H140 V-10 M100 50 H60 V0" 
                stroke="var(--color-brand-gold)"
                strokeWidth="0.5"
                strokeLinecap="square"
                strokeOpacity="0.4"
              />
              
              {/* Línea de Pulso Energético */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 0.2, opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                d="M100 70 V40 H140 V-10" 
                stroke="url(#pulseGradient)"
                strokeWidth="0.8"
              />

              {/* Puntos en los extremos */}
              <motion.rect
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 2, repeat: Infinity, repeatDelay: 3 }}
                x="138" y="-12" width="4" height="4"
                fill="var(--color-brand-gold)"
              />
            </g>
          ))}
        </svg>

        {/* --- 2. NÚCLEO CENTRAL (LOGO + TEXTO) --- */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* LOGO: Aquí está la animación de "Aparecer desde el centro pequeño" */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Empieza invisible y tamaño 0
            animate={{ 
                scale: 1, 
                opacity: 1,
                // Efecto de latido (palpitación) una vez que ya apareció
                filter: ["drop-shadow(0 0 0px #d4af37)", "drop-shadow(0 0 15px #d4af37)", "drop-shadow(0 0 0px #d4af37)"]
            }}
            transition={{ 
                // La animación de entrada (Pop)
                scale: { type: "spring", stiffness: 100, damping: 15, duration: 1.2 }, 
                opacity: { duration: 0.8 },
                // La animación del filtro (latido)
                filter: { duration: 2, repeat: Infinity, delay: 1 } 
            }}
            className="relative mb-8"
          >
            <img 
              src="/Galeria/Logo.png" 
              alt="Master Dev" 
              className="h-44 md:h-52 w-auto relative z-20 object-contain"
            />
          </motion.div>

          {/* TEXTO: Aparece justo después del logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-brand-gold text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase">
              MASTER<span className="font-light">DEV</span>
            </h1>
            
            <div className="flex flex-col items-center gap-2 mt-4">
              <h2 className="text-brand-gold/60 font-medium tracking-[0.6em] text-[10px] md:text-xs uppercase">
                System Architecture
              </h2>
              
              {/* Barra de carga decorativa */}
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-[10px] text-brand-white/20 font-mono tracking-widest animate-pulse">01011</span>
                <div className="h-[1px] w-8 bg-brand-gold/20 overflow-hidden relative">
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-brand-gold"
                    />
                </div>
                <span className="text-[10px] text-brand-white/20 font-mono tracking-widest animate-pulse">11010</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};