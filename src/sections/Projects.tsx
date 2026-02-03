// src/sections/Projects.tsx

const projects = [
  { id: 1, title: 'Nexus POS', category: 'Inventory System', img: '/Galeria/proyect.jpg' },
  { id: 2, title: 'EviCamp', category: 'Management App', img: '/Galeria/proyect1.jpg' },
  { id: 3, title: 'Stock Master', category: 'Retail Tech', img: '/Galeria/proyect2.jpg' },
  { id: 4, title: 'Cloud Sales', category: 'SaaS Platform', img: '/Galeria/proyect3.jpg' },
];

export const Projects = () => {
  const infiniteProjects = [...projects, ...projects];

  return (
    <section id="proyectos" className="py-24 bg-transparent font-tech overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-brand-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-2 italic opacity-60">
          Selected_Works
        </h2>
        <h3 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight">
          Proyectos_
        </h3>
      </div>

      {/* Carrusel con tamaño intermedio (550px) */}
      <div className="relative flex overflow-hidden border-y border-brand-gold/10 bg-white/[0.01] py-12">
        <div className="flex animate-infinite-scroll">
          {infiniteProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              /* Tamaño ajustado: 550px es grande pero manejable */
              className="min-w-[320px] md:min-w-[550px] mx-5 aspect-video bg-black border border-brand-gold/10 relative group overflow-hidden transition-all duration-500 hover:border-brand-gold/30"
            >
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
              />
              
              {/* Textos con jerarquía equilibrada */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <p className="text-brand-gold font-black text-2xl md:text-3xl uppercase italic tracking-tighter leading-none mb-1">
                  {project.title}
                </p>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};