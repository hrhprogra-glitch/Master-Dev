import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <motion.div 
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Resplandor Dorado detrás del logo */}
            <div className="absolute -inset-1 bg-[#d4af37] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            
            <img 
              src="/Galeria/Logo.png" // Ruta corregida sin /public
              alt="Master Dev Logo" 
              className="relative h-12 w-auto object-contain"
            />
          </motion.div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white">
              MASTER<span className="text-[#d4af37]">DEV</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]/60 font-bold">
              Software Studio
            </span>
          </div>
        </div>

        {/* Botón de Contacto Dorado */}
        <button className="bg-[#d4af37] hover:bg-[#f1d592] text-black px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-[#d4af37]/20">
          Hablemos
        </button>
      </div>
    </nav>
  );
};