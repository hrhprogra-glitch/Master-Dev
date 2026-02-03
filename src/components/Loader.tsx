import { motion, type Variants } from 'framer-motion';

const codeLines = [
  "import { MasterDev } from '@core';",
  "const system = MasterDev.initialize();",
  "system.loadModule('NexusPOS');",
  "system.loadModule('EviCamp');",
  "console.log('Systems Active');"
];

const containerVariants: Variants = {
  exit: { 
    opacity: 0, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

export const Loader = () => {
  return (
    <motion.div 
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* 1. LOGO GRANDE Y ANIMACIÓN DE ARMADO */}
      <div className="relative mb-12">
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 20px #d4af3733", "0 0 60px #d4af3755", "0 0 20px #d4af3733"] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full blur-3xl"
        />
        
        <motion.img 
          src="/Galeria/Logo.png"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1.5, rotate: 0, opacity: 1 }} // Logo 50% más grande
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 15,
            duration: 1.5 
          }}
          className="relative h-40 w-auto object-contain z-10" // h-40 para mayor tamaño
        />
      </div>

      {/* 2. ANIMACIÓN DE CÓDIGO (TERMINAL) */}
      <div className="font-mono text-[12px] md:text-sm text-[#d4af37]/80 bg-white/[0.02] p-6 rounded-lg border border-white/5 w-[90%] max-w-md">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (index * 0.3) }}
            className="flex gap-3"
          >
            <span className="text-white/20">{index + 1}</span>
            <span>{line}</span>
          </motion.div>
        ))}
        
        {/* Cursor parpadeante final */}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-[#d4af37] ml-1 mt-1"
        />
      </div>

      {/* 3. BARRA DE CARGA DE PROCESO */}
      <div className="absolute bottom-20 flex flex-col items-center">
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-[#d4af37]"
          />
        </div>
        <span className="mt-4 text-[10px] tracking-[0.4em] text-white/40 uppercase">
          Building Digital Future
        </span>
      </div>
    </motion.div>
  );
};