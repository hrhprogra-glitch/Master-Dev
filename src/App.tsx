import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stack } from './sections/Stack';
import { Expertise } from './sections/Expertise';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer'; // <--- IMPORTACIÓN DEL NUEVO FOOTER

function App() {
  const [loading, setLoading] = useState(true);
  
  // Barra de progreso sutil estilo Rockstar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Mantenemos el fondo negro sólido aquí como base para todo el sitio
    <div className="bg-[#050505] min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div key="content">
            {/* Barra de progreso superior dorada */}
            <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold z-[60] origin-left" style={{ scaleX }} />
            
            <Navbar />
            
            <main className="relative">
              {/* El Hero ahora contiene los InteractiveCircuits con posición fixed */}
              <Hero />
              
              {/* IMPORTANTE: Cambiamos bg-black/opacity o transparente 
                para que el fondo fijo del Hero sea visible en el scroll.
              */}
              <div className="relative z-10 bg-transparent shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
                <About />
                <Stack />
                <Expertise />
                <Projects />
                <Contact />
              </div>
            </main>

            {/* NUEVO FOOTER INTEGRADO AQUÍ */}
            <Footer />
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;