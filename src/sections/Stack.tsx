import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPostgresql, 
  SiCss3, SiJavascript, SiPython, SiCplusplus, SiPhp, SiDocker, SiGit,
  SiNextdotjs, SiTailwindcss, SiMongodb, SiRedis, SiAmazon, SiFirebase,
  SiGo, SiFigma, SiJest, SiCypress, SiRedux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techGroups = [
  {
    title: 'Core_Languages',
    techs: [
      { name: 'JavaScript', level: 'Expert', icon: <SiJavascript />, description: 'Lógica asíncrona, ES6+ y optimización de motores V8 para aplicaciones de alto tráfico.' },
      { name: 'TypeScript', level: 'Typed', icon: <SiTypescript />, description: 'Arquitecturas orientadas a tipos para garantizar la seguridad del código en sistemas a gran escala.' },
      { name: 'Python', level: 'Advanced', icon: <SiPython />, description: 'Desarrollo de scripts de automatización, APIs con FastAPI y procesamiento de datos.' },
      { name: 'Go', level: 'Backend', icon: <SiGo />, description: 'Lenguaje de alto rendimiento diseñado para concurrencia masiva y microservicios eficientes.' },
      { name: 'Java', level: 'Enterprise', icon: <FaJava />, description: 'Sistemas empresariales robustos bajo patrones de diseño y POO estricta.' },
      { name: 'C++', level: 'Low-Level', icon: <SiCplusplus />, description: 'Gestión manual de memoria y algoritmos de alta velocidad para software de sistemas.' },
    ]
  },
  {
    title: 'Frontend_Architecture',
    techs: [
      { name: 'React', level: 'Senior', icon: <SiReact />, description: 'Ecosistema moderno de hooks, componentes y optimización de renderizado (Virtual DOM).' },
      { name: 'Next.js', level: 'Framework', icon: <SiNextdotjs />, description: 'Optimización SEO, Server-Side Rendering (SSR) y Static Site Generation (SSG).' },
      { name: 'Tailwind CSS', level: 'Design', icon: <SiTailwindcss />, description: 'Sistemas de diseño atómico y maquetación ágil basada en utilidades.' },
      { name: 'Redux', level: 'State', icon: <SiRedux />, description: 'Gestión de estados globales complejos y flujos de datos unidireccionales.' },
      { name: 'CSS3', level: 'Styling', icon: <SiCss3 />, description: 'Layouts avanzados con Grid/Flexbox y animaciones de alto rendimiento.' },
      { name: 'Figma', level: 'UI/UX', icon: <SiFigma />, description: 'Prototipado colaborativo y traducción fiel de diseños a código de producción.' },
    ]
  },
  {
    title: 'Backend_&_Persistence',
    techs: [
      { name: 'Node.js', level: 'Runtime', icon: <SiNodedotjs />, description: 'Entornos de ejecución basados en eventos para APIs de tiempo real escalables.' },
      { name: 'PostgreSQL', level: 'SQL', icon: <SiPostgresql />, description: 'Bases de datos relacionales avanzadas con enfoque en integridad y ACID.' },
      { name: 'MongoDB', level: 'NoSQL', icon: <SiMongodb />, description: 'Persistencia de documentos flexible para datos no estructurados y escalado rápido.' },
      { name: 'Redis', level: 'Cache', icon: <SiRedis />, description: 'Almacenamiento en memoria para optimizar la velocidad de respuesta de sistemas críticos.' },
      { name: 'Firebase', level: 'BaaS', icon: <SiFirebase />, description: 'Integración rápida de autenticación, bases de datos en tiempo real y hosting.' },
    ]
  }
];

const TechGroup = ({ group, setSelectedTech, selectedTech }: any) => {
  const groupRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: groupRef,
    offset: ["start end", "end start"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={groupRef} className="relative mb-24">
      <motion.div 
        style={{ opacity: titleOpacity }}
        className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-l-2 border-brand-gold/50 pl-6"
      >
        <div>
          <h3 className="text-brand-gold text-2xl md:text-4xl font-black tracking-tight uppercase italic leading-none">
            {group.title.replace('_', ' ')}
          </h3>
          <p className="text-brand-gold/20 text-[8px] tracking-[0.4em] uppercase font-bold mt-1">
            System_Module_v2.0
          </p>
        </div>
        <div className="h-[1px] flex-grow bg-brand-gold/10 mb-2 hidden md:block" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {group.techs.map((tech: any, index: number) => {
          const isLeft = index % 2 === 0;
          const x = useTransform(scrollYProgress, [0, 0.4], [isLeft ? -100 : 100, 0]);
          const opacity = useTransform(scrollYProgress, [0, 0.3 + (index * 0.04)], [0, 1]);
          const rotate = useTransform(scrollYProgress, [0, 0.4], [isLeft ? -10 : 10, 0]);

          return (
            <motion.div 
              key={tech.name} 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTech(tech);
              }}
              style={{ x, opacity, rotate }}
              whileHover={{ scale: 1.05, y: -5, rotate: 0 }}
              className={`group p-5 border transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center
                ${selectedTech?.name === tech.name ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-gold/10 bg-white/[0.02] hover:border-brand-gold/40'}`}
            >
              <div className={`text-4xl mb-3 transition-all duration-500 ${selectedTech?.name === tech.name ? 'text-white' : 'text-brand-gold group-hover:text-white'}`}>
                {tech.icon}
              </div>
              <p className={`font-bold uppercase text-[9px] tracking-widest text-center ${selectedTech?.name === tech.name ? 'text-white' : 'text-white/60 group-hover:text-brand-gold'}`}>
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const Stack = () => {
  const [selectedTech, setSelectedTech] = useState<any | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Hook para detectar el scroll y cerrar el modal si salimos de la sección
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !selectedTech) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // Si la sección ya no está visible en el viewport (con un margen de error)
      if (rect.bottom < 100 || rect.top > window.innerHeight - 100) {
        setSelectedTech(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedTech]);

  return (
    <section 
      ref={sectionRef}
      id="tecnologías" 
      className="min-h-screen bg-transparent relative overflow-hidden font-tech py-32"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ letterSpacing: "1.2em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.6em", opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-brand-gold font-black text-4xl md:text-6xl uppercase italic drop-shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-4"
          >
            STACK_TÉCNICO
          </motion.h2>
          <p className="text-brand-gold/40 text-[10px] tracking-[0.5em] uppercase font-bold">
            Sistemas_y_Protocolos_Habilitados
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {techGroups.map((group) => (
            <TechGroup 
              key={group.title} 
              group={group} 
              selectedTech={selectedTech} 
              setSelectedTech={setSelectedTech} 
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedTech && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-x-0 bottom-10 z-50 px-6 pointer-events-none"
            >
              <div className="max-w-4xl mx-auto p-10 border border-brand-gold/40 bg-black/95 backdrop-blur-3xl relative shadow-[0_0_100px_rgba(0,0,0,1)] pointer-events-auto">
                <button 
                  onClick={() => setSelectedTech(null)}
                  className="absolute top-4 right-6 text-brand-gold/40 text-[9px] hover:text-white tracking-[0.3em] font-bold"
                >
                  CERRAR_X
                </button>

                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="text-6xl text-brand-gold">
                    {selectedTech.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-brand-gold font-black uppercase italic tracking-tighter text-3xl mb-2">
                      {selectedTech.name}_
                    </h4>
                    <p className="text-white/80 text-lg italic font-light leading-relaxed">
                      {selectedTech.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};