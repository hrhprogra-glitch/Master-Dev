import { motion, useScroll, useTransform, AnimatePresence, type Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- DATOS DE PROYECTOS ---
const projects = [
  { 
    id: 1, 
    title: 'Nexus POS', 
    category: 'Inventory System', 
    img: '/Galeria/proyect.jpg',
    description: 'Sistema de punto de venta integral con control de inventario en tiempo real, reportes analíticos y sincronización en la nube. Arquitectura basada en microservicios para alta escalabilidad.'
  },
  { 
    id: 2, 
    title: 'EviCamp', 
    category: 'Management App', 
    img: '/Galeria/proyect1.jpg',
    description: 'Plataforma de gestión de evidencias para trabajo de campo. Permite captura de datos offline, geolocalización y sincronización automática cuando hay conexión disponible.'
  },
  { 
    id: 3, 
    title: 'Stock Master', 
    category: 'Retail Tech', 
    img: '/Galeria/proyect2.jpg',
    description: 'Solución tecnológica para retail enfocada en la optimización de stock mediante algoritmos predictivos de demanda, reduciendo el exceso de inventario.'
  },
  { 
    id: 4, 
    title: 'Cloud Sales', 
    category: 'SaaS Platform', 
    img: '/Galeria/proyect3.jpg',
    description: 'Plataforma SaaS CRM diseñada para acelerar el ciclo de ventas B2B. Incluye automatización de pipelines, scoring de leads y dashboard de métricas en tiempo real.'
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
  const carouselScale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  
  const infiniteProjects = [...projects, ...projects];

  // --- BLOQUEO DE SCROLL ---
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  // --- VARIANTES DE ANIMACIÓN ROBÓTICA ---

  // 1. Contenedor Principal: Se mantiene compacto, vibra, y luego se expande
  const containerVariants: Variants = {
    initial: { 
      scale: 0.9,
    },
    animate: { 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "circOut"
      }
    },
    exit: { scale: 0.9, opacity: 0 }
  };

  // 2. LA VIBRACIÓN (El movimiento de lado a lado antes de abrirse)
  const shakeVariants: Variants = {
    initial: { x: 0 },
    shaking: {
      x: [0, -10, 10, -10, 10, -5, 5, 0], // Sacudida violenta
      transition: { 
        duration: 0.4, // Rápido (400ms)
        delay: 0.1,    // Espera un poco al llegar
        ease: "linear"
      }
    }
  };

  // 3. IMAGEN (Se desliza a la izquierda para dejar espacio)
  const imagePanelVariants: Variants = {
    initial: { width: "100%" }, // Ocupa todo al principio
    open: { 
      width: "40%", // Se contrae
      transition: { 
        delay: 0.5, // Espera a que termine la vibración
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  // 4. TEXTO (Aparece deslizándose desde la derecha)
  const textPanelVariants: Variants = {
    initial: { 
      width: "0%", 
      opacity: 0 
    },
    open: { 
      width: "60%", 
      opacity: 1,
      transition: { 
        delay: 0.5, // Sincronizado con la imagen
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section ref={sectionRef} id="proyectos" className="py-24 bg-transparent font-tech overflow-hidden relative min-h-screen">
      <div className="container mx-auto px-6 mb-8">
        <motion.div style={{ x: titleX }}>
          <h2 className="text-brand-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-2 italic opacity-60">
            Selected_Works
          </h2>
          <h3 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight">
            Proyectos_
          </h3>
        </motion.div>
      </div>

      {/* CARRUSEL INFINITO */}
      <motion.div 
        style={{ scale: carouselScale }}
        animate={{ opacity: selectedProject ? 0 : 1, filter: selectedProject ? 'blur(10px)' : 'blur(0px)' }}
        className={`relative flex overflow-hidden border-y border-brand-gold/10 bg-white/[0.01] py-12 perspective-1000 ${selectedProject ? 'pointer-events-none' : ''}`}
      >
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {infiniteProjects.map((project, index) => (
            <motion.div 
              layoutId={`project-card-${project.id}-${index}`}
              key={`${project.id}-${index}`}
              onClick={() => setSelectedProject({ ...project, layoutId: `project-card-${project.id}-${index}` })}
              className="min-w-[320px] md:min-w-[450px] mx-5 aspect-video bg-black border border-brand-gold/10 relative group overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-brand-gold/50 transition-colors duration-500"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 brightness-90 group-hover:brightness-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-brand-gold font-black text-2xl uppercase italic tracking-tighter drop-shadow-md">
                  {project.title}
                </p>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                  {project.category}
                </p>
              </div>
              
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-brand-gold text-[10px] tracking-[0.3em] font-bold uppercase border border-brand-gold px-3 py-1 bg-black/80 backdrop-blur-sm">
                    Activar_Mecanismo
                  </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- MODO TRANSFORMER: ENSAMBLAJE ROBÓTICO --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Fondo Oscuro */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setSelectedProject(null)}
            />

            {/* CONTENEDOR VIBRANTE (Wrapper) */}
            <motion.div 
              variants={shakeVariants}
              initial="initial"
              animate="shaking"
              className="relative w-full max-w-5xl z-50 flex justify-center"
            >
                {/* TARJETA QUE SE EXPANDE */}
                <motion.div 
                  layoutId={selectedProject.layoutId}
                  className="relative h-[60vh] md:h-[500px] w-full bg-black border border-brand-gold shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden flex"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  
                  {/* Botón Cerrar */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                    className="absolute top-4 right-4 z-[60] text-brand-gold hover:text-white transition-all p-2 bg-black/80 rounded-full border border-brand-gold/50 hover:rotate-90 hover:scale-110"
                  >
                    <FaTimes size={20} />
                  </button>

                  {/* PANEL IMAGEN (IZQUIERDA) - Se contrae */}
                  <motion.div 
                    variants={imagePanelVariants}
                    initial="initial"
                    animate="open"
                    className="relative h-full overflow-hidden border-r border-brand-gold/30 bg-black"
                  >
                    <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
                    
                    {/* Efecto de "Cargando Sistema" durante la vibración */}
                    <motion.div 
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center z-20"
                    >
                        <p className="text-brand-gold text-xs font-mono tracking-widest animate-pulse">
                            UNLOCKING_SYSTEM...
                        </p>
                    </motion.div>

                    {/* Escáner constante */}
                    <motion.div 
                      animate={{ top: ["-10%", "110%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-[2px] bg-brand-gold/80 shadow-[0_0_15px_#d4af37]"
                    />
                  </motion.div>

                  {/* PANEL TEXTO (DERECHA) - Se expande */}
                  <motion.div 
                    variants={textPanelVariants}
                    initial="initial"
                    animate="open"
                    className="relative h-full bg-black flex flex-col justify-center overflow-hidden"
                  >
                    <div className="p-8 md:p-12 min-w-[300px] md:min-w-[500px]"> {/* Min-width evita que el texto se aplaste mientras se anima */}
                        
                        <div className="mb-4 flex items-center gap-2">
                           <div className="w-2 h-2 bg-brand-gold animate-ping" />
                           <span className="text-brand-gold/60 text-[9px] uppercase tracking-widest font-bold">
                             System_Online
                           </span>
                        </div>

                        <motion.h3 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-3xl md:text-5xl text-brand-gold font-black uppercase italic tracking-tighter mb-6 leading-none"
                        >
                          {selectedProject.title}
                        </motion.h3>

                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8 }}
                            className="h-[1px] w-full bg-brand-gold/40 mb-6 origin-left" 
                        />

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-white/80 text-sm md:text-base leading-relaxed font-light italic mb-10"
                        >
                          {selectedProject.description}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex gap-4"
                        >
                          <button className="flex-1 flex items-center justify-center gap-2 text-white hover:text-brand-gold transition-colors text-[10px] font-bold uppercase tracking-widest border border-white/10 hover:border-brand-gold/50 py-4 group relative overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2"> <FaGithub className="text-sm" /> Code </span>
                            <div className="absolute inset-0 bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-black hover:bg-white transition-colors text-[10px] font-bold uppercase tracking-widest py-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                            <FaExternalLinkAlt />
                            <span>Live Preview</span>
                          </button>
                        </motion.div>
                    </div>

                    {/* Engranajes visuales (Decoración de fondo) */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 to-transparent" />
                  </motion.div>

                </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};