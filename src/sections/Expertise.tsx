import { motion } from 'framer-motion';

const skills = [
  {
    title: "Sistemas POS / Inventario",
    desc: "Desarrollo de ecosistemas completos para control de stock, ventas y reportes financieros en tiempo real.",
    tools: ["NexusPOS", "EviCamp", "Architecture"]
  },
  {
    title: "Full-Stack Engineering",
    desc: "Dominio de arquitecturas modernas. Frontend reactivo y Backends robustos preparados para el tráfico masivo.",
    tools: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Optimización UX/UI",
    desc: "Diseño de interfaces intuitivas que reducen la curva de aprendizaje y maximizan la eficiencia operativa.",
    tools: ["Tailwind", "Framer Motion", "Design"]
  }
];

export const Expertise = () => {
  return (
    <section className="py-32 bg-brand-black font-tech border-t border-brand-gold/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-brand-gold font-bold tracking-[0.4em] text-[10px] uppercase mb-3">Core_Capabilities</h2>
          <h3 className="text-brand-white text-4xl md:text-5xl font-bold uppercase tracking-tighter">Mi Expertise Técnico</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 border border-brand-gold/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-500" />
              
              <h4 className="text-brand-gold text-xl font-bold mb-5">{skill.title}</h4>
              <p className="text-brand-white/40 text-sm leading-relaxed mb-8 font-light italic">
                "{skill.desc}"
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.map(tool => (
                  <span key={tool} className="text-[8px] border border-brand-gold/30 px-3 py-1 text-brand-gold uppercase tracking-[0.2em] font-bold">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};