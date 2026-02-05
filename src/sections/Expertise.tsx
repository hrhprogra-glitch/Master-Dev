import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
// Importamos un icono de Play desde react-icons (asegúrate de tenerlo instalado)
import { FaPlay } from 'react-icons/fa';

// NOTA: Reemplaza estos IDs con los videos reales que quieras mostrar.
// Estos son ejemplos genéricos sobre los temas.
const expertiseExamples = [
  {
    tech: 'Python',
    title: 'Análisis de Datos & Automatización',
    description: 'Procesamiento de grandes volúmenes de datos con arquitecturas limpias.',
    videoId: 'rfscVS0vtbw', // ID de ejemplo de YouTube (Python)
  },
  {
    tech: 'Node.js',
    title: 'Infraestructura Backend Escala',
    description: 'Sistemas en tiempo real y APIs de alta disponibilidad.',
    videoId: 'TlB_eWDSMt4', // ID de ejemplo de YouTube (Node.js)
  },
  {
    tech: 'React / TS',
    title: 'Interfaces Rockstar de Alto Nivel',
    description: 'Experiencias de usuario fluidas con tipado estricto para cero errores.',
    videoId: 'SqcY0GlETPk', // ID de ejemplo de YouTube (React)
  }
];

// Interfaz para las props de la tarjeta
interface CardProps {
    item: any;
    index: number;
    progress: MotionValue<number>;
    onClick: () => void; // Añadimos el manejador de click
}

// Sub-componente de Tarjeta de Video
const ExpertiseCard = ({ item, index, progress, onClick }: CardProps) => {
  const xRange = index === 0 ? [-100, 0] : index === 2 ? [100, 0] : [0, 0];
  const yRange = index === 1 ? [-200, 0] : [-120, 0];
  
  const x = useTransform(progress, [0.1, 0.45], xRange);
  const y = useTransform(progress, [0.1, 0.45], yRange);
  const opacity = useTransform(progress, [0.1, 0.35], [0, 1]);
  const rotate = useTransform(progress, [0.1, 0.45], index === 0 ? [-15, 0] : index === 2 ? [15, 0] : [0, 0]);

  // Generamos la URL de la miniatura de alta calidad de YouTube
  const thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      style={{ x, y, opacity, rotate }}
      onClick={onClick} // Activamos el modal al hacer click
      whileHover={{ scale: 1.05, zIndex: 10, borderColor: 'rgba(212, 175, 55, 0.8)' }}
      className="group relative bg-black/40 border border-brand-gold/10 p-6 backdrop-blur-md transition-all duration-500 overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex justify-between items-center mb-6">
        <span className="text-[10px] tracking-[0.3em] font-bold text-brand-gold uppercase">
          Tecnología: {item.tech}
        </span>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_#d4af37]" />
        </div>
      </div>

      {/* Contenedor de la Miniatura de Video */}
      <div className="relative z-10 aspect-video mb-6 overflow-hidden border border-white/5 group-hover:border-brand-gold/30 transition-colors duration-500">
        <img 
          src={thumbnailUrl} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:sepia-[.3] transition-all duration-700 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Botón de Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/80 rounded-full flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(212,175,55,0.5)] group-hover:bg-brand-gold transition-all duration-300"
            >
                <FaPlay className="text-black text-xl md:text-2xl" />
            </motion.div>
        </div>
      </div>

      <div className="relative z-10">
        <h4 className="text-white font-black uppercase italic text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">
            {item.title}
        </h4>
        <p className="text-white/50 text-xs leading-relaxed italic group-hover:text-white/80 transition-colors duration-300">
            {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const Expertise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Estado para el modal

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // --- ANIMACIONES GLOBALES ---
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);
  const scanY = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  // --- ANIMACIONES DE IMPACTO VINCULADAS AL SCROLL ---
  const titleX = useTransform(scrollYProgress, [0, 0.25], [-400, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.25], [400, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.25], ["10px", "0px"]);

  return (
    <section  id="expertise" ref={containerRef} className="min-h-screen bg-transparent py-32 overflow-hidden font-tech relative">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-6">
        
        {/* Cabecera Controlada por Scroll */}
        <div className="max-w-4xl mb-24 relative pl-12 border-l-2 border-brand-gold/20">
          <motion.div 
            style={{ top: scanY }}
            className="absolute left-[-2px] w-[2px] h-24 bg-brand-gold shadow-[0_0_20px_#d4af37] z-10"
          />
          <motion.h2 
            style={{ x: titleX, opacity: headerOpacity, filter: headerBlur }}
            className="text-brand-gold text-5xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter drop-shadow-[0_0_10px_rgba(212,175,55,0.1)]"
          >
            Expertise_
          </motion.h2>
          <motion.p 
            style={{ x: textX, opacity: headerOpacity, filter: headerBlur }}
            className="text-white/60 text-xl md:text-2xl font-light italic"
          >
            Visualización de capacidades técnicas aplicadas a <span className="text-brand-gold font-bold">entornos de producción</span>.
          </motion.p>
        </div>

        {/* Galería de Videos Animada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertiseExamples.map((item, index) => (
            <ExpertiseCard 
              key={item.tech} 
              item={item} 
              index={index} 
              progress={scrollYProgress}
              onClick={() => setSelectedVideo(item.videoId)} // Pasamos el ID del video al estado
            />
          ))}
        </div>

        {/* Pilares Inferiores */}
        <div className="mt-24 flex flex-wrap gap-8 justify-center opacity-40">
          {['Escalabilidad', 'Seguridad', 'Performance'].map((tag) => (
            <span key={tag} className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-bold border-b border-brand-gold/20 pb-1">
              {tag}
            </span>
          ))}
        </div>

      </motion.div>

      {/* --- MODAL DE VIDEO --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)} // Cerrar al hacer click fuera
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md"
          >
            {/* Contenedor del Iframe */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Evitar cierre al clickar dentro
              className="relative w-full max-w-5xl aspect-video bg-black border border-brand-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden"
            >
              {/* Botón de Cerrar */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-brand-gold tracking-widest text-sm font-bold bg-black/50 px-3 py-1 border border-white/10 hover:border-brand-gold/50 transition-all"
              >
                CERRAR X
              </button>
              
              {/* Reproductor de YouTube */}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};