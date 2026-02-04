import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { InteractiveCircuits } from '../components/InteractiveCircuits';
import { 
  SiGithub, SiWhatsapp, SiGmail, SiLinkedin, 
  SiInstagram, SiX, SiTiktok, SiFacebook, SiYoutube 
} from 'react-icons/si';

// --- DATOS ---
const professionalLinks = [
  { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/harrymusic14', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: <SiLinkedin />, url: 'https://linkedin.com/in/tu-usuario', color: 'hover:text-[#0A66C2]' },
  { name: 'Email', icon: <SiGmail />, url: 'mailto:contacto@masterdev.com', color: 'hover:text-[#EA4335]' },
  { name: 'WhatsApp', icon: <SiWhatsapp />, url: 'https://wa.me/51982493208', color: 'hover:text-[#25D366]' },
];

const socialLinks = [
  { name: 'YouTube', icon: <SiYoutube />, url: 'https://youtube.com/tu-canal', color: 'hover:text-[#FF0000]' },
  { name: 'Instagram', icon: <SiInstagram />, url: 'https://instagram.com/tu-usuario', color: 'hover:text-[#E4405F]' },
  { name: 'TikTok', icon: <SiTiktok />, url: 'https://tiktok.com/@tu-usuario', color: 'hover:text-[#ff0050]' },
  { name: 'Facebook', icon: <SiFacebook />, url: 'https://facebook.com/tu-usuario', color: 'hover:text-[#1877F2]' },
  { name: 'X', icon: <SiX />, url: 'https://x.com/tu-usuario', color: 'hover:text-white' },
];

export const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animaciones de Scroll (Parallax y Opacidad)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const sidebarY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Se mueven más lento (Efecto 3D)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Se desvanecen más rápido
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-transparent overflow-hidden font-tech">
      
      {/* Fondo Fijo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <InteractiveCircuits />
      </div>

      {/* Viñeta de profundidad */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80 z-1 pointer-events-none" />

      {/* --- BARRA LATERAL IZQUIERDA (PROFESIONAL) --- */}
      <motion.div 
        style={{ opacity, y: sidebarY }} // Efecto Scroll
        className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-20"
      >
        {/* Wrapper de Entrada (Slide desde la izquierda) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-20"
        >
            {/* Línea superior */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-brand-gold/50" />
            
            {/* Texto Rotado */}
            <span className="text-brand-gold/40 text-[9px] tracking-[0.3em] font-bold uppercase -rotate-90 whitespace-nowrap py-2">
              Professional_Uplink
            </span>

            {/* Iconos */}
            <div className="flex flex-col gap-6">
              {professionalLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, scale: 1.2 }}
                  className={`text-xl text-brand-gold/60 transition-colors ${link.color} relative group`}
                >
                  {link.icon}
                  {/* Tooltip */}
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-brand-gold text-[8px] px-2 py-1 border border-brand-gold/20 whitespace-nowrap backdrop-blur-sm">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Línea inferior */}
            <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-brand-gold/50" />
        </motion.div>
      </motion.div>


      {/* --- BARRA LATERAL DERECHA (SOCIAL) --- */}
      <motion.div 
        style={{ opacity, y: sidebarY }} // Efecto Scroll
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-20"
      >
        {/* Wrapper de Entrada (Slide desde la derecha) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-20"
        >
            {/* Línea superior */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/20" />
            
            {/* Texto Rotado */}
            <span className="text-white/20 text-[9px] tracking-[0.3em] font-bold uppercase rotate-90 whitespace-nowrap py-2">
              Social_Feed_v2
            </span>

            {/* Iconos */}
            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: -5, scale: 1.2 }}
                  className={`text-xl text-white/30 transition-colors ${link.color} relative group`}
                >
                  {link.icon}
                   {/* Tooltip */}
                   <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[8px] px-2 py-1 border border-white/20 whitespace-nowrap backdrop-blur-sm">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Línea inferior */}
            <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-white/20" />
        </motion.div>
      </motion.div>


      {/* --- CONTENIDO CENTRAL --- */}
      <motion.div 
        style={{ y: textY, opacity, scale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
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

        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(15px)" }}
          animate={{ opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-6xl md:text-9xl font-black leading-none mb-4 italic uppercase"
        >
          MASTER<span className="text-brand-gold">DEV</span>
        </motion.h1>
        
        <p className="text-brand-white/40 font-medium tracking-[0.6em] text-xs md:text-sm uppercase mb-12">
          Next. Generation. Systems.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <button className="group relative px-12 py-4 bg-brand-gold text-brand-black font-black uppercase tracking-widest text-[11px] transition-all duration-500 hover:scale-105">
            Proyectos_
          </button>
          <button className="group relative px-12 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-500 hover:bg-white/5">
            Contacto
          </button>
        </div>
      </motion.div>
    </section>
  );
};