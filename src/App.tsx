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
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Barra de progreso sutil estilo Rockstar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // 3.5 segundos de carga antes de liberar el sistema
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 'relative' es importante aquí para que el Loader (fixed) se posicione respecto a la ventana
    // overflow-x-hidden previene scrolls horizontales indeseados durante las transiciones
    <div className="bg-[#050505] min-h-screen relative overflow-x-hidden">
      
      {/* 1. CAPA DEL LOADER (Z-INDEX SUPERIOR) */}
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* 2. CAPA DE CONTENIDO (Z-0) */}
      {/* IMPORTANTE: Usamos la lógica '!loading &&' para que estos componentes 
         se monten en el DOM EXACTAMENTE cuando el loader empieza a irse.
         Esto reinicia sus animaciones 'initial' -> 'animate'.
         
         Si no hiciéramos esto, las animaciones ocurrirían detrás del loader negro
         y al salir verías la página estática.
      */}
      {!loading && (
        <div className="relative z-0">
          
          {/* Barra de progreso superior dorada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }} // Se activa cuando carga
            className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold z-[60] origin-left" 
            style={{ scaleX }} 
          />
          
          <Navbar />
          
          <main className="relative">
            {/* El Hero iniciará su secuencia de entrada (textos, laterales) justo ahora */}
            <Hero />
            
            {/* Contenido scrolleable */}
            {/* Agregamos una animación de entrada suave al bloque de contenido para que no aparezca de golpe */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }} // Aparece sutilmente después del Hero
              className="relative z-10 bg-transparent shadow-[0_-50px_100px_rgba(0,0,0,0.9)]"
            >
              <About />
              <Stack />
              <Expertise />
              <Projects />
              <Contact />
            </motion.div>
          </main>

          <Footer />
          
        </div>
      )}
    </div>
  );
}

export default App;