import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Beizer curve para movimiento suave tipo Rockstar
        delay: 1.5 // Espera a que el Hero inicie su animación
      }}
      className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-xl border-b border-brand-gold/10 font-tech"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* BRANDING CON REVELACIÓN DE ESPACIADO */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="relative"
          >
            <img 
              src="/Galeria/Logo.png" 
              alt="Logo" 
              className="h-10 w-auto brightness-125 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
          </motion.div>

          <div className="flex flex-col leading-none">
            <motion.span 
              initial={{ letterSpacing: "1em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-brand-gold text-xl md:text-2xl font-bold uppercase"
            >
              MASTER<span className="font-light">DEV</span>
            </motion.span>
            <span className="text-[7px] text-brand-gold/40 tracking-[0.5em] uppercase mt-1">
              Software Engineering
            </span>
          </div>
        </div>

        {/* NAVEGACIÓN CON ENTRADA ESCALONADA */}
        <div className="hidden md:flex items-center gap-10">
          {['Proyectos', 'Tecnologías', 'Expertise'].map((item, i) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + (i * 0.1) }}
              className="group/link relative text-brand-white/50 hover:text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover/link:w-full" />
            </motion.a>
          ))}
          
          {/* BOTÓN CON BRILLO TÉCNICO */}
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="relative px-8 py-2.5 overflow-hidden group border border-brand-gold/30 hover:border-brand-gold transition-all duration-500"
          >
            <span className="relative z-10 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-brand-black transition-colors duration-500">
              Cotizar_
            </span>
            <div className="absolute inset-0 bg-brand-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
          </motion.button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className="md:hidden">
          <button className="text-brand-gold p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8h16M4 16h16" strokeLinecap="square" />
            </svg>
          </button>
        </div>

      </div>
    </motion.nav>
  );
};