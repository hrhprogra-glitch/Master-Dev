import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Monitor, CheckCircle2, Zap, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la carga de los módulos de NexusPOS y EviCamp
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37]/30 font-sans selection:text-white overflow-x-hidden">
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* HERO SECTION */}
          <section className="relative pt-44 pb-32 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#d4af37]/5 blur-[120px] rounded-full -z-10"></div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={!loading ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-7xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 rounded-full text-[#d4af37] text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
                </span>
                Sistemas Activos
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Sistemas que <span className="text-[#d4af37] bg-gradient-to-b from-[#f1d592] to-[#d4af37] bg-clip-text text-transparent">escalan</span> <br /> 
                ideas que impactan.
              </h1>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
                Expertos en <span className="text-white font-semibold text-shadow-sm shadow-white/10">arquitecturas SaaS</span> y soluciones a medida para gestión de inventarios y ventas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#d4af37] hover:bg-[#f1d592] text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#d4af37]/20">
                  Iniciar Proyecto <ArrowRight size={20} />
                </button>
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                  Ver Portafolio
                </button>
              </div>
            </motion.div>
          </section>

          {/* SECCIÓN SERVICIOS */}
          <section id="servicios" className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 italic uppercase tracking-tighter">Servicios <span className="text-[#d4af37]">Enterprise</span></h2>
                <p className="text-gray-500 max-w-xl font-medium">Soluciones robustas diseñadas por un equipo Senior para garantizar el éxito de tu negocio digital.</p>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                <ServiceCard 
                  icon={<Monitor className="text-[#d4af37]" />}
                  title="Web Apps"
                  desc="Aplicaciones web de alto rendimiento construidas con React y Vite."
                />
                <ServiceCard 
                  icon={<Zap className="text-[#d4af37]" />}
                  title="Cloud Architecture"
                  desc="Sistemas preparados para la nube con escalabilidad automática."
                />
                <ServiceCard 
                  icon={<CheckCircle2 className="text-[#d4af37]" />}
                  title="Soporte 24/7"
                  desc="Garantía de funcionamiento continuo para sistemas críticos de ventas."
                />
              </motion.div>
            </div>
          </section>

          {/* SECCIÓN SAAS (DISEÑO DIFERENTE) */}
          <section id="saas" className="py-24 bg-[#d4af37]/5 relative border-y border-[#d4af37]/10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-white italic tracking-tight">Sistemas SaaS a Medida</h2>
                  <p className="text-gray-400 max-w-xl">Centraliza tu operación con dashboards inteligentes y gestión de datos en tiempo real.</p>
                </div>
                <div className="bg-[#d4af37] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">High Performance</div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                  className="p-10 rounded-3xl bg-[#0a0a0b] border border-white/10 relative group transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">NexusPOS Core</h3>
                  <p className="text-gray-400 mb-6 text-sm">Nuestro motor de punto de venta líder, optimizado para transacciones masivas y reportes financieros instantáneos.</p>
                  <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-center gap-3"><Shield size={16} className="text-[#d4af37]" /> Cifrado de datos bancarios</li>
                    <li className="flex items-center gap-3"><Shield size={16} className="text-[#d4af37]" /> Integración multitienda</li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                  className="p-10 rounded-3xl bg-[#0a0a0b] border border-white/10 relative group transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">EviCamp Inventory</h3>
                  <p className="text-gray-400 mb-6 text-sm">Gestión de suministros y herramientas para equipos de trabajo. Control absoluto de entradas y salidas.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#d4af37]/10 rounded text-[9px] text-[#d4af37] font-bold">REAL-TIME</span>
                    <span className="px-3 py-1 bg-[#d4af37]/10 rounded text-[9px] text-[#d4af37] font-bold">MULTI-WORKER</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.main>
      </div>
    </>
  );
}

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    variants={itemVariants}
    className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d4af37]/40 hover:bg-white/[0.04] transition-all duration-300 group shadow-2xl"
  >
    <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-[#d4af37]/10 transition-colors">{icon}</div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-[#d4af37] transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default App;